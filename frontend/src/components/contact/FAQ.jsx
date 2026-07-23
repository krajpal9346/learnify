import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { faqData } from "../../data/contact/faqData";
import FAQItem from "./FAQItem";

const FAQ = () => {
    const [openId, setOpenId] = useState(1);

    const handleToggle = (id) => {
        setOpenId((previous) =>
            previous === id ? null : id
        );
    };

    return (
        <section className="px-4 py-12 sm:px-8 lg:px-12 xl:px-20">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2">
                        <HelpCircle
                            size={18}
                            color="#6044da"
                            strokeWidth={2.5}
                            aria-hidden="true"
                        />

                        <span className="font-semibold text-[#6044da]">
                            Frequently Asked Questions
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900">
                        Got Questions?
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-500">
                        Find answers to the most commonly asked
                        questions about Learnify AI, our courses,
                        support, and community before reaching out.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    {faqData.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            onToggle={() =>
                                handleToggle(faq.id)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;