import Header from "../components/Header"
import { Sparkles, Flame, Brain, ArrowRight, BookOpen, ChartLine, Target, Award, Shield, LockKeyhole, ShieldCheck, User } from "lucide-react"
import girl from "../assets/girl.png"
import Footer from "../components/Footer"

const Features = () => {
    return (
        <div className="flex flex-col pb-5 pt-30">
            <Header />
            <div className="flex justify-between px-20 py-5 gap-15 h-100">
                <div className="w-4/9 flex flex-col gap-5">
                    <div className="flex gap-2 bg-purple-200 px-4 py-1 rounded-full w-fit">
                        <Sparkles color="#6044da" size={16} />
                        <p className="uppercase text-sm text-[#6044da] font-semibold">Features</p>
                    </div>
                    <h1 className="text-6xl font-bold leading-18">Powerful features <br />built for <span className="text-[#6044da]">smarter learning</span></h1>
                    <p className="text-gray-600 text-xl leading-7">Learnify AI combines the power of artificial intelligence with <br />personalized learning to help you learn smarter, stay motvated, <br />and achieve your goals.</p>
                </div>

                <div className="w-5/9">
                    <div className="relative w-full xl:w-[58%] h-105 xl:h-full flex justify-center items-end mt-10 xl:mt-0">
                        <div className="absolute top-0 left-2 sm:left-8 lg:top-10 lg:left-30 xl:top-8 xl:left-20 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                            <Sparkles size={20} color="#6044da" />

                            <div>
                                <p className="text-[10px] xl:text-xs text-gray-500">Courses Completed</p>
                                <h1 className="text-lg xl:text-xl font-bold text-gray-900">24</h1>
                                <p className="text-green-500 text-[10px] xl:text-xs font-semibold">+12 this month</p>
                            </div>
                        </div>

                        <div className="absolute top-8 right-2 sm:right-8 lg:top-25 lg:right-20 xl:top-12 xl:left-130 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                            <Flame size={20} color="#f9911a" fill="#f9911a" />

                            <div>
                                <p className="text-[10px] xl:text-xs text-gray-500">Learning Streak</p>
                                <h1 className="text-lg xl:text-xl font-bold text-gray-900">12 days</h1>
                                <p className="text-orange-500 text-[10px] xl:text-xs font-semibold">Keep going</p>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 xl:bottom-10 xl:left-160 xl:translate-x-0 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                            <Sparkles size={20} color="#10b981" />
                            <div>
                                <p className="text-[10px] xl:text-xs text-gray-500">Skills Mastered</p>
                                <h1 className="text-lg xl:text-xl font-bold text-gray-900">8</h1>
                                <p className="text-green-500 text-[10px] xl:text-xs font-semibold">+2 this month</p>
                            </div>
                        </div>

                        <img src={girl} alt="Student learning" className="absolute top-8 left-100 -translate-x-1/2 h-60 sm:h-72 xl:h-80 object-contain z-20" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 px-20 pb-5">
                <h3 className="text-2xl font-bold">Explore our core features</h3>
                <p>Everything you need to personalize, track, and elevate your learning journey.</p>

                <div className="flex w-full justify-between">
                    <div className="h-68 w-60 xl:w-80 xl:h-58 flex flex-col justify-between border border-gray-200 rounded-xl p-4">
                        <div className="flex flex-col gap-2 justify-between">
                            <div className="h-15 w-15 rounded-3xl bg-purple-100 flex justify-center items-center">
                                <Brain color="#6044da" size={28} />
                            </div>
                            <h4 className="font-semibold">AI-Powered Recommendations</h4>
                            <p className="text-sm">Get personalized course and content recommendations based on your goals, skills, and interests.</p>
                        </div>
                        <div className="flex gap-2 mt-4 items-center">
                            <a className="text-[#6044da] font-semibold text-sm">Learn more</a>
                            <ArrowRight color="#6044da" size={16} />
                        </div>
                    </div>

                    <div className="h-68 w-60 xl:w-80 xl:h-58 flex flex-col justify-between border border-gray-200 rounded-xl p-4">
                        <div className="flex flex-col gap-2 justify-between">
                            <div className="h-15 w-15 rounded-3xl bg-orange-100 flex justify-center items-center">
                                <BookOpen color="#f9911a" size={28} />
                            </div>
                            <h4 className="font-semibold">Personalized Learning Paths</h4>
                            <p className="text-sm">Custom learning paths that adapt to your pace, strengths, and learning preferences.</p>
                        </div>
                        <div className="flex gap-2 mt-4 items-center">
                            <a className="text-[#6044da] font-semibold text-sm">Learn more</a>
                            <ArrowRight color="#6044da" size={16} />
                        </div>
                    </div>

                    <div className="h-68 w-60 xl:w-80 xl:h-58 flex flex-col justify-between border border-gray-200 rounded-xl p-4">
                        <div className="flex flex-col gap-2 justify-between">
                            <div className="h-15 w-15 rounded-3xl bg-green-100 flex justify-center items-center">
                                <ChartLine size={28} color="#22c55e" />
                            </div>
                            <h4 className="font-semibold">Progress Tracking</h4>
                            <p className="text-sm">Track your progress, monitor achievements, and get insights that keep you motivated.</p>
                        </div>
                        <div className="flex gap-2 mt-4 items-center">
                            <a className="text-[#6044da] font-semibold text-sm">Learn more</a>
                            <ArrowRight color="#6044da" size={16} />
                        </div>
                    </div>

                    <div className="h-68 w-60 xl:w-80 xl:h-58 flex flex-col justify-between border border-gray-200 rounded-xl p-4">
                        <div className="flex flex-col gap-2 justify-between">
                            <div className="h-15 w-15 rounded-3xl bg-pink-200 flex justify-center items-center">
                                <Target color="#db2777" size={28} />
                            </div>
                            <h4 className="font-semibold">AI-Powered Recommendations</h4>
                            <p className="text-sm">Get personalized course and content recommendations based on your goals, skills, and interests.</p>
                        </div>
                        <div className="flex gap-2 mt-4 items-center">
                            <a className="text-[#6044da] font-semibold text-sm">Learn more</a>
                            <ArrowRight color="#6044da" size={16} />
                        </div>
                    </div>

                    <div className="h-68 w-60 xl:w-80 xl:h-58 flex flex-col justify-between border border-gray-200 rounded-xl p-4">
                        <div className="flex flex-col gap-2 justify-between">
                            <div className="h-15 w-15 rounded-3xl bg-purple-100 flex justify-center items-center">
                                <Award color="#6044da" size={28} />
                            </div>
                            <h4 className="font-semibold">Certificates & Achievements</h4>
                            <p className="text-sm">Earn certificates, badges, and recognition fr your skills and accomplishments.</p>
                        </div>
                        <div className="flex gap-2 mt-4 items-center">
                            <a className="text-[#6044da] font-semibold text-sm">Learn more</a>
                            <ArrowRight color="#6044da" size={16} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-20 pt-5">
                <div className="flex bg-purple-50 border border-purple-200 rounded-xl py-4">
                    <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                        <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-purple-100 rounded-2xl">
                            <Shield color="#6044da" size={50}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className=" text-lg font-bold">Built with trust and security</h3>
                            <p className="text-sm">Your data is safe with us. We prioritize your privacy and never share your information.</p>
                        </div>
                    </div>

                    <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                        <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-purple-100 rounded-2xl">
                            <LockKeyhole color="#6044da" size={50}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className=" text-lg font-bold">Secure & Private</h3>
                            <p className="text-sm">Your data is encrypted and nver shared with third parties.</p>
                        </div>
                    </div>

                    <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                        <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-purple-100 rounded-2xl">
                            <ShieldCheck color="#6044da" size={50}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className=" text-lg font-bold">Trusted Platform</h3>
                            <p className="text-sm">Used by 50,000+ learners worldwide to achieve their goals.</p>
                        </div>
                    </div>

                    <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                        <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-purple-100 rounded-2xl">
                            <User color="#6044da" size={50}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className=" text-lg font-bold">Learner First</h3>
                            <p className="text-sm">We're here to support your growth at every step of your learning journey.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Features
