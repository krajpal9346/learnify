import { Calendar, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const PopularPostCard = ({ post }) => {
    return (
        <Link to={`/blogs/${post.slug}`} className="group flex items-center gap-4 rounded-xl transition-all duration-300 hover:bg-purple-50 hover:p-2" aria-label={`Read ${post.title}`}>
            <img src={post.image} alt={post.title} className="h-14 w-14 shrink-0 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16" />

            <div className="flex min-w-0 flex-1 flex-col">
                <h4 className="line-clamp-2 text-sm font-semibold leading-5 transition-colors duration-300 group-hover:text-[#6044da] sm:leading-6">{post.title}</h4>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <Calendar size={12} aria-hidden="true" />
                        <span>{post.date}</span>
                    </div>

                    {post.readTime && (
                        <div className="flex items-center gap-1">
                            <Clock3 size={12} aria-hidden="true" />
                            <span>{post.readTime}</span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default PopularPostCard;