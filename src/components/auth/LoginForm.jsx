import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
import SecurityFeatures from "./SecurityFeatures";
import { ROUTES } from "../../data/routes";

const LoginForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="flex w-full items-center justify-center px-5 py-10 sm:px-6 lg:w-1/2 xl:px-12">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl xl:bg-transparent xl:p-0 xl:shadow-none">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold sm:text-4xl">Welcome Back</h1>
                    <p className="mt-2 text-gray-600">Sign in to continue your learning journey.</p>
                </div>

                <SocialLogin />

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Email Address</label>
                        <input type="email" placeholder="Enter your email" className="rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base" />
                    </div>

                    <PasswordInput />

                    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <label className="flex cursor-pointer items-center gap-2">
                            <input type="checkbox" className="accent-[#6044da]" />
                            Remember me
                        </label>

                        <Link to={ROUTES.FORGOT_PASSWORD} className="font-semibold text-[#6044da] hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg">
                        Log In
                        <ArrowRight size={18} />
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to={ROUTES.STARTED} className="font-semibold text-[#6044da] hover:underline">
                        Sign Up
                    </Link>
                </p>

                <SecurityFeatures />
            </div>
        </section>
    );
};

export default LoginForm;