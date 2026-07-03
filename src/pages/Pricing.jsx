import { Bookmark, RefreshCw, Shield, ShieldCheck, ArrowRight, Sparkles, Flame, Send, Check, Crown, Gem, BrainCog, X, BrainCircuit, Map, BookOpen, ClipboardList, UserRound, Medal, Headphones, Rocket } from 'lucide-react'
import Header from '../components/Header'
import bg from "../assets/bg.png"
import girl from "../assets/girl.png"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Pricing = () => {
    return (
        <div>
            <Header />
            <div className="bg-purple-100">
                <div className="w-full flex flex-col items-center px-20 mt-15 xl:mt-22 py-15 bg-cover bg-bottom bg-no-repeat"
                    style={{ backgroundImage: `url(${bg})` }}>
                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                            <div className="flex items-center justify-center">
                                <Bookmark size={16} color="#6044da" strokeWidth={2.75} />
                            </div>
                            <p className="font-semibold text-[#6044da]">Simple, Transparent Pricing</p>
                        </div>

                        <h1 className="text-5xl font-bold text-center leading-tight">Choose the perfect plan <br />for <span className="text-[#6044da]">your learning journey</span></h1>
                        <p className="text-center text-lg">Start for free. Upgrade anytime. Cancel anytime.</p>

                        <div className="flex gap-15 items-center justify-center">
                            <div className="flex items-center gap-2">
                                <ShieldCheck color="#6044da" size={16} />
                                <p className="text-sm">No credit card required</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <RefreshCw color="#6044da" size={16} />
                                <p className="text-sm">Cancel anytime</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Shield color="#6044da" size={16} />
                                <p className="text-sm">14-day money-back guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center my-10 relative">
                    <div className="flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                        <button className="px-8 py-2 rounded-full bg-[#6044da] text-white font-semibold">
                            Monthly
                        </button>

                        <button className="px-8 py-2 rounded-full text-gray-700 font-semibold">
                            Yearly
                        </button>
                    </div>

                    <div className="ml-4 px-4 py-1 bg-green-100 text-green-600 font-semibold rounded-full text-sm">
                        Save 20%
                    </div>
                </div>

                <div className="px-20 pb-12 flex justify-center items-center gap-15">
                    <div className="w-90 bg-white rounded-3xl border border-gray-200 p-5 flex flex-col gap-4">
                        <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                            <Send color="#6044da" size={28} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl font-bold">Basic</h2>
                            <p className="text-gray-500">Perfect for getting started</p>
                        </div>

                        <div className="flex items-end gap-1">
                            <h1 className="text-6xl font-bold">₹0</h1>
                            <p className="text-gray-500 mb-2">/month</p>
                        </div>

                        <p className="text-[#6044da] font-semibold">
                            Forever free
                        </p>

                        <div className="border-t border-gray-200 pt-8 flex flex-col gap-1">
                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>AI-powered learning recommendations</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Access to free courses</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Basic roadmaps</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Progress tracking</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Community access</p>
                            </div>
                        </div>

                        <button className="mt-5 border border-[#6044da] text-[#6044da] font-semibold py-4 rounded-xl">
                            Get Started Free
                        </button>
                    </div>

                    <div className="w-100 bg-white rounded-3xl border-2 border-[#6044da] p-5 flex flex-col relative shadow-xl gap-5">

                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#6044da] text-white font-semibold text-sm">
                            Most Popular
                        </div>

                        <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                            <Crown color="#6044da" size={28} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p className="text-gray-500">For serious learners</p>
                        </div>

                        <div className="flex items-end gap-1">
                            <h1 className="text-6xl font-bold">₹499</h1>
                            <p className="text-gray-500 mb-2">/month</p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <p className="text-gray-500">₹4,792 billed yearly</p>

                            <div className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
                                Save 20%
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-8 flex flex-col gap-2">
                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Everything in Basic</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>AI skill gap analysis</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Personalized learning roadmap</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Unlimited premium courses</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Practice tests & quizzes</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Priority support</p>
                            </div>
                        </div>

                        <button className="mt-5 bg-[#6044da] text-white font-semibold py-4 rounded-xl">
                            Start Pro Plan
                        </button>
                    </div>

                    <div className="w-90 bg-white rounded-3xl border border-gray-200 p-5 flex flex-col gap-4">
                        <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                            <Gem color="#6044da" size={28} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl font-bold">Premium</h2>
                            <p className="text-gray-500">For career achievers</p>
                        </div>

                        <div className="flex items-end gap-1">
                            <h1 className="text-6xl font-bold">₹999</h1>
                            <p className="text-gray-500 mb-2">/month</p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <p className="text-gray-500">₹9,592 billed yearly</p>

                            <div className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
                                Save 20%
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-8 flex flex-col gap-1">
                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Everything in Pro</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>1-on-1 AI mentor</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Advanced analytic</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Interview preparation</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Certifications</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Check size={12} color="#6044da" />
                                </div>
                                <p>Early feature access</p>
                            </div>
                        </div>

                        <button className="mt-5 border border-[#6044da] text-[#6044da] font-semibold py-4 rounded-xl">
                            Start Premium Plan
                        </button>
                    </div>
                </div>


                <div className="w-full flex items-center justify-center px-20 py-5">
                    <div className="flex flex-col bg-white w-full rounded-3xl border border-gray-300 py-5">
                        <div className="w-full flex px-10 pb-5">
                            <div className="flex flex-col justify-center w-2/5">
                                <h3 className="text-2xl font-bold">Compare Plans</h3>
                            </div>

                            <div className="flex flex-col items-center w-1/5">
                                <h3 className="text-2xl font-bold">Basic</h3>
                                <p>Rs.0/month</p>
                            </div>

                            <div className="flex flex-col items-center w-1/5">
                                <h3 className="text-2xl font-bold">Pro</h3>
                                <p>Rs.499/month</p>
                            </div>

                            <div className="flex flex-col items-center w-1/5">
                                <h3 className="text-2xl font-bold">Premium</h3>
                                <p>Rs.999/month</p>
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-t border-b border-gray-300 px-8 py-2">
                                <BrainCog color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">AI-powered learning recommendations</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-t border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-t border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-t border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-b border-gray-300 px-8 py-2">
                                <BrainCircuit color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">AI skill gap analysis</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-b border-gray-300 px-8 py-2">
                                <Map color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">Personalized learning roadmap</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <p className="text-sm">Basic roadmap</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <p className="text-sm">Advanced roadmap</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-gray-300 px-8 py-2">
                                <p className="text-sm">Advanced roadmap</p>
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-b border-gray-300 px-8 py-2">
                                <BookOpen color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">Access to premium courses</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-b border-gray-300 px-8 py-2">
                                <ClipboardList color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">Practice tests and quizzes</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-b border-gray-300 px-8 py-2">
                                <UserRound color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">1-on-1 AI mentor</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-b border-gray-300 px-8 py-2">
                                <Medal color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">Certifications</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-b border-gray-300 px-8 py-2">
                                <Headphones color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">Priority Support</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-b border-gray-300 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <div className="flex gap-3 w-2/5  items-center border-r border-gray-300 px-8 py-2">
                                <Rocket color="#6044da" size={20} stroke-width={2} />
                                <p className="text-gray-700">Early access to new features</p>
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 border-r border-gray-300 px-8 py-2">
                                <X color="#9ca3af" size={20} stroke-width={4} />
                            </div>

                            <div className="flex items-center justify-center w-1/5 px-8 py-2">
                                <Check color="#6044da" size={20} stroke-width={4} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="px-5 sm:px-10 xl:px-20 pb-10 mt-5">
                    <div className="relative overflow-hidden bg-[#6044da] min-h-10 xl:h-70 rounded-2xl px-6 sm:px-10 xl:px-16 flex flex-col xl:flex-row items-center justify-between">
                        <div className="flex flex-col justify-center gap-6 w-full xl:w-[45%] text-center xl:text-left z-20">
                            <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-bold text-white">Not sure which plan is right for you?</h1>
                            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">Start with a free plan and upgrade when you're ready.</p>

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

export default Pricing