import { featureSecurityData } from "../../data/features/featureSecurityData";

const SecuritySection = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-10">
            <div className="overflow-hidden rounded-2xl border border-purple-200 bg-purple-50">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {featureSecurityData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article key={item.id} className={`flex items-start gap-4 px-5 sm:px-8 py-6 ${index !== featureSecurityData.length - 1 ? "xl:border-r border-purple-200" : ""}`}>
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-100">
                                    <Icon size={40} color="#6044da" aria-hidden="true" />
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;