import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import girl from "../../assets/girl.png";
import { ROUTES } from "../../data/routes";
import { readyStatsData } from "../../data/shared/readyStatsData";

const Ready = () => {
    const primaryButtonClass = "cursor-pointer flex items-center justify-center gap-2 bg-white text-[#6044da] px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300";
    const secondaryButtonClass = "cursor-pointer px-5 py-2.5 border border-white/40 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300";

    return (
        <section className="px-5 sm:px-10 xl:px-25 pt-10 xl:pt-15">
            <div className="relative overflow-hidden bg-[#6044da] min-h-90 xl:h-85 rounded-2xl px-6 sm:px-10 xl:px-16 py-10 xl:py-0 flex flex-col xl:flex-row items-center justify-between">
                <div className="flex flex-col justify-center gap-6 w-full xl:w-[42%] text-center xl:text-left z-20">
                    <h1 className="text-3xl sm:text-4xl xl:text-4xl font-bold text-white leading-tight">Ready to accelerate <br />your learning?</h1>
                    <p className="text-base sm:text-lg text-purple-100 leading-relaxed">Join thousands of learners who are <br className="hidden xl:block" />growing every day with Learnify AI.</p>

                    <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 sm:gap-5">
                        <Link to={ROUTES.STARTED}>
                            <button type="button" className={primaryButtonClass}>
                                Get Started for Free
                                <ArrowRight size={18} />
                            </button>
                        </Link>

                        <Link to={ROUTES.FEATURES}>
                            <button type="button" className={secondaryButtonClass}>
                                Explore Features
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full xl:w-[58%] h-105 xl:h-full flex justify-center items-end mt-10 xl:mt-0">
                    {readyStatsData.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div key={stat.title} className={`${stat.position} flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30`}>
                                <Icon size={20} color={stat.iconColor} fill={stat.iconFill} />

                                <div>
                                    <p className="text-[10px] xl:text-xs text-gray-500">{stat.title}</p>
                                    <h1 className="text-lg xl:text-xl font-bold text-gray-900">{stat.value}</h1>
                                    <p className={`text-[10px] xl:text-xs font-semibold ${stat.changeColor}`}>{stat.change}</p>
                                </div>
                            </div>
                        );
                    })}

                    <img src={girl} alt="Student learning" className="absolute bottom-14 sm:bottom-10 xl:bottom-0 left-1/2 -translate-x-1/2 h-56 sm:h-72 xl:h-80 object-contain z-20" />
                </div>
            </div>
        </section>
    );
};

export default Ready;