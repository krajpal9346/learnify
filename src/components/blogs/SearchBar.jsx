import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="relative w-full max-w-2xl">
            <Search size={20} color="#9ca3af" className="absolute left-5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search blogs..." className="w-full rounded-2xl border border-gray-300 bg-white py-3.5 pr-5 pl-14 text-sm outline-none transition-all focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:py-4 sm:text-base" />
        </div>
    );
};

export default SearchBar;