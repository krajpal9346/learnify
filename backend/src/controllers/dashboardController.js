const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const Roadmap = require("../models/Roadmap");
const UserRoadmap = require("../models/UserRoadmap");
const Achievement = require("../models/Achievement");
const UserAchievement = require("../models/UserAchievement");
const LearningActivity = require("../models/LearningActivity");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const startOfDay = (date) => {
    const value = new Date(date);
    value.setHours(0, 0, 0, 0);
    return value;
};

const getEnrollmentStatus = (progress) => {
    if (progress <= 0) return "Not Started";
    if (progress >= 100) return "Completed";
    return "In Progress";
};

const getWeeklyActivity = async (userId) => {
    const today = startOfDay(new Date());
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - 6);

    const activities = await LearningActivity.find({
        user: userId,
        date: { $gte: weekStart, $lte: today },
    });

    const byDate = new Map(
        activities.map((item) => [startOfDay(item.date).toISOString(), item.hours])
    );

    const weekly = [];
    for (let i = 6; i >= 0; i -= 1) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const key = startOfDay(date).toISOString();
        weekly.push({
            day: dayNames[date.getDay()],
            hours: byDate.get(key) || 0,
            date: key,
        });
    }

    return weekly;
};

const getOverview = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const [enrollments, achievementsUnlocked, weeklyActivity, recommendations, userRoadmap] =
        await Promise.all([
            Enrollment.find({ user: userId }).populate("course").sort({ lastAccessedAt: -1 }),
            UserAchievement.find({ user: userId }).populate("achievement"),
            getWeeklyActivity(userId),
            Course.find({ isRecommended: true, isPublished: true }).limit(4),
            UserRoadmap.findOne({ user: userId }).populate("roadmap"),
        ]);

    const activeCourses = enrollments.filter((item) => item.status === "In Progress");
    const nearCompletion = activeCourses.filter((item) => item.progress >= 70).length;
    const weekHours = weeklyActivity.reduce((sum, item) => sum + item.hours, 0);

    const continueLearning = activeCourses.slice(0, 3).map((item) => {
        const remainingLessons = Math.max(
            (item.course?.lessons?.length || 0) - (item.completedLessonIds?.length || 0),
            0
        );
        const avgLesson = 12;
        return {
            id: item._id,
            courseId: item.course?._id,
            title: item.course?.title,
            module: item.currentModule || `Module ${Math.max(1, Math.ceil(item.progress / 25))}`,
            progress: item.progress,
            duration: `${remainingLessons * avgLesson || 15} min left`,
            category: item.course?.category,
            color: item.course?.color || "#6044da",
        };
    });

    let roadmapSteps = [];
    let roadmapProgress = 0;

    if (userRoadmap?.roadmap) {
        const completedSet = new Set(userRoadmap.completedStepIds.map((id) => String(id)));
        roadmapSteps = userRoadmap.roadmap.steps
            .sort((a, b) => a.order - b.order)
            .map((step) => {
                let status = "upcoming";
                if (completedSet.has(String(step._id))) status = "completed";
                else if (step.order === userRoadmap.currentStepOrder) status = "current";
                return {
                    id: step._id,
                    title: step.title,
                    status,
                    order: step.order,
                };
            });

        const completedCount = roadmapSteps.filter((step) => step.status === "completed").length;
        roadmapProgress = Math.round((completedCount / Math.max(roadmapSteps.length, 1)) * 100);
    }

    res.status(200).json({
        success: true,
        data: {
            stats: {
                streak: req.user.streak,
                bestStreak: req.user.bestStreak,
                activeCourses: activeCourses.length,
                nearCompletion,
                totalHours: Math.round(req.user.totalHours),
                weekHours: Number(weekHours.toFixed(1)),
                achievements: achievementsUnlocked.length,
            },
            continueLearning,
            recommendations: recommendations.map((course) => ({
                id: course._id,
                title: course.title,
                reason: course.recommendationReason,
                level: course.level,
                duration: `${course.durationHours}h`,
                category: course.category,
                color: course.color,
            })),
            roadmap: {
                goal: req.user.goal,
                progress: roadmapProgress,
                steps: roadmapSteps,
            },
            weeklyActivity,
            achievementsUnlocked: achievementsUnlocked.length,
        },
    });
});

const getLearning = asyncHandler(async (req, res) => {
    const enrollments = await Enrollment.find({ user: req.user._id })
        .populate("course")
        .sort({ updatedAt: -1 });

    const courses = enrollments.map((item) => ({
        id: item._id,
        courseId: item.course?._id,
        title: item.course?.title,
        instructor: item.course?.instructor,
        progress: item.progress,
        lessons: item.course?.lessons?.length || 0,
        completedLessons: item.completedLessonIds?.length || 0,
        category: item.course?.category,
        status: item.status,
        color: item.course?.color,
    }));

    res.status(200).json({
        success: true,
        data: {
            courses,
            summary: {
                inProgress: courses.filter((c) => c.status === "In Progress").length,
                completed: courses.filter((c) => c.status === "Completed").length,
                notStarted: courses.filter((c) => c.status === "Not Started").length,
            },
        },
    });
});

const getRoadmap = asyncHandler(async (req, res) => {
    let userRoadmap = await UserRoadmap.findOne({ user: req.user._id }).populate("roadmap");

    if (!userRoadmap) {
        const roadmap =
            (await Roadmap.findOne({ goal: req.user.goal })) ||
            (await Roadmap.findOne({ isDefault: true }));

        if (!roadmap) {
            throw new AppError("No roadmap available yet.", 404);
        }

        userRoadmap = await UserRoadmap.create({
            user: req.user._id,
            roadmap: roadmap._id,
            currentStepOrder: 1,
            completedStepIds: [],
        });
        userRoadmap = await userRoadmap.populate("roadmap");
    }

    const completedSet = new Set(userRoadmap.completedStepIds.map((id) => String(id)));
    const steps = userRoadmap.roadmap.steps
        .sort((a, b) => a.order - b.order)
        .map((step) => {
            let status = "upcoming";
            if (completedSet.has(String(step._id))) status = "completed";
            else if (step.order === userRoadmap.currentStepOrder) status = "current";

            return {
                id: step._id,
                title: step.title,
                description: step.description,
                order: step.order,
                status,
            };
        });

    const completedCount = steps.filter((step) => step.status === "completed").length;

    res.status(200).json({
        success: true,
        data: {
            goal: req.user.goal,
            title: userRoadmap.roadmap.title,
            description: userRoadmap.roadmap.description,
            progress: Math.round((completedCount / Math.max(steps.length, 1)) * 100),
            completedCount,
            totalSteps: steps.length,
            steps,
        },
    });
});

const getAchievements = asyncHandler(async (req, res) => {
    const [allAchievements, unlocked] = await Promise.all([
        Achievement.find().sort({ createdAt: 1 }),
        UserAchievement.find({ user: req.user._id }).populate("achievement"),
    ]);

    const unlockedIds = new Set(unlocked.map((item) => String(item.achievement?._id)));

    const achievements = allAchievements.map((item) => ({
        id: item._id,
        key: item.key,
        title: item.title,
        description: item.description,
        icon: item.icon,
        unlocked: unlockedIds.has(String(item._id)),
        unlockedAt: unlocked.find((u) => String(u.achievement?._id) === String(item._id))
            ?.unlockedAt,
    }));

    res.status(200).json({
        success: true,
        data: {
            achievements,
            unlockedCount: achievements.filter((item) => item.unlocked).length,
            totalCount: achievements.length,
        },
    });
});

const listCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({ isPublished: true }).sort({ createdAt: 1 });

    res.status(200).json({
        success: true,
        data: { courses },
    });
});

const enrollInCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if (!course || !course.isPublished) {
        throw new AppError("Course not found.", 404);
    }

    let enrollment = await Enrollment.findOne({
        user: req.user._id,
        course: course._id,
    });

    if (enrollment) {
        return res.status(200).json({
            success: true,
            message: "Already enrolled in this course.",
            data: { enrollment },
        });
    }

    enrollment = await Enrollment.create({
        user: req.user._id,
        course: course._id,
        progress: 0,
        status: "Not Started",
        currentModule: course.lessons[0]?.title || "Getting Started",
    });

    res.status(201).json({
        success: true,
        message: "Enrolled successfully.",
        data: { enrollment },
    });
});

const updateProgress = asyncHandler(async (req, res) => {
    const enrollment = await Enrollment.findOne({
        _id: req.params.enrollmentId,
        user: req.user._id,
    }).populate("course");

    if (!enrollment) {
        throw new AppError("Enrollment not found.", 404);
    }

    const progress = Math.min(100, Math.max(0, Number(req.body.progress)));
    enrollment.progress = progress;
    enrollment.status = getEnrollmentStatus(progress);
    enrollment.lastAccessedAt = new Date();

    if (req.body.currentModule) {
        enrollment.currentModule = req.body.currentModule;
    }

    if (req.body.completedLessonId) {
        const lessonId = String(req.body.completedLessonId);
        if (!enrollment.completedLessonIds.map(String).includes(lessonId)) {
            enrollment.completedLessonIds.push(req.body.completedLessonId);
        }
    }

    await enrollment.save();

    const hoursToAdd = Number(req.body.hoursSpent) || 0.5;
    const today = startOfDay(new Date());

    await LearningActivity.findOneAndUpdate(
        { user: req.user._id, date: today },
        { $inc: { hours: hoursToAdd } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const user = req.user;
    user.totalHours = Number((user.totalHours + hoursToAdd).toFixed(2));

    const lastActive = user.lastActiveDate ? startOfDay(user.lastActiveDate) : null;
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (!lastActive) {
        user.streak = 1;
    } else if (lastActive.getTime() === yesterday.getTime()) {
        user.streak += 1;
    } else if (lastActive.getTime() !== today.getTime()) {
        user.streak = 1;
    }

    user.bestStreak = Math.max(user.bestStreak, user.streak);
    user.lastActiveDate = new Date();
    await user.save();

    res.status(200).json({
        success: true,
        message: "Progress updated.",
        data: {
            enrollment,
            stats: {
                streak: user.streak,
                bestStreak: user.bestStreak,
                totalHours: user.totalHours,
            },
        },
    });
});

module.exports = {
    getOverview,
    getLearning,
    getRoadmap,
    getAchievements,
    listCourses,
    enrollInCourse,
    updateProgress,
};
