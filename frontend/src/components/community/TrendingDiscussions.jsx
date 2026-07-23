import { ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { discussionData } from "../../data/community/discussionData";
import DiscussionCard from "./DiscussionCard";

const TrendingDiscussions = ({
    searchQuery,
    activeTopic,
    activeCategory,
    setSearchQuery,
    setActiveTopic,
    setActiveCategory,
}) => {
    const query = searchQuery.trim().toLowerCase();

    const filteredDiscussions = discussionData.filter((discussion) => {
        // Search
        if (query) {
            return (
                discussion.title.toLowerCase().includes(query) ||
                discussion.author.toLowerCase().includes(query) ||
                discussion.category.toLowerCase().includes(query)
            );
        }

        // Popular Topic
        if (activeTopic) {
            return (
                discussion.category.toLowerCase() ===
                activeTopic.toLowerCase()
            );
        }

        // Category
        if (activeCategory) {
            return (
                discussion.category.toLowerCase() ===
                activeCategory.toLowerCase()
            );
        }

        // No filters
        return true;
    });

    const handleViewAll = () => {
        setSearchQuery("");
        setActiveTopic("");
        setActiveCategory("");
    };

    return (
        <section className="flex w-full flex-col gap-8 xl:w-2/3">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                        <Flame
                            size={26}
                            color="#6044da"
                            strokeWidth={2.5}
                            aria-hidden="true"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Trending Discussions
                        </h2>

                        <p className="text-sm text-gray-500">
                            Join the conversations happening right now.
                        </p>
                    </div>
                </div>

                <Link
                    to="/community"
                    onClick={handleViewAll}
                    className="flex items-center gap-2 rounded-xl bg-[#6044da] px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#5137c9]"
                >
                    View All

                    <ArrowRight
                        size={18}
                        aria-hidden="true"
                    />
                </Link>
            </div>

            <div className="flex flex-col gap-5">
                {filteredDiscussions.length > 0 ? (
                    filteredDiscussions.map((discussion) => (
                        <DiscussionCard
                            key={discussion.id}
                            discussion={discussion}
                        />
                    ))
                ) : (
                    <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-700">
                                No discussions found
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Try another search or choose a different
                                category.
                            </p>

                            <button
                                type="button"
                                onClick={handleViewAll}
                                className="mt-5 rounded-xl bg-[#6044da] px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-[#5137c9]"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TrendingDiscussions;