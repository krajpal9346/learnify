import { useState } from "react";
import { ArrowRight, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import PasswordRequirements from "./PasswordRequirements";
import SocialLogin from "./SocialLogin";
import { ROUTES } from "../../data/routes";

const SignupForm = () => {
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "", });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Full name must be at least 3 characters.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else {
            if (formData.password.length < 8) {
                newErrors.password = "Password must be at least 8 characters.";
            } else if (!/[A-Z]/.test(formData.password)) {
                newErrors.password = "Password must contain one uppercase letter.";
            } else if (!/\d/.test(formData.password)) {
                newErrors.password = "Password must contain one number.";
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
                newErrors.password = "Password must contain one special character.";
            }
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1800));

        console.log(formData);

        alert("Account created successfully!");

        setFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleSocialLogin = async (provider) => {
        console.log(`Signup using ${provider}`);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        alert(`${provider} signup will be available soon.`);
    };

    return (
        <section className="flex w-full items-center justify-center px-5 py-10 sm:px-6 lg:w-1/2 xl:px-12">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl xl:bg-transparent xl:p-0 xl:shadow-none">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold sm:text-4xl">Get Started</h1>
                    <p className="mt-2 text-gray-600">Create your account to continue.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <TextInput label="Full Name" icon={User} name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" error={errors.fullName} required />
                    <TextInput label="Email Address" icon={Mail} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" error={errors.email} required />
                    <PasswordInput label="Password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" error={errors.password} required autoComplete="new-password" />
                    <PasswordRequirements password={formData.password} />
                    <PasswordInput label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" error={errors.confirmPassword} required autoComplete="new-password" />

                    <button type="submit" disabled={isLoading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70">
                        {isLoading ? (
                            <>
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                Creating Account...
                            </>
                        ) : (
                            <>
                                Create Account
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="my-6">
                    <SocialLogin onSocialLogin={handleSocialLogin} />
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