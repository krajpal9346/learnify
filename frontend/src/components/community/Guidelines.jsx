import {
    ShieldCheck,
    HeartHandshake,
    CircleHelp,
    Ban,
    Flag,
} from "lucide-react";

const guidelines = [
    {
        id: 1,
        icon: HeartHandshake,
        title: "Be Respectful",
        description:
            "Treat every member with kindness, respect, and professionalism.",
    },
    {
        id: 2,
        icon: CircleHelp,
        title: "Help Others",
        description:
            "Share your knowledge and support learners whenever you can.",
    },
    {
        id: 3,
        icon: Ban,
        title: "No Spam",
        description:
            "Avoid advertisements, repetitive posts, and irrelevant content.",
    },
    {
        id: 4,
        icon: ShieldCheck,
        title: "Share Genuine Content",
        description:
            "Post accurate information and always give credit to original sources.",
    },
    {
        id: 5,
        icon: Flag,
        title: "Report Misuse",
        description:
            "Help keep the community safe by reporting inappropriate behaviour.",
    },
];

const Guidelines = () => {
    return (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                    <ShieldCheck
                        size={24}
                        color="#6044da"
                        strokeWidth={2.5}
                        aria-hidden="true"
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Community Guidelines
                    </h2>

                    <p className="text-sm text-gray-500">
                        Help us build a welcoming and supportive learning
                        environment.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                {guidelines.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="flex items-start gap-4 rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:border-[#6044da]/20 hover:bg-purple-50"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                                <Icon
                                    size={22}
                                    color="#6044da"
                                    strokeWidth={2.4}
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Guidelines;