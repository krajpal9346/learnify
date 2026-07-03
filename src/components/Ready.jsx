import { ArrowRight, Sparkles, Flame } from "lucide-react";
import girl from "../assets/girl.png";
import { Link } from "react-router-dom";

const Ready = () => {
    return (
        <div className="px-5 sm:px-10 xl:px-25 pt-10 xl:pt-15">
            <div className="relative overflow-hidden bg-[#6044da] min-h-90 xl:h-85 rounded-2xl px-6 sm:px-10 xl:px-16 py-10 xl:py-0 flex flex-col xl:flex-row items-center justify-between">
                <div className="flex flex-col justify-center gap-6 w-full xl:w-[42%] text-center xl:text-left z-20">
                    <h1 className="text-3xl sm:text-4xl xl:text-4xl font-bold text-white leading-tight">Ready to accelerate<br />your learning?</h1>
                    <p className="text-base sm:text-lg text-purple-100 leading-relaxed">Join thousands of learners who are<br className="hidden xl:block" />growing every day with Learnify AI.</p>

                    <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 sm:gap-5">
                        <Link to="/started">
                            <button className="cursor-pointer flex items-center justify-center gap-2 bg-white text-[#6044da] px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                                Get Started for Free
                                <ArrowRight size={18} />
                            </button>
                        </Link>

                        <button className=" cursor-pointer px-5 py-2.5 border border-white/40 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">Explore Features</button>
                    </div>
                </div>

                <div className="relative w-full xl:w-[58%] h-105 xl:h-full flex justify-center items-end mt-10 xl:mt-0">
                    <div className="absolute top-0 left-2 sm:left-8 lg:top-10 lg:left-30 xl:top-8 xl:left-20 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                        <Sparkles size={20} color="#6044da" />

                        <div>
                            <p className="text-[10px] xl:text-xs text-gray-500">Courses Completed</p>
                            <h1 className="text-lg xl:text-xl font-bold text-gray-900">24</h1>
                            <p className="text-green-500 text-[10px] xl:text-xs font-semibold">+12 this month</p>
                        </div>
                    </div>

                    <div className="absolute top-8 right-2 sm:right-8 lg:top-25 lg:right-20 xl:top-12 xl:right-10 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                        <Flame size={20} color="#f9911a" fill="#f9911a" />

                        <div>
                            <p className="text-[10px] xl:text-xs text-gray-500">Learning Streak</p>
                            <h1 className="text-lg xl:text-xl font-bold text-gray-900">12 days</h1>
                            <p className="text-orange-500 text-[10px] xl:text-xs font-semibold">Keep going</p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 xl:bottom-10 xl:right-0 xl:left-auto xl:translate-x-0 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                        <Sparkles size={20} color="#10b981" />
                        <div>
                            <p className="text-[10px] xl:text-xs text-gray-500">Skills Mastered</p>
                            <h1 className="text-lg xl:text-xl font-bold text-gray-900">8</h1>
                            <p className="text-green-500 text-[10px] xl:text-xs font-semibold">+2 this month</p>
                        </div>
                    </div>

                    <img src={girl} alt="Student learning" className="absolute bottom-20 lg:bottom-20 xl:bottom-0 left-1/2 -translate-x-1/2 h-60 sm:h-72 xl:h-80 object-contain z-20" />
                </div>
            </div>
        </div>
    );
};

export default Ready;