import Hero from "../components/privacy/Hero";
import TableOfContents from "../components/privacy/TableOfContents";
import PolicySections from "../components/privacy/PolicySections";
import ContactBanner from "../components/privacy/ContactBanner";

const PrivacyPolicy = () => {
    return (
        <main>
            <Hero />

            <section className="flex flex-col gap-8 px-4 py-5 sm:px-8 lg:px-12 lg:flex-row xl:gap-10 xl:px-20">
                <TableOfContents />
                <PolicySections />
            </section>

            <ContactBanner />
        </main>
    );
};

export default PrivacyPolicy;