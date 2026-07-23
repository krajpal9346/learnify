import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
    ArrowRight,
    BookOpen,
    Brain,
    Clock,
    Code2,
    Database,
    Flame,
    Layout,
    Play,
    Sparkles,
    Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { dashboardApi } from "../../services/api";
import { ROUTES } from "../../data/routes";

const progressStyles = {
    path: { stroke: "#6044da", strokeLinecap: "round" },
    trail: { stroke: "#ede9fe" },
    text: { fill: "#10123a", fontSize: "20px", fontWeight: "600" },
};

const iconForRecommendation = (category = "") => {
    const value = category.toLowerCase();
    if (value.includes("front") || value.includes("type")) return Code2;
    if (value.includes("data") || value.includes("mongo") || value.includes("sql")) return Database;
    if (value.includes("arch") || value.includes("system")) return Layout;
    if (value.includes("ai")) return Brain;
    return Sparkles;
};

const DashboardOverview = () => {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const response = await dashboardApi.overview();
                setData(response.data);
            } catch (err) {
                setError(err.message || "Failed to load dashboard");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#6044da] border-t-transparent" />
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
                {error || "Unable to load dashboard data."}
            </div>
        );
    }

    const { stats, continueLearning, recommendations, roadmap, weeklyActivity, achievementsUnlocked } =
        data;
    const maxHours = Math.max(...weeklyActivity.map((item) => item.hours), 1);
    const overallProgress = roadmap.progress || 0;
    const isFirstLogin = continueLearning.length === 0;

    const statCards = [
        {
            id: "streak",
            label: "Day Streak",
            value: String(stats.streak),
            hint: `Best: ${stats.bestStreak} days`,
            icon: Flame,
            iconColor: "#f9911a",
            bgColor: "bg-orange-100",
        },
        {
            id: "courses",
            label: "Active Courses",
            value: String(stats.activeCourses),
            hint: `${stats.nearCompletion} near completion`,
            icon: BookOpen,
            iconColor: "#6044da",
            bgColor: "bg-purple-100",
        },
        {
            id: "hours",
            label: "Hours Learned",
            value: String(stats.totalHours),
            hint: `+${stats.weekHours} this week`,
            icon: Clock,
            iconColor: "#1a7bf9",
            bgColor: "bg-blue-100",
        },
        {
            id: "badges",
            label: "Achievements",
            value: String(stats.achievements),
            hint: `${achievementsUnlocked} unlocked`,
            icon: Trophy,
            iconColor: "#ec4899",
            bgColor: "bg-pink-100",
        },
    ];

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#6044da] via-[#6b4ef5] to-[#8b5cf6] p-6 text-white shadow-lg sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
                            <Sparkles size={16} />
                            Personalized for your {user?.goal || "career"} path
                        </div>
                        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                            {isFirstLogin
                                ? `Welcome${user?.name ? `, ${user.name.split(" ")[0]}` : ""}`
                                : "Keep building momentum today"}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-purple-100 sm:text-base">
                            {isFirstLogin
                                ? "You have no active courses yet. Explore suggested courses below to start your learning path."
                                : `You are ${overallProgress}% through your ${user?.goal || "career"} roadmap. Continue where you left off and stay on your streak.`}
                        </p>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            {isFirstLogin ? (
                                <a
                                    href="#suggested-courses"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#6044da] transition hover:bg-purple-50"
                                >
                                    Browse Suggested Courses
                                    <ArrowRight size={16} />
                                </a>
                            ) : (
                                <Link
                                    to={ROUTES.MY_LEARNING}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#6044da] transition hover:bg-purple-50"
                                >
                                    Continue Learning
                                    <ArrowRight size={16} />
                                </Link>
                            )}
                            <Link
                                to={ROUTES.DASHBOARD_ROADMAP}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                View Roadmap
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-36 rounded-3xl bg-white/10 p-5 backdrop-blur-sm sm:w-40">
                            <CircularProgressbar
                                value={overallProgress}
                                text={`${overallProgress}%`}
                                styles={{
                                    ...progressStyles,
                                    path: { stroke: "#ffffff", strokeLinecap: "round" },
                                    trail: { stroke: "rgba(255,255,255,0.25)" },
                                    text: { fill: "#ffffff", fontSize: "20px", fontWeight: "700" },
                                }}
                            />
                            <p className="mt-3 text-center text-xs text-purple-100">Roadmap progress</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {statCards.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <article
                            key={stat.id}
                            className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6044da]/30 hover:shadow-lg"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bgColor}`}>
                                    <Icon size={22} color={stat.iconColor} />
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-gray-500">{stat.hint}</p>
                        </article>
                    );
                })}
            </section>

            <div className="grid gap-6 xl:grid-cols-3">
                <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2 sm:p-6">
                    <div className="mb-5 flex items-center justify-between gap-3">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">
                                {isFirstLogin ? "Suggested Courses" : "Continue Learning"}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {isFirstLogin
                                    ? "Recommended courses to kick off your journey"
                                    : "Pick up where you left off"}
                            </p>
                        </div>
                        {!isFirstLogin && (
                            <Link
                                to={ROUTES.MY_LEARNING}
                                className="text-sm font-semibold text-[#6044da] hover:underline"
                            >
                                View all
                            </Link>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        {isFirstLogin && (
                            <div className="rounded-2xl border border-dashed border-[#6044da]/30 bg-[#f5f2ff] p-5">
                                <p className="text-sm font-semibold text-gray-900">
                                    0 active courses — you&apos;re just getting started
                                </p>
                                <p className="mt-1 text-sm text-gray-600">
                                    Enroll in a suggested course below to begin learning. Your progress will show up here.
                                </p>
                                {recommendations.length > 0 && (
                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        {recommendations.slice(0, 2).map((item) => {
                                            const Icon = iconForRecommendation(item.category);
                                            return (
                                                <article
                                                    key={`preview-${item.id}`}
                                                    className="rounded-2xl border border-white bg-white p-4"
                                                >
                                                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100">
                                                        <Icon size={18} color={item.color || "#6044da"} />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        {item.level} · {item.duration}
                                                    </p>
                                                </article>
                                            );
                                        })}
                                    </div>
                                )}
                                <a
                                    href="#suggested-courses"
                                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#6044da] hover:underline"
                                >
                                    See all recommendations
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        )}

                        {continueLearning.map((course) => (
                            <article
                                key={course.id}
                                className="rounded-2xl border border-gray-100 bg-[#faf9ff] p-4 transition hover:border-[#6044da]/25"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <span
                                            className="inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white"
                                            style={{ backgroundColor: course.color }}
                                        >
                                            {course.category}
                                        </span>
                                        <h4 className="mt-2 text-lg font-semibold text-gray-900">{course.title}</h4>
                                        <p className="mt-1 text-sm text-gray-500">{course.module}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-16">
                                            <CircularProgressbar
                                                value={course.progress}
                                                text={`${course.progress}%`}
                                                styles={progressStyles}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-2 rounded-xl bg-[#6044da] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5137c9]"
                                        >
                                            <Play size={16} />
                                            Resume
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 h-2 overflow-hidden rounded-full bg-purple-100">
                                    <div
                                        className="h-full rounded-full bg-[#6044da]"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">{course.duration}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                    <h3 className="text-xl font-bold text-gray-900">Weekly Activity</h3>
                    <p className="mt-1 text-sm text-gray-500">Hours learned this week</p>

                    <div className="mt-6 flex h-48 items-end justify-between gap-2">
                        {weeklyActivity.map((item) => (
                            <div key={item.day + item.date} className="flex flex-1 flex-col items-center gap-2">
                                <div className="flex h-36 w-full items-end justify-center rounded-xl bg-purple-50 px-1">
                                    <div
                                        className="w-full max-w-6 rounded-t-lg bg-gradient-to-t from-[#6044da] to-[#8b5cf6] transition-all duration-500"
                                        style={{ height: `${(item.hours / maxHours) * 100}%` }}
                                        title={`${item.hours}h`}
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-500">{item.day}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl bg-[#f5f2ff] p-4">
                        <p className="text-sm font-semibold text-gray-900">
                            {stats.weekHours} hours this week
                        </p>
                        <p className="mt-1 text-xs text-gray-500">Keep your streak going</p>
                    </div>
                </section>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                <section
                    id="suggested-courses"
                    className="scroll-mt-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2 sm:p-6"
                >
                    <div className="mb-5">
                        <h3 className="text-xl font-bold text-gray-900">
                            {isFirstLogin ? "Suggested Courses" : "AI Recommendations"}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {isFirstLogin
                                ? "Hand-picked courses to help you start strong"
                                : "Suggested next based on your skills and goals"}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {recommendations.length === 0 && (
                            <p className="col-span-full rounded-2xl bg-[#f5f2ff] p-4 text-sm text-gray-600">
                                No recommendations available yet. Check back soon.
                            </p>
                        )}
                        {recommendations.map((item) => {
                            const Icon = iconForRecommendation(item.category);

                            return (
                                <article
                                    key={item.id}
                                    className="rounded-2xl border border-gray-100 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#6044da]/30 hover:shadow-md"
                                >
                                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100">
                                        <Icon size={20} color={item.color || "#6044da"} />
                                    </div>
                                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                    <p className="mt-2 text-sm leading-6 text-gray-500">{item.reason}</p>
                                    <div className="mt-4 flex items-center justify-between text-xs font-semibold text-gray-500">
                                        <span>{item.level}</span>
                                        <span>{item.duration}</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#6044da] hover:underline"
                                    >
                                        Add to playlist
                                        <ArrowRight size={14} />
                                    </button>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Career Roadmap</h3>
                            <p className="mt-1 text-sm text-gray-500">{roadmap.goal}</p>
                        </div>
                        <Link
                            to={ROUTES.DASHBOARD_ROADMAP}
                            className="text-sm font-semibold text-[#6044da] hover:underline"
                        >
                            Details
                        </Link>
                    </div>

                    <ol className="flex flex-col gap-3">
                        {roadmap.steps.map((step) => (
                            <li
                                key={step.id}
                                className={`rounded-2xl border px-4 py-3 ${
                                    step.status === "current"
                                        ? "border-[#6044da]/40 bg-purple-50"
                                        : "border-gray-100 bg-gray-50"
                                }`}
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                                        <p className="mt-1 text-xs capitalize text-gray-500">{step.status}</p>
                                    </div>
                                    <span
                                        className={`h-2.5 w-2.5 rounded-full ${
                                            step.status === "completed"
                                                ? "bg-green-500"
                                                : step.status === "current"
                                                  ? "bg-[#6044da]"
                                                  : "bg-gray-300"
                                        }`}
                                    />
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-5 rounded-2xl border border-dashed border-[#6044da]/30 p-4 text-center">
                        <p className="text-sm font-semibold text-gray-900">
                            {achievementsUnlocked} achievements unlocked
                        </p>
                        <Link
                            to={ROUTES.ACHIEVEMENTS}
                            className="mt-2 inline-flex text-sm font-semibold text-[#6044da] hover:underline"
                        >
                            See badges
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DashboardOverview;
