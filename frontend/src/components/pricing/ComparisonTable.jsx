import { Check, X } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { comparisonData } from "../../data/pricing/comparisonData";

const ComparisonTable = ({ billingCycle }) => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-12">
            <SectionHeader title="Compare Plans" description="Compare all plans and choose the one that fits your learning journey." align="center" />

            <div className="mt-10 overflow-x-auto">
                <div className="min-w-225 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                    <div className="grid grid-cols-4 bg-purple-100 font-bold">
                        <div className="p-5">
                            Features
                        </div>

                        {comparisonData.plans.map((plan) => (
                            <div key={plan} className="p-5 text-center">
                                {plan}
                            </div>
                        ))}
                    </div>

                    {comparisonData.features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div key={feature.name} className="grid grid-cols-4 border-t border-gray-200 transition-colors duration-300 hover:bg-purple-50">
                                <div className="flex items-center gap-3 p-5">
                                    <Icon size={18} color="#6044da" />
                                    <span className="text-sm font-medium">{feature.name}</span>
                                </div>

                                {feature.values[billingCycle].map((value, index) => (
                                    <div key={`${feature.name}-${index}`} className="flex items-center justify-center p-5">
                                        {typeof value === "boolean" ? (value ? (<Check size={20} color="#16a34a" strokeWidth={3} />) : (<X size={20} color="#ef4444" strokeWidth={3} />))
                                            : (<span className={`text-center text-sm ${feature.name === "Yearly Savings" && billingCycle === "yearly" ? "font-semibold text-green-600" : "text-gray-700"}`}>{value}</span>)}
                                    </div>
                                )
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;