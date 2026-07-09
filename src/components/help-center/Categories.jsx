import SectionHeader from "../common/SectionHeader";
import { helpCategoriesData } from "../../data/help-center/helpCategoriesData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <section className="px-4 py-10 sm:px-8 lg:px-12 xl:px-20">
            <SectionHeader title="Browse by Category" description="Explore articles organized by topic to quickly find the information you need." align="left" />

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                {helpCategoriesData.map((category) => (
                    <CategoryCard key={category.title} category={category} />
                ))}
            </div>
        </section>
    );
};

export default Categories;