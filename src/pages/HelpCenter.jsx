import Hero from "../components/help-center/Hero";
import Categories from "../components/help-center/Categories";
import ArticlesSection from "../components/help-center/ArticlesSection";
import Sidebar from "../components/help-center/Sidebar";
import CTA from "../components/help-center/CTA";

const HelpCenter = () => {
    return (
        <main>
            <Hero />
            <Categories />

            <section className="flex flex-col gap-8 px-4 pb-10 sm:px-8 lg:px-12 xl:flex-row xl:gap-10 xl:px-20">
                <ArticlesSection />
                <Sidebar />
            </section>

            <CTA />
        </main>
    );
};

export default HelpCenter;