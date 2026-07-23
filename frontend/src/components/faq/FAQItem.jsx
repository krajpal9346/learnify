import { Minus, Plus } from "lucide-react";

const FAQItem = ({ faq, index, openQuestion, setOpenQuestion }) => {
    const isOpen = openQuestion === index;

    return (
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <button type="button" onClick={() => setOpenQuestion(isOpen ? null : index)} className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left sm:items-center sm:px-8 sm:py-6">
                <h3 className={`flex-1 text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-[#6044da]" : "text-gray-900"}`}>{faq.question}</h3>

                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#6044da]">
                    {isOpen ? (<Minus size={16} color="#6044da" aria-hidden="true" />) : (<Plus size={16} color="#6044da" aria-hidden="true" />)}
                </div>
            </button>

            {isOpen && (
                <div className="border-t border-gray-100 px-5 pb-6 sm:px-8">
                    <p className="pt-5 leading-7 sm:leading-8 text-gray-600">{faq.answer}</p>
                </div>
            )}
        </article>
    );
};

export default FAQItem;