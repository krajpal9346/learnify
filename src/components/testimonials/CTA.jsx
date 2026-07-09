import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTAIllustration from "./CTAIllustration";
import { ROUTES } from "../../data/routes";

const CTA = () => {
    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-5">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10 lg:gap-14 rounded-3xl bg-[#6044da] px-5 sm:px-5 md:px-8 lg:px-10 overflow-hidden">
                <div className="w-full xl:w-4/9 flex flex-col gap-6 text-center items-center xl:text-left">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-[42px]">Ready to write your <br />own success story?</h2>
                    <p className="text-base leading-relaxed text-purple-100 sm:text-lg">Start your personalized learning journey today.</p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5 xl:justify-start">
                        <Link to={ROUTES.STARTED}>
                            <button type="button" className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 font-semibold text-[#6044da] transition-all duration-300 hover:scale-105">
                                Get Started for Free
                                <ArrowRight size={18} />
                            </button>
                        </Link>

                        <button type="button" className="cursor-pointer rounded-xl border border-white/40 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10">
                            Explore Features
                        </button>
                    </div>
                </div>

                <CTAIllustration />
            </div>
        </section>
    );
};

export default CTA;