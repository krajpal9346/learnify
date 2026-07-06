import { useMemo, useState } from "react";
import blog from "../assets/blog.png";
import { Search, Calendar, Clock3, ArrowRight, Flame, Pen, ChevronRight } from "lucide-react";
import { blogsData } from "../data/blogs/blogsData";
import { blogCategories } from "../data/blogs/blogCategories";
import { popularPosts } from "../data/blogs/popularPosts";

const Blogs = () => {
    const [activeCategory, setActiveCategory] = useState("All Blogs");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBlogs = useMemo(() => {
        return blogsData.filter((blog) => {
            const matchesCategory = activeCategory === "All Blogs" || blog.category === activeCategory;
            const matchesSearch =
                blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.category.toLowerCase().includes(searchTerm.toLowerCase());

            return (matchesCategory && matchesSearch);
        });
    }, [
        activeCategory,
        searchTerm,
    ]);

    const handleNewsletterSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="flex flex-col items-center">
            <div className="w-full px-5 sm:px-10 xl:px-20 pt-28 xl:pt-32 pb-10 bg-purple-50">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-20">
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 text-center xl:text-left items-center xl:items-start">
                        <div className="bg-purple-200 px-4 py-1 rounded-full w-fit">
                            <p className="uppercase text-sm text-[#6044da] font-semibold">Learn. Grow. Succeed.</p>
                        </div>

                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-18">Insights for <br />smarter <span className="text-[#6044da]">{" "}learning</span></h1>
                        <p className="text-gray-600 text-base sm:text-lg xl:text-xl leading-8 max-w-2xl">Discover expert insights, study tips, AI trends, and career advice to accelerate your learning journey.</p>

                        <div className="relative w-full max-w-2xl">
                            <Search size={20} color="#9ca3af" className="absolute left-5 top-1/2 -translate-y-1/2" />

                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search blogs..." className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 outline-none bg-white focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 transition-all" />
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2 flex justify-center">
                        <img src={blog} alt="Learnify AI blogs illustration" className="h-52 sm:h-64 md:h-72 xl:h-90 object-contain" />
                    </div>
                </div>
            </div>

            <div className="w-full px-5 sm:px-10 xl:px-20 py-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
                {blogCategories.map((category) => (
                    <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category ? "bg-[#6044da] text-white" : "bg-purple-100 text-[#6044da]"}`}>
                        {category}
                    </button>
                )
                )}
            </div>

            <div className="w-full px-5 sm:px-10 xl:px-20 pb-10 flex flex-col xl:flex-row gap-10">
                <div className="w-full xl:w-7/9">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog) => (
                            <div key={blog.id} className="border border-gray-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white flex flex-col h-full">
                                <img src={blog.image} alt={blog.title} className="h-55 w-full object-cover" />

                                <div className="p-5 flex flex-col flex-1 gap-4">
                                    <div className="flex justify-between items-center">
                                        <div className="bg-purple-100 text-[#6044da] text-xs font-bold uppercase px-3 py-1 rounded-full">
                                            {blog.category}
                                        </div>

                                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                                            <Clock3 size={14} />
                                            {blog.readTime}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-bold text-xl leading-8 mb-3">{blog.title}</h3>
                                        <p className="text-gray-600">{blog.description}</p>
                                    </div>

                                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-auto">
                                        <div className="flex gap-3 items-center">
                                            <img src={blog.authorImage} alt={blog.author} className="h-10 w-10 rounded-full object-cover" />

                                            <div>
                                                <p className="font-semibold text-sm">{blog.author}</p>

                                                <div className="flex gap-1 items-center text-gray-500 text-xs">
                                                    <Calendar size={12} />
                                                    {blog.date}
                                                </div>
                                            </div>
                                        </div>

                                        <button className="flex gap-2 items-center text-[#6044da] font-semibold hover:gap-3 transition-all duration-300">
                                            Read
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No blogs found for your search.
                        </div>
                    )}
                </div>

                <div className="w-full xl:w-2/9 flex flex-col gap-8">
                    <div className="border border-gray-300 rounded-2xl p-5">
                        <div className="flex gap-2 items-center mb-5">
                            <Flame color="#6044da" size={20} strokeWidth={3} />

                            <h3 className="font-bold text-xl">Popular Posts</h3>
                        </div>

                        <div className="flex flex-col gap-5">
                            {popularPosts.map((post) => (
                                <div key={post.title} className="flex gap-4 items-center">
                                    <img src={post.image} alt={post.title} className="h-16 w-16 sm:h-18 sm:w-18 rounded-xl object-cover shrink-0" />

                                    <div className="flex flex-col justify-between">
                                        <h4 className="font-semibold text-sm leading-6">{post.title}</h4>
                                        <p className="text-xs text-gray-500">{post.date}</p>
                                    </div>
                                </div>
                            )
                            )}
                        </div>
                    </div>

                    <div className="bg-[#6044da] rounded-2xl p-6 text-white flex flex-col gap-5">
                        <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">
                            <Pen size={28} strokeWidth={3} />
                        </div>

                        <h3 className="font-bold text-2xl">Write for Learnify</h3>
                        <p className="text-purple-100">Share your insights and experiences with learners worldwide.</p>

                        <button className="bg-white text-[#6044da] font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
                            Become a Contributor
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full px-5 sm:px-10 xl:px-20 pb-15">
                <div className="bg-purple-100 rounded-3xl px-5 sm:px-10 xl:px-15 py-12 flex flex-col items-center gap-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center">Never miss an update</h2>
                    <p className="text-gray-600 text-center max-w-2xl">Subscribe to our newsletter and get the latest blogs, AI insights, and learning tips delivered to your inbox.</p>

                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 rounded-xl border border-gray-300 outline-none bg-white focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20" />
                        <button type="submit" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6044da] text-white font-semibold hover:bg-[#5338d4] transition-all duration-300">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Blogs;