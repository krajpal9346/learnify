import { Settings } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const Hero = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 pt-28 pb-8">
            <div className="flex justify-center">
                <SectionHeader badge={
                    <>
                        <Settings size={16} color="#6044da" strokeWidth={2.75} aria-hidden="true" />
                        <span>Simple. Smart. Personalized.</span>
                    </>
                } title={
                    <>
                        How{" "}<span className="text-[#6044da]">Learnify AI</span>{" "}Works
                    </>
                }
                    description="Our AI analyzes your profile, understands your goals, and recommends the perfect learning path just for you."
                    align="center" />
            </div>
        </section>
    );
};

export default Hero;