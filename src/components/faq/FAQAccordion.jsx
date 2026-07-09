import { faqData } from "../../data/faq/faqData";
import FAQItem from "./FAQItem";

const FAQAccordion = ({ selectedCategory, openQuestion, setOpenQuestion }) => {
    return (
        <div className="flex w-full flex-col gap-4 lg:w-3/4">
            {faqData[selectedCategory].map((faq, index) => (
                <FAQItem key={faq.question} faq={faq} index={index} openQuestion={openQuestion} setOpenQuestion={setOpenQuestion} />
            ))}
        </div>
    );
};

export default FAQAccordion;