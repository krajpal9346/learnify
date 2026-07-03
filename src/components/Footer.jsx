import { Sparkles, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col px-5 sm:px-10 xl:px-25 py-10">
            <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-0">
                <div className="w-full xl:w-1/5 flex flex-col items-center xl:items-start justify-start gap-4 text-center xl:text-left">
                    <div className="flex items-center justify-center gap-3">
                        <Sparkles size={20} color="#6044da" />

                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">Learnify AI</h1>
                            <p className="text-sm text-gray-600">AI Learning Recommender</p>
                        </div>
                    </div>

                    <p className="text-gray-600">Your AI companion for personalized learning, skill growth and career success.</p>

                    <div className="flex gap-2">
                        <img className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1" src="https://tse3.mm.bing.net/th/id/OIP.THxOEB6-obvAQtmhHG67TQHaHa?cb=thumbexpctl1&w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3" />
                        <img className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1" src="https://tse3.mm.bing.net/th/id/OIP.RUL2_Fofw4FtaDJjFseiewHaHa?cb=thumbexpctl1&rs=1&pid=ImgDetMain&o=7&rm=3" />
                        <img className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1" src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg" />
                        <img className="cursor-pointer h-9 w-9 rounded-full border border-gray-200 p-1" src="https://www.seekpng.com/png/detail/385-3851035_yardstick-png.png" />
                    </div>
                </div>

                <div className="w-full xl:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-0 py-5">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Product</h3>

                        <Link to="/features" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer text-gray-600">
                            Features
                        </Link>
                        <Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer text-gray-600">
                            How It Works
                        </Link>
                        <Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer text-gray-600">
                            Pricing
                        </Link>
                        <Link to="/roadmap" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer text-gray-600">
                            Roadmap
                        </Link>
                        <Link to="/updates" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer text-gray-600">
                            Updates
                        </Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Resources</h3>
                        <a className="cursor-pointer text-gray-600">Blog</a>
                        <a className="cursor-pointer text-gray-600">Guides</a>
                        <a className="cursor-pointer text-gray-600">Help Center</a>
                        <a className="cursor-pointer text-gray-600">Community</a>
                        <a className="cursor-pointer text-gray-600">Free Resources</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Company</h3>
                        <a className="cursor-pointer text-gray-600">About Us</a>
                        <a className="cursor-pointer text-gray-600">Careers</a>
                        <a className="cursor-pointer text-gray-600">Contact Us</a>
                        <a className="cursor-pointer text-gray-600">Privacy Policy</a>
                        <a className="cursor-pointer text-gray-600">Terms of Service</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Support</h3>
                        <Link to="/faqs" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer text-gray-600">
                            FAQs
                        </Link>
                        <a className="cursor-pointer text-gray-600">Report an Issue</a>
                        <a className="cursor-pointer text-gray-600">Feedback</a>
                        <a className="cursor-pointer text-gray-600">Partnerships</a>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full text-xs text-gray-500 pt-10 xl:pt-15 gap-1 text-center">
                <Copyright size={14} color="#8a8a8a" />
                2026 Learnify AI. All rights reserved.
            </div>
        </div >
    );
};

export default Footer;