import { useMemo, useState } from "react";
import Hero from "../components/help-center/Hero";
import Categories from "../components/help-center/Categories";
import ArticlesSection from "../components/help-center/ArticlesSection";
import Sidebar from "../components/help-center/Sidebar";
import CTA from "../components/help-center/CTA";
import { popularArticlesData } from "../data/help-center/popularArticlesData";

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredArticles = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (query) {
            return popularArticlesData.filter((article) => {
                return (
                    article.title.toLowerCase().includes(query) ||
                    article.description.toLowerCase().includes(query) ||
                    article.category.toLowerCase().includes(query)
                );
            });
        }

        if (selectedCategory) {
            return popularArticlesData.filter(
                (article) => article.category === selectedCategory
            );
        }

        return popularArticlesData;
    }, [searchQuery, selectedCategory]);

    const handleSearchChange = (value) => {
        setSearchQuery(value);

        if (selectedCategory) {
            setSelectedCategory(null);
        }
    };

    const handleCategorySelect = (category) => {
        setSearchQuery("");
        setSelectedCategory(category);
    };

    const handleViewAll = () => {
        setSearchQuery("");
        setSelectedCategory(null);
    };

    const sectionTitle = searchQuery ? `Search Results (${filteredArticles.length})` : selectedCategory ? selectedCategory : "Popular Articles";

    return (
        <main>
            <Hero searchQuery={searchQuery} setSearchQuery={handleSearchChange} />
            <Categories selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />

            <section className="flex flex-col gap-8 px-4 pb-10 sm:px-8 lg:px-12 xl:flex-row xl:gap-10 xl:px-20">
                <ArticlesSection articles={filteredArticles} title={sectionTitle} onViewAll={handleViewAll} showViewAll={searchQuery !== "" || selectedCategory !== null} />
                <Sidebar />
            </section>

            <CTA />
        </main>
    );
};

export default HelpCenter;