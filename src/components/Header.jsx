import { Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 bg-white z-50 w-full px-5 sm:px-8 lg:px-25 py-5 flex justify-between items-center">
            <div className="flex gap-3 items-center justify-center shrink-0">
                <Sparkles color="#6044da" />

                <div className="flex flex-col">
                    <h1 className="text-lg sm:text-xl font-bold">Learnify AI</h1>
                    <p className="text-xs sm:text-sm">AI Learning Recommender</p>
                </div>
            </div>

            <nav className="hidden lg:flex w-1/2 justify-between">
            <NavLink to="/" className={({ isActive }) => `text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#6044da] border-b-2 border-[#6044da] px-2" : "text-black hover:text-[#6044da] border-b-2 border-transparent"}`}>
                    Home
                </NavLink>
                <NavLink to="/features" className={({ isActive }) => `text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#6044da] border-b-2 border-[#6044da] px-2" : "text-black hover:text-[#6044da] border-b-2 border-transparent"}`}>
                    Features
                </NavLink>
                <NavLink to="/how-it-works" className={({ isActive }) => `text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#6044da] border-b-2 border-[#6044da] px-2" : "text-black hover:text-[#6044da] border-b-2 border-transparent"}`}>
                    How It Works
                </NavLink>
                <NavLink to="/roadmap" className={({ isActive }) => `text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#6044da] border-b-2 border-[#6044da] px-2" : "text-black hover:text-[#6044da] border-b-2 border-transparent"}`}>
                    Roadmap
                </NavLink>
                <NavLink to="/testimonials" className={({ isActive }) => `text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#6044da] border-b-2 border-[#6044da] px-2" : "text-black hover:text-[#6044da] border-b-2 border-transparent"}`}>
                    Testimonials
                </NavLink>
                <NavLink to="/pricing" className={({ isActive }) => `text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#6044da] border-b-2 border-[#6044da] px-2" : "text-black hover:text-[#6044da] border-b-2 border-transparent"}`}>
                    Pricing
                </NavLink>
                <NavLink to="/faqs" className={({ isActive }) => `text-lg font-semibold transition-colors duration-200 ${isActive ? "text-[#6044da] border-b-2 border-[#6044da] px-2" : "text-black hover:text-[#6044da] border-b-2 border-transparent"}`}>
                    FAQs
                </NavLink>
            </nav>

            <div className="flex gap-2 sm:gap-3 lg:gap-5 shrink-0">
                <Link to="/login">
                    <button className="text-sm sm:text-base lg:text-lg font-semibold cursor-pointer px-3 sm:px-4 lg:px-5 py-2 border border-gray-300 rounded-lg">
                        Login
                    </button>
                </Link>
                <Link to="/started">
                    <button className="text-sm sm:text-base lg:text-lg font-semibold cursor-pointer px-3 sm:px-4 lg:px-5 py-2 border bg-[#6044da] text-white rounded-lg">Get Started</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;