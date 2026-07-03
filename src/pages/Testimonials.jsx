import { BookOpen, Medal, Rocket, Star, UsersRound, ChevronLeft, ChevronRight, Quote, Flag, CodeXml, Trophy, ArrowRight, Sparkles, Flame } from "lucide-react"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import girl from "../assets/girl.png"
import Footer from "../components/Footer"

const Testimonials = () => {
    return (
        <div>
            <Header />
            <div className="w-full">
                <div className="w-full flex justify-between items-start bg-purple-50 px-20 pb-5 pt-30">
                    <div className="relative w-1/5 h-48">
                        <div className="absolute left-0 top-0 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img className="rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                            </div>
                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl">
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                            </div>
                        </div>

                        <div className="absolute right-[-10%] top-25 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img className="rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                            </div>
                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl">
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                            </div>
                        </div>
                    </div>

                    <div className="w-3/5 flex flex-col items-center gap-5">
                        <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                            <div className="flex items-center justify-center">
                                <UsersRound size={16} color="#6044da" strokeWidth={2.75} />
                            </div>
                            <p className="font-semibold text-[#6044da]">Trusted by learners worldwide</p>
                        </div>

                        <h1 className="text-5xl font-bold text-center">Turn Learning Goals<br />Into <span className="text-[#6044da]">Career Wins</span></h1>
                        <p className="text-center text-gray-600">See how students, professionals, and career switchers <br />used AI-powered learning to achieve their goals faster.</p>
                    </div>

                    <div className="relative w-1/5 h-48">
                        <div className="absolute left-[-20%] top-0 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img className="rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                            </div>
                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl">
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                            </div>
                        </div>

                        <div className="absolute right-0 top-25 h-18 flex items-center">
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img className="rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                            </div>
                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl">
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-40 py-10 flex justify-between">
                    <div className="flex gap-6">
                        <div className="flex items-center justify-center h-15 w-15 p-2 rounded-full bg-white border border-gray-300">
                            <Medal color="#6044da" size={38} stroke-width={2.50} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#6044da] font-bold"><span className="text-4xl">4.9/</span><span className="text-2xl">5</span></h3>
                            <p className="text-gray-700 text-sm">Average Rating</p>
                            <div className="flex gap-1 mt-2">
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                                <Star size={16} color="#6044da" fill="#6044da" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex items-center justify-center h-15 w-15 p-2 rounded-full bg-white border border-gray-300">
                            <UsersRound color="#6044da" size={38} stroke-width={2.50} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#6044da] font-bold"><span className="text-4xl">10,000+</span></h3>
                            <p className="text-gray-700 text-sm">Learners</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex items-center justify-center h-15 w-15 p-2 rounded-full bg-white border border-gray-300">
                            <Rocket color="#6044da" size={38} stroke-width={2.50} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#6044da] font-bold"><span className="text-4xl">2,500+</span></h3>
                            <p className="text-gray-700 text-sm">Career Goals Achieved</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex items-center justify-center h-15 w-15 p-2 rounded-full bg-white border border-gray-300">
                            <BookOpen color="#6044da" size={38} stroke-width={2.50} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[#6044da] font-bold"><span className="text-4xl">1M+</span></h3>
                            <p className="text-gray-700 text-sm">Learning Hours</p>
                        </div>
                    </div>
                </div>
                <div className="px-20 pb-12 flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold text-center">
                        What Our Learners Say
                    </h1>

                    <p className="text-gray-600 text-center">
                        Real stories from real people who transformed their learning journey.
                    </p>

                    <div className="w-full mt-8 flex items-center justify-between">
                        <button className="cursor-pointer h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-purple-50 transition">
                            <ChevronLeft size={22} color="#6044da" stroke-width={2.5} />
                        </button>

                        <div className="w-1/4 h-80 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                            <div className="flex flex-col gap-5">
                                <Quote color="#6044da" size={36} fill="#6044da" />

                                <p className="text-gray-700">
                                    Learnify helped me identify exactly what I needed to learn for
                                    data science internships. I landed my first internship within
                                    three months.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <img
                                    className="h-14 w-14 rounded-full object-cover"
                                    src="https://i.pravatar.cc/100?img=5"
                                />

                                <div>
                                    <h4 className="font-bold text-lg">Ananya S.</h4>
                                    <p className="text-gray-500 text-sm">
                                        Computer Science Student
                                    </p>

                                    <div className="flex gap-1 mt-2">
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 h-80 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                            <div className="flex flex-col gap-5"><Quote color="#6044da" size={36} fill="#6044da" />

                                <p className="text-gray-700">
                                    The AI recommendations are surprisingly accurate. Instead of
                                    spending hours deciding what to study, I simply follow my
                                    roadmap.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <img
                                    className="h-14 w-14 rounded-full object-cover"
                                    src="https://i.pravatar.cc/100?img=12"
                                />

                                <div>
                                    <h4 className="font-bold text-lg">Rohan P.</h4>
                                    <p className="text-gray-500 text-sm">
                                        Software Engineer
                                    </p>

                                    <div className="flex gap-1 mt-2">
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/4 h-80 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                            <div className="flex flex-col gap-5"><Quote color="#6044da" size={36} fill="#6044da" />

                                <p className="text-gray-700">
                                    The skill-gap analysis showed me exactly what I was missing to
                                    move into machine learning.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 ">
                                <img
                                    className="h-14 w-14 rounded-full object-cover"
                                    src="https://i.pravatar.cc/100?img=32"
                                />

                                <div>
                                    <h4 className="font-bold text-lg">Mehak K.</h4>
                                    <p className="text-gray-500 text-sm">
                                        Aspiring ML Engineer
                                    </p>

                                    <div className="flex gap-1 mt-2">
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                        <Star size={14} color="#6044da" fill="#6044da" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="cursor-pointer h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-purple-50 transition">
                            <ChevronRight size={22} color="#6044da" stroke-width={2.5} />
                        </button>
                    </div>
                </div>

                <div className="px-20 py-10 flex flex-col items-center justify-center gap-4">
                    <div className="w-full px-15 py-5 flex gap-5 items-center justify-between bg-purple-100 rounded-2xl">
                        <div className="w-150 flex flex-col gap-5">
                            <h3 className="text-4xl font-bold">A Typical Learnify Journey</h3>
                            <p className="text-gray-700">From curiosity to career success -<br />here's ho our learners grow.</p>
                        </div>

                        <div className="h-50 w-250 flex gap-5 items-center justify-center">
                            <div className="h-40 w-40 flex flex-col gap-3 items-center">
                                <div className="h-18 w-18 flex items-center justify-center bg-white rounded-full border border-gray-200">
                                    <Flag color="#6044da" size={38} stroke-width={2.75} />
                                </div>
                                <div className="flex flex-col h-10 justify-between items-center">
                                    <p className="text-center text-lg font-bold text-[#6044da]">January</p>
                                    <p className="text-center text-gray-700">Started Learning Python</p>
                                </div>
                            </div>

                            <div className="h-40 w-40 flex flex-col gap-3 items-center">
                                <div className="h-18 w-18 flex items-center justify-center bg-white rounded-full border border-gray-200">
                                    <BookOpen color="#6044da" size={38} stroke-width={2.75} />
                                </div>
                                <div className="flex flex-col h-10 justify-between items-center">
                                    <p className="text-center text-lg font-bold text-[#6044da]">March</p>
                                    <p className="text-center text-gray-700">Completed Data Structures</p>
                                </div>
                            </div>

                            <div className="h-40 w-40 flex flex-col gap-3 items-center">
                                <div className="h-18 w-18 flex items-center justify-center bg-white rounded-full border border-gray-200">
                                    <CodeXml color="#6044da" size={38} stroke-width={2.75} />
                                </div>
                                <div className="flex flex-col h-10 justify-between items-center">
                                    <p className="text-center text-lg font-bold text-[#6044da]">May</p>
                                    <p className="text-center text-gray-700">Built <br />Projects</p>
                                </div>
                            </div>

                            <div className="h-40 w-40 flex flex-col gap-3 items-center">
                                <div className="h-18 w-18 flex items-center justify-center bg-white rounded-full border border-gray-200">
                                    <Trophy color="#6044da" size={38} stroke-width={2.75} />
                                </div>
                                <div className="flex flex-col h-10 justify-between items-center">
                                    <p className="text-center text-lg font-bold text-[#6044da]">July</p>
                                    <p className="text-center text-gray-700">Got Internship <br />Offer 🎉</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-20 pb-10 flex flex-col items-center justify-center gap-4">
                    <div className="w-full px-15 py-10 flex gap-5 items-center justify-between bg-purple-100 rounded-2xl">
                        <div className=" items-center w-170 flex gap-10">
                            <div className="h-18 w-18 flex items-center justify-center bg-[#6044da] rounded-full shrink-0">
                                <UsersRound color="#ffffff" size={35} stroke-width={2.75} />
                            </div>
                            <h3 className="text-3xl font-bold">Join a growing community of learners building skills every single day.</h3>
                        </div>

                        <div className="flex gap-10 items-center">
                            <div className="flex -space-x-3">
                                <img className="h-15 w-15 rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                                <img className="h-15 w-15 rounded-full" src="https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg" />
                                <img className="h-15 w-15 rounded-full" src="https://aita-lab.github.io/images/Members/Alumni/ttduong/avatar.jpg" />
                                <img className="h-15 w-15 rounded-full" src="https://pochunhsu.group/wp-content/uploads/2023/02/2022.03.090266-1459x1536.jpg" />
                                <img className="h-15 w-15 rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                                <img className="h-15 w-15 rounded-full" src="https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg" />
                                <div className="h-15 w-15 rounded-full bg-white border border-gray-400 justify-end flex items-center text-lg text-[#6044da] font-bold">+10  ..</div>
                                <div className="h-15 w-15 rounded-full bg-white border-r border-b border-t border-gray-400 justify-start flex items-center text-lg text-[#6044da] font-bold">,000</div>
                            </div>

                            <div className="w-30">
                                <p className="text-center text-lg text-gray-600">and thousands more worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-5 sm:px-10 xl:px-20">
                    <div className="relative overflow-hidden bg-[#6044da] min-h-10 xl:h-70 rounded-2xl px-6 sm:px-10 xl:px-16 flex flex-col xl:flex-row items-center justify-between">
                        <div className="flex flex-col justify-center gap-6 w-full xl:w-[45%] text-center xl:text-left z-20">
                            <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-bold text-white">Ready to write your <br/>own success story?</h1>
                            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">Start your personalized learning journey today.</p>

                            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 sm:gap-5">
                                <Link to="/started">
                                    <button className="cursor-pointer flex items-center justify-center gap-2 bg-white text-[#6044da] px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                                        Get Started for Free
                                        <ArrowRight size={18} />
                                    </button>
                                </Link>

                                <button className="cursor-pointer px-5 py-2.5 border border-white/40 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">Explore Features</button>
                            </div>
                        </div>

                        <div className="relative w-full xl:w-[58%] h-80 flex justify-center items-end mt-10 xl:mt-0">
                            <div className="absolute top-0 left-2 sm:left-8 lg:top-10 lg:left-30 xl:top-12 xl:left-20 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                                <Sparkles size={20} color="#6044da" />

                                <div>
                                    <p className="text-[10px] xl:text-xs text-gray-500">Courses Completed</p>
                                    <h1 className="text-lg xl:text-xl font-bold text-gray-900">24</h1>
                                    <p className="text-green-500 text-[10px] xl:text-xs font-semibold">+12 this month</p>
                                </div>
                            </div>

                            <div className="absolute top-8 right-2 sm:right-8 lg:top-25 lg:right-20 xl:top-15 xl:right-10 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                                <Flame size={20} color="#f9911a" fill="#f9911a" />

                                <div>
                                    <p className="text-[10px] xl:text-xs text-gray-500">Learning Streak</p>
                                    <h1 className="text-lg xl:text-xl font-bold text-gray-900">12 days</h1>
                                    <p className="text-orange-500 text-[10px] xl:text-xs font-semibold">Keep going</p>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 xl:bottom-12 xl:right-0 xl:left-auto xl:translate-x-0 flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30">
                                <Sparkles size={20} color="#10b981" />
                                <div>
                                    <p className="text-[10px] xl:text-xs text-gray-500">Skills Mastered</p>
                                    <h1 className="text-lg xl:text-xl font-bold text-gray-900">8</h1>
                                    <p className="text-green-500 text-[10px] xl:text-xs font-semibold">+2 this month</p>
                                </div>
                            </div>

                            <img src={girl} alt="Student learning" className="absolute bottom-20 lg:bottom-20 xl:bottom-0 left-1/2 -translate-x-1/2 h-50 sm:h-68 xl:h-70 object-contain z-20" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Testimonials