import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="flex w-full max-w-4xl items-center gap-3 rounded-2xl border border-gray-300 bg-white px-5 py-3 shadow-sm transition-all duration-300 focus-within:border-[#6044da] focus-within:ring-2 focus-within:ring-[#6044da]/20 sm:py-4">
            <Search size={20} color="#6b7280" aria-hidden="true" />
            <input type="text" placeholder="Search for articles, topics or questions..." className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400 sm:text-base" />
        </div>
    );
};

export default SearchBar;