import SectionHeader from "../common/SectionHeader";
import NewsletterForm from "./NewsletterForm";

const Newsletter = ({ handleNewsletterSubmit }) => {
    return (
        <section className="px-4 pb-14 sm:px-8 lg:px-12 xl:px-20">
            <div className="rounded-3xl bg-purple-100 px-5 py-10 sm:px-8 lg:px-10 xl:px-14 xl:py-12">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
                    <SectionHeader title="Never miss an update" description="Subscribe to our newsletter and receive the latest blogs, AI insights, study tips, and product updates directly in your inbox." align="center" />
                    <NewsletterForm handleNewsletterSubmit={handleNewsletterSubmit} />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;