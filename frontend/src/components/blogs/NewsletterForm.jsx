import { useState } from "react";

const NewsletterForm = ({ handleNewsletterSubmit }) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setIsSuccess(false);
            setMessage("Please enter your email address.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(trimmedEmail)) {
            setIsSuccess(false);
            setMessage("Please enter a valid email address.");
            return;
        }

        handleNewsletterSubmit?.(trimmedEmail);
        setIsSuccess(true);
        setMessage("Thank you for subscribing to our newsletter!");
        setEmail("");
    };

    return (
        <form onSubmit={onSubmit} className="flex w-full max-w-2xl flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
                <input type="email" value={email} onChange={(event) => {
                    setEmail(event.target.value);
                    if (message) setMessage("");
                }}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:py-4 sm:text-base" />
                <button type="submit" className="w-full cursor-pointer rounded-xl bg-[#6044da] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5137c9] hover:shadow-lg sm:w-auto sm:px-8 sm:py-4">
                    Subscribe
                </button>
            </div>

            {message && (
                <p className={`text-sm font-medium ${isSuccess ? "text-green-600" : "text-red-500"}`}>{message}</p>
            )}
        </form>
    );
};

export default NewsletterForm;