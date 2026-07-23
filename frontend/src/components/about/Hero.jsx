import { ExternalLink, NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-purple-50 px-4 sm:px-8 lg:px-12 xl:px-20 py-10">
            <div className="flex flex-col items-center gap-10 lg:flex-row xl:gap-16">
                <div className="flex w-full flex-col justify-center gap-6 text-center lg:w-2/3 xl:text-left">
                    <div className="flex justify-center xl:justify-start">
                        <div className="w-fit rounded-full bg-purple-200 px-4 py-2">
                            <p className="text-sm font-semibold text-[#6044da]">About Us</p>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">Empowering learners with AI,for a better{" "}<span className="text-[#6044da]">tomorrow</span></h1>
                    <p className="text-sm leading-7 text-gray-600 sm:text-base">Learnify AI is built to make learning smarter, personalized, and accessible for everyone. Our AI-powered recommendations help you learn the right skills, at the right time, in the right way.</p>

                    <div className="flex justify-center xl:justify-start">
                        <Link to="/started">
                            <button type="button" className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#6044da] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5137c9] hover:shadow-lg">
                                Get Started Today
                                <ExternalLink size={18} aria-hidden="true" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center lg:w-1/3">
                    <div className="flex min-h-50 items-center justify-center">
                        <NotebookPen size={180} color="#6044da" strokeWidth={1.75} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;