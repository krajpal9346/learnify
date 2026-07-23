import { LayoutGrid } from "lucide-react";
import { categoriesData } from "../../data/community/categoriesData";
import CategoryCard from "./CategoryCard";

const Categories = ({
    activeCategory,
    setActiveCategory,
    setSearchQuery,
    setActiveTopic,
}) => {
    return (
        <aside className="flex w-full flex-col gap-6 xl:w-1/3">
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                        <LayoutGrid
                            size={24}
                            color="#6044da"
                            strokeWidth={2.5}
                            aria-hidden="true"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            Categories
                        </h2>

                        <p className="text-sm text-gray-500">
                            Browse discussions by topic
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {categoriesData.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            setSearchQuery={setSearchQuery}
                            setActiveTopic={setActiveTopic}
                        />
                    ))}
                </div>
            </section>
        </aside>
    );
};

export default Categories;