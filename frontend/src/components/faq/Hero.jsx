import SectionHeader from "../common/SectionHeader";
import SearchBar from "./SearchBar";
import QuickHelp from "./QuickHelp";

const Hero = ({ searchQuery, setSearchQuery, setSelectedCategory, setOpenQuestion, }) => {
    return (
        <section className="w-full bg-purple-100 px-4 py-8 sm:px-8 sm:py-10 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center gap-10">
                <SectionHeader title={
                    <>
                        Frequently Asked{" "}<span className="text-[#6044da]">Questions</span>
                    </>
                }
                    description="Find answers to the most common questions about Learnify AI."
                    align="center" />

                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <QuickHelp setSelectedCategory={setSelectedCategory} setOpenQuestion={setOpenQuestion} setSearchQuery={setSearchQuery} />
            </div>
        </section>
    );
};

export default Hero;