const mongoose = require("mongoose");
const User = require("./models/User");
const Course = require("./models/Course");
const Enrollment = require("./models/Enrollment");
const Roadmap = require("./models/Roadmap");
const UserRoadmap = require("./models/UserRoadmap");
const Achievement = require("./models/Achievement");
const UserAchievement = require("./models/UserAchievement");
const LearningActivity = require("./models/LearningActivity");

const makeLessons = (titles) =>
    titles.map((title, index) => ({
        title,
        durationMinutes: 12 + (index % 4) * 3,
        order: index + 1,
    }));

const seedDatabase = async ({ clear = true } = {}) => {
    if (clear) {
        console.log("Clearing existing data...");
        await Promise.all([
            User.deleteMany({}),
            Course.deleteMany({}),
            Enrollment.deleteMany({}),
            Roadmap.deleteMany({}),
            UserRoadmap.deleteMany({}),
            Achievement.deleteMany({}),
            UserAchievement.deleteMany({}),
            LearningActivity.deleteMany({}),
        ]);
    }

    const courses = await Course.insertMany([
        {
            title: "React Fundamentals",
            slug: "react-fundamentals",
            description: "Build modern UIs with components, hooks, and state.",
            category: "Frontend",
            level: "Intermediate",
            color: "#6044da",
            durationHours: 6,
            isRecommended: false,
            lessons: makeLessons([
                "JSX & Components",
                "Props & State",
                "Lists & Forms",
                "Hooks Deep Dive",
                "Effects & Data Fetching",
                "Project: Dashboard UI",
            ]),
        },
        {
            title: "Node.js APIs",
            slug: "nodejs-apis",
            description: "Create REST APIs with Express and authentication.",
            category: "Backend",
            level: "Intermediate",
            color: "#22c55e",
            durationHours: 5,
            isRecommended: false,
            lessons: makeLessons([
                "Node Basics",
                "Express Routing",
                "Middleware",
                "MongoDB Models",
                "JWT Auth",
                "Project: API Server",
            ]),
        },
        {
            title: "SQL Mastery",
            slug: "sql-mastery",
            description: "Query relational databases with confidence.",
            category: "Database",
            level: "Beginner",
            color: "#1a7bf9",
            durationHours: 4,
            isRecommended: false,
            lessons: makeLessons([
                "Tables & Types",
                "SELECT Queries",
                "Joins & Indexes",
                "Aggregations",
                "Normalization",
            ]),
        },
        {
            title: "Git & Collaboration",
            slug: "git-collaboration",
            description: "Version control workflows for teams.",
            category: "Tools",
            level: "Beginner",
            color: "#f9911a",
            durationHours: 2,
            isRecommended: false,
            lessons: makeLessons([
                "Git Basics",
                "Branching",
                "Pull Requests",
                "Conflict Resolution",
            ]),
        },
        {
            title: "UI Design Basics",
            slug: "ui-design-basics",
            description: "Layout, typography, and visual hierarchy.",
            category: "Design",
            level: "Beginner",
            color: "#ec4899",
            durationHours: 3,
            isRecommended: false,
            lessons: makeLessons([
                "Visual Hierarchy",
                "Spacing Systems",
                "Color & Contrast",
                "Responsive Layouts",
            ]),
        },
        {
            title: "TypeScript Essentials",
            slug: "typescript-essentials",
            description: "Add strong typing to JavaScript projects.",
            category: "Frontend",
            level: "Intermediate",
            color: "#6044da",
            durationHours: 4,
            isRecommended: true,
            recommendationReason: "Matches your React progress and career goal",
            lessons: makeLessons([
                "Types & Interfaces",
                "Generics",
                "React with TS",
                "Utility Types",
            ]),
        },
        {
            title: "System Design Basics",
            slug: "system-design-basics",
            description: "Foundations of scalable architecture.",
            category: "Architecture",
            level: "Beginner",
            color: "#f9911a",
            durationHours: 3,
            isRecommended: true,
            recommendationReason: "Recommended for Full-Stack Developer path",
            lessons: makeLessons([
                "Client-Server Model",
                "Caching",
                "Load Balancing",
                "Databases at Scale",
            ]),
        },
        {
            title: "MongoDB Essentials",
            slug: "mongodb-essentials",
            description: "Document databases for modern apps.",
            category: "Database",
            level: "Intermediate",
            color: "#22c55e",
            durationHours: 3,
            isRecommended: true,
            recommendationReason: "Complements your Node.js playlist",
            lessons: makeLessons([
                "Documents & Collections",
                "CRUD Operations",
                "Indexes",
                "Aggregation Pipeline",
            ]),
        },
        {
            title: "AI Prompt Engineering",
            slug: "ai-prompt-engineering",
            description: "Write effective prompts for AI tools.",
            category: "AI",
            level: "Beginner",
            color: "#ec4899",
            durationHours: 2,
            isRecommended: true,
            recommendationReason: "Trending skill for modern developers",
            lessons: makeLessons([
                "Prompt Patterns",
                "Context Windows",
                "Evaluation",
                "Building Assistants",
            ]),
        },
    ]);

    const roadmap = await Roadmap.create({
        title: "Full-Stack Developer Path",
        goal: "Full-Stack Developer",
        description:
            "A step-by-step learning path tailored to become an industry-ready full-stack developer.",
        isDefault: true,
        steps: [
            {
                title: "HTML & CSS Foundations",
                order: 1,
                description: "Build accessible, responsive layouts.",
            },
            {
                title: "JavaScript Essentials",
                order: 2,
                description: "Master language fundamentals and the DOM.",
            },
            {
                title: "React & Component Design",
                order: 3,
                description: "Create interactive frontends with React.",
            },
            {
                title: "Backend with Node.js",
                order: 4,
                description: "Ship APIs with Express and authentication.",
            },
            {
                title: "Databases & Auth",
                order: 5,
                description: "Persist data and secure user sessions.",
            },
            {
                title: "Capstone Full-Stack Project",
                order: 6,
                description: "Combine everything into a production-ready app.",
            },
        ],
    });

    const achievements = await Achievement.insertMany([
        {
            key: "first-steps",
            title: "First Steps",
            description: "Completed your first course module",
            icon: "Sparkles",
        },
        {
            key: "week-warrior",
            title: "Week Warrior",
            description: "Maintained a 7-day learning streak",
            icon: "Flame",
        },
        {
            key: "focus-mode",
            title: "Focus Mode",
            description: "Studied for 10 hours in one week",
            icon: "Zap",
        },
        {
            key: "goal-setter",
            title: "Goal Setter",
            description: "Chose a career roadmap",
            icon: "Target",
        },
        {
            key: "code-crusher",
            title: "Code Crusher",
            description: "Finish 5 coding challenges",
            icon: "Code2",
        },
        {
            key: "path-pioneer",
            title: "Path Pioneer",
            description: "Complete your career roadmap",
            icon: "LineChart",
        },
    ]);

    const demoUser = await User.create({
        name: "Alex Morgan",
        email: "alex@learnify.com",
        password: "Password1!",
        plan: "Pro",
        billingCycle: "monthly",
        goal: "Full-Stack Developer",
        streak: 12,
        bestStreak: 21,
        totalHours: 48,
        lastActiveDate: new Date(),
    });

    const react = courses.find((c) => c.slug === "react-fundamentals");
    const node = courses.find((c) => c.slug === "nodejs-apis");
    const sql = courses.find((c) => c.slug === "sql-mastery");
    const git = courses.find((c) => c.slug === "git-collaboration");
    const design = courses.find((c) => c.slug === "ui-design-basics");
    const ts = courses.find((c) => c.slug === "typescript-essentials");

    await Enrollment.insertMany([
        {
            user: demoUser._id,
            course: react._id,
            progress: 72,
            status: "In Progress",
            currentModule: "Module 4 · Hooks Deep Dive",
            completedLessonIds: react.lessons.slice(0, 4).map((l) => l._id),
            lastAccessedAt: new Date(),
        },
        {
            user: demoUser._id,
            course: node._id,
            progress: 45,
            status: "In Progress",
            currentModule: "Module 2 · Express Routing",
            completedLessonIds: node.lessons.slice(0, 2).map((l) => l._id),
            lastAccessedAt: new Date(Date.now() - 86400000),
        },
        {
            user: demoUser._id,
            course: sql._id,
            progress: 28,
            status: "In Progress",
            currentModule: "Module 3 · Joins & Indexes",
            completedLessonIds: sql.lessons.slice(0, 1).map((l) => l._id),
            lastAccessedAt: new Date(Date.now() - 2 * 86400000),
        },
        {
            user: demoUser._id,
            course: git._id,
            progress: 100,
            status: "Completed",
            currentModule: "Completed",
            completedLessonIds: git.lessons.map((l) => l._id),
        },
        {
            user: demoUser._id,
            course: design._id,
            progress: 100,
            status: "Completed",
            currentModule: "Completed",
            completedLessonIds: design.lessons.map((l) => l._id),
        },
        {
            user: demoUser._id,
            course: ts._id,
            progress: 0,
            status: "Not Started",
            currentModule: "Getting Started",
            completedLessonIds: [],
        },
    ]);

    await UserRoadmap.create({
        user: demoUser._id,
        roadmap: roadmap._id,
        currentStepOrder: 3,
        completedStepIds: roadmap.steps.filter((s) => s.order <= 2).map((s) => s._id),
    });

    const unlockedKeys = ["first-steps", "week-warrior", "focus-mode", "goal-setter"];
    await UserAchievement.insertMany(
        achievements
            .filter((item) => unlockedKeys.includes(item.key))
            .map((item) => ({
                user: demoUser._id,
                achievement: item._id,
            }))
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weeklyHours = [1.5, 2.2, 0.8, 2.5, 1.2, 3.0, 1.8];

    await LearningActivity.insertMany(
        weeklyHours.map((hours, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() - (6 - index));
            return {
                user: demoUser._id,
                date,
                hours,
            };
        })
    );

    console.log("Seed completed successfully.");
    console.log("Demo login:");
    console.log("  email: alex@learnify.com");
    console.log("  password: Password1!");
};

const ensureSeeded = async () => {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
        console.log("Empty database detected. Seeding demo data...");
        await seedDatabase({ clear: false });
    }
};

module.exports = {
    seedDatabase,
    ensureSeeded,
};

if (require.main === module) {
    require("dotenv").config();
    const connectDB = require("./config/db");

    (async () => {
        try {
            await connectDB();
            await seedDatabase({ clear: true });
            await mongoose.connection.close();
            process.exit(0);
        } catch (error) {
            console.error("Seed failed:", error);
            await mongoose.connection.close().catch(() => undefined);
            process.exit(1);
        }
    })();
}
