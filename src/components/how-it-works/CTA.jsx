import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import laptop from "../../assets/laptop.png";
import { ROUTES } from "../../data/routes";

const CTA = () => {
    const primaryButtonClass = "flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#6044da] px-5 lg:px-6 xl:px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5136d4]";
    const secondaryButtonClass = "flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50";

    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 pb-12">
            <div className="flex flex-col-reverse items-center justify-between xl:gap-10 rounded-2xl border border-purple-200 bg-purple-100 px-6 sm:px-10 xl:flex-row pb-8 xl:pb-0">
                <div className="flex w-full flex-col gap-5 text-center xl:w-1/2 xl:text-left">
                    <h2 className="text-2xl font-bold sm:text-3xl">Ready to start your personalized learning journey?</h2>
                    <p className="text-gray-700">Join thousands of learners who are already growing with Learnify AI.</p>

                    <div className="flex flex-col gap-4 sm:flex-row xl:justify-start justify-center">
                        <Link to={ROUTES.STARTED} className="w-full sm:w-auto">
                            <button type="button" className={primaryButtonClass}>
                                Get Started for Free
                                <ArrowRight size={16} color="#ffffff" aria-hidden="true" />
                            </button>
                        </Link>

                        <button type="button" className={secondaryButtonClass}>
                            <PlayCircle size={18} color="#6044da" aria-hidden="true" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="flex w-full justify-center xl:w-1/2">
                    <img src={laptop} alt="Learnify AI dashboard preview" className="w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md xl:max-w-lg scale-140" />
                </div>
            </div>
        </section>
    );
};

export default CTA;