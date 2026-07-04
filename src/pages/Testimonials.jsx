import {
    Star,
    UsersRound,
    ChevronLeft,
    ChevronRight,
    Quote
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { testimonialsData } from "../data/testimonialsData";
import { statsData } from "../data/statsData";
import { journeyData } from "../data/journeyData";

const Testimonials = () => {
    return (
        <div>
            <Header />

            <div className="w-full mb-10 overflow-hidden">

                {/* HERO */}
                <div className="w-full flex flex-col xl:flex-row justify-between items-center xl:items-start bg-purple-50 px-5 sm:px-10 xl:px-20 pb-10 pt-30 gap-10">

                    {/* Left Floating Reviews */}
                    <div className="hidden xl:block relative w-1/5 h-48">
                        <div className="absolute left-0 top-0 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img
                                    className="rounded-full"
                                    src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl shadow-sm">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={16}
                                        color="#6044da"
                                        fill="#6044da"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="absolute right-[-10%] top-25 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img
                                    className="rounded-full"
                                    src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl shadow-sm">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={16}
                                        color="#6044da"
                                        fill="#6044da"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="w-full xl:w-3/5 flex flex-col items-center gap-5 text-center">
                        <div className="items-center flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                            <UsersRound
                                size={16}
                                color="#6044da"
                                strokeWidth={2.75}
                            />

                            <p className="font-semibold text-[#6044da] text-sm sm:text-base">
                                Trusted by learners worldwide
                            </p>
                        </div>

                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center">
                            Turn Learning Goals
                            <br />
                            Into <span className="text-[#6044da]">Career Wins</span>
                        </h1>

                        <p className="text-center text-gray-600 text-sm sm:text-base">
                            See how students, professionals, and career switchers
                            <br className="hidden sm:block" />
                            used AI-powered learning to achieve their goals faster.
                        </p>
                    </div>

                    {/* Right Avatar */}
                    <div className="hidden xl:block relative w-1/5 h-48">
                        <div className="absolute right-0 top-0 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img
                                    className="rounded-full"
                                    src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl shadow-sm">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={16}
                                        color="#6044da"
                                        fill="#6044da"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="absolute left-[-10%] top-25 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img
                                    className="rounded-full"
                                    src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl shadow-sm">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={16}
                                        color="#6044da"
                                        fill="#6044da"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="px-5 sm:px-10 xl:px-40 py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={index}
                                className="flex gap-6 justify-center xl:justify-start"
                            >
                                <div className="flex items-center justify-center h-15 w-15 p-2 rounded-full bg-white border border-gray-300">
                                    <Icon color="#6044da" size={38} />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[#6044da] font-bold">
                                        <span className="text-4xl">
                                            {stat.value}
                                        </span>

                                        {stat.suffix && (
                                            <span className="text-2xl">
                                                {stat.suffix}
                                            </span>
                                        )}
                                    </h3>

                                    <p className="text-gray-700 text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* TESTIMONIALS */}
                <div className="px-5 sm:px-10 xl:px-20 pb-12 flex flex-col items-center gap-4">

                    <h1 className="text-3xl sm:text-4xl font-bold text-center">
                        What Our Learners Say
                    </h1>

                    <p className="text-gray-600 text-center">
                        Real stories from real people who transformed their learning journey.
                    </p>

                    <div className="w-full mt-8 flex flex-col xl:flex-row items-center justify-between gap-6">

                        <button className="hidden xl:flex cursor-pointer h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center">
                            <ChevronLeft size={22} color="#6044da" />
                        </button>

                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-105 xl:w-[24%] min-h-80 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                            >
                                <div className="flex flex-col gap-5">
                                    <Quote
                                        color="#6044da"
                                        size={36}
                                        fill="#6044da"
                                    />

                                    <p className="text-gray-700">
                                        {testimonial.review}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-6">
                                    <img
                                        className="h-14 w-14 rounded-full object-cover"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />

                                    <div>
                                        <h4 className="font-bold text-lg">
                                            {testimonial.name}
                                        </h4>

                                        <p className="text-gray-500 text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button className="hidden xl:flex cursor-pointer h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center">
                            <ChevronRight size={22} color="#6044da" />
                        </button>
                    </div>
                </div>

                {/* JOURNEY */}
                <div className="px-5 sm:px-10 xl:px-20 py-10 flex flex-col items-center justify-center gap-4">

                    <div className="w-full px-5 sm:px-10 xl:px-15 py-8 flex flex-col xl:flex-row gap-10 items-center justify-between bg-purple-100 rounded-2xl">

                        <div className="w-full xl:w-[40%] flex flex-col gap-5 text-center xl:text-left">
                            <h3 className="text-3xl sm:text-4xl font-bold">
                                A Typical Learnify Journey
                            </h3>

                            <p className="text-gray-700">
                                From curiosity to career success -
                                here's how our learners grow.
                            </p>
                        </div>

                        <div className="w-full xl:w-[60%] grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">

                            {journeyData.map((journey, index) => {
                                const Icon = journey.icon;

                                return (
                                    <div
                                        key={index}
                                        className="min-h-40 w-full max-w-37.5 flex flex-col gap-3 items-center"
                                    >
                                        <div className="h-18 w-18 flex items-center justify-center bg-white rounded-full border border-gray-200">
                                            <Icon color="#6044da" size={38} />
                                        </div>

                                        <div className="flex flex-col gap-2 items-center">
                                            <p className="text-center text-lg font-bold text-[#6044da]">
                                                {journey.month}
                                            </p>

                                            <p className="text-center text-gray-700 text-sm">
                                                {journey.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* KEEP REMAINING CTA SECTION EXACTLY SAME */}
            </div>

            <Footer />
        </div>
    );
};

export default Testimonials;