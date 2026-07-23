import { popularTopics } from "../../data/community/popularTopics";

const PopularTopics = ({
    activeTopic,
    setActiveTopic,
    setSearchQuery,
    setActiveCategory,
}) => {
    const handleTopicClick = (topicName) => {
        if (activeTopic === topicName) {
            setActiveTopic("");
            return;
        }

        // Clear other filters
        setSearchQuery("");
        setActiveCategory("");

        // Apply selected topic
        setActiveTopic(topicName);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 xl:justify-start">
            <span className="font-medium text-gray-500">
                Popular:
            </span>

            {popularTopics.map((topic) => {
                const isActive = activeTopic === topic.name;

                return (
                    <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleTopicClick(topic.name)}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                            isActive
                                ? "border-[#6044da] bg-[#6044da] text-white"
                                : "border-purple-200 bg-purple-100 text-[#6044da] hover:bg-purple-200"
                        }`}
                    >
                        {topic.name}

                        <span
                            className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                                isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-white text-[#6044da]"
                            }`}
                        >
                            {topic.posts}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default PopularTopics;