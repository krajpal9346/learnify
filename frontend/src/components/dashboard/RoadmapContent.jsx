import { useEffect, useState } from "react";
import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { dashboardApi } from "../../services/api";

const statusMeta = {
    completed: {
        label: "Completed",
        icon: CheckCircle2,
        className: "border-green-200 bg-green-50 text-green-700",
        iconColor: "#22c55e",
    },
    current: {
        label: "In Progress",
        icon: CircleDot,
        className: "border-[#6044da]/30 bg-purple-50 text-[#6044da]",
        iconColor: "#6044da",
    },
    upcoming: {
        label: "Upcoming",
        icon: Circle,
        className: "border-gray-200 bg-gray-50 text-gray-500",
        iconColor: "#9ca3af",
    },
};

const RoadmapContent = () => {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const response = await dashboardApi.roadmap();
                setData(response.data);
            } catch (err) {
                setError(err.message || "Failed to load roadmap");
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
                {error || "Unable to load roadmap."}
            </div>
        );
    }

    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6044da]">Career Path</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {data.title || `${user?.goal || "Career"} Roadmap`}
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base">
                    {data.description ||
                        "A step-by-step learning path tailored to your skills and goals."}
                </p>

                <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                        <span className="text-gray-600">Overall progress</span>
                        <span className="text-[#6044da]">{data.progress}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-purple-100">
                        <div className="h-full rounded-full bg-[#6044da]" style={{ width: `${data.progress}%` }} />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        {data.completedCount} of {data.totalSteps} milestones completed
                    </p>
                </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">Milestones</h3>
                <div className="relative mt-6 flex flex-col gap-4">
                    <div className="absolute bottom-4 left-[27px] top-4 w-0.5 bg-purple-100" />
                    {data.steps.map((step, index) => {
                        const meta = statusMeta[step.status] || statusMeta.upcoming;
                        const Icon = meta.icon;

                        return (
                            <article
                                key={step.id}
                                className={`relative z-10 rounded-2xl border p-4 sm:p-5 ${meta.className}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                                        <Icon size={18} color={meta.iconColor} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-xs font-semibold uppercase tracking-wide">
                                                Step {index + 1}
                                            </span>
                                            <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-semibold">
                                                {meta.label}
                                            </span>
                                        </div>
                                        <h4 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h4>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {step.description ||
                                                (step.status === "completed"
                                                    ? "Great work — this milestone is done."
                                                    : step.status === "current"
                                                      ? "Focus here next. Finish modules and practice projects."
                                                      : "Unlocks after you complete the previous milestone.")}
                                        </p>
                                        {step.status === "current" && (
                                            <button
                                                type="button"
                                                className="mt-4 rounded-xl bg-[#6044da] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5137c9]"
                                            >
                                                Continue Milestone
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default RoadmapContent;
