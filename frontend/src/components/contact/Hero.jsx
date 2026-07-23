import { Mail } from "lucide-react";
import contactIllustration from "../../assets/contact.png";
import SectionHeader from "../common/SectionHeader";
import HeroFeatures from "./HeroFeatures";

const Hero = () => {
    return (
        <section className="bg-purple-50 px-4 pb-16 pt-28 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col-reverse items-center gap-14 xl:flex-row xl:gap-20">
                <div className="flex w-full flex-col items-center text-center xl:w-1/2 xl:items-start xl:text-left">
                    <SectionHeader
                        badge={
                            <>
                                <Mail
                                    size={16}
                                    color="#6044da"
                                    strokeWidth={2.75}
                                    aria-hidden="true"
                                />

                                <span>Get in Touch</span>
                            </>
                        }
                        title={
                            <>
                                We'd Love to
                                <br />
                                <span className="text-[#6044da]">
                                    Hear from You!
                                </span>
                            </>
                        }
                        description="Have a question, suggestion, feedback, or need support? Our team is always happy to help. Reach out and we'll get back to you as quickly as possible."
                        align="left"
                    />

                    <HeroFeatures />
                </div>

                <div className="flex w-full justify-center xl:w-1/2">
                    <img
                        src={contactIllustration}
                        alt="Contact Learnify AI"
                        className="h-72 w-full max-w-lg object-contain sm:h-80 lg:h-112"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;