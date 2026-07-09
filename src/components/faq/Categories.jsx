import { faqData } from "../../data/faq/faqData";
import { faqCategories } from "../../data/faq/faqCategories";
import CategoryItem from "./CategoryItem";

const Categories = ({ selectedCategory, setSelectedCategory, setOpenQuestion }) => {
    const categories = faqCategories(faqData);

    return (
        <aside className="w-full lg:w-1/4">
            <div className="rounded-3xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
                {categories.map((category) => (
                    <CategoryItem key={category.key} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setOpenQuestion={setOpenQuestion} />
                ))}
            </div>
        </aside>
    );
};

export default Categories;