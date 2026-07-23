import { useState } from "react";
import { ChevronRight } from "lucide-react";

const ArticleCard = ({ article, isLast }) => {
    const Icon = article.icon;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className={`group rounded-xl py-6 transition-all duration-300 ${!isLast ? "border-b border-gray-200" : ""}`}>
            <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 ${article.iconBg}`}>
                        <Icon size={28} color={article.iconColor} aria-hidden="true" />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[#6044da] sm:text-xl">{article.title}</h3>
                        <p className="mt-2 leading-7 text-gray-600">{article.description}</p>
                    </div>
                </div>

                <button type="button" aria-label={isOpen ? "Collapse article" : "Expand article"} className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full transition-all duration-300 hover:bg-purple-100 sm:self-center">
                    <ChevronRight size={22} className={`transition-all duration-300 ${isOpen ? "rotate-90 text-[#6044da]" : "text-gray-500 group-hover:text-[#6044da]"}`} />
                </button>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "mt-6 max-h-96" : "max-h-0"}`}>
                <div className="rounded-xl bg-purple-50 p-5">
                    <h4 className="mb-3 font-semibold text-[#6044da]">Article Overview</h4>
                    <p className="leading-7 text-gray-700">{article.description}</p>
                    <p className="mt-4 leading-7 text-gray-700">This article provides detailed guidance about{" "}<strong>{article.title}</strong>. You'll findstep-by-step instructions, common issues, troubleshooting tips, and best practices to help you make the most of Learnify AI.</p>
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;