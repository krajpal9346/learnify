import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../data/routes";
import Illustration from "./Illustration";

const CTA = () => {
    const primaryButtonClass = "flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#6044da] px-5 lg:px-6 xl:px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5136d4]";
    const secondaryButtonClass = "flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#6044da] bg-white px-5 py-3 font-semibold text-[#6044da] transition-all duration-300 hover:bg-purple-50";

    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 pb-12">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10 overflow-hidden rounded-2xl bg-purple-100 px-6 py-8 sm:px-10 xl:px-16">
                <div className="flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left xl:flex-1">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white">
                        <Sparkles size={40} color="#6044da" strokeWidth={2.5} aria-hidden="true" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-bold sm:text-3xl">The best learning experience is yet to come</h2>
                        <p className="text-gray-700">We're building the future of personalized learning with AI at the core. <br className="hidden sm:block" />Join us on this journey!</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to={ROUTES.STARTED} className="w-full sm:w-auto">
                                <button type="button" className={primaryButtonClass}>
                                    Get Started for Free
                                    <ArrowRight size={16} color="#ffffff" aria-hidden="true" />
                                </button>
                            </Link>

                            <button type="button" className={secondaryButtonClass}>
                                <Mail size={18} color="#6044da" aria-hidden="true" />
                                Join the Waitlist
                            </button>
                        </div>
                    </div>
                </div>

                <Illustration />
            </div>
        </section>
    );
};

export default CTA;