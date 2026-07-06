import { Settings, ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import laptop from "../assets/laptop.png";
import { ROUTES } from "../data/routes";
import { howItWorksData } from "../data/how-it-works/howItWorksData";
import { howItWorksBenefitsData } from "../data/how-it-works/howItWorksBenefitsData";

const HowItWorks = () => {
    const primaryButtonClass = "flex justify-center gap-2 items-center w-full sm:w-auto cursor-pointer bg-[#6044da] text-white px-5 xl:px-7 py-2 rounded-lg font-semibold hover:bg-[#5136d4] transition-all duration-300";
    const secondaryButtonClass = "bg-white flex gap-2 justify-center items-center px-5 py-2 text-gray-700 border border-gray-300 font-semibold rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-300";

    return (
        <section className="flex flex-col items-center gap-5 px-5 sm:px-10 xl:px-20 pt-30 pb-10">
            <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                <div className="flex items-center justify-center">
                    <Settings size={16} color="#6044da" strokeWidth={2.75} />
                </div>

                <p className="font-semibold text-[#6044da] text-sm sm:text-base">Simple. Smart. Personalized.</p>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center">How{" "} <span className="text-[#6044da]">Learnify AI</span>{" "}Works</h1>
            <p className="text-gray-600 text-center text-sm sm:text-base">Our AI analyzes your profile, understands your goals, <br className="hidden sm:block" />and recommends the perfect learning path just for you.</p>

            <div className="flex flex-col xl:flex-row w-full justify-between items-center gap-8 xl:gap-0 py-2 mt-5">
                {howItWorksData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.step} className="flex flex-col xl:flex-row items-center">
                            <div className="w-full sm:w-80 xl:w-50 flex flex-col items-center gap-3">
                                <div className="flex items-center justify-center h-10 w-10 font-semibold text-lg rounded-full bg-[#6044da] text-white">
                                    {item.step}
                                </div>

                                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-white border border-gray-200">
                                    <Icon color="#6044da" size={55} />
                                </div>

                                <h5 className="text-center text-lg font-semibold">{item.title}</h5>
                                <p className="text-center text-gray-600 text-sm sm:text-base">{item.description}</p>
                            </div>

                            {index !== howItWorksData.length - 1 && (
                                <div className="flex items-center justify-center py-2 xl:py-0 xl:px-5">
                                    <ArrowRight className="rotate-90 xl:rotate-0" color="#6044da" size={36} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="py-5 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-purple-100 border border-purple-200 rounded-xl overflow-hidden">
                    {howItWorksBenefitsData.map(
                        (benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <div key={benefit.title} className={`flex gap-5 px-6 py-5 ${index !== howItWorksBenefitsData.length - 1 ? "border-b md:border-r md:border-b xl:border-b-0 border-purple-200" : ""}`}>
                                    <div className={`shrink-0 flex items-center justify-center h-18 w-18 ${benefit.bgColor} rounded-2xl`}>
                                        <Icon color={benefit.iconColor} size={50} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold">{benefit.title}</h3>
                                        <p className="text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-10 bg-purple-100 border border-purple-200 rounded-xl px-6 sm:px-10">
                    <div className="flex flex-col gap-5 text-center xl:text-left xl:w-1/2 pt-10">
                        <h3 className="text-2xl sm:text-3xl font-bold">Ready to start your personalized learning journey?</h3>
                        <p className="text-gray-700">Join thousands of learners who are already growing with Learnify AI.</p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4">
                            <Link to={ROUTES.STARTED} className="w-full sm:w-auto">
                                <button className={primaryButtonClass}>
                                    Get Started for Free
                                    <ArrowRight size={16} color="#ffffff" />
                                </button>
                            </Link>

                            <button className={secondaryButtonClass}>
                                <PlayCircle color="#6044da" size={18} />
                                <p>Watch Demo</p>
                            </button>
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2 flex items-center justify-center">
                        <img className="w-full max-w-sm xl:max-w-md object-contain scale-150" src={laptop} alt="Learnify AI dashboard preview" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;