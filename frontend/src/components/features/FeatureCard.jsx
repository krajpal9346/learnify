import { ArrowRight } from "lucide-react";

const FeatureCard = ({ feature, onSelect }) => {
    const Icon = feature.icon;

    return (
        <article className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col gap-4">
                <div className={`flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-3xl ${feature.bgColor}`}>
                    <Icon size={28} color={feature.iconColor} aria-hidden="true" />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-6 text-gray-600">{feature.description}</p>
            </div>

            <button type="button" onClick={() => onSelect(feature)} className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#6044da] transition-all duration-300 hover:gap-3 cursor-pointer">
                Learn more
                <ArrowRight size={16} color="#6044da" aria-hidden="true" />
            </button>
        </article>
    );
};

export default FeatureCard;