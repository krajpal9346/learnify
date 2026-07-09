import Hero from "../components/terms/Hero";
import TableOfContents from "../components/terms/TableOfContents";
import TermsSections from "../components/terms/TermsSections";
import ContactBanner from "../components/terms/ContactBanner";

const TermsOfService = () => {
    return (
        <main>
            <Hero />

            <section className="flex flex-col gap-8 px-4 py-10 sm:px-8 lg:px-12 lg:flex-row xl:gap-10 xl:px-20">
                <TableOfContents />
                <TermsSections />
            </section>

            <ContactBanner />
        </main>
    );
};

export default TermsOfService;