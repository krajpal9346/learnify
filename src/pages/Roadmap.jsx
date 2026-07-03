import Header from "../components/Header"
import { BookOpen, CircleCheckBig, Check, CheckCircle, ChartNoAxesColumnIncreasing, Rocket, Circle, Lightbulb, Target, Sparkle, Mail, GraduationCap, NotebookTabs, UsersRound, Trophy } from "lucide-react"
import flag from "../assets/flag.png"
import rocket from "../assets/rocket.png"
import Footer from "../components/Footer"

const Roadmap = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center gap-5 bg-purple-50 px-20 pb-5 pt-30">
                <div className="flex justify-between w-full px-10 h-45 items-center">
                    <img className="h-50" src={flag}/>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                            <div className="flex items-center justify-center">
                                <BookOpen size={16} color="#6044da" strokeWidth={2.75} />
                            </div>
                            <p className="font-semibold text-[#6044da]">Our Journey to Transform Learning</p>
                        </div>

                        <h1 className="text-5xl font-bold"><span className="text-[#6044da]">Learnify AI</span> Roadmap</h1>
                        <p className="text-gray-600">We're on a mission to make personalized learning accessible to everyone.<br />Here's what we have accomplished and what's coming next.</p>
                    </div>
                    <img className="h-50" src={rocket}/>
                </div>

                <div className="w-full xl:w-400 flex justify-between mt-5 py-5">
                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex items-center justify-center h-15 w-15 rounded-full border bg-green-50 border-gray-200 p-2">
                            <CircleCheckBig color="#16a34a" size={40} stroke-width={2.50}/>
                        </div>

                        <div className="w-65 h-75 flex flex-col gap-3 p-4 rounded-2xl items-center border border-green-300">
                            <p className="items-center justify-center flex gap-1 bg-green-100 px-3 py-1 uppercase rounded-full text-xs font-bold text-[#16a34a]"><Check color="#16a34a" size={16} stroke-width={2.75}/>Completed</p>
                            <div className="flex flex-col">
                                <h6 className="text-sm text-center font-bold text-[#16a34a]">Phase 1</h6>
                                <h4 className="text-center text-xl text-[#16a34a] font-bold">Foundation</h4>
                                <p className="text-center text-gray-700">Q1 2024</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#16a34a" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">AI Recommendation Engine v1</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#16a34a" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">User Onboarding & Profiling</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#16a34a" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Course Database Integration</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#16a34a" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Basic Personalized Feed</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#16a34a" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Progress Tracking</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#16a34a" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Web Platform Launch</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex items-center justify-center h-15 w-15 rounded-full border bg-blue-50 border-gray-200 p-2">
                            <ChartNoAxesColumnIncreasing color="#2563eb" size={40} stroke-width={3.50}/>
                        </div>

                        <div className="w-65 h-75 flex flex-col gap-3 p-4 rounded-2xl items-center border border-blue-300">
                            <p className="items-center justify-center flex gap-1 bg-blue-100 px-3 py-1 uppercase rounded-full text-xs font-bold text-[#2563eb]"><Check color="#2563eb" size={16} stroke-width={2.75}/>Completed</p>
                            <div className="flex flex-col">
                                <h6 className="text-sm text-center font-bold text-[#2563eb]">Phase 2</h6>
                                <h4 className="text-center text-xl text-[#2563eb] font-bold">Enhancement</h4>
                                <p className="text-center text-gray-700">Q2 2024</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#2563eb" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Advanced AI Algorithms</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#2563eb" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Learning Path Generation</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#2563eb" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Skill Gap Analysis</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#2563eb" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Smart Content Filtering</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#2563eb" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Email Notifications</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#2563eb" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Mobile Responsive UI</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex items-center justify-center h-15 w-15 rounded-full border bg-purple-100 border-gray-200 p-2">
                            <Rocket color="#6044da" size={40} stroke-width={2.50}/>
                        </div>

                        <div className="w-65 h-75 flex flex-col gap-3 p-4 rounded-2xl items-center border border-purple-300">
                            <p className="items-center justify-center flex gap-1 bg-purple-100 px-3 py-1 uppercase rounded-full text-xs font-bold text-[#6044da]"><Circle color="#6044da" size={16} stroke-width={2.75} fill="#6044da"/>In progress</p>
                            <div className="flex flex-col">
                                <h6 className="text-sm text-center font-bold text-[#6044da]">Phase 3</h6>
                                <h4 className="text-center text-xl text-[#6044da] font-bold">Personalization+</h4>
                                <p className="text-center text-gray-700">Q3 2024 - Q4 2024</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#6044da" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Learning Style Detection</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#6044da" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Adaptive Content Difficulty</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <CheckCircle color="#6044da" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Real-time Recommendations</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#6044da" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">AI mentor (Beta)</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#6044da" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Voice Search</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#6044da" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Deep Analytics Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex items-center justify-center h-15 w-15 rounded-full border bg-orange-50 border-gray-200 p-2">
                            <Lightbulb color="#f97316" size={40} stroke-width={2.50}/>
                        </div>

                        <div className="w-65 h-75 flex flex-col gap-3 p-4 rounded-2xl items-center border border-orange-300">
                            <p className="items-center justify-center flex gap-1 bg-orange-100 px-3 py-1 uppercase rounded-full text-xs font-bold text-[#f97316]"><Circle color="#f97316" size={16} stroke-width={2.75} fill="#f97316"/>Upcoming</p>
                            <div className="flex flex-col">
                                <h6 className="text-sm text-center font-bold text-[#f97316]">Phase 4</h6>
                                <h4 className="text-center text-xl text-[#f97316] font-bold">Smart Learning</h4>
                                <p className="text-center text-gray-700">Q1 2025 - Q2 2025</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <Circle color="#f97316" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">AI Tutor (Chat-based)</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#f97316" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Interactive Practice Engine</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#f97316" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Peer Learning Communities</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#f97316" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Gamification & Rewards</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#f97316" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Certificates & Achievements</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#f97316" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Offline Learning Mode</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex items-center justify-center h-15 w-15 rounded-full border bg-pink-100 border-gray-200 p-2">
                            <Target color="#db2777" size={40} stroke-width={2.50}/>
                        </div>

                        <div className="w-65 h-75 flex flex-col gap-3 p-4 rounded-2xl items-center border border-pink-300">
                            <p className="items-center justify-center flex gap-1 bg-pink-100 px-3 py-1 uppercase rounded-full text-xs font-bold text-[#db2777]"><Circle color="#db2777" size={16} stroke-width={2.75} fill="#db2777"/>Upcoming</p>
                            <div className="flex flex-col">
                                <h6 className="text-sm text-center font-bold text-[#db2777]">Phase 5</h6>
                                <h4 className="text-center text-xl text-[#db2777] font-bold">Future Vision</h4>
                                <p className="text-center text-gray-700">Q3 2025 and beyond</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <Circle color="#db2777" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">AR/VR Immersive Learning</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#db2777" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Global Multi-language Support</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#db2777" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Career Path Prediction</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#db2777" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Employer Connect</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#db2777" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Marketplace for Creators</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Circle color="#db2777" size={16} stroke-width={2.75}/>
                                    <p className="text-sm text-gray-700">Lifelong Learning Ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 w-full h-55 bg-purple-100 px-20 py-8 rounded-2xl">
                    <div className="flex gap-5 w-2/3 items-center">
                        <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                            <Sparkle color="#6044da" size={40} stroke-width={2.50}/>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="font-bold text-2xl">The best learning experience is yet to come</h3>
                            <p className="text-sm text-gray-700">We're building the future of personalized learning with AI at the core.<br/>Join us on this journey!</p>
                            <div className="flex gap-5">
                                <button className="px-4 py-2 rounded-lg bg-[#6044da] text-white font-semibold">Get Started for Free</button>
                                <button className="flex gap-2 px-4 py-2 rounded-lg bg-white border border-[#6044da] text-[#6044da] font-semibold items-center">
                                    <Mail color="#6044da" size={18}/>
                                    <p>Join the Waitlist</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full flex w-1/2">
                        <div className="absolute left-0 bottom-0 h-15 w-15 rounded-xl bg-white flex items-center justify-center border border-gray-300">
                            <GraduationCap size={32} color="#8B5CF6"/>
                        </div>
                        <div className="absolute left-20 bottom-15 h-15 w-15 rounded-xl bg-white flex items-center justify-center border border-gray-300">
                            <NotebookTabs size={32} color="#8B5CF6" className="rotate-90"/>
                        </div>
                        <img className="absolute left-30 h-40 scale-160" src={flag}/>
                        <div className="absolute right-20 bottom-15 h-15 w-15 rounded-xl bg-white flex items-center justify-center border border-gray-300">
                            <UsersRound size={32} color="#8B5CF6"/>
                        </div>
                        <div className="absolute right-0 bottom-0 h-15 w-15 rounded-xl bg-white flex items-center justify-center border border-gray-300">
                            <Trophy size={32} color="#8B5CF6" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Roadmap