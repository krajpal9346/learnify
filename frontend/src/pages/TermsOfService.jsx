import { useEffect, useState } from "react";
import Hero from "../components/terms/Hero";
import TableOfContents from "../components/terms/TableOfContents";
import TermsSections from "../components/terms/TermsSections";
import ContactBanner from "../components/terms/ContactBanner";
import { termsOfServiceData } from "../data/terms/termsOfServiceData";

const TermsOfService = () => {
    const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;
            let currentSection = termsOfServiceData[0].id;

            for (const term of termsOfServiceData) {
                const element = document.getElementById(`term-${term.id}`);
                if (!element) continue;
                if (scrollPosition >= element.offsetTop) { currentSection = term.id }
            }

            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main>
            <Hero />

            <section className="flex flex-col gap-8 px-4 py-10 sm:px-8 lg:flex-row lg:px-12 xl:gap-10 xl:px-20">
                <TableOfContents activeSection={activeSection} />
                <TermsSections activeSection={activeSection} />
            </section>

            <ContactBanner />
        </main>
    );
};

export default TermsOfService;