import { Headphones } from "lucide-react";
import headphones from "../../assets/headphones.png";
import SectionHeader from "../common/SectionHeader";
import SearchBar from "./SearchBar";

const Hero = () => {
    return (
        <section className="bg-purple-100 px-4 pt-24 pb-10 sm:px-8 sm:pt-28 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center gap-8">
                <img src={headphones} alt="Help Center" className="h-28 object-contain sm:h-36 xl:h-40" />

                <SectionHeader badge={
                    <>
                        <Headphones size={16} color="#6044da" strokeWidth={2.75} aria-hidden="true" />
                        <span>Help Center</span>
                    </>
                }
                    title="How can we help you today?"
                    description="Find answers, solve issues, and make the most of Learnify AI."
                    align="center" />

                <SearchBar />
            </div>
        </section>
    );
};

export default Hero;