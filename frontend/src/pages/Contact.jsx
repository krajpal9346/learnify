import Hero from "../components/contact/Hero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import FAQ from "../components/contact/FAQ";
import CTA from "../components/contact/CTA";

const Contact = () => {
    return (
        <main>
            <Hero />

            <section className="px-4 py-12 sm:px-8 lg:px-12 xl:px-20">
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                    <div className="xl:col-span-2">
                        <ContactForm />
                    </div>

                    <div className="xl:col-span-1">
                        <ContactInfo />
                    </div>
                </div>
            </section>

            <FAQ />

            <CTA />
        </main>
    );
};

export default Contact;