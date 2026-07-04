import {
    Sparkles,
    UsersRound,
    Mail,
    LockKeyhole,
    EyeOff,
    User,
    CircleCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import girl from "../assets/girl.png";

import { signupFeaturesData } from "../data/signupFeaturesData";
import { passwordRequirementsData } from "../data/passwordRequirementsData";
import { socialProvidersData } from "../data/socialProvidersData";
import { learnerAvatarsData } from "../data/learnerAvatarsData";

const Started = () => {
    return (
        <div className="min-h-screen bg-purple-100 flex flex-col xl:flex-row">

            {/* LEFT SIDE */}
            <div className="w-full xl:w-1/2 flex flex-col gap-5 px-10 lg:px-20 py-8 lg:py-12 relative">

                <div className="flex gap-3 items-center">
                    <Sparkles color="#6044da" />

                    <div>
                        <h1 className="text-xl font-bold">
                            Learnify AI
                        </h1>

                        <p className="text-sm text-gray-600">
                            AI Learning Recommender
                        </p>
                    </div>
                </div>

                <div className="max-w-xl">
                    <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-tight xl:leading-19">
                        Start your
                        <span className="text-[#6044da]">
                            {" "}learning journey
                            <br />
                            with Learnify AI
                        </span>
                    </h1>

                    <p className="text-base xl:text-lg text-gray-600 mt-6 xl:mt-8">
                        Create your account and get personalized course
                        recommendations designed just for you.
                    </p>
                </div>

                <div className="flex flex-col gap-5 w-full mt-5">

                    {signupFeaturesData.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div key={index} className="flex gap-3">

                                <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-lg bg-white">
                                    <Icon
                                        size={30}
                                        color={feature.iconColor}
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h4 className="font-semibold">
                                        {feature.title}
                                    </h4>

                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>

                <img
                    src={girl}
                    alt="Student learning"
                    className="
        hidden md:block
        absolute bottom-0
        right-4 lg:right-8 xl:right-[-20%]
        h-72 md:h-80 lg:h-96 xl:h-105
        object-contain
        z-20
        pointer-events-none
    "
                />

                <div className="flex flex-col gap-5 w-fit rounded-xl bg-white px-5 py-4 mt-8 z-30 relative shadow-sm">

                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100">
                            <UsersRound
                                size={20}
                                color="#6044da"
                                fill="#6044da"
                            />
                        </div>

                        <div className="flex flex-col">
                            <h4 className="font-semibold">
                                50,000+ learners
                            </h4>

                            <p className="text-xs text-gray-600">
                                are already learning with Learnify AI
                            </p>
                        </div>
                    </div>

                    <div className="flex -space-x-2">

                        {learnerAvatarsData.map((avatar, index) => (
                            <img
                                key={index}
                                className="h-8 w-8 rounded-full border border-white"
                                src={avatar.image}
                                alt="Learner avatar"
                            />
                        ))}

                        <div className="text-[10px] font-semibold flex items-center justify-center h-8 w-8 rounded-full bg-[#6044da] border border-purple-400 text-white">
                            +50K
                        </div>

                    </div>

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col w-full xl:w-1/2 border border-gray-300 bg-white rounded-t-3xl xl:rounded-2xl px-8 xl:px-10 py-7 mr-0 xl:mr-20 my-0 xl:my-10 gap-6 shadow-xl xl:shadow-none">

                <div className="flex flex-col gap-2 xl:gap-4">
                    <h1 className="text-2xl xl:text-3xl font-bold">
                        Get Started
                    </h1>

                    <p className="text-sm xl:text-base text-gray-600">
                        Create your account to continue
                    </p>
                </div>

                {[
                    {
                        title: "Full Name",
                        icon: User,
                        type: "text",
                        placeholder: "Enter your full name",
                    },
                    {
                        title: "Email address",
                        icon: Mail,
                        type: "email",
                        placeholder: "Enter your email",
                    },
                ].map((field, index) => {
                    const Icon = field.icon;

                    return (
                        <div key={index} className="flex flex-col gap-2">
                            <h3 className="text-lg xl:text-xl font-semibold">
                                {field.title}
                            </h3>

                            <div className="flex items-center gap-4 py-3 px-4 border border-gray-300 rounded-lg">
                                <Icon size={20} color="#6d6d6d" />

                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="border-none outline-none w-full"
                                />
                            </div>
                        </div>
                    );
                })}

                {["Password", "Confirm Password"].map((label, index) => (
                    <div key={index} className="flex flex-col gap-2">

                        <h3 className="text-lg xl:text-xl font-semibold">
                            {label}
                        </h3>

                        <div className="flex items-center justify-between py-3 px-4 border border-gray-300 rounded-lg">

                            <div className="flex gap-4 w-full">
                                <LockKeyhole size={20} color="#6d6d6d" />

                                <input
                                    type="password"
                                    placeholder={
                                        index === 0
                                            ? "Enter your password"
                                            : "Confirm your password"
                                    }
                                    className="border-none outline-none w-full"
                                />
                            </div>

                            <EyeOff size={20} color="#6d6d6d" />

                        </div>
                    </div>
                ))}

                <div className="flex flex-col gap-2">

                    <p className="text-sm text-gray-600">
                        Password must be at least 8 characters and include:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        {passwordRequirementsData.map((item, index) => (
                            <div key={index} className="flex gap-2">

                                <div className="flex items-center justify-center">
                                    <CircleCheck
                                        size={16}
                                        color="#6044da"
                                    />
                                </div>

                                <p className="text-sm text-gray-600">
                                    {item}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>

                <button className="bg-[#6044da] cursor-pointer rounded-lg text-white text-lg py-3 xl:text-xl font-semibold">
                    Create Account
                </button>

                <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-gray-300"></div>

                    <p className="text-sm xl:text-base text-gray-500 whitespace-nowrap">
                        or sign up with
                    </p>

                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {socialProvidersData.map((provider, index) => (
                        <button
                            key={index}
                            className="cursor-pointer h-12 w-full items-center justify-center flex gap-3 border border-gray-400 py-2 rounded-lg hover:border-[#6044da] transition-all duration-300"
                        >
                            <img
                                className="h-5"
                                src={provider.image}
                                alt={provider.name}
                            />

                            <p>{provider.name}</p>
                        </button>
                    ))}

                </div>

                <div className="flex gap-2 justify-center">
                    <p>Already have an account?</p>

                    <Link
                        to="/login"
                        className="text-[#6044da] font-semibold"
                    >
                        Log In
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Started;