import { whyFeedbackData } from "../../data/feedback/whyFeedbackData";

const WhyFeedbackMatters = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="mb-8 text-2xl font-bold">Why Your Feedback Matters</h2>

            <div className="flex flex-col gap-6">
                {whyFeedbackData.map((item) => {
                    const Icon = item.icon;

                    return (
                        <article key={item.title} className="group flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-100 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                                <Icon size={28} color="#6044da" aria-hidden="true" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-base font-bold transition-colors duration-300 group-hover:text-[#6044da] sm:text-lg">{item.title}</h3>
                                <p className="leading-7 text-gray-600">{item.description}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default WhyFeedbackMatters;