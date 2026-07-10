import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category, active, onClick }) => {
    const Icon = category.icon;

    return (
        <article onClick={onClick} className={`group flex h-full cursor-pointer flex-col items-center gap-4 rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-300 ${active ? "border-[#6044da] bg-purple-50 shadow-lg" : "border-gray-200 hover:-translate-y-2 hover:border-[#6044da]/30 hover:shadow-xl"}`}>
            <div className={`flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 ${category.iconBg}`}>
                <Icon size={36} color={category.iconColor} strokeWidth={2.5} aria-hidden="true" />
            </div>

            <h3 className={`text-lg font-bold transition-colors duration-300 sm:text-xl ${active ? "text-[#6044da]" : "group-hover:text-[#6044da]"}`}>{category.title}</h3>
            <p className="text-sm leading-6 text-gray-600">{category.description}</p>

            <button type="button" onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
                className={`mt-auto flex items-center gap-2 font-semibold transition-all duration-300 ${active ? "text-[#6044da]" : "text-[#6044da] group-hover:gap-3"}`}>
                View Articles
                <ArrowRight size={18} aria-hidden="true" />
            </button>
        </article>
    );
};

export default CategoryCard;