import { Flame } from "lucide-react";
import { popularPosts } from "../../data/blogs/popularPosts";
import PopularPostCard from "./PopularPostCard";

const PopularPosts = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-5 flex items-center gap-2">
                <Flame size={20} color="#6044da" strokeWidth={3} aria-hidden="true" />
                <h3 className="text-lg font-bold sm:text-xl">Popular Posts</h3>
            </div>

            <div className="flex flex-col gap-5">
                {popularPosts.map((post) => (
                    <PopularPostCard key={post.title} post={post} />
                ))}
            </div>
        </section>
    );
};

export default PopularPosts;