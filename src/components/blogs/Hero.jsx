import { BookOpen } from "lucide-react";
import blog from "../../assets/blog.png";
import SectionHeader from "../common/SectionHeader";
import SearchBar from "./SearchBar";

const Hero = ({ searchTerm, setSearchTerm }) => {
    return (
        <section className="bg-purple-50 px-4 sm:px-8 lg:px-12 xl:px-20 pt-28 pb-10">
            <div className="flex flex-col items-center justify-between gap-10 xl:flex-row xl:gap-12">
                <div className="flex w-full flex-col items-center gap-6 text-center xl:w-1/2 xl:items-start xl:text-left">
                    <SectionHeader badge={
                        <>
                            <BookOpen size={16} color="#6044da" strokeWidth={2.75} aria-hidden="true" />
                            <span>Learn. Grow. Succeed.</span>
                        </>
                    } title={
                        <>
                            Insights for <br /> smarter{" "}<span className="text-[#6044da]">learning</span>
                        </>
                    }
                        description="Discover expert insights, study tips, AI trends and career advice to accelerate your learning journey."
                        align="left"
                    />

                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>

                <div className="flex w-full justify-center xl:w-1/2">
                    <img src={blog} alt="Learnify AI Blogs" className="h-52 object-contain sm:h-64 md:h-72 xl:h-90" />
                </div>
            </div>
        </section>
    );
};

export default Hero;