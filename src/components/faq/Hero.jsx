import SectionHeader from "../common/SectionHeader";
import SearchBar from "./SearchBar";
import QuickHelp from "./QuickHelp";

const Hero = () => {
    return (
        <section className="w-full bg-purple-100 px-4 sm:px-8 lg:px-12 xl:px-20 py-8 sm:py-10">
            <div className="flex flex-col items-center gap-10">
                <SectionHeader title={
                    <>
                        Frequently Asked{" "}
                        <span className="text-[#6044da]">Questions</span>
                    </>
                }
                    description="Find answers to the most common questions about Learnify AI."
                    align="center" />

                <SearchBar />
                <QuickHelp />
            </div>
        </section>
    );
};

export default Hero;