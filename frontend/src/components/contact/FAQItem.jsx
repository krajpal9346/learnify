import { ChevronDown } from "lucide-react";

const FAQItem = ({
    faq,
    isOpen,
    onToggle,
}) => {
    return (
        <article
            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                    ? "border-[#6044da]/30 shadow-md"
                    : "border-gray-200 hover:border-[#6044da]/20 hover:shadow-md"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-300"
            >
                <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                        isOpen
                            ? "text-[#6044da]"
                            : "text-gray-900"
                    }`}
                >
                    {faq.question}
                </h3>

                <ChevronDown
                    size={22}
                    className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#6044da]" : "text-gray-500"
                    }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-6 py-5">
                        <p className="leading-8 text-gray-600">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FAQItem;