import { useEffect, useState } from "react";
import Hero from "../components/privacy/Hero";
import TableOfContents from "../components/privacy/TableOfContents";
import PolicySections from "../components/privacy/PolicySections";
import ContactBanner from "../components/privacy/ContactBanner";
import { privacyPolicyData } from "../data/privacy/privacyPolicyData";

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;
            let currentSection = privacyPolicyData[0].id;

            for (const policy of privacyPolicyData) {
                const element = document.getElementById(`policy-${policy.id}`);
                if (!element) continue;
                if (scrollPosition >= element.offsetTop) { currentSection = policy.id }
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

            <section className="flex flex-col gap-8 px-4 py-5 sm:px-8 lg:flex-row lg:px-12 xl:gap-10 xl:px-20">
                <TableOfContents activeSection={activeSection} />
                <PolicySections activeSection={activeSection} />
            </section>

            <ContactBanner />
        </main>
    );
};

export default PrivacyPolicy;