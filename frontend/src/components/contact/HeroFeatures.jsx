import { heroFeatures } from "../../data/contact/heroFeatures";

const HeroFeatures = () => {
    return (
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {heroFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                    <div
                        key={feature.id}
                        className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6044da]/20 hover:shadow-lg"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 transition-transform duration-300 group-hover:scale-110">
                            <Icon
                                size={24}
                                color="#6044da"
                                strokeWidth={2.3}
                                aria-hidden="true"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HeroFeatures;