import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import girl from "../assets/girl.png";
import { ROUTES } from "../data/routes";
import { pricingData } from "../data/pricing/pricingData";
import { comparisonData } from "../data/pricing/comparisonData";
import { readyStatsData } from "../data/shared/readyStatsData";

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const primaryButtonClass = "cursor-pointer flex items-center justify-center gap-2 bg-[#6044da] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#5137c9] transition-all duration-300";
    const secondaryButtonClass = "cursor-pointer px-5 py-2.5 border border-[#6044da] text-[#6044da] rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300";

    return (
        <section className="pt-30 pb-10">
            <div className="bg-purple-50 px-5 sm:px-10 xl:px-20 py-15 flex flex-col items-center gap-6 text-center">
                <div className="bg-purple-200 px-5 py-1 rounded-full text-[#6044da] font-semibold text-sm">
                    Pricing Plans
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">Simple pricing for <br />every learner</h1>
                <p className="text-gray-600 max-w-2xl text-base sm:text-lg">Choose the perfect plan for your learning journey and unlock your potential with Learnify AI.</p>

                <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
                    <button type="button" onClick={() => setBillingCycle("monthly")} className={`px-5 py-2 rounded-full font-medium transition-all ${billingCycle === "monthly" ? "bg-[#6044da] text-white" : "text-gray-600"}`}>
                        Monthly
                    </button>

                    <button type="button" onClick={() => setBillingCycle("yearly")} className={`px-5 py-2 rounded-full font-medium transition-all ${billingCycle === "yearly" ? "bg-[#6044da] text-white" : "text-gray-600"}`}>
                        Yearly
                    </button>
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingData.map((plan) => {
                        const Icon = plan.icon;

                        return (
                            <div key={plan.title} className={`relative rounded-3xl border p-8 flex flex-col ${plan.featured ? "border-[#6044da] shadow-xl scale-105" : "border-gray-200 shadow-sm"}`}>
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6044da] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                                        <Icon color="#6044da" size={28} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold">{plan.title}</h3>
                                        <p className="text-gray-600 text-sm">{plan.subtitle}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-end gap-1">
                                        <span className="text-5xl font-bold">{plan.price}</span>
                                        <span className="text-gray-500 mb-2">{plan.period}</span>
                                    </div>

                                    {plan.note && (
                                        <p className="text-green-600 text-sm font-semibold mt-2">{plan.note}</p>
                                    )}

                                    {plan.yearly && (
                                        <p className="text-gray-500 text-sm mt-2">{plan.yearly}</p>
                                    )}

                                    {plan.save && (
                                        <p className="text-green-600 text-sm font-semibold">{plan.save}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-4 flex-1">
                                    {plan.features.map(
                                        (feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <Check color="#6044da" size={18} className="mt-1 shrink-0" />
                                                <p className="text-gray-700">{feature}</p>
                                            </div>
                                        )
                                    )}
                                </div>

                                <Link to={ROUTES.STARTED} className="mt-8">
                                    <button className={`w-full ${plan.featured ? primaryButtonClass : secondaryButtonClass}`}>
                                        {plan.buttonText}
                                        <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20 py-10 overflow-x-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Compare Plans</h2>

                <div className="min-w-225 border border-gray-200 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-4 bg-purple-100 font-bold">
                        <div className="p-5">
                            Features
                        </div>

                        {comparisonData.plans.map(
                            (plan) => (
                                <div key={plan} className="p-5 text-center">
                                    {plan}
                                </div>
                            )
                        )}
                    </div>

                    {comparisonData.features.map(
                        (feature) => {
                            const Icon = feature.icon;

                            return (
                                <div key={feature.name} className="grid grid-cols-4 border-t border-gray-200">
                                    <div className="p-5 flex items-center gap-3">
                                        <Icon color="#6044da" size={20} />
                                        <span className="text-sm">{feature.name}</span>
                                    </div>

                                    {feature.values.map(
                                        (value, valueIndex) => (
                                            <div key={`${feature.name}-${valueIndex}`} className="p-5 flex justify-center items-center">
                                                {typeof value === "boolean" ? (value ? (<Check color="#16a34a" />) : (<X color="#ef4444" />)) : (
                                                    <span className="text-sm text-center">{value}</span>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20 pt-10">
                <div className="relative overflow-hidden bg-[#6044da] min-h-90 xl:h-85 rounded-2xl px-6 sm:px-10 xl:px-16 py-10 xl:py-0 flex flex-col xl:flex-row items-center justify-between">
                    <div className="flex flex-col justify-center gap-6 w-full xl:w-[42%] text-center xl:text-left z-20">
                        <h1 className="text-3xl sm:text-4xl xl:text-4xl font-bold text-white leading-tight">Ready to accelerate <br />your learning?</h1>
                        <p className="text-base sm:text-lg text-purple-100 leading-relaxed">Join thousands of learners who are growing every day with Learnify AI.</p>

                        <Link to={ROUTES.STARTED}>
                            <button className={`${primaryButtonClass} border-2 border-white w-full`}>
                                Get Started for Free
                                <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>

                    <div className="relative w-full xl:w-[58%] h-105 xl:h-full flex justify-center items-end mt-10 xl:mt-0">
                        {readyStatsData.map(
                            (stat) => {
                                const Icon = stat.icon;

                                return (
                                    <div key={stat.title} className={`${stat.position} flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30`}>
                                        <Icon size={20} color={stat.iconColor} fill={stat.iconFill} />

                                        <div>
                                            <p className="text-[10px] xl:text-xs text-gray-500">{stat.title}</p>
                                            <h1 className="text-lg xl:text-xl font-bold text-gray-900">{stat.value}</h1>
                                            <p className={`text-[10px] xl:text-xs font-semibold ${stat.changeColor}`}>{stat.change}</p>
                                        </div>
                                    </div>
                                );
                            }
                        )}

                        <img src={girl} alt="Student learning" className="absolute bottom-14 sm:bottom-10 xl:bottom-0 left-1/2 -translate-x-1/2 h-56 sm:h-72 xl:h-80 object-contain z-20" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;