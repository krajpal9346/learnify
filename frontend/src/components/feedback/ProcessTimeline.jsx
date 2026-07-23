import { ArrowDown } from "lucide-react";
import { processTimelineData } from "../../data/feedback/processTimelineData";

const ProcessTimeline = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="mb-8 text-2xl font-bold">What Happens Next?</h2>

            <div className="flex flex-col">
                {processTimelineData.map((step, index) => (
                    <div key={step.step}>
                        <div className="flex items-start gap-4 sm:gap-5">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold sm:h-12 sm:w-12 ${step.step === 1 ? "bg-[#6044da] text-white" : "bg-purple-100 text-[#6044da]"}`}>
                                {step.step}
                            </div>

                            <div>
                                <h3 className="font-bold">{step.title}</h3>
                                <p className="mt-2 leading-6 text-gray-600">{step.description}</p>
                            </div>
                        </div>

                        {index !==
                            processTimelineData.length - 1 && (
                                <div className="my-3 ml-3 flex">
                                    <ArrowDown size={24} color="#6044da" aria-hidden="true" />
                                </div>
                            )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessTimeline;