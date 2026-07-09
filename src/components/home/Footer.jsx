import { Copyright, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import { footerSections } from "../../data/shared/footerSections";
import { socialLinks } from "../../data/shared/socialLinksData";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const linkClass = "text-gray-600 hover:text-[#6044da] transition-colors duration-200";
    const socialClass = "cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1 object-cover transition-transform duration-200 hover:scale-105";

    return (
        <footer className="flex flex-col px-4 sm:px-8 xl:px-25 pb-10 pt-8 border-t border-gray-300">
            <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-16">
                <div className="w-full xl:max-w-sm flex flex-col items-center xl:items-start gap-4 text-center xl:text-left">
                    <Logo variant="dark" />
                    <p className="text-gray-600 max-w-sm">Your AI companion for personalized learning, skill growth and career success.</p>

                    <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                        {socialLinks.map((social) => (
                            <img key={social.name} loading="lazy" width="36" height="36" src={social.image} alt={social.name} aria-label={social.name} className={socialClass} />
                        ))}
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 xl:gap-12 text-center md:text-left">
                    {footerSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg">{section.title}</h3>

                            {section.links.map((link) => (
                                <Link key={link.path} to={link.path} className={linkClass}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center w-full text-xs text-gray-500 pt-10 xl:pt-12 gap-1 text-center">
                    Made with
                    <Heart size={12} color="#ff0000" fill="#ff0000" />
                    for learners.
                </div>

                <div className="flex items-center justify-center w-full text-xs text-gray-500 gap-1 text-center">
                    <Copyright size={14} className="text-gray-500" />
                    {currentYear} Learnify AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;