import { ArrowRight } from "lucide-react";
import { workingStepsData } from "../../data/home/workingStepsData";
import SectionHeader from "../common/SectionHeader";

const Working = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-5 px-4 sm:px-8 lg:px-12 xl:px-25 pt-10 xl:pt-15 pb-10">
            <SectionHeader badge="How It Works" title="Your AI-Powered Learning Journey" subtitle="4 simple steps to personalized learning and growth" centered />

            <div className="w-full flex flex-col xl:flex-row justify-center items-center pt-10 gap-6 xl:gap-8">
                {workingStepsData.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <>
                            <article key={step.step} className="flex flex-col w-full max-w-[320px] h-auto min-h-60 rounded-2xl border border-gray-300 p-5 gap-4">
                                <div className="flex gap-5 sm:gap-8 items-center">
                                    <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-xl shrink-0">
                                        <Icon size={45} color="#6044da" aria-hidden="true" />
                                    </div>

                                    <div className="text-lg font-semibold flex justify-center items-center text-white w-10 h-10 bg-[#6044da] rounded-full shrink-0">
                                        {step.step}
                                    </div>
                                </div>

                                <h2 className="font-bold text-xl"> {step.title}</h2>
                                <p className="text-gray-600">{step.description}</p>
                            </article>

                            {index !== workingStepsData.length - 1 && (
                                <ArrowRight size={32} color="#6044da" className="rotate-90 xl:rotate-0 shrink-0" aria-hidden="true" />
                            )}
                        </>
                    );
                })}
            </div>
        </section>
    );
};

export default Working;