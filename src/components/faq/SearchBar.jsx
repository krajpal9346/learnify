import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="flex w-full max-w-2xl items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm sm:gap-5 sm:px-6 lg:px-8">
            <Search size={20} color="#9ca3af" aria-hidden="true" />
            <input type="text" placeholder="Search coming soon..." className="w-full border-none bg-transparent text-sm sm:text-base outline-none placeholder:text-gray-400" />
        </div>
    );
};

export default SearchBar;