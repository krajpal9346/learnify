import Hero from "../components/feedback/Hero";
import FeedbackForm from "../components/feedback/FeedbackForm";
import Sidebar from "../components/feedback/Sidebar";
import CTA from "../components/feedback/CTA";

const Feedback = () => {
    return (
        <main>
            <Hero />

            <section className="flex flex-col gap-8 px-4 py-10 sm:px-8 lg:px-12 lg:flex-row xl:gap-10 xl:px-20">
                <FeedbackForm />
                <Sidebar />
            </section>

            <CTA />
        </main>
    );
};

export default Feedback;