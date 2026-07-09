const CategoryItem = ({ category, selectedCategory, setSelectedCategory, setOpenQuestion }) => {
    const Icon = category.icon;
    const active = selectedCategory === category.key;

    const handleClick = () => {
        setSelectedCategory(category.key);
        setOpenQuestion(null);
    };

    return (
        <button type="button" onClick={handleClick} className={`mb-2 flex w-full items-center justify-between rounded-2xl px-4 sm:px-5 py-4 text-left transition-all duration-300 cursor-pointer ${active ? "bg-purple-100 text-[#6044da]" : "hover:bg-gray-50"}`}>
            <div className="flex min-w-0 items-center gap-3">
                <Icon size={18} className="shrink-0" aria-hidden="true" />
                <span className="truncate font-medium">{category.title}</span>
            </div>

            <div className={`ml-3 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full text-[10px] sm:text-xs font-bold ${active ? "bg-[#6044da] text-white" : "bg-gray-100 text-gray-500"}`}>
                {category.count}
            </div>
        </button>
    );
};

export default CategoryItem;