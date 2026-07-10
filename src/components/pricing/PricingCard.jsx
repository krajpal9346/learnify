import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCard = ({ plan, billingCycle, selectedPlan, setSelectedPlan }) => {
    const Icon = plan.icon;
    const pricing = plan.pricing[billingCycle];
    const isSelected = selectedPlan === plan.id;
    const primaryButtonClass = "flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5137c9]";
    const secondaryButtonClass = "flex w-full items-center justify-center gap-2 rounded-xl border border-[#6044da] px-5 py-3 font-semibold text-[#6044da] transition-all duration-300 hover:bg-purple-50";

    return (
        <article className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${plan.featured ? "border-[#6044da] shadow-xl lg:scale-105" : "border-gray-200 shadow-sm"} ${isSelected ? "ring-4 ring-[#6044da] ring-offset-2" : ""} hover:-translate-y-2 hover:shadow-2xl`}>
            {plan.badge && (
                <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-[#6044da] px-4 py-1 text-sm font-semibold text-white">
                    {plan.badge}
                </div>
            )}

            <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                    <Icon size={28} color="#6044da" />
                </div>

                <div>
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <p className="text-sm text-gray-600">{plan.subtitle}</p>
                </div>
            </div>

            <div key={billingCycle} className="mb-6 transition-all duration-300">
                <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold">{pricing.price}</span>
                    <span className="mb-2 text-gray-500">{pricing.period}</span>
                </div>

                {pricing.note && (
                    <p className="mt-2 text-sm font-semibold text-green-600">{pricing.note}</p>
                )}

                {pricing.billed && (
                    <p className="mt-2 text-sm text-gray-500">{pricing.billed}</p>
                )}

                {pricing.originalPrice && (
                    <div className="mt-3 flex items-center gap-3">
                        <span className="text-sm text-gray-400 line-through">{pricing.originalPrice}</span>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">{pricing.save}</span>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-4">
                {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                        <Check size={18} color="#6044da" className="mt-1 shrink-0" />
                        <p className="leading-6 text-gray-700">{feature}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <Link to={plan.action[billingCycle].pathname} state={plan.action[billingCycle].state} onClick={() => setSelectedPlan(plan.id)} className="block">
                    <button type="button" className={plan.featured ? primaryButtonClass : secondaryButtonClass}>
                        {isSelected ? "✓ Selected Plan" : plan.buttonText[billingCycle]}
                        {!isSelected && (<ArrowRight size={18} aria-hidden="true" />)}
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default PricingCard;