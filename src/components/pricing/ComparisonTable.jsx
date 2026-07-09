import { Check, X } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { comparisonData } from "../../data/pricing/comparisonData";

const ComparisonTable = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-10">
            <SectionHeader title="Compare Plans" description="Choose the plan that best matches your learning goals." align="center" />

            <div className="mt-10 overflow-x-auto">
                <div className="min-w-225 overflow-hidden rounded-3xl border border-gray-200 bg-white">
                    <div className="grid grid-cols-4 bg-purple-100 font-bold">
                        <div className="p-3 sm:p-5">
                            Features
                        </div>

                        {comparisonData.plans.map((plan) => (
                            <div key={plan} className="p-3 sm:p-5 text-center">
                                {plan}
                            </div>
                        ))}
                    </div>

                    {comparisonData.features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div key={feature.name} className="grid grid-cols-4 border-t border-gray-200">
                                <div className="flex items-center gap-3 p-3 sm:p-5">
                                    <Icon size={18} color="#6044da" />
                                    <span className="text-xs sm:text-sm">{feature.name}</span>
                                </div>

                                {feature.values.map(
                                    (value, index) => (
                                        <div key={`${feature.name}-${index}`} className="flex items-center justify-center p-3 sm:p-5">
                                            {typeof value === "boolean" ? (value ? (<Check size={18} color="#16a34a" />) : (<X size={18} color="#ef4444" />)) : (
                                                <span className="text-center text-xs sm:text-sm text-gray-700">{value}</span>
                                            )}
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