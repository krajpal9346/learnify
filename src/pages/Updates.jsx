import Footer from "../components/Footer";
import Header from "../components/Header";

import updates from "../assets/updates.png";

import {
    ArrowRight,
    ChevronDown,
} from "lucide-react";

import { updatesData } from "../data/updatesData";

const Updates = () => {
    return (
        <>
            <Header />

            <main className="flex flex-col items-center">

                {/* Hero Section */}
                <div className="w-full px-5 sm:px-10 xl:px-20 pt-28 xl:pt-32 pb-10 bg-purple-50">

                    <div className="flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-15">

                        {/* Left Content */}
                        <div className="w-full xl:w-4/9 flex flex-col gap-5 xl:px-10 py-5 text-center xl:text-left items-center xl:items-start">

                            <div className="flex gap-2 bg-purple-200 px-4 py-1 rounded-full w-fit">
                                <p className="uppercase text-sm text-[#6044da] font-semibold">
                                    Stay Informed
                                </p>
                            </div>

                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-18">
                                Latest Updates &
                                <br />
                                <span className="text-[#6044da]">
                                    Announcements
                                </span>
                            </h1>

                            <p className="text-gray-600 text-base sm:text-lg xl:text-xl leading-7 max-w-2xl">
                                Stay up to date with the latest features,
                                improvements, and announcements from Learnify AI.
                            </p>

                        </div>

                        {/* Right Image */}
                        <div className="w-full xl:w-5/9 flex justify-center">
                            <img
                                className="h-52 sm:h-64 md:h-72 xl:h-80 object-contain"
                                src={updates}
                                alt="Learnify AI updates illustration"
                            />
                        </div>

                    </div>
                </div>

                {/* Updates Cards */}
                <div className="flex flex-col gap-5 items-center px-5 sm:px-10 xl:px-20 py-10 w-full">

                    {updatesData.map((update, index) => {
                        const Icon = update.icon;

                        return (
                            <div
                                key={index}
                                className="border border-gray-300 w-full max-w-6xl rounded-2xl p-5 flex flex-col sm:flex-row gap-6 sm:gap-8 xl:gap-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div
                                    className={`h-20 w-20 sm:h-24 sm:w-24 xl:h-30 xl:w-30 shrink-0 flex items-center justify-center ${update.iconBg} rounded-2xl`}
                                >
                                    <Icon
                                        size={50}
                                        color={update.iconColor}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3 flex-1">

                                    <div
                                        className={`${update.badgeText} ${update.badgeBg} px-3 py-1 uppercase text-xs font-bold rounded-full w-fit`}
                                    >
                                        {update.badge}
                                    </div>

                                    <div className="flex flex-col gap-2">

                                        <h3 className="font-bold text-lg sm:text-xl">
                                            {update.title}
                                        </h3>

                                        <p className="text-gray-700 text-sm sm:text-base">
                                            {update.description}
                                        </p>

                                    </div>

                                    <button className="flex gap-2 items-center text-[#6044da] font-semibold w-fit hover:gap-3 transition-all duration-300">
                                        Read more

                                        <ArrowRight
                                            color="#6044da"
                                            size={16}
                                        />
                                    </button>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                <button className="items-center flex gap-2 mb-10 border border-purple-500 rounded-xl text-[#6044da] font-bold px-5 py-2 text-sm sm:text-base hover:bg-purple-50 transition-all duration-300">
                    Load More Updates

                    <ChevronDown
                        color="#6044da"
                        size={18}
                        strokeWidth={3}
                    />
                </button>

            </main>

            <Footer />
        </>
    );
};

export default Updates;