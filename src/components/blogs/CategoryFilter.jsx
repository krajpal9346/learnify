import { blogCategories } from "../../data/blogs/blogCategories";

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
    return (
        <section className="px-4 py-10 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {blogCategories.map((category) => (
                    <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`cursor-pointer rounded-full px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold transition-all duration-300 ${activeCategory === category ? "bg-[#6044da] text-white shadow-md" : "bg-purple-100 text-[#6044da] hover:bg-purple-200"}`}>
                        {category}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CategoryFilter;