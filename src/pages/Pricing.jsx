import {
    Bookmark,
    RefreshCw,
    Shield,
    ShieldCheck,
    ArrowRight,
    Sparkles,
    Flame,
    Check,
    X,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import bg from "../assets/bg.png";
import girl from "../assets/girl.png";

import { Link } from "react-router-dom";

import { pricingData } from "../data/pricingData";
import { comparisonData } from "../data/comparisonData";

const Pricing = () => {
    const renderCell = (value) => {
        if (value === true) {
            return (
                <Check
                    color="#6044da"
                    size={20}
                    strokeWidth={4}
                />
            );
        }

        if (value === false) {
            return (
                <X
                    color="#9ca3af"
                    size={20}
                    strokeWidth={4}
                />
            );
        }

        return <p className="text-sm">{value}</p>;
    };

    return (
        <div>
            <Header />

            <div className="bg-purple-100">

                {/* HERO */}
                <div
                    className="w-full flex flex-col items-center px-5 sm:px-10 xl:px-20 mt-15 xl:mt-20 py-15 bg-cover bg-bottom bg-no-repeat"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className="flex flex-col gap-5 items-center">

                        <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                            <Bookmark
                                size={16}
                                color="#6044da"
                                strokeWidth={2.75}
                            />

                            <p className="font-semibold text-[#6044da] text-sm sm:text-base">
                                Simple, Transparent Pricing
                            </p>
                        </div>

                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center leading-tight">
                            Choose the perfect plan
                            <br />
                            for{" "}
                            <span className="text-[#6044da]">
                                your learning journey
                            </span>
                        </h1>

                        <p className="text-center text-base sm:text-lg">
                            Start for free. Upgrade anytime. Cancel anytime.
                        </p>

                        <div className="flex flex-wrap gap-5 sm:gap-8 xl:gap-15 items-center justify-center">

                            <div className="flex items-center gap-2">
                                <ShieldCheck color="#6044da" size={16} />

                                <p className="text-sm">
                                    No credit card required
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <RefreshCw color="#6044da" size={16} />

                                <p className="text-sm">
                                    Cancel anytime
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Shield color="#6044da" size={16} />

                                <p className="text-sm">
                                    14-day money-back guarantee
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* BILLING TOGGLE */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center my-10 relative px-5">

                    <div className="flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">

                        <button className="px-6 sm:px-8 py-2 rounded-full bg-[#6044da] text-white font-semibold">
                            Monthly
                        </button>

                        <button className="px-6 sm:px-8 py-2 rounded-full text-gray-700 font-semibold">
                            Yearly
                        </button>
                    </div>

                    <div className="px-4 py-1 bg-green-100 text-green-600 font-semibold rounded-full text-sm">
                        Save 20%
                    </div>
                </div>

                {/* PRICING CARDS */}
                <div className="px-5 sm:px-10 xl:px-20 pb-12 flex flex-col lg:flex-row justify-center items-center gap-8 xl:gap-15">

                    {pricingData.map((plan, index) => {
                        const Icon = plan.icon;

                        return (
                            <div
                                key={index}
                                className={`${plan.featured
                                    ? "w-full max-w-105 xl:w-100 bg-white rounded-3xl border-2 border-[#6044da] p-5 flex flex-col relative shadow-xl gap-5"
                                    : "w-full max-w-90 xl:w-90 bg-white rounded-3xl border border-gray-200 p-5 flex flex-col gap-4"
                                    }`}
                            >
                                {plan.featured && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#6044da] text-white font-semibold text-sm">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Icon color="#6044da" size={28} />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h2 className="text-3xl font-bold">
                                        {plan.title}
                                    </h2>

                                    <p className="text-gray-500">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                <div className="flex items-end gap-1">
                                    <h1 className="text-5xl sm:text-6xl font-bold">
                                        {plan.price}
                                    </h1>

                                    <p className="text-gray-500 mb-2">
                                        {plan.period}
                                    </p>
                                </div>
                                <p className="text-gray-600">
                                    {plan.description}
                                </p>

                                <div className="flex flex-col gap-4 py-3 flex-1">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <Check
                                                    size={14}
                                                    color="#16a34a"
                                                    strokeWidth={3}
                                                />
                                            </div>

                                            <p className="text-gray-700 text-sm">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={plan.link}
                                    className="w-full mt-2"
                                >
                                    <button
                                        className={`w-full py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 ${plan.featured
                                            ? "bg-[#6044da] text-white hover:bg-[#5138c5]"
                                            : "border border-[#6044da] text-[#6044da] hover:bg-purple-50"
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* COMPARISON TABLE */}
                <div className="w-full px-5 sm:px-10 xl:px-20 py-5">
                    <div className="bg-white rounded-3xl border border-gray-300 py-5">

                        {/* Fixed Header */}
                        <div className="px-5 sm:px-8 pb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center">
                                Compare Plans
                            </h2>

                            <p className="text-gray-500 text-center mt-2">
                                Find the plan that best fits your learning goals.
                            </p>
                        </div>

                        {/* Scrollable Table Only */}
                        <div className="overflow-x-auto">
                            <div className="min-w-225">

                                {/* Header Row */}
                                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-gray-200">
                                    <div className="font-semibold px-4 sm:px-6 py-4 border-r border-gray-200">
                                        Features
                                    </div>

                                    {comparisonData.plans.map((plan, index) => (
                                        <div
                                            key={index}
                                            className={`font-semibold px-4 sm:px-6 py-4 text-center ${index !== comparisonData.plans.length - 1
                                                ? "border-r border-gray-200"
                                                : ""
                                                }`}
                                        >
                                            {plan}
                                        </div>
                                    ))}
                                </div>

                                {/* Features */}
                                {comparisonData.features.map((feature, index) => {
                                    const Icon = feature.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-gray-200"
                                        >
                                            <div className="px-4 sm:px-6 py-4 border-r border-gray-200 flex items-center gap-3">
                                                <Icon
                                                    size={18}
                                                    color="#6044da"
                                                    className="shrink-0"
                                                />

                                                <p className="text-sm font-medium">
                                                    {feature.name}
                                                </p>
                                            </div>

                                            {feature.values.map((value, valueIndex) => (
                                                <div
                                                    key={valueIndex}
                                                    className={`px-4 sm:px-6 py-4 flex justify-center items-center ${valueIndex !== feature.values.length - 1
                                                        ? "border-r border-gray-200"
                                                        : ""
                                                        }`}
                                                >
                                                    {renderCell(value)}
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA SECTION */}
                <div className="px-5 sm:px-10 xl:px-20 pb-12">

                    <div className="relative overflow-hidden bg-[#6044da] min-h-212.5 xl:min-h-105 rounded-3xl px-6 sm:px-10 xl:px-16 py-10 xl:py-0 flex flex-col xl:flex-row items-center justify-between">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col justify-center gap-6 w-full xl:w-[42%] text-center xl:text-left z-20">

                            <div className="flex justify-center xl:justify-start">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full text-white text-sm font-semibold">
                                    <Sparkles size={16} />
                                    Start Learning Today
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight">
                                Ready to accelerate
                                <br />
                                your learning journey?
                            </h1>

                            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                                Join thousands of learners who are growing every
                                day with Learnify AI and unlock your full
                                potential.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 sm:gap-5">

                                <Link to="/started">
                                    <button className="cursor-pointer flex items-center justify-center gap-2 bg-white text-[#6044da] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                                        Get Started for Free
                                        <ArrowRight size={18} />
                                    </button>
                                </Link>

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative w-full xl:w-[58%] h-112.5 sm:h-125 md:h-137.5 xl:h-80 flex justify-center items-end mt-10 xl:mt-0">

                            {/* Courses Completed */}
                            <div className="absolute top-0 left-[28%] sm:left-8 sm:translate-x-0 lg:top-8 lg:left-20 xl:top-5 xl:left-10 flex items-center gap-3 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">

                                <Sparkles
                                    size={20}
                                    color="#6044da"
                                />

                                <div>
                                    <p className="text-[10px] xl:text-xs text-gray-500">
                                        Courses Completed
                                    </p>

                                    <h1 className="text-lg xl:text-xl font-bold text-gray-900">
                                        24
                                    </h1>

                                    <p className="text-green-500 text-[10px] xl:text-xs font-semibold">
                                        +12 this month
                                    </p>
                                </div>
                            </div>

                            {/* Learning Streak */}
                            <div className="absolute top-24 left-[58%] -translate-x-1/2 sm:right-8 sm:left-auto sm:translate-x-0 lg:top-28 lg:right-12 xl:top-10 xl:right-10 flex items-center gap-3 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">

                                <Flame
                                    size={20}
                                    color="#f9911a"
                                    fill="#f9911a"
                                />

                                <div>
                                    <p className="text-[10px] xl:text-xs text-gray-500">
                                        Learning Streak
                                    </p>

                                    <h1 className="text-lg xl:text-xl font-bold text-gray-900">
                                        12 days
                                    </h1>

                                    <p className="text-orange-500 text-[10px] xl:text-xs font-semibold">
                                        Keep going
                                    </p>
                                </div>
                            </div>

                            {/* Skills Mastered */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 xl:bottom-6 xl:right-8 xl:left-auto xl:translate-x-0 flex items-center gap-3 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">

                                <Sparkles
                                    size={20}
                                    color="#10b981"
                                />

                                <div>
                                    <p className="text-[10px] xl:text-xs text-gray-500">
                                        Skills Mastered
                                    </p>

                                    <h1 className="text-lg xl:text-xl font-bold text-gray-900">
                                        8
                                    </h1>

                                    <p className="text-green-500 text-[10px] xl:text-xs font-semibold">
                                        +2 this month
                                    </p>
                                </div>
                            </div>

                            <img
                                src={girl}
                                alt="Student learning"
                                className="absolute bottom-20 sm:bottom-20 xl:bottom-0 left-1/2 -translate-x-1/2 h-48 sm:h-60 md:h-72 xl:h-80 object-contain z-20"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Pricing;