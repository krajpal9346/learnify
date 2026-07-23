import { howItWorksBenefitsData } from "../../data/how-it-works/howItWorksBenefitsData";

const Benefits = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-8">
            <div className="overflow-hidden rounded-2xl border border-purple-200 bg-purple-100">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {howItWorksBenefitsData.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <article key={benefit.title} className="flex gap-4 border-b border-purple-200 p-6 last:border-b-0 md:last:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0">
                                <div className={`flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-2xl ${benefit.bgColor}`}>
                                    <Icon size={40} color={benefit.iconColor} aria-hidden="true" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-700">{benefit.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Benefits;