import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import CTAIllustration from "./CTAIllustration";
import { ROUTES } from "../../data/routes";

const CTA = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 pb-10">
            <div className="relative overflow-hidden rounded-2xl bg-[#6044da] px-6 py-10 sm:px-10 xl:flex xl:items-center xl:justify-between xl:px-16 xl:py-0">
                <div className="z-20 flex w-full flex-col justify-center gap-6 text-center xl:flex-1 xl:text-left">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-[42px]">Still have questions?</h2>
                    <p className="text-base leading-relaxed text-purple-100 sm:text-lg">Our support team is always here to help you with anything you need.</p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5 xl:justify-start">
                        <Link to={ROUTES.HELP_CENTER} className="w-full sm:w-auto">
                            <button type="button" className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#6044da] transition-all duration-300 hover:scale-105">
                                Contact Support
                                <ArrowRight size={18} aria-hidden="true" />
                            </button>
                        </Link>

                        <Link to={ROUTES.HELP_CENTER} className="w-full sm:w-auto">
                            <button type="button" className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl border border-white px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10">
                                View Help Center
                                <ExternalLink size={18} aria-hidden="true" />
                            </button>
                        </Link>
                    </div>
                </div>

                <CTAIllustration />
            </div>
        </section>
    );
};

export default CTA;