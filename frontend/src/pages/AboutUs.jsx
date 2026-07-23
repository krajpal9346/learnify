import Hero from "../components/about/Hero";
import Values from "../components/about/Values";
import Stats from "../components/about/Stats";
import Story from "../components/about/Story";
import Team from "../components/about/Team";

const AboutUs = () => {
    return (
        <main className="pt-20">
            <Hero />
            <Values />
            <Stats />
            <Story />
            <Team />
        </main>
    );
};

export default AboutUs;