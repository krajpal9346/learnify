import { useState } from "react";
import { ChevronDown } from "lucide-react";

const MiniFAQItem = ({ question, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${!isLast ? "border-b border-gray-200" : ""}`}>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between py-4 text-left transition-colors duration-300 sm:py-5">
                <p className={`pr-4 transition-colors duration-300 ${isOpen ? "text-[#6044da]" : "text-gray-700 hover:text-[#6044da]"}`}>{question}</p>
                <ChevronDown size={18} className={`shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-[#6044da]" : "text-gray-500"}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-5" : "max-h-0"}`}>
                <p className="rounded-lg bg-purple-50 p-4 text-sm leading-7 text-gray-600">This article explains <strong>{question}</strong> in detail. It includes step-by-step instructions, answers to common questions, troubleshooting tips, and helpful recommendations so you can quickly resolve your issue while using Learnify AI.</p>
            </div>
        </div>
    );
};

export default MiniFAQItem;