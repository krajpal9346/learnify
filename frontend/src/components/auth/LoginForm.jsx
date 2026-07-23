import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
import SecurityFeatures from "./SecurityFeatures";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../data/routes";

const LoginForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const signupMessage = location.state?.signupSuccess
        ? location.state.message || "Account created successfully. Please log in to continue."
        : "";
    const [formData, setFormData] = useState({
        email: location.state?.email || "",
        password: "",
        remember: false,
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage] = useState(signupMessage);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
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

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
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

        try {
            await login({
                email: formData.email.trim(),
                password: formData.password,
            });
            navigate(ROUTES.DASHBOARD);
        } catch (error) {
            setErrors({
                password: error.message || "Login failed. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialLogin = async (provider) => {
        console.log(`Login with ${provider}`);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        alert(`${provider} authentication coming soon.`);
    };

    return (
        <section className="flex w-full items-center justify-center px-5 py-10 sm:px-6 lg:w-1/2 xl:px-12">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl xl:bg-transparent xl:p-0 xl:shadow-none">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold sm:text-4xl">Welcome Back</h1>
                    <p className="mt-2 text-gray-600">Sign in to continue your learning journey.</p>
                    {successMessage && (
                        <p className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                            {successMessage}
                        </p>
                    )}
                </div>

                <SocialLogin onSocialLogin={handleSocialLogin} />

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} autoComplete="email"
                            className={`rounded-xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 sm:text-base ${errors.email
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"}`} />

                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                    </div>

                    <PasswordInput label="Password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} error={errors.password} required />

                    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <label className="flex cursor-pointer items-center gap-2">
                            <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} className="accent-[#6044da]" />
                            Remember me
                        </label>

                        <Link to={ROUTES.FORGOT_PASSWORD} className="font-semibold text-[#6044da] hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" disabled={isLoading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70">
                        {isLoading ? (
                            <>
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                Logging In...
                            </>
                        ) : (
                            <>
                                Log In
                                <ArrowRight size={18} />
                            </>
                        )}
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