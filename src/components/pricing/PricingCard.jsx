import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const PricingCard = ({ plan, billingCycle }) => {
    const Icon = plan.icon;
    const primaryButtonClass = "flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5137c9]";
    const secondaryButtonClass = "flex w-full items-center justify-center gap-2 rounded-xl border border-[#6044da] px-5 py-3 font-semibold text-[#6044da] transition-all duration-300 hover:bg-purple-50";
    const yearlyPrice = plan.price !== "₹0" ? `₹${Math.round(Number(plan.price.replace("₹", "")) * 12 * 0.8)}` : plan.price;
    const displayPrice = billingCycle === "yearly" ? yearlyPrice : plan.price;
    const displayPeriod = billingCycle === "yearly" ? "/year" : plan.period;

    return (
        <article className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${plan.featured ? "border-[#6044da] shadow-xl lg:scale-105" : "border-gray-200 shadow-sm"}`}>
            {plan.badge && (
                <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-[#6044da] px-4 py-1 text-sm font-semibold text-white">
                    {plan.badge}
                </div>
            )}

            <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                    <Icon size={28} color="#6044da" aria-hidden="true" />
                </div>

                <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{plan.title}</h3>
                    <p className="text-sm text-gray-600">{plan.subtitle}</p>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-end gap-1">
                    <span className="text-4xl sm:text-5xl font-bold">{displayPrice}</span>
                    <span className="mb-2 text-gray-500">{displayPeriod}</span>
                </div>

                {plan.note && (
                    <p className="mt-2 text-sm font-semibold text-green-600">{plan.note}</p>
                )}

                {billingCycle === "yearly" && plan.yearly && (
                    <p className="mt-2 text-sm text-gray-500">{plan.yearly}</p>
                )}

                {billingCycle === "yearly" && plan.save && (
                    <p className="text-sm font-semibold text-green-600">{plan.save}</p>
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

            <Link to={ROUTES.STARTED} className="mt-8">
                <button type="button" className={plan.featured ? primaryButtonClass : secondaryButtonClass}>
                    {plan.buttonText}
                    <ArrowRight size={18} aria-hidden="true" />
                </button>
            </Link>
        </article>
    );
};

export default PricingCard;