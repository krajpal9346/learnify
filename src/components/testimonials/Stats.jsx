import { statsData } from "../../data/testimonials/statsData";

const Stats = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-32 py-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {statsData.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <article key={stat.label} className="flex items-center justify-center gap-5 xl:justify-start">
                            <div className="flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full border border-gray-300 bg-white">
                                <Icon size={34} color="#6044da" aria-hidden="true" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="font-bold leading-none text-[#6044da]">
                                    <span className="text-3xl sm:text-4xl">{stat.value}</span>

                                    {stat.suffix && (
                                        <span className="text-xl sm:text-2xl">{stat.suffix}</span>
                                    )}
                                </h3>

                                <p className="mt-2 text-sm text-gray-700">{stat.label}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Stats;