import { useEffect, useState } from "react";
import {
    Code2,
    Flame,
    LineChart,
    Lock,
    Sparkles,
    Target,
    Trophy,
    Zap,
} from "lucide-react";
import { dashboardApi } from "../../services/api";

const iconMap = {
    Sparkles,
    Flame,
    Zap,
    Target,
    Code2,
    LineChart,
    Trophy,
};

const AchievementsContent = () => {
    const [achievements, setAchievements] = useState([]);
    const [unlockedCount, setUnlockedCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const response = await dashboardApi.achievements();
                setAchievements(response.data.achievements);
                setUnlockedCount(response.data.unlockedCount);
                setTotalCount(response.data.totalCount);
            } catch (err) {
                setError(err.message || "Failed to load achievements");
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

    if (error) {
        return (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">{error}</div>
        );
    }

    const unlocked = achievements.filter((item) => item.unlocked);
    const locked = achievements.filter((item) => !item.unlocked);

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
                        <p className="mt-2 text-sm text-gray-500 sm:text-base">
                            Earn badges as you learn, maintain streaks, and hit milestones.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-2xl bg-[#f5f2ff] px-5 py-3">
                        <Trophy size={22} color="#6044da" />
                        <div>
                            <p className="text-sm text-gray-500">Unlocked</p>
                            <p className="text-xl font-bold text-gray-900">
                                {unlockedCount}/{totalCount}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">Unlocked</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {unlocked.map((badge) => {
                        const Icon = iconMap[badge.icon] || Trophy;

                        return (
                            <article
                                key={badge.id}
                                className="rounded-2xl border border-[#6044da]/20 bg-gradient-to-br from-white to-purple-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                                    <Icon size={22} color="#6044da" />
                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-gray-900">{badge.title}</h4>
                                <p className="mt-2 text-sm leading-6 text-gray-500">{badge.description}</p>
                                <span className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                    Unlocked
                                </span>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">Locked</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {locked.map((badge) => {
                        const Icon = iconMap[badge.icon] || Trophy;

                        return (
                            <article
                                key={badge.id}
                                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 opacity-90"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-200">
                                    <Icon size={22} color="#6b7280" />
                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-gray-700">{badge.title}</h4>
                                <p className="mt-2 text-sm leading-6 text-gray-500">{badge.description}</p>
                                <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-500">
                                    <Lock size={12} />
                                    Locked
                                </span>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default AchievementsContent;
