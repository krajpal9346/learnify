import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { dashboardApi } from "../../services/api";

const progressStyles = {
    path: { stroke: "#6044da", strokeLinecap: "round" },
    trail: { stroke: "#ede9fe" },
    text: { fill: "#10123a", fontSize: "18px", fontWeight: "600" },
};

const statusStyles = {
    "In Progress": "bg-purple-100 text-[#6044da]",
    Completed: "bg-green-100 text-green-700",
    "Not Started": "bg-gray-100 text-gray-600",
};

const MyLearningContent = () => {
    const [courses, setCourses] = useState([]);
    const [summary, setSummary] = useState({ inProgress: 0, completed: 0, notStarted: 0 });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const response = await dashboardApi.learning();
                setCourses(response.data.courses);
                setSummary(response.data.summary);
            } catch (err) {
                setError(err.message || "Failed to load courses");
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

    const sections = [
        { title: "In Progress", courses: courses.filter((c) => c.status === "In Progress") },
        { title: "Completed", courses: courses.filter((c) => c.status === "Completed") },
        { title: "Not Started", courses: courses.filter((c) => c.status === "Not Started") },
    ];

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">My Learning</h2>
                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Track your playlists, courses, and completion status in one place.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-[#f5f2ff] p-4">
                        <p className="text-sm text-gray-500">Active</p>
                        <p className="mt-1 text-2xl font-bold text-gray-900">{summary.inProgress}</p>
                    </div>
                    <div className="rounded-2xl bg-green-50 p-4">
                        <p className="text-sm text-gray-500">Completed</p>
                        <p className="mt-1 text-2xl font-bold text-gray-900">{summary.completed}</p>
                    </div>
                    <div className="rounded-2xl bg-gray-50 p-4">
                        <p className="text-sm text-gray-500">Queued</p>
                        <p className="mt-1 text-2xl font-bold text-gray-900">{summary.notStarted}</p>
                    </div>
                </div>
            </section>

            {sections.map((section) => (
                <section key={section.title} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    {section.courses.length === 0 ? (
                        <p className="mt-4 text-sm text-gray-500">No courses in this section.</p>
                    ) : (
                        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {section.courses.map((course) => (
                                <article
                                    key={course.id}
                                    className="rounded-2xl border border-gray-100 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#6044da]/30 hover:shadow-md"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[course.status]}`}>
                                                {course.status}
                                            </span>
                                            <h4 className="mt-3 text-lg font-semibold text-gray-900">{course.title}</h4>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {course.category} · {course.instructor}
                                            </p>
                                        </div>
                                        <div className="w-14 shrink-0">
                                            <CircularProgressbar
                                                value={course.progress}
                                                text={`${course.progress}%`}
                                                styles={progressStyles}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-purple-100">
                                        <div
                                            className="h-full rounded-full bg-[#6044da]"
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm text-gray-500">
                                        {course.completedLessons}/{course.lessons} lessons completed
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-xl bg-[#6044da] py-2.5 text-sm font-semibold text-white transition hover:bg-[#5137c9]"
                                    >
                                        {course.status === "Completed"
                                            ? "Review Course"
                                            : course.status === "Not Started"
                                              ? "Start Course"
                                              : "Continue"}
                                    </button>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            ))}
        </div>
    );
};

export default MyLearningContent;
