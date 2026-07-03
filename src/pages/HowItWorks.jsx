import Header from "../components/Header"
import { Settings, UserRoundCheck, ArrowRight, FileCheckCorner, Target, MonitorPlay, Trophy, Brain, ShieldCheck, Zap, ChartNoAxesCombined, PlayCircle } from "lucide-react"
import laptop from '../assets/laptop.png'
import Footer from "../components/Footer"

const HowItWorks = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center gap-5 px-20 pt-30">
                <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                    <div className="flex items-center justify-center">
                        <Settings size={16} color="#6044da" strokeWidth={2.75} />
                    </div>
                    <p className="font-semibold text-[#6044da]">Simple. Smart. Personalized.</p>
                </div>

                <h1 className="text-5xl font-bold">How <span className="text-[#6044da]">Learnify AI</span> Works</h1>
                <p className="text-gray-600">Our AI analyzes your profile, understands your goals, <br />and recommends the perfect learning path just for you.</p>

                <div className="flex w-full justify-between h-75 py-2 mt-5">
                    <div className="w-70 flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 font-semibold text-lg rounded-full bg-[#6044da] text-white">
                            1
                        </div>
                        <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-white border border-gray-200">
                            <UserRoundCheck color="#6044da" size={55} />
                        </div>
                        <h5 className="text-center text-lg font-semibold">Create Your Profile</h5>
                        <p className="text-center text-gray-600">Sign up and tell us about your skills, interests, experience and learning goals.</p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <ArrowRight color="#6044da" size={40} />
                    </div>

                    <div className="w-70 flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 font-semibold text-lg rounded-full bg-[#6044da] text-white">
                            2
                        </div>
                        <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-white border border-gray-200">
                            <FileCheckCorner color="#6044da" size={55} />
                        </div>
                        <h5 className="text-center text-lg font-semibold">AI Analyzes You</h5>
                        <p className="text-center text-gray-600">Our AI analyzes your data and understands your strengths, weaknesses and preferences.</p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <ArrowRight color="#6044da" size={40} />
                    </div>

                    <div className="w-70 flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 font-semibold text-lg rounded-full bg-[#6044da] text-white">
                            3
                        </div>
                        <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-white border border-gray-200">
                            <Target color="#6044da" size={55} />
                        </div>
                        <h5 className="text-center text-lg font-semibold">Get Personalized Recommendations</h5>
                        <p className="text-center text-gray-600">Receive a curated list of courses, resources and learning paths customized for you.</p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <ArrowRight color="#6044da" size={40} />
                    </div>

                    <div className="w-70 flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 font-semibold text-lg rounded-full bg-[#6044da] text-white">
                            4
                        </div>
                        <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-white border border-gray-200">
                            <MonitorPlay color="#6044da" size={55} />
                        </div>
                        <h5 className="text-center text-lg font-semibold">Learn & Track Progress</h5>
                        <p className="text-center text-gray-600">Start learning with top-rated content and track your progress in real time.</p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <ArrowRight color="#6044da" size={40} />
                    </div>

                    <div className="w-70 flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 font-semibold text-lg rounded-full bg-[#6044da] text-white">
                            5
                        </div>
                        <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-white border border-gray-200">
                            <Trophy color="#6044da" size={55} />
                        </div>
                        <h5 className="text-center text-lg font-semibold">Achieve Your Goals</h5>
                        <p className="text-center text-gray-600">Stay consistent, earn badges and achieve your personal learning goals.</p>
                    </div>
                </div>

                <div className="py-5">
                    <div className="flex bg-purple-100 border border-purple-200 rounded-xl py-4">
                        <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                            <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-purple-50 rounded-2xl">
                                <Brain color="#6044da" size={50} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className=" text-lg font-bold">AI-Powered</h3>
                                <p className="text-sm">Advanced algorithms that understnd you better.</p>
                            </div>
                        </div>

                        <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                            <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-green-50 rounded-2xl">
                                <ShieldCheck color="#16a34a" size={50} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className=" text-lg font-bold">Highly Personalized</h3>
                                <p className="text-sm">Recommendations tailored just for your unique goals.</p>
                            </div>
                        </div>

                        <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                            <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-orange-50 rounded-2xl">
                                <Zap color="#f97316" size={50} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className=" text-lg font-bold">Trusted Platform</h3>
                                <p className="text-sm">Used by 50,000+ learners worldwide to achieve their goals.</p>
                            </div>
                        </div>

                        <div className="w-1/4 flex gap-5 border-r border-purple-200 px-8 py-5">
                            <div className="shrink-0 flex items-center justify-center h-18 w-18 bg-blue-50 rounded-2xl">
                                <ChartNoAxesCombined color="#0000ff" size={50} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className=" text-lg font-bold">Better Results</h3>
                                <p className="text-sm">Focused learning paths lead to better outcomes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex justify-between h-60 w-full bg-purple-100 border border-purple-200 rounded-xl py-8 px-10">
                        <div className="flex flex-col justify-between">
                            <h3 className="text-3xl font-bold">Ready to start your personalized learning journey?</h3>
                            <p>Join thousands of learners who are already growing with Learnify AI.</p>
                            <div className="flex gap-5">
                                <button className="px-5 py-2 bg-[#6044da] rounded-xl text-white font-semibold cursor-pointer">Get Started for Free</button>
                                <button className="bg-white flex gap-2 px-5 py-2 text-gray-700 border border-gray-300 font-semibold rounded-xl cursor-pointer">
                                    <div className="flex items-center justify-center">
                                        <PlayCircle color="#6044da" size={18}/>
                                    </div>
                                    <p>Watch Demo</p>
                                </button>
                            </div>
                        </div>

                        <div className="w-1/2 flex items-center justify-center">
                            <img className="h-full scale-250" src={laptop}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HowItWorks
