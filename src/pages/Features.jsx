import { Sparkles, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import girl from "../assets/girl.png";
import { featuresData } from "../data/shared/featuresData";
import { readyStatsData } from "../data/shared/readyStatsData";
import { featureSecurityData } from "../data/features/featureSecurityData";

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);

    return (
        <section className="flex flex-col pb-5 pt-30">
            <div className="flex flex-col xl:flex-row justify-between px-5 sm:px-10 xl:px-20 py-5 gap-12 xl:gap-15 min-h-75 xl:h-125">
                <div className="w-full xl:w-4/9 flex flex-col gap-5 text-center xl:text-left">
                    <div className="flex gap-2 bg-purple-200 px-4 py-1 rounded-full w-fit mx-auto xl:mx-0">
                        <Sparkles color="#6044da" size={16} />

                        <p className="uppercase text-sm text-[#6044da] font-semibold">Features</p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-18">Powerful features <br />built for{" "} <span className="text-[#6044da]">smarter learning</span></h1>
                    <p className="text-gray-600 text-base sm:text-lg xl:text-xl leading-7">Learnify AI combines the power of artificial intelligence with personalized learning to help you learn smarter, stay motivated, and achieve your goals.</p>
                </div>

                <div className="w-full xl:w-5/9 flex justify-center">
                    <div className="relative w-full max-w-150 h-125 sm:h-100 xl:h-full flex justify-center items-end">
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

                        <img src={girl} alt="Student learning" className="absolute bottom-24 sm:bottom-28 xl:bottom-0 left-1/2 -translate-x-1/2 h-52 sm:h-64 xl:h-80 object-contain z-20" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 px-5 sm:px-10 xl:px-20 pb-5">
                <h3 className="text-2xl font-bold text-center">Explore our core features</h3>
                <p className="text-center text-gray-600">Everything you need to personalize, track, and elevate your learning journey.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 w-full">
                    {featuresData.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div key={feature.title} className="min-h-60 flex flex-col justify-between border border-gray-200 rounded-xl p-4">
                                <div className="flex flex-col gap-2">
                                    <div className={`h-15 w-15 rounded-3xl ${feature.bgColor} flex justify-center items-center`}>
                                        <Icon color={feature.iconColor} size={28} />
                                    </div>

                                    <h4 className="font-semibold">{feature.title}</h4>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>

                                <button onClick={() => setSelectedFeature(feature)} className="flex gap-2 mt-4 items-center text-[#6044da] font-semibold text-sm cursor-pointer hover:gap-3 transition-all duration-300">
                                    Learn more
                                    <ArrowRight color="#6044da" size={16} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20 pt-5 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-purple-50 border border-purple-200 rounded-xl py-4">
                    {featureSecurityData.map(
                        (item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.title} className={`w-full flex gap-5 px-8 py-5 ${index !== featureSecurityData.length - 1 ? "xl:border-r border-purple-200" : ""}`}>
                                    <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-purple-100 rounded-2xl">
                                        <Icon color="#6044da" size={50} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>

            {selectedFeature && (
                <div className="fixed inset-0 bg-black/50 z-100 flex items-center justify-center p-5">
                    <div className="bg-white rounded-3xl max-w-xl w-full p-8 relative shadow-2xl">
                        <button onClick={() => setSelectedFeature(null)} className="absolute top-5 right-5 text-gray-500 hover:text-black transition-all">
                            <X size={24} />
                        </button>

                        <div className={`h-18 w-18 rounded-3xl ${selectedFeature.bgColor} flex justify-center items-center mb-5`}>
                            <selectedFeature.icon color={selectedFeature.iconColor} size={36} />
                        </div>

                        <h2 className="text-3xl font-bold mb-4">{selectedFeature.title}</h2>
                        <p className="text-gray-600 leading-8">{selectedFeature.details}</p>

                        <button onClick={() => setSelectedFeature(null)} className="mt-8 bg-[#6044da] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#5037c0] transition-all">
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Features;