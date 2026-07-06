import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, LockKeyhole, Eye, EyeOff, User, CircleCheck, UsersRound, ArrowRight } from "lucide-react";
import Logo from "../components/common/Logo";
import { ROUTES } from "../data/routes";
import { signupFeaturesData } from "../data/auth/signupFeaturesData";
import { passwordRequirementsData } from "../data/auth/passwordRequirementsData";
import { socialProvidersData } from "../data/auth/socialProvidersData";
import { learnerAvatarsData } from "../data/home/learnerAvatarsData";
import girl from "../assets/girl.png";

const Started = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword,] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const inputContainerClass = "flex items-center gap-4 py-3 px-4 border border-gray-300 rounded-lg focus-within:border-[#6044da] focus-within:ring-2 focus-within:ring-[#6044da]/20 transition-all";
    const socialButtonClass = "cursor-pointer h-12 w-full items-center justify-center flex gap-3 border border-gray-300 py-2 rounded-lg hover:border-[#6044da] hover:shadow-md transition-all duration-300";

    return (
        <div className="min-h-screen bg-purple-100 flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 flex flex-col gap-5 px-8 lg:px-20 py-8 lg:py-12 relative overflow-hidden">
                <Logo />
                <div className="max-w-xl mt-6">
                    <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-tight xl:leading-[1.15]">Start your <span className="text-[#6044da]">{" "}learning journey <br />with Learnify AI </span></h1>
                    <p className="text-base xl:text-lg text-gray-600 mt-6 xl:mt-8">Create your account and get personalized course recommendations designed specifically for your goals.</p>
                </div>

                <div className="flex flex-col gap-5 w-full mt-5">
                    {signupFeaturesData.map(
                        (feature) => {
                            const Icon = feature.icon;

                            return (
                                <div key={feature.title} className="flex gap-4">
                                    <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-lg bg-white shadow-sm">
                                        <Icon size={30} color={feature.iconColor} />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>

                <img src={girl} alt="Student learning" className="hidden md:block absolute bottom-0 right-4 lg:right-8 xl:right-[-10%] h-72 md:h-80 lg:h-96 xl:h-105 object-contain z-20 pointer-events-none" />

                <div className="flex flex-col gap-5 w-fit rounded-xl bg-white px-5 py-4 mt-8 z-30 relative shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100">
                            <UsersRound size={20} color="#6044da" fill="#6044da" />
                        </div>

                        <div className="flex flex-col">
                            <h4 className="font-semibold">50,000+ learners</h4>
                            <p className="text-xs text-gray-600">are already learning with Learnify AI</p>
                        </div>
                    </div>

                    <div className="flex -space-x-2">
                        {learnerAvatarsData.map(
                            (avatar) => (
                                <img key={avatar.id} className="h-8 w-8 rounded-full border border-white object-cover" src={avatar.image} alt="Learner avatar" />
                            )
                        )}

                        <div className="text-[10px] font-semibold flex items-center justify-center h-8 w-8 rounded-full bg-[#6044da] border border-purple-400 text-white">
                            +50K
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full xl:w-1/2 border border-gray-300 bg-white rounded-t-3xl xl:rounded-2xl px-8 xl:px-10 py-7 mr-0 xl:mr-20 my-0 xl:my-10 gap-6 shadow-xl xl:shadow-none">
                <div className="flex flex-col gap-2 xl:gap-4">
                    <h1 className="text-2xl xl:text-3xl font-bold">Get Started</h1>
                    <p className="text-sm xl:text-base text-gray-600">Create your account to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg xl:text-xl font-semibold">Full Name</h3>

                        <div className={inputContainerClass}>
                            <User size={20} color="#6d6d6d" />
                            <input type="text" placeholder="Enter your full name" className="border-none outline-none w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg xl:text-xl font-semibold">Email Address</h3>

                        <div className={inputContainerClass}>
                            <Mail size={20} color="#6d6d6d" />
                            <input type="email" placeholder="Enter your email" className="border-none outline-none w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg xl:text-xl font-semibold">Password</h3>

                        <div className={`${inputContainerClass} justify-between`}>
                            <div className="flex gap-4 w-full">
                                <LockKeyhole size={20} color="#6d6d6d" />
                                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="border-none outline-none w-full" />
                            </div>

                            <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? (<Eye size={20} color="#6d6d6d" />) : (<EyeOff size={20} color="#6d6d6d" />)}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg xl:text-xl font-semibold">Confirm Password</h3>

                        <div className={`${inputContainerClass} justify-between`}>
                            <div className="flex gap-4 w-full">
                                <LockKeyhole size={20} color="#6d6d6d" />
                                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" className="border-none outline-none w-full" />
                            </div>

                            <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                {showConfirmPassword ? (<Eye size={20} color="#6d6d6d" />) : (<EyeOff size={20} color="#6d6d6d" />)}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-600">Password must be at least 8 characters and include:</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {passwordRequirementsData.map((item) => (
                                <div key={item} className="flex gap-2">
                                    <CircleCheck size={16} color="#6044da" />
                                    <p className="text-sm text-gray-600">{item}</p>
                                </div>
                            )
                            )}
                        </div>
                    </div>

                    <button type="submit" className="bg-[#6044da] cursor-pointer rounded-lg text-white text-lg py-3 xl:text-xl font-semibold hover:bg-[#5338d4] transition-all duration-300 flex items-center justify-center gap-2">
                        Create Account
                        <ArrowRight size={20} />
                    </button>
                </form>

                <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm xl:text-base text-gray-500 whitespace-nowrap">or sign up with</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {socialProvidersData.map((provider) => (
                        <button key={provider.name} type="button" className={socialButtonClass}>
                            <img className="h-5" src={provider.image} alt={provider.name} />
                            <p>{provider.name}</p>
                        </button>
                    )
                    )}
                </div>

                <div className="flex gap-2 justify-center">
                    <p>Already have an account?</p>

                    <Link to={ROUTES.LOGIN} className="text-[#6044da] font-semibold hover:underline">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Started;