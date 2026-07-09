import BlogCard from "./BlogCard";

const BlogGrid = ({ filteredBlogs }) => {
    return (
        <div className="w-full xl:w-7/9">
            {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 lg:grid-cols-3">
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            ) : (
                <div className="flex h-80 items-center justify-center rounded-3xl border border-dashed border-gray-300">
                    <p className="text-center text-lg text-gray-500">No blogs found for your search.</p>
                </div>
            )}
        </div>
    );
};

export default BlogGrid;