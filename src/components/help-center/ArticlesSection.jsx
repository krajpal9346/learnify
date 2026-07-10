import { ArrowRight } from "lucide-react";
import ArticleCard from "./ArticleCard";

const ArticlesSection = ({ articles, title, onViewAll, showViewAll }) => {
    return (
        <section className="w-full xl:w-2/3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="mt-2 text-gray-600">
                            {articles.length}{" "}
                            {articles.length === 1 ? "article" : "articles"} found
                        </p>
                    </div>

                    {showViewAll && (
                        <button type="button" onClick={onViewAll} className="flex w-fit cursor-pointer items-center gap-2 font-semibold text-[#6044da] transition-all duration-300 hover:gap-3">
                            View All Articles
                            <ArrowRight size={18} aria-hidden="true" />
                        </button>
                    )}
                </div>

                {articles.length > 0 ? (
                    <div className="flex flex-col">
                        {articles.map((article, index) => (
                            <ArticleCard key={article.id} article={article} isLast={index === articles.length - 1} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 py-20 text-center">
                        <h3 className="text-2xl font-bold text-gray-800">No articles found</h3>
                        <p className="mt-3 max-w-md leading-7 text-gray-600">We couldn't find any articles matching your search. Try searching with different keywords or browse by category.</p>

                        <button type="button" onClick={onViewAll} className="mt-8 rounded-xl bg-[#6044da] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4]">
                            View All Articles
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ArticlesSection;