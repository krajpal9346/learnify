import {
    Sparkles,
    ArrowRight,
    Play,
    BookOpen,
    Brain,
    Map,
    Lightbulb,
    Star,
} from "lucide-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex flex-col gap-10 bg-[#f5f2ff] justify-between items-center pb-5 pt-28 lg:pt-30 px-4 sm:px-6 md:px-10 xl:px-25 overflow-hidden">
            {/* Top Section */}
            <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-12 xl:gap-0 w-full max-w-[1600px]">
                
                {/* Left Content */}
                <div className="flex flex-col justify-center items-center xl:items-start gap-5 text-center xl:text-left max-w-2xl">
                    <p className="bg-purple-200 flex items-center justify-center text-sm gap-2 font-semibold text-[#6044da] px-5 py-1 rounded-full">
                        <Sparkles size={16} color="#6044da" />
                        AI-powered. Personalised. Progress-Driven
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
                        Learn Smarter. <br />
                        Grow Faster. <br />
                        <span className="text-[#6044da]">
                            Achieve More.
                        </span>
                    </h1>

                    <p className="text-sm sm:text-base max-w-xl">
                        Learnify AI recommends the right courses, resources and
                        projects based on your skills, goals and interests.
                        <br />
                        Your personalized learning journey starts here.
                    </p>

                    <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-8 xl:gap-15 justify-center xl:justify-start">
                        <Link to="/started" className="w-full sm:w-auto">
                            <button className="flex justify-center gap-2 items-center w-full sm:w-auto cursor-pointer bg-[#6044da] text-white px-5 xl:px-7 py-2 rounded-lg font-semibold hover:bg-[#5136d4] transition-all duration-300">
                                Get Started for Free
                                <ArrowRight
                                    size={16}
                                    color="#ffffff"
                                />
                            </button>
                        </Link>

                        <Link
                            to="/how-it-works"
                            className="w-full sm:w-auto"
                        >
                            <button className="flex justify-center gap-2 items-center w-full sm:w-auto cursor-pointer border border-[#6044da] text-[#6044da] px-5 xl:px-7 py-2 rounded-lg font-semibold hover:bg-[#6044da] hover:text-white transition-all duration-300">
                                <Play size={16} />
                                See How It Works
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-center w-full xl:w-auto">
                    
                    {/* Left Column */}
                    <div className="flex flex-col gap-8 xl:gap-20 w-full sm:w-auto">
                        <div className="flex flex-col gap-2 w-full sm:w-64 xl:w-50 bg-white rounded-3xl p-5">
                            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-[#6044da]">
                                <Sparkles
                                    size={20}
                                    color="#ffffff"
                                />
                            </div>

                            <h3 className="font-semibold">
                                AI Recommendations
                            </h3>

                            <p className="text-sm text-gray-600">
                                Personalized course recommendations just for
                                you
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 w-full sm:w-64 xl:w-50 bg-white rounded-3xl p-5">
                            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-[#f9911a]">
                                <BookOpen
                                    size={20}
                                    color="#ffffff"
                                />
                            </div>

                            <h3 className="font-semibold">
                                Personalized Playlists
                            </h3>

                            <p className="text-sm text-gray-600">
                                Curated playlists to help you learn step by
                                step.
                            </p>
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="flex flex-col items-center justify-between gap-5 xl:gap-5">
                        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <Lightbulb
                                size={24}
                                color="#6044da"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-5 w-full sm:w-80 xl:w-70 max-w-sm bg-white rounded-3xl p-5">
                            <h3 className="font-semibold">
                                Your Learning Journey
                            </h3>

                            <div className="w-32 h-32 sm:w-40 sm:h-40">
                                <CircularProgressbar
                                    value={72}
                                    text="72%"
                                    styles={{
                                        path: {
                                            stroke: "#6044da",
                                            strokeLinecap: "round",
                                        },
                                        trail: {
                                            stroke: "#ede9fe",
                                        },
                                        text: {
                                            fill: "#10123a",
                                            fontSize: "20px",
                                            fontWeight: "600",
                                        },
                                    }}
                                />
                            </div>

                            <p className="text-sm text-gray-600">
                                Keep it up! You're doing great.
                            </p>
                        </div>

                        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                            <Sparkles
                                size={24}
                                color="#6044da"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 xl:gap-20 w-full sm:w-auto">
                        <div className="flex flex-col gap-2 w-full sm:w-64 xl:w-50 bg-white rounded-3xl p-5">
                            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-[#5aa574]">
                                <Brain
                                    size={20}
                                    color="#ffffff"
                                />
                            </div>

                            <h3 className="font-semibold">
                                Skill Gap Analysis
                            </h3>

                            <p className="text-sm text-gray-600">
                                Identify gaps and get custom learning
                                suggestions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 w-full sm:w-64 xl:w-50 bg-white rounded-3xl p-5">
                            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-[#1a7bf9]">
                                <Map
                                    size={20}
                                    color="#ffffff"
                                />
                            </div>

                            <h3 className="font-semibold">
                                Career Roadmap
                            </h3>

                            <p className="text-sm text-gray-600">
                                AI generated roadmap to reach your dream
                                career.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-6 w-full">
                
                {/* Testimonials */}
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-center">
                    <div className="flex -space-x-3">
                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg"
                            alt=""
                        />

                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg"
                            alt=""
                        />

                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://aita-lab.github.io/images/Members/Alumni/ttduong/avatar.jpg"
                            alt=""
                        />

                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://pochunhsu.group/wp-content/uploads/2023/02/2022.03.090266-1459x1536.jpg"
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="flex gap-1">
                            <Star size={16} color="#f9911a" fill="#f9911a" />
                            <Star size={16} color="#f9911a" fill="#f9911a" />
                            <Star size={16} color="#f9911a" fill="#f9911a" />
                            <Star size={16} color="#f9911a" fill="#f9911a" />
                            <Star size={16} color="#f9911a" fill="#f9911a" />
                        </div>

                        <p className="text-xs text-gray-600">
                            Loved by 10,000+ learners worldwide
                        </p>
                    </div>
                </div>

                {/* Trust Text */}
                <div className="w-full text-center">
                    <p className="text-sm text-gray-700">
                        Trusted by learners from top companies and universities.
                    </p>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap justify-center xl:justify-evenly gap-6 sm:gap-8 w-full items-center">
                    <img
                        className="h-6 sm:h-8"
                        src="https://pngteam.com/images/google_logo_grayed_7-1128x376_983de733_transparent.png"
                        alt="Google"
                    />

                    <img
                        className="h-6 sm:h-8 scale-[2] sm:scale-[3] xl:scale-[4.5]"
                        src="https://th.bing.com/th/id/R.01a5a971b79dbf2b9ab498c58763f979?rik=KkU3Ym3%2BJo7rMA&riu=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fmicrosoft-logo-png-microsoft-logo-grey-krotos-500x500.png&ehk=ij63QEgvGvjXafPiQHqvtb%2B5GRZt3l6DNvdNIFVwA1k%3D&risl=&pid=ImgRaw&r=0"
                        alt="Microsoft"
                    />

                    <img
                        className="h-6 sm:h-8"
                        src="https://reginamcmichael.com/wp-content/uploads/2022/06/amazongreylogo.png"
                        alt="Amazon"
                    />

                    <img
                        className="h-6 sm:h-8 w-20 sm:w-24 xl:w-25"
                        src="https://www.pngkit.com/png/full/332-3321908_adobe-logo-01-adobe-logo-black-and-white.png"
                        alt="Adobe"
                    />

                    <img
                        className="h-6 sm:h-8"
                        src="https://zubr.co/wp-content/uploads/2024/11/Infosys_logo-grey.png"
                        alt="Infosys"
                    />

                    <img
                        className="h-6 sm:h-8"
                        src="https://vectorseek.com/wp-content/uploads/2025/04/Tata-Consultancy-Services-TCS-New-Logo-PNG-Vector.png"
                        alt="TCS"
                    />

                    <img
                        className="h-6 sm:h-8"
                        src="https://songdivision.com/wp-content/uploads/sd-origin/2018/07/Deloitte_logo_gray.png"
                        alt="Deloitte"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;