import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Logo from "../components/common/Logo";
import { ROUTES } from "../data/routes";
import { securityFeaturesData } from "../data/auth/securityFeaturesData";
import { trustedCompaniesData } from "../data/home/trustedCompaniesData";
import { socialProvidersData } from "../data/auth/socialProvidersData";
import loginIllustration from "../assets/laptop.png";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const inputClass = "mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6044da]/20 focus:border-[#6044da] transition-all";
    const socialButtonClass = "border border-gray-300 rounded-xl py-3 flex justify-center items-center hover:shadow-md hover:border-[#6044da] hover:-translate-y-0.5 transition-all duration-300";

    return (
        <div className="min-h-screen flex flex-col xl:flex-row bg-gray-50">
            <div className="hidden xl:flex xl:w-1/2 bg-[#6044da] relative overflow-hidden p-12 flex-col gap-8">
                <div className="z-10">
                    <Logo size="large" />
                </div>

                <div className="z-10 flex flex-col gap-6">
                    <h1 className="text-5xl 2xl:text-6xl font-bold text-white leading-tight">Learn smarter, <br />grow faster.</h1>
                    <p className="text-purple-100 text-lg 2xl:text-xl max-w-xl">Personalized AI learning paths designed to help you achieve your goals faster.</p>
                </div>

                <div className="flex justify-center z-10">
                    <img src={loginIllustration} alt="Login illustration" className="h-80 2xl:h-100 scale-150 object-cover" />
                </div>

                <div className="z-10">
                    <p className="text-purple-100 mb-5">Trusted by learners from</p>

                    <div className="bg-white px-6 py-4 rounded-xl grid grid-cols-5 gap-x-8 gap-y-6 place-items-center">
                        {trustedCompaniesData.map(
                            (company) => (
                                <img key={company.name} src={company.image} alt={company.name} className={`${company.className} object-contain transition-all duration-300 hover:scale-105`} />
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full xl:w-1/2 flex items-center justify-center px-5 sm:px-8 lg:px-12 py-10">
                <div className="w-full max-w-md xl:max-w-lg bg-white rounded-3xl xl:bg-transparent shadow-xl xl:shadow-none p-6 sm:p-8 xl:p-0 flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold">Welcome Back</h1>
                        <p className="text-gray-600 mt-2">Sign in to continue your learning journey.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {socialProvidersData.map(
                            (provider) => (
                                <button key={provider.name} type="button" className={socialButtonClass}>
                                    <img src={provider.image} alt={provider.name} className="h-6 object-contain" />
                                </button>
                            )
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="text-gray-500 text-sm">or continue with email</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div>
                            <label className="font-semibold">Email Address</label>
                            <input type="email" placeholder="Enter your email" className={inputClass} />
                        </div>

                        <div>
                            <label className="font-semibold">Password</label>

                            <div className="relative mt-2">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className={`${inputClass} pr-12 mt-0`} />
                                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#6044da] transition-colors">
                                    {showPassword ? (<Eye size={20} />) : (<EyeOff size={20} />)}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex gap-2 items-center cursor-pointer">
                                <input type="checkbox" className="accent-[#6044da]" />
                                Remember me
                            </label>

                            <Link to={ROUTES.FORGOT_PASSWORD} className="text-[#6044da] font-semibold hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button type="submit" className="bg-[#6044da] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#5338d4] transition-all duration-300">
                            Log In
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    <p className="text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link to={ROUTES.STARTED} className="text-[#6044da] font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        {securityFeaturesData.map(
                            (feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div key={feature.title} className="border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
                                        <div className={`mx-auto h-12 w-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}>
                                            <Icon color={feature.iconColor} size={22} />
                                        </div>

                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-gray-500 text-sm mt-1">{feature.description}</p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;