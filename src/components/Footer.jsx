import { Sparkles, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col px-4 sm:px-8 xl:px-25 pb-10 pt-8 border-t border-gray-300">
            <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-16">

                {/* Left Section */}
                <div className="w-full xl:max-w-sm flex flex-col items-center xl:items-start gap-4 text-center xl:text-left">
                    <div className="flex items-center gap-3">
                        <Sparkles size={20} color="#6044da" />

                        <div>
                            <h1 className="font-bold text-xl">
                                Learnify AI
                            </h1>

                            <p className="text-sm text-gray-600">
                                AI Learning Recommender
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 max-w-sm">
                        Your AI companion for personalized learning,
                        skill growth and career success.
                    </p>

                    <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                        <img
                            className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1 object-cover"
                            src="https://tse3.mm.bing.net/th/id/OIP.THxOEB6-obvAQtmhHG67TQHaHa?cb=thumbexpctl1&w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="Facebook"
                        />

                        <img
                            className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1 object-cover"
                            src="https://tse3.mm.bing.net/th/id/OIP.RUL2_Fofw4FtaDJjFseiewHaHa?cb=thumbexpctl1&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="LinkedIn"
                        />

                        <img
                            className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1 object-cover"
                            src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                            alt="Instagram"
                        />

                        <img
                            className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1 object-cover"
                            src="https://www.seekpng.com/png/detail/385-3851035_yardstick-png.png"
                            alt="X"
                        />
                    </div>
                </div>

                {/* Links */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 xl:gap-12 text-center md:text-left">

                    {/* Product */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">
                            Product
                        </h3>

                        <Link to="/features" className="text-gray-600 hover:text-[#6044da]">
                            Features
                        </Link>

                        <Link to="/how-it-works" className="text-gray-600 hover:text-[#6044da]">
                            How It Works
                        </Link>

                        <Link to="/pricing" className="text-gray-600 hover:text-[#6044da]">
                            Pricing
                        </Link>

                        <Link to="/roadmap" className="text-gray-600 hover:text-[#6044da]">
                            Roadmap
                        </Link>

                        <Link to="/updates" className="text-gray-600 hover:text-[#6044da]">
                            Updates
                        </Link>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">
                            Resources
                        </h3>

                        <Link to="/blogs" className="text-gray-600 hover:text-[#6044da]">
                            Blogs
                        </Link>

                        <a className="text-gray-600 hover:text-[#6044da] cursor-pointer">
                            Community
                        </a>

                        <a className="text-gray-600 hover:text-[#6044da] cursor-pointer">
                            Free Resources
                        </a>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">
                            Company
                        </h3>

                        <a className="text-gray-600 hover:text-[#6044da] cursor-pointer">
                            About Us
                        </a>

                        <a className="text-gray-600 hover:text-[#6044da] cursor-pointer">
                            Contact Us
                        </a>

                        <a className="text-gray-600 hover:text-[#6044da] cursor-pointer">
                            Privacy Policy
                        </a>

                        <a className="text-gray-600 hover:text-[#6044da] cursor-pointer">
                            Terms of Service
                        </a>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">
                            Support
                        </h3>

                        <Link to="/faqs" className="text-gray-600 hover:text-[#6044da]">
                            FAQs
                        </Link>

                        <Link to="/help-center" className="text-gray-600 hover:text-[#6044da]">
                            Help Center
                        </Link>

                        <Link to="/feedback" className="text-gray-600 hover:text-[#6044da]">
                            Feedback
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-center w-full text-xs text-gray-500 pt-10 xl:pt-12 gap-1 text-center">
                <Copyright size={14} color="#8a8a8a" />
                2026 Learnify AI. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;