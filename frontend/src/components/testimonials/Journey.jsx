import SectionHeader from "../common/SectionHeader";
import { journeyData } from "../../data/testimonials/journeyData";

const Journey = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-10">
            <div className="rounded-2xl bg-purple-100 px-6 py-8 sm:px-10 lg:px-12 xl:px-16">
                <div className="flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:justify-between">
                    <div className="w-full text-center xl:w-[40%] xl:text-left">
                        <SectionHeader title="A Typical Learnify Journey" description="From curiosity to career success — here's how our learners grow." align="left" />
                    </div>

                    <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 xl:w-[60%]">
                        {journeyData.map((journey) => {
                            const Icon = journey.icon;

                            return (
                                <article key={journey.month} className="flex w-full max-w-42.5 justify-self-center flex-col items-center gap-4">
                                    <div className="flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full border border-gray-200 bg-white">
                                        <Icon size={36} color="#6044da" aria-hidden="true" />
                                    </div>

                                    <div className="flex flex-col items-center gap-2">
                                        <p className="text-center text-lg font-bold text-[#6044da]">{journey.month}</p>
                                        <p className="text-center text-sm leading-6 text-gray-700">{journey.text}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;