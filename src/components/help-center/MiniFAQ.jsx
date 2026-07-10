import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { miniFaqData } from "../../data/help-center/miniFaqData";
import { ROUTES } from "../../data/routes";
import MiniFAQItem from "./MiniFAQItem";

const MiniFAQ = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-6 text-2xl font-bold">FAQs</h2>

            <div className="flex flex-col">
                {miniFaqData.map((faq, index) => (
                    <MiniFAQItem key={faq} question={faq} isLast={index === miniFaqData.length - 1} />
                ))}
            </div>

            <Link to={ROUTES.FAQS} className="mt-6 flex w-fit items-center gap-2 font-semibold text-[#6044da] transition-all duration-300 hover:gap-3">
                View All FAQs
                <ArrowRight size={18} aria-hidden="true" />
            </Link>
        </section>
    );
};

export default MiniFAQ;