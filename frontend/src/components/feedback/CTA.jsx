import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTAIllustration from "./CTAIllustration";
import { ROUTES } from "../../data/routes";

const CTA = () => {
    return (
        <section className="px-4 pb-10 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-gray-200 bg-purple-100 p-6 shadow-sm sm:p-8 xl:flex-row xl:px-12">
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                    <CTAIllustration />

                    <div>
                        <h2 className="text-2xl font-bold">Every suggestion makes Learnify AI better.</h2>
                        <p className="mt-2 leading-7 text-gray-700">Thank you for being a valuable part of our learning community. Your ideas help shape the future of Learnify AI.</p>
                    </div>
                </div>

                <Link to={ROUTES.ROADMAP} className="w-full sm:w-auto">
                    <button type="button" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#6044da] px-6 py-3.5 font-semibold text-[#6044da] transition-all duration-300 hover:bg-purple-50 hover:shadow-lg sm:w-auto">
                        View Roadmap
                        <ArrowRight size={18} aria-hidden="true" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default CTA;