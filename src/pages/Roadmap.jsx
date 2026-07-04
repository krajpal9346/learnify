import Header from "../components/Header";
import Footer from "../components/Footer";

import {
    BookOpen,
    Sparkles,
    Mail,
    GraduationCap,
    NotebookTabs,
    UsersRound,
    Trophy,
    CheckCircle,
    Circle,
    ArrowRight
} from "lucide-react";

import flag from "../assets/flag.png";
import rocket from "../assets/rocket.png";

import { roadmapData } from "../data/roadmapData";

import { Link } from "react-router-dom";

const Roadmap = () => {
    return (
        <div>
            <Header />

            <div className="flex flex-col items-center gap-5 bg-purple-50 px-5 sm:px-10 xl:px-20 pb-10 pt-30">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 w-full px-0 lg:px-10 py-2 lg:min-h-62.5">

                    <img
                        className="hidden lg:block h-32 xl:h-50"
                        src={flag}
                        alt="Flag"
                    />

                    <div className="flex flex-col gap-5 items-center lg:items-start">
                        <div className="flex gap-2 px-3 py-1 items-center rounded-full w-fit bg-purple-200">
                            <BookOpen
                                size={18}
                                color="#6044da"
                                strokeWidth={2.75}
                            />

                            <p className="font-semibold text-[#6044da] text-sm sm:text-base">
                                Our Journey to Transform Learning
                            </p>
                        </div>

                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
                            <span className="text-[#6044da]">
                                Learnify AI
                            </span>{" "}
                            Roadmap
                        </h1>

                        <p className="text-gray-600 text-sm sm:text-base">
                            We're on a mission to make personalized learning
                            accessible to everyone.
                            <br className="hidden sm:block" />
                            Here's what we have accomplished and what's coming next.
                        </p>
                    </div>

                    <img
                        className="hidden lg:block h-32 xl:h-50"
                        src={rocket}
                        alt="Rocket"
                    />
                </div>

                {/* Roadmap Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 xl:gap-5 w-full xl:max-w-375 mt-2 py-2 items-stretch">

                    {roadmapData.map((phase, index) => {
                        const HeaderIcon = phase.headerIcon;
                        const StatusIcon = phase.statusIcon;

                        return (
                            <div
                                key={index}
                                className="flex flex-col gap-5 items-center w-full"
                            >
                                <div
                                    className={`flex items-center justify-center h-15 w-15 rounded-full border border-gray-200 p-2 ${phase.cardBg}`}
                                >
                                    <HeaderIcon
                                        color={phase.color}
                                        size={40}
                                        strokeWidth={2.5}
                                    />
                                </div>

                                <div
                                    className={`bg-white w-full xl:max-w-70 min-h-97.5 h-full flex flex-col p-5 rounded-2xl items-center border shadow-sm ${phase.cardBorder}`}
                                >
                                    <p
                                        className={`items-center justify-center flex gap-1 ${phase.badgeBg} px-3 py-1 uppercase rounded-full text-xs font-bold ${phase.statusColor}`}
                                    >
                                        <StatusIcon
                                            color={phase.color}
                                            size={16}
                                            strokeWidth={2.75}
                                            fill={
                                                phase.status !== "Completed"
                                                    ? phase.color
                                                    : "none"
                                            }
                                        />

                                        {phase.status}
                                    </p>

                                    <div className="flex flex-col">
                                        <h6
                                            className="text-sm text-center font-bold"
                                            style={{ color: phase.color }}
                                        >
                                            {phase.phase}
                                        </h6>

                                        <h4
                                            className="text-center text-xl font-bold"
                                            style={{ color: phase.color }}
                                        >
                                            {phase.title}
                                        </h4>

                                        <p className="text-center text-gray-700 text-sm mt-1">
                                            {phase.timeline}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 w-full flex-1">
                                        {phase.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex gap-2 items-start"
                                            >
                                                {item.completed ? (
                                                    <CheckCircle
                                                        color={phase.color}
                                                        size={16}
                                                        strokeWidth={2.75}
                                                        className="mt-1 shrink-0"
                                                    />
                                                ) : (
                                                    <Circle
                                                        color={phase.color}
                                                        size={16}
                                                        strokeWidth={2.75}
                                                        className="mt-1 shrink-0"
                                                    />
                                                )}

                                                <p className="text-sm text-gray-700">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="flex flex-col xl:flex-row gap-10 w-full bg-purple-100 px-5 sm:px-10 xl:px-20 py-8 rounded-2xl overflow-hidden">

                    {/* Left Section */}
                    <div className="flex flex-col sm:flex-row gap-5 xl:w-2/3 items-center text-center sm:text-left">
                        <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shrink-0">
                            <Sparkles
                                color="#6044da"
                                size={40}
                                strokeWidth={2.5}
                            />
                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className="font-bold text-2xl sm:text-3xl">
                                The best learning experience is yet to come
                            </h3>

                            <p className="text-sm text-gray-700">
                                We're building the future of personalized
                                learning with AI at the core.
                                <br className="hidden sm:block" />
                                Join us on this journey!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/started" className="w-full sm:w-auto">
                            <button className="flex justify-center gap-2 items-center w-full sm:w-auto cursor-pointer bg-[#6044da] text-white px-5 xl:px-7 py-2 rounded-lg font-semibold hover:bg-[#5136d4] transition-all duration-300">
                                Get Started for Free
                                <ArrowRight
                                    size={16}
                                    color="#ffffff"
                                />
                            </button>
                        </Link>

                                <button className="flex gap-2 px-4 py-2 rounded-lg bg-white border border-[#6044da] text-[#6044da] font-semibold items-center justify-center cursor-pointer">
                                    <Mail
                                        color="#6044da"
                                        size={18}
                                    />

                                    <p>Join the Waitlist</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Right Illustration */}
                    <div className="relative h-80 sm:h-90 xl:h-70 w-full xl:w-1/2 flex items-center justify-center">

                        {/* Top Left */}
                        <div className="absolute left-[12%] top-[12%] h-16 w-16 sm:h-18 sm:w-18 rounded-xl bg-white flex items-center justify-center border border-gray-300 shadow-md z-10">
                            <GraduationCap
                                size={34}
                                color="#8B5CF6"
                            />
                        </div>

                        {/* Top Right */}
                        <div className="absolute right-[12%] top-[12%] h-16 w-16 sm:h-18 sm:w-18 rounded-xl bg-white flex items-center justify-center border border-gray-300 shadow-md z-10">
                            <Trophy
                                size={34}
                                color="#8B5CF6"
                            />
                        </div>

                        {/* Bottom Left */}
                        <div className="absolute left-[18%] bottom-[18%] h-16 w-16 sm:h-18 sm:w-18 rounded-xl bg-white flex items-center justify-center border border-gray-300 shadow-md z-10">
                            <NotebookTabs
                                size={34}
                                color="#8B5CF6"
                                className="rotate-90"
                            />
                        </div>

                        {/* Bottom Right */}
                        <div className="absolute right-[18%] bottom-[18%] h-16 w-16 sm:h-18 sm:w-18 rounded-xl bg-white flex items-center justify-center border border-gray-300 shadow-md z-10">
                            <UsersRound
                                size={34}
                                color="#8B5CF6"
                            />
                        </div>

                        {/* Center Flag */}
                        <img
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 sm:h-32 md:h-36 xl:h-44 object-contain z-20"
                            src={flag}
                            alt="Learning Journey"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Roadmap;