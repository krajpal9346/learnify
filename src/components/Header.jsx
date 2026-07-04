import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Roadmap", path: "/roadmap" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Pricing", path: "/pricing" },
        { name: "FAQs", path: "/faqs" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex gap-3 items-center shrink-0"
                >
                    <Sparkles className="text-[#6044da]" />

                    <div className="flex flex-col leading-tight">
                        <h1 className="text-lg sm:text-xl font-bold">
                            Learnify AI
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500">
                            AI Learning Recommender
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `font-medium transition-all duration-300 pb-1 border-b-2 ${
                                    isActive
                                        ? "text-[#6044da] border-[#6044da]"
                                        : "text-gray-700 border-transparent hover:text-[#6044da]"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <Link to="/login">
                        <button className="font-semibold px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                            Login
                        </button>
                    </Link>

                    <Link to="/started">
                        <button className="font-semibold px-5 py-2.5 bg-[#6044da] text-white rounded-lg hover:bg-[#5137c9] transition">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden"
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t shadow-md">
                    <nav className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `font-medium py-2 ${
                                        isActive
                                            ? "text-[#6044da]"
                                            : "text-gray-700"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="flex flex-col gap-3 pt-4 border-t">
                            <Link to="/login">
                                <button className="w-full py-3 border border-gray-300 rounded-lg font-semibold">
                                    Login
                                </button>
                            </Link>

                            <Link to="/started">
                                <button className="w-full py-3 bg-[#6044da] text-white rounded-lg font-semibold">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;