import { Calendar, Clock3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6044da]/30 hover:shadow-2xl">
            <Link to={`/blogs/${blog.slug}`} className="overflow-hidden" aria-label={`Read ${blog.title}`}>
                <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-55" />
            </Link>

            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase text-[#6044da] transition-transform duration-300 group-hover:scale-105">{blog.category}</span>

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock3 size={14} aria-hidden="true" />
                        <span>{blog.readTime}</span>
                    </div>
                </div>

                <div className="flex flex-1 flex-col">
                    <Link to={`/blogs/${blog.slug}`}>
                        <h3 className="mb-3 text-lg font-bold leading-7 transition-colors duration-300 group-hover:text-[#6044da] hover:text-[#6044da] sm:text-xl sm:leading-8">{blog.title}</h3>
                    </Link>

                    <p className="leading-7 text-gray-600">{blog.description}</p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-3">
                        <img src={blog.authorImage} alt={blog.author} className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10" />

                        <div>
                            <p className="text-sm font-semibold">{blog.author}</p>

                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Calendar size={12} aria-hidden="true" />
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    </div>

                    <Link to={`/blogs/${blog.slug}`} className="flex items-center gap-2 font-semibold text-[#6044da] transition-all duration-300 hover:gap-3">
                        Read
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;