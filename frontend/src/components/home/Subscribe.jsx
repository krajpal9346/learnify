import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { marketingApi } from "../../services/api";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email.trim()) {
            setMessage("Please enter your email address.");
            return;
        }

        setIsLoading(true);
        setMessage("");

        try {
            const response = await marketingApi.newsletter({
                email: email.trim(),
                source: "home",
            });
            setMessage(response.message);
            setEmail("");
        } catch (error) {
            setMessage(error.message || "Subscription failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const inputClass =
        "w-full sm:w-72 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#6044da]";
    const buttonClass =
        "cursor-pointer bg-[#6044da] text-white font-semibold rounded-lg px-6 py-3 whitespace-nowrap hover:bg-[#5137c9] transition-colors duration-300 disabled:opacity-70";

    return (
        <section className="px-5 sm:px-10 xl:px-25 pt-10 xl:pt-15 mb-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-5 border border-gray-200 rounded-xl px-6 sm:px-10 py-6">
                <SectionHeader
                    title="Stay updated with Learnify AI"
                    description="Get the latest courses, tips and updates delivered to your inbox."
                    align="left"
                />

                <form
                    className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        aria-label="Email address"
                        autoComplete="email"
                        required
                        className={inputClass}
                    />
                    <button type="submit" disabled={isLoading} className={buttonClass}>
                        {isLoading ? "Subscribing..." : "Subscribe"}
                    </button>
                </form>
            </div>
            {message && (
                <p className="mt-3 text-center text-sm text-gray-600 lg:text-right">{message}</p>
            )}
        </section>
    );
};

export default Subscribe;
