import { useMemo, useState } from "react";
import Hero from "../components/blogs/Hero";
import CategoryFilter from "../components/blogs/CategoryFilter";
import BlogGrid from "../components/blogs/BlogGrid";
import Sidebar from "../components/blogs/Sidebar";
import Newsletter from "../components/blogs/Newsletter";
import { blogsData } from "../data/blogs/blogsData";

const Blogs = () => {
    const [activeCategory, setActiveCategory] = useState("All Blogs");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBlogs = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();

        return blogsData.filter((blog) => {
            const matchesCategory = activeCategory === "All Blogs" || blog.category === activeCategory;

            const matchesSearch = search === "" ||
                blog.title.toLowerCase().includes(search) ||
                blog.description.toLowerCase().includes(search) ||
                blog.category.toLowerCase().includes(search) ||
                blog.author.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const handleNewsletterSubmit = (email) => {
        console.log("Newsletter subscription:", email);
    };

    return (
        <main>
            <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <section className="flex flex-col gap-10 px-4 pb-10 sm:px-8 lg:px-12 xl:flex-row xl:px-20">
                <BlogGrid filteredBlogs={filteredBlogs} />
                <Sidebar />
            </section>

            <Newsletter handleNewsletterSubmit={handleNewsletterSubmit} />
        </main>
    );
};

export default Blogs;