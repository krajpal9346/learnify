import { ChevronRight } from "lucide-react";

const ArticleCard = ({ article, isLast }) => {
    const Icon = article.icon;

    return (
        <article className={`group flex flex-col gap-5 rounded-xl py-6 transition-all duration-300 hover:bg-purple-50 sm:flex-row sm:items-center sm:justify-between ${!isLast ? "border-b border-gray-200" : ""}`}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 ${article.iconBg}`}>
                    <Icon size={28} color={article.iconColor} aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[#6044da] sm:text-xl">{article.title}</h3>
                    <p className="leading-7 text-gray-600">{article.description}</p>
                </div>
            </div>

            <button type="button" aria-label={`Read article: ${article.title}`} className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full transition-all duration-300 hover:bg-purple-100 sm:self-center">
                <ChevronRight size={22} className="text-gray-500 transition-colors duration-300 group-hover:text-[#6044da]" />
            </button>
        </article>
    );
};

export default ArticleCard;