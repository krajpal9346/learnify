import { BookOpen } from "lucide-react";
import flag from "../../assets/flag.png";
import rocket from "../../assets/rocket.png";
import SectionHeader from "../common/SectionHeader";

const Hero = () => {
    return (
        <section className="px-8 lg:px-12 xl:px-20 py-6">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:text-left">
                <img src={flag} alt="Flag" className="hidden lg:block h-32 xl:h-44 object-contain" />

                <div className="flex flex-col items-center gap-5 text-center lg:items-start">
                    <SectionHeader badge={
                        <>
                            <BookOpen size={16} color="#6044da" strokeWidth={2.75} />
                            <span>Our Journey to Transform Learning</span>
                        </>
                    } title={
                        <>
                            <span className="text-[#6044da]">Learnify AI</span>{" "}
                            Roadmap
                        </>
                    } description={
                        <>
                            We're on a mission to make personalized learning accessible to everyone. <br className="hidden sm:block" />Here's what we've accomplished and what'scoming next.
                        </>
                    }
                        align="left" />
                </div>

                <img src={rocket} alt="Rocket" className="hidden lg:block h-32 xl:h-44 object-contain" />
            </div>
        </section>
    );
};

export default Hero;