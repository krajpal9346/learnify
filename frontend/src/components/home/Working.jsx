import React from "react";
import { ArrowRight } from "lucide-react";
import { workingStepsData } from "../../data/home/workingStepsData";
import SectionHeader from "../common/SectionHeader";

const Working = () => {
    return (
        <section className="px-5 sm:px-8 lg:px-10 xl:px-24 py-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                <SectionHeader badge="How It Works" title="Your AI-Powered Learning Journey" description="4 simple steps to personalized learning and growth" align="center" />

                <div className="flex flex-col xl:flex-row justify-center items-center gap-6 xl:gap-4 w-full">
                    {workingStepsData.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <React.Fragment key={step.step}>
                                <article className="w-full max-w-[320px] h-65 sm:h-65 md:h-60 lg:h-60 xl:h-75 rounded-2xl border border-gray-300 bg-white p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="flex justify-center items-center h-18 w-18 rounded-xl bg-purple-100 shrink-0">
                                            <Icon size={40} color="#6044da" aria-hidden="true" />
                                        </div>

                                        <div className="flex justify-center items-center h-10 w-10 rounded-full bg-[#6044da] text-white font-semibold shrink-0">
                                            {step.step}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold min-h-8 xl:min-h-16 2xl:min-h-8">{step.title}</h3>
                                    <p className="text-gray-600 leading-7 flex-1">{step.description}</p>
                                </article>

                                {index !== workingStepsData.length - 1 && (
                                    <ArrowRight size={32} color="#6044da" className="rotate-90 xl:rotate-0 shrink-0" aria-hidden="true" />
                                )}

                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Working;