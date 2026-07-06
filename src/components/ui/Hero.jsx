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

    const cardClass = "flex flex-col gap-2 w-full sm:w-64 xl:w-50 bg-white border border-gray-300 rounded-3xl p-5";
    const primaryButtonClass = "flex justify-center gap-2 items-center w-full sm:w-auto cursor-pointer bg-[#6044da] text-white px-5 xl:px-7 py-2 rounded-lg font-semibold hover:bg-[#5136d4] transition-all duration-300";
    const secondaryButtonClass = "flex justify-center gap-2 items-center w-full sm:w-auto cursor-pointer border border-[#6044da] text-[#6044da] px-5 xl:px-7 py-2 rounded-lg font-semibold hover:bg-[#6044da] hover:text-white transition-all duration-300";

    return (
        <section className="flex flex-col gap-10 bg-[#f5f2ff] justify-between items-center pb-5 pt-28 lg:pt-30 px-4 sm:px-6 md:px-10 xl:px-25 overflow-hidden">
            <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-12 xl:gap-10 w-full max-w-[1600px]">
                <div className="flex flex-col justify-center items-center xl:items-start gap-5 text-center xl:text-left max-w-2xl">
                    <p className="bg-purple-200 flex items-center justify-center text-sm gap-2 font-semibold text-[#6044da] px-5 py-1 rounded-full">
                        <Sparkles size={16} color="#6044da" aria-hidden="true" />
                        AI-powered. Personalised. Progress-Driven
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">Learn Smarter. <br />Grow Faster. <br /><span className="text-[#6044da]">Achieve More.</span></h1>
                    <p className="text-sm sm:text-base max-w-xl">Learnify AI recommends the right courses, resources and projects based on your skills, goals and interests. <br />Your personalized learning journey starts here.</p>

                    <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-8 xl:gap-15 justify-center xl:justify-start">
                        <Link to={ROUTES.STARTED} className="w-full sm:w-auto">
                            <button type="button" className={primaryButtonClass}>
                                Get Started for Free
                                <ArrowRight size={16} color="#ffffff" aria-hidden="true" />
                            </button>
                        </Link>

                        <Link to={ROUTES.HOW_IT_WORKS} className="w-full sm:w-auto">
                            <button type="button" className={secondaryButtonClass}>
                                <Play size={16} aria-hidden="true" />
                                See How It Works
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-center w-full xl:w-auto">
                    <div className="flex flex-col gap-8 xl:gap-20 w-full sm:w-auto">
                        {[heroCardsData[0], heroCardsData[1]].map((card) => {
                            const Icon = card.icon;

                            return (
                                <div key={card.title} className={cardClass}>
                                    <div className="flex justify-center items-center h-10 w-10 rounded-full" style={{ backgroundColor: card.iconBg }}>
                                        <Icon size={20} color="#ffffff" aria-hidden="true" />
                                    </div>

                                    <h3 className="font-semibold">{card.title}</h3>
                                    <p className="text-sm text-gray-600">{card.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col items-center justify-between gap-5 xl:gap-5">
                        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <Lightbulb size={24} color="#6044da" aria-hidden="true" />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-5 w-full sm:w-80 xl:w-70 max-w-sm bg-white rounded-3xl p-5">
                            <h3 className="font-semibold">Your Learning Journey</h3>

                            <div className="w-32 h-32 sm:w-40 sm:h-40">
                                <CircularProgressbar value={72} text="72%" styles={progressStyles} />
                            </div>

                            <p className="text-sm text-gray-600">Keep it up! You're doing great.</p>
                        </div>

                        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <Sparkles size={24} color="#6044da" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 xl:gap-20 w-full sm:w-auto">
                        {[heroCardsData[2], heroCardsData[3]].map((card) => {
                            const Icon = card.icon;

                            return (
                                <div key={card.title} className={cardClass}>
                                    <div className="flex justify-center items-center h-10 w-10 rounded-full" style={{ backgroundColor: card.iconBg }}>
                                        <Icon size={20} color="#ffffff" aria-hidden="true" />
                                    </div>

                                    <h3 className="font-semibold">{card.title}</h3>
                                    <p className="text-sm text-gray-600">{card.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-center">
                    <div className="flex -space-x-3">
                        {learnerAvatarsData.map((avatar) => (
                            <img key={avatar.id} loading="lazy" className="h-10 w-10 rounded-full object-cover" src={avatar.image} alt="Learner profile" />
                        ))}
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} size={16} color="#f9911a" fill="#f9911a" />
                            ))}
                        </div>

                        <p className="text-xs text-gray-600">Loved by 10,000+ learners worldwide</p>
                    </div>
                </div>

                <div className="w-full text-center">
                    <p className="text-sm text-gray-700">Trusted by learners from top companies and universities.</p>
                </div>

                <div className="flex flex-wrap justify-center xl:justify-evenly gap-6 sm:gap-8 w-full items-center">
                    {trustedCompaniesData.map((company) => (
                        <img key={company.name} loading="lazy" className={company.className} src={company.image} alt={company.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;