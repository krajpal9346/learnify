import { ArrowRight } from "lucide-react";
import { popularArticlesData } from "../../data/help-center/popularArticlesData";
import ArticleCard from "./ArticleCard";

const ArticlesSection = () => {
    return (
        <section className="w-full xl:w-2/3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-2xl font-bold">Popular Articles</h2>

                    <button type="button" className="flex w-fit cursor-pointer items-center gap-2 font-semibold text-[#6044da] transition-all duration-300 hover:gap-3">
                        View All Articles
                        <ArrowRight size={18} aria-hidden="true" />
                    </button>
                </div>

                <div className="flex flex-col">
                    {popularArticlesData.map((article, index) => (
                        <ArticleCard key={article.title} article={article} isLast={index === popularArticlesData.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;