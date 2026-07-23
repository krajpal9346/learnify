import { ChevronRight } from "lucide-react";

const CategoryCard = ({
    category,
    activeCategory,
    setActiveCategory,
    setSearchQuery,
    setActiveTopic,
}) => {
    const Icon = category.icon;

    const isActive = activeCategory === category.title;

    const handleClick = () => {
        if (isActive) {
            setActiveCategory("");
            return;
        }

        // Clear other filters
        setSearchQuery("");
        setActiveTopic("");

        // Apply selected category
        setActiveCategory(category.title);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`group flex w-full cursor-pointer items-center justify-between rounded-2xl border p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isActive
                    ? "border-[#6044da] bg-purple-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-[#6044da]/30"
            }`}
        >
            <div className="flex items-center gap-4">
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.color}`}
                >
                    <Icon
                        size={24}
                        strokeWidth={2.2}
                        aria-hidden="true"
                    />
                </div>

                <div>
                    <h3
                        className={`font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-[#6044da]"
                                : "text-gray-900 group-hover:text-[#6044da]"
                        }`}
                    >
                        {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        {category.posts} discussions
                    </p>
                </div>
            </div>

            <ChevronRight
                size={20}
                className={`transition-all duration-300 ${
                    isActive
                        ? "translate-x-1 text-[#6044da]"
                        : "text-gray-400 group-hover:translate-x-1 group-hover:text-[#6044da]"
                }`}
            />
        </button>
    );
};

export default CategoryCard;