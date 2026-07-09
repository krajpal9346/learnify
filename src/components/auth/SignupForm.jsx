import { ArrowRight, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import PasswordRequirements from "./PasswordRequirements";
import SocialLogin from "./SocialLogin";
import { ROUTES } from "../../data/routes";

const SignupForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="flex w-full items-center justify-center px-5 py-10 sm:px-6 lg:w-1/2 xl:px-12">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl xl:bg-transparent xl:p-0 xl:shadow-none">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold sm:text-4xl">Get Started</h1>
                    <p className="mt-2 text-gray-600">Create your account to continue.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <TextInput label="Full Name" icon={User} placeholder="Enter your full name" />
                    <TextInput label="Email Address" icon={Mail} type="email" placeholder="Enter your email" />
                    <PasswordInput label="Password" placeholder="Create a password" />
                    <PasswordInput label="Confirm Password" placeholder="Confirm your password" />
                    <PasswordRequirements />

                    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg">
                        Create Account
                        <ArrowRight size={18} />
                    </button>
                </form>

                <div className="my-6">
                    <SocialLogin />
                </div>

                <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to={ROUTES.LOGIN} className="font-semibold text-[#6044da] hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default SignupForm;