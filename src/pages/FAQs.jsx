import { useState } from "react";
import Hero from "../components/faq/Hero";
import Categories from "../components/faq/Categories";
import FAQAccordion from "../components/faq/FAQAccordion";
import CTA from "../components/faq/CTA";

const FAQs = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [openQuestion, setOpenQuestion] = useState(0);

    return (
        <main className="pt-20">
            <Hero />

            <section className="px-5 py-10 sm:px-10 xl:px-20 xl:py-15">
                <div className="mb-10">
                    <h2 className="text-center text-2xl font-bold sm:text-3xl">Browse by category or popular questions</h2>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row">
                    <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setOpenQuestion={setOpenQuestion} />
                    <FAQAccordion selectedCategory={selectedCategory} openQuestion={openQuestion} setOpenQuestion={setOpenQuestion} />
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default FAQs;