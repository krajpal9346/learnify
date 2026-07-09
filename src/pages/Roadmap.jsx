import Hero from "../components/roadmap/Hero";
import Timeline from "../components/roadmap/Timeline";
import CTA from "../components/roadmap/CTA";

const Roadmap = () => {
    return (
        <main className="bg-purple-50 pt-30 pb-10">
            <Hero />
            <Timeline />
            <CTA />
        </main>
    );
};

export default Roadmap;