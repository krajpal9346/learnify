import { faqData } from "../../data/faq/faqData";
import FAQItem from "./FAQItem";

const FAQAccordion = ({ selectedCategory, searchQuery, openQuestion, setOpenQuestion, }) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const faqs = normalizedQuery ? faqData.all.filter((faq) => faq.question.toLowerCase().includes(normalizedQuery) || faq.answer.toLowerCase().includes(normalizedQuery)) : faqData[selectedCategory];

    if (faqs.length === 0) {
        return (
            <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-16 lg:w-3/4">
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800">No FAQs Found</h3>
                    <p className="mt-2 text-gray-500">Try searching with different keywords.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col gap-4 lg:w-3/4">
            {faqs.map((faq, index) => (
                <FAQItem key={faq.question} faq={faq} index={index} openQuestion={openQuestion} setOpenQuestion={setOpenQuestion} />
            ))}
        </div>
    );
};

export default FAQAccordion;