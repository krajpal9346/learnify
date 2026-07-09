import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import { ROUTES } from "../../data/routes";
import { navLinks } from "../../data/shared/navlinks";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const desktopNavLinkClass = ({ isActive }) => `font-medium transition-all duration-300 pb-1 border-b-2 ${isActive ? "text-[#6044da] border-[#6044da]" : "text-gray-700 border-transparent hover:text-[#6044da]"}`;
    const mobileNavLinkClass = ({ isActive }) => `font-medium py-2 transition-colors duration-200 ${isActive ? "text-[#6044da]" : "text-gray-700"}`;

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
                <Logo size="medium" />

                <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
                    {navLinks.map((link) => (
                        <NavLink key={link.path} to={link.path} className={desktopNavLinkClass}>
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <Link to={ROUTES.LOGIN}>
                        <button type="button" className="font-semibold px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Login</button>
                    </Link>

                    <Link to={ROUTES.STARTED}>
                        <button type="button" className="font-semibold px-5 py-2.5 bg-[#6044da] text-white rounded-lg hover:bg-[#5137c9] transition">Get Started</button>
                    </Link>
                </div>

                <button type="button" onClick={toggleMenu} className="lg:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-menu">
                    {isOpen ? (<X size={28} aria-hidden="true" />) : (<Menu size={28} aria-hidden="true" />)}
                </button>
            </div>

            {isOpen && (
                <div id="mobile-menu" className="lg:hidden bg-white border-t shadow-md">
                    <nav className="flex flex-col px-6 py-4 gap-4" aria-label="Mobile Navigation">
                        {navLinks.map((link) => (
                            <NavLink key={link.path} to={link.path} onClick={closeMenu} className={mobileNavLinkClass}>
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="flex flex-col gap-3 pt-4 border-t">
                            <Link to={ROUTES.LOGIN} onClick={closeMenu}>
                                <button type="button" className="w-full py-3 border border-gray-300 rounded-lg font-semibold">Login</button>
                            </Link>

                            <Link to={ROUTES.STARTED} onClick={closeMenu}>
                                <button type="button" className="w-full py-3 bg-[#6044da] text-white rounded-lg font-semibold">Get Started</button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;