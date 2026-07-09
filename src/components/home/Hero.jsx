import { Sparkles, ArrowRight, Play, Lightbulb, Star } from "lucide-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../data/routes";
import { heroCardsData } from "../../data/home/heroCardsData";
import { learnerAvatarsData } from "../../data/home/learnerAvatarsData";
import { trustedCompaniesData } from "../../data/home/trustedCompaniesData";

const Hero = () => {
    const progressStyles = {
        path: { stroke: "#6044da", strokeLinecap: "round" },
        trail: { stroke: "#ede9fe" },
        text: { fill: "#10123a", fontSize: "20px", fontWeight: "600" }
    };

    const cardClass = "flex flex-col gap-3 w-full max-w-[250px] bg-white border border-gray-300 rounded-3xl p-5 shadow-sm";
    const primaryButtonClass = "flex justify-center items-center gap-2 w-full sm:w-auto bg-[#6044da] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5136d4] transition-all duration-300";
    const secondaryButtonClass = "flex justify-center items-center gap-2 w-full sm:w-auto border border-[#6044da] text-[#6044da] px-6 py-3 rounded-lg font-semibold hover:bg-[#6044da] hover:text-white transition-all duration-300";

    return (
        <section className="bg-[#f5f2ff] overflow-hidden pt-28 lg:pt-32 pb-12 px-5 sm:px-8 lg:px-10 xl:px-24">
            <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between items-center gap-14">
                <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-6 max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-purple-200 text-[#6044da] font-semibold text-sm px-5 py-2 rounded-full">
                        <Sparkles size={16} />
                        AI-powered. Personalised. Progress-Driven
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">Learn Smarter. <br />Grow Faster. <br /><span className="text-[#6044da]">Achieve More.</span></h1>
                    <p className="text-gray-600 text-base leading-7 max-w-xl">Learnify AI recommends the right courses, resources and projects based on your skills, goals and interests. <br />Your personalized learning journey starts here.</p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to={ROUTES.STARTED} className="w-full sm:w-auto">
                            <button type="button" className={primaryButtonClass}>
                                Get Started for Free
                                <ArrowRight size={18} />
                            </button>
                        </Link>

                        <Link to={ROUTES.HOW_IT_WORKS} className="w-full sm:w-auto">
                            <button type="button" className={secondaryButtonClass}>
                                <Play size={18} />
                                See How It Works
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full xl:w-auto">
                    <div className="flex flex-col gap-8 lg:gap-14">
                        {[heroCardsData[0], heroCardsData[1]].map(
                            (card) => {
                                const Icon = card.icon;

                                return (
                                    <div key={card.title} className={cardClass}>
                                        <div className="h-12 w-12 rounded-full flex justify-center items-center" style={{ backgroundColor: card.iconBg, }}>
                                            <Icon size={22} color="#fff" />
                                        </div>

                                        <h3 className="font-semibold text-lg">{card.title}</h3>
                                        <p className="text-sm text-gray-600">{card.description}</p>
                                    </div>
                                );
                            }
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-5">
                        <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow">
                            <Lightbulb size={24} color="#6044da" />
                        </div>

                        <div className="w-full max-w-sm bg-white rounded-3xl p-6 flex flex-col items-center gap-5 shadow-sm">
                            <h3 className="font-semibold text-lg">Your Learning Journey</h3>

                            <div className="w-36 h-36 sm:w-40 sm:h-40">
                                <CircularProgressbar value={72} text="72%" styles={progressStyles} />
                            </div>

                            <p className="text-sm text-gray-600">Keep it up! You're doing great.</p>
                        </div>

                        <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center shadow">
                            <Sparkles size={24} color="#6044da" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 lg:gap-14">
                        {[heroCardsData[2], heroCardsData[3]].map(
                            (card) => {
                                const Icon = card.icon;

                                return (
                                    <div key={card.title} className={cardClass}>
                                        <div className="h-12 w-12 rounded-full flex justify-center items-center" style={{ backgroundColor: card.iconBg, }}>
                                            <Icon size={22} color="#fff" />
                                        </div>

                                        <h3 className="font-semibold text-lg">{card.title}</h3>
                                        <p className="text-sm text-gray-600">{card.description}</p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-14 flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                    <div className="flex -space-x-3">
                        {learnerAvatarsData.map((avatar) => (
                            <img key={avatar.id} src={avatar.image} alt="Learner" loading="lazy" className="h-10 w-10 rounded-full object-cover border-2 border-white" />
                        ))}
                    </div>

                    <div>
                        <div className="flex gap-1 justify-center sm:justify-start">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} size={16} fill="#f9911a" color="#f9911a" />
                            ))}
                        </div>

                        <p className="text-sm text-gray-600">Loved by 10,000+ learners worldwide</p>
                    </div>
                </div>

                <div className="text-center text-gray-700">
                    Trusted by learners from top companies and universities.
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    {trustedCompaniesData.map((company) => (
                        <img key={company.name} src={company.image} alt={company.name} loading="lazy" className={company.className} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;