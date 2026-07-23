import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import girl from "../../assets/girl.png";
import { ROUTES } from "../../data/routes";
import { readyStatsData } from "../../data/shared/readyStatsData";

const Ready = () => {
    const primaryButtonClass = "flex items-center justify-center gap-2 bg-white text-[#6044da] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300";
    const secondaryButtonClass = "px-6 py-3 border border-white/40 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300";

    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10 lg:gap-14 rounded-3xl bg-[#6044da] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-10 lg:py-8 overflow-hidden">
                <div className="w-full xl:w-4/9 flex flex-col gap-6 text-center items-center xl:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white leading-tight">Ready to accelerate <br />your learning?</h2>
                    <p className="text-purple-100 text-base text-center sm:text-lg leading-7">Join thousands of learners who are growing every day with Learnify AI.</p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                        <Link to={ROUTES.STARTED} className="w-full sm:w-auto">
                            <button type="button" className={primaryButtonClass}>
                                Get Started for Free
                                <ArrowRight size={18} />
                            </button>
                        </Link>

                        <Link to={ROUTES.FEATURES} className="w-full sm:w-auto">
                            <button type="button" className={secondaryButtonClass}>Explore Features</button>
                        </Link>
                    </div>
                </div>

                <div className="w-full xl:w-5/9 flex justify-center">
                    <div className="relative w-full max-w-175 h-110 md:h-110 lg:h-120 xl:h-100">
                        <img src={girl} alt="Student learning" className="absolute bottom-25 left-1/2 -translate-x-1/2 w-100 md:w-110 xl:w-100 object-contain z-20" />

                        {readyStatsData.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <div key={stat.title} className={`${stat.position} absolute z-30 flex items-center gap-2 sm:gap-3 w-32.5 sm:w-41.25 md:w-46.25 lg:w-52.5 xl:w-55 rounded-2xl bg-white px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl`}>
                                    <Icon size={20} color={stat.iconColor} fill={stat.iconFill} />

                                    <div>
                                        <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500">{stat.title}</p>
                                        <h3 className="text-sm sm:text-lg md:text-xl font-bold">{stat.value}</h3>
                                        <p className={`text-[9px] sm:text-[10px] md:text-xs font-semibold ${stat.changeColor}`}>{stat.change}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ready;