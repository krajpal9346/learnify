import girl from "../../assets/girl.png";
import { readyStatsData } from "../../data/shared/readyStatsData";

const CTAIllustration = () => {
    return (
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
    );
};

export default CTAIllustration;