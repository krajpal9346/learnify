import { Search, X } from "lucide-react";

const SearchBar = ({
    searchQuery,
    setSearchQuery,
    setActiveTopic,
    setActiveCategory,
}) => {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);

        // Remove all active filters when searching
        setActiveTopic("");
        setActiveCategory("");
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <div className="relative w-full max-w-3xl">
            <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
            />

            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search topics, discussions or members..."
                className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-14 pr-14 text-sm shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base"
            />

            {searchQuery && (
                <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 transition-colors duration-300 hover:bg-gray-100"
                    aria-label="Clear search"
                >
                    <X
                        size={18}
                        className="text-gray-500"
                    />
                </button>
            )}
        </div>
    );
};

export default SearchBar;