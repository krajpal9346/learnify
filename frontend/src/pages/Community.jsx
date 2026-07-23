import { useState } from "react";
import Hero from "../components/community/Hero";
import Stats from "../components/community/Stats";
import TrendingDiscussions from "../components/community/TrendingDiscussions";
import Categories from "../components/community/Categories";
import TopMembers from "../components/community/TopMembers";
import Guidelines from "../components/community/Guidelines";
import CTA from "../components/community/CTA";

const Community = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTopic, setActiveTopic] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    return (
        <main>
            <Hero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeTopic={activeTopic}
                setActiveTopic={setActiveTopic}
                setActiveCategory={setActiveCategory}
            />

            <Stats />

            <section className="px-4 py-10 sm:px-8 lg:px-12 xl:px-20">
                <div className="flex flex-col gap-10 xl:flex-row">
                    <TrendingDiscussions
                        searchQuery={searchQuery}
                        activeTopic={activeTopic}
                        activeCategory={activeCategory}
                        setSearchQuery={setSearchQuery}
                        setActiveTopic={setActiveTopic}
                        setActiveCategory={setActiveCategory}
                    />

                    <Categories
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        setSearchQuery={setSearchQuery}
                        setActiveTopic={setActiveTopic}
                    />
                </div>
            </section>

            <section className="px-4 pb-5 sm:px-8 lg:px-12 xl:px-20">
                <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                    <TopMembers />

                    <Guidelines />
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default Community;