import { Users } from "lucide-react";
import community from "../../assets/girl.png";
import SectionHeader from "../common/SectionHeader";
import SearchBar from "./SearchBar";
import PopularTopics from "./PopularTopics";

const Hero = ({
    searchQuery,
    setSearchQuery,
    activeTopic,
    setActiveTopic,
    setActiveCategory,
}) => {
    return (
        <section className="bg-purple-50 px-4 pb-16 pt-28 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center justify-between gap-12 xl:flex-row xl:gap-16">
                <div className="flex w-full flex-col items-center gap-8 text-center xl:w-1/2 xl:items-start xl:text-left">
                    <SectionHeader
                        badge={
                            <>
                                <Users
                                    size={16}
                                    color="#6044da"
                                    strokeWidth={2.75}
                                    aria-hidden="true"
                                />

                                <span>Join the Learnify Community</span>
                            </>
                        }
                        title={
                            <>
                                Learn Together.
                                <br />
                                <span className="text-[#6044da]">
                                    Grow Together.
                                </span>
                            </>
                        }
                        description="Join thousands of learners, developers, mentors, and AI enthusiasts. Ask questions, share knowledge, showcase projects, collaborate with others, and become part of a thriving learning community."
                        align="left"
                    />

                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setActiveTopic={setActiveTopic}
                        setActiveCategory={setActiveCategory}
                    />

                    <PopularTopics
                        activeTopic={activeTopic}
                        setActiveTopic={setActiveTopic}
                        setSearchQuery={setSearchQuery}
                        setActiveCategory={setActiveCategory}
                    />
                </div>

                <div className="flex w-full justify-center xl:w-1/2">
                    <img
                        src={community}
                        alt="Learnify Community"
                        className="h-72 object-contain sm:h-80 lg:h-105"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;