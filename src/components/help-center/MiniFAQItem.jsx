import { ChevronDown } from "lucide-react";

const MiniFAQItem = ({ question, isLast }) => {
    return (
        <div className={`group flex items-center justify-between py-4 transition-colors duration-300 hover:text-[#6044da] sm:py-5 ${!isLast ? "border-b border-gray-200" : ""}`}>
            <p className="pr-4 leading-6 text-gray-700 transition-colors duration-300 group-hover:text-[#6044da]">{question}</p>
            <ChevronDown size={18} className="shrink-0 text-gray-500 transition-colors duration-300 group-hover:text-[#6044da]" aria-hidden="true" />
        </div>
    );
};

export default MiniFAQItem;