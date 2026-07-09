import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTAIllustration from "./CTAIllustration";
import { ROUTES } from "../../data/routes";

const CTA = () => {
    const buttonClass = "flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#6044da] px-5 lg:px-6 xl:px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5137c9]";

    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-5">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10 lg:gap-14 rounded-3xl bg-[#6044da] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-10 lg:py-8 overflow-hidden">
                <div className="w-full xl:w-4/9 flex flex-col gap-6 items-center xl:items-start xl:text-left">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Ready to accelerate <br />your learning?</h2>
                    <p className="text-base leading-relaxed text-purple-100 sm:text-lg">Join thousands of learners who are growing every day with Learnify AI.</p>

                    <Link to={ROUTES.STARTED} className="w-full sm:w-auto">
                        <button type="button" className={buttonClass}>
                            Get Started for Free
                            <ArrowRight size={18} aria-hidden="true" />
                        </button>
                    </Link>
                </div>

                <CTAIllustration />
            </div>
        </section>
    );
};

export default CTA;