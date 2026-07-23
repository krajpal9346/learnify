import Hero from "../components/testimonials/Hero";
import Stats from "../components/testimonials/Stats";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";
import Journey from "../components/testimonials/Journey";
import CommunityBanner from "../components/testimonials/CommunityBanner";
import CTA from "../components/testimonials/CTA";

const Testimonials = () => {
    return (
        <main className="mb-10 overflow-hidden">
            <Hero />
            <Stats />
            <TestimonialsGrid />
            <Journey />
            <CommunityBanner />
            <CTA />
        </main>
    );
};

export default Testimonials;