import { BookOpen, Brain, ChartNoAxesCombined, CodeXml, ExternalLink, Flag, Globe, Lightbulb, NotebookPen, Search, Shield, Sprout, Target, UserRound, UsersRound } from "lucide-react"
import girl from "../assets/girl.png"

const AboutUs = () => {
    return (
        <section className="pt-20">
            <div className="flex gap-20 px-30 py-10 bg-purple-50">
                <div className="w-1/2 flex flex-col gap-5">
                    <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                        <p className="font-semibold text-[#6044da] text-sm sm:text-base">About Us</p>
                    </div>

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">Empowering learners with AI, for a better <span className="text-[#6044da]">tomorrow</span></h1>
                    <p className="text-gray-600 text-sm sm:text-base mt-3">Learnify AI is built to make learning smarter, personalized, and accessible for everyone. Our AI-powered recommendations help you learn the right skills, at the right time, in the right way.</p>
                    <button className="bg-[#6044da] rounded-xl mt-2 text-white items-center font-semibold flex gap-2 px-8 py-3 w-fit">
                        Get Started Today
                        <ExternalLink size={20} />
                    </button>
                </div>

                <div className="w-1/2 h-80 flex items-center justify-center">
                    <NotebookPen color="#6044da" size={220} />
                </div>
            </div>

            <div className="px-30 py-10 flex flex-col gap-10 items-center">
                <div className="items-center flex flex-col gap-3">
                    <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                        <p className="font-semibold text-[#6044da] text-sm sm:text-base">Our Values</p>
                    </div>
                    <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold leading-tight">What Drives Us</h1>
                    <p className="text-gray-600 text-sm sm:text-base">We are guided by a set of core values that shape everything we do.</p>
                </div>

                <div className="flex gap-5 items-center">
                    <div className="w-75 border border-gray-200 rounded-xl items-center p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-200">
                            <UserRound color="#6044da" size={50} />
                        </div>
                        <h3 className="font-bold text-xl text-center">Learner First</h3>
                        <p className="text-gray-700 text-center">We put learners at the heart of everything we build.</p>
                    </div>

                    <div className="w-75 border border-gray-200 rounded-xl items-center p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-200">
                            <Target color="#6044da" size={50} />
                        </div>
                        <h3 className="font-bold text-xl text-center">Personalized</h3>
                        <p className="text-gray-700 text-center">We believe personalized learning leads to real growth.</p>
                    </div>

                    <div className="w-75 border border-gray-200 rounded-xl items-center p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-200">
                            <Brain color="#6044da" size={50} />
                        </div>
                        <h3 className="font-bold text-xl text-center">AI-Powered</h3>
                        <p className="text-gray-700 text-center">We leverage the power of AI to simplify learning decisions.</p>
                    </div>

                    <div className="w-75 border border-gray-200 rounded-xl items-center p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-200">
                            <Shield color="#6044da" size={50} />
                        </div>
                        <h3 className="font-bold text-xl text-center">Trust & Transparency</h3>
                        <p className="text-gray-700 text-center">We ensure privacy, security, and transparency in all we do.</p>
                    </div>

                    <div className="w-75 border border-gray-200 rounded-xl items-center p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-200">
                            <Sprout color="#6044da" size={50} />
                        </div>
                        <h3 className="font-bold text-xl text-center">Continuous Growth</h3>
                        <p className="text-gray-700 text-center">We're committed to constant improvement and innovation.</p>
                    </div>
                </div>
            </div>

            <div className="px-20 w-full">
                <div className="bg-[#6044da] w-full rounded-xl flex px-10 py-10">
                    <div className="w-1/4 flex gap-5 border-r border-purple-200 px-10">
                        <div className="flex items-center justify-center h-15 w-15 shrink-0 rounded-full bg-purple-200">
                            <UsersRound color="#6044da" size={30} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-3xl text-white font-semibold">50K+</h3>
                            <p className="text-white font-semibold">Happy Learners</p>
                            <p className="text-white">Growing community of curious minds.</p>
                        </div>
                    </div>

                    <div className="w-1/4 flex gap-5 border-r border-purple-200 px-10">
                        <div className="flex items-center justify-center h-15 w-15 shrink-0 rounded-full bg-purple-200">
                            <BookOpen color="#6044da" size={30} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-3xl text-white font-semibold">10K+</h3>
                            <p className="text-white font-semibold">Courses Analyzed</p>
                            <p className="text-white">We analyze thousands of courses to recommend the best.</p>
                        </div>
                    </div>

                    <div className="w-1/4 flex gap-5 border-r border-purple-200 px-10">
                        <div className="flex items-center justify-center h-15 w-15 shrink-0 rounded-full bg-purple-200">
                            <ChartNoAxesCombined color="#6044da" size={30} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-3xl text-white font-semibold">95%</h3>
                            <p className="text-white font-semibold">Satisfaction Rate</p>
                            <p className="text-white">Learnerslove the personalized experience.</p>
                        </div>
                    </div>

                    <div className="w-1/4 flex gap-5 px-10">
                        <div className="flex items-center justify-center h-15 w-15 shrink-0 rounded-full bg-purple-200">
                            <Globe color="#6044da" size={30} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-3xl text-white font-semibold">150+</h3>
                            <p className="text-white font-semibold">Countries</p>
                            <p className="text-white">Making quality learning accessible worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-20 py-10 w-full">
                <div className="bg-purple-100 w-full rounded-xl flex gap-20 px-15 py-10">
                    <div className="w-2/5 flex flex-col gap-5">
                        <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                            <p className="font-semibold text-[#6044da] text-sm sm:text-base">Our Story</p>
                        </div>

                        <h3 className="text-3xl font-bold">The Journey of Learnify AI</h3>
                        <p className="text-gray-700">Learnify AI was born out of a simple belief - learning should be personal, practical, and accessible to all.</p>
                        <p className="text-gray-700">We noticed learners struggling to find the right courses and skills that truly match their goals. With advancements in AI, we set out to build a platform that acts like a personal learning companion.</p>
                        <p className="text-gray-700">Today, Learnify AI helps thousands of learners discover the best learning paths and accelerate their growth.</p>
                    </div>

                    <div className="relative w-3/5 flex gap-10">
                        <div className="absolute bottom-0 w-1/4 flex flex-col gap-2 items-center">
                            <p className="text-[#6044da] font-bold">Idea</p>
                            <p className="text-gray-700 text-sm mb-3">Building the vision</p>
                            <Lightbulb color="#6044da" size={60} />
                        </div>

                        <div className="absolute left-1/4 bottom-1/6 w-1/4 flex flex-col gap-2 items-center">
                            <p className="text-[#6044da] font-bold">Research</p>
                            <p className="text-gray-700 text-sm mb-3">Understanding learners' needs</p>
                            <Search color="#6044da" size={60} />
                        </div>

                        <div className="absolute left-1/2 top-1/6 w-1/4 flex flex-col gap-2 items-center">
                            <p className="text-[#6044da] font-bold">Development</p>
                            <p className="text-gray-700 text-sm mb-3">Building AI-powered solutions</p>
                            <CodeXml color="#6044da" size={60} />
                        </div>

                        <div className="absolute left-3/4 top-0 w-1/4 flex flex-col gap-2 items-center">
                            <p className="text-[#6044da] font-bold">Impact</p>
                            <p className="text-gray-700 text-sm mb-3">Empowering learners worldwide</p>
                            <Flag color="#6044da" size={60} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-30 pb-10 pt-5 flex flex-col gap-10 items-center">
                <div className="items-center flex flex-col gap-3">
                    <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                        <p className="font-semibold text-[#6044da] text-sm sm:text-base">Meet the Team</p>
                    </div>
                    <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold leading-tight">The People Behind Learnify AI</h1>
                    <p className="text-gray-600 text-sm sm:text-base">A passionate team of educators, engineers, and dreamers.</p>
                </div>

                <div className="flex gap-5 items-center">
                    <div className="flex gap-5 rounded-xl border border-gray-200 p-5 w-100">
                        <img className="h-20 w-20 rounded-full object-cover" src={girl}/>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-bold">Kashish Rajpal</h4>
                                <p className="text-gray-700 text-sm">Founder & CEO</p>
                            </div>
                            <p className="text-gray-700">Passionate about empowering learners through technology and AI.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 rounded-xl border border-gray-200 p-5 w-100">
                        <img className="h-20 w-20 rounded-full object-cover" src={girl}/>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-bold">Kashish Rajpal</h4>
                                <p className="text-gray-700 text-sm">Founder & CEO</p>
                            </div>
                            <p className="text-gray-700">Passionate about empowering learners through technology and AI.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 rounded-xl border border-gray-200 p-5 w-100">
                        <img className="h-20 w-20 rounded-full object-cover" src={girl}/>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-bold">Kashish Rajpal</h4>
                                <p className="text-gray-700 text-sm">Founder & CEO</p>
                            </div>
                            <p className="text-gray-700">Passionate about empowering learners through technology and AI.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 rounded-xl border border-gray-200 p-5 w-100">
                        <img className="h-20 w-20 rounded-full object-cover" src={girl}/>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-bold">Kashish Rajpal</h4>
                                <p className="text-gray-700 text-sm">Founder & CEO</p>
                            </div>
                            <p className="text-gray-700">Passionate about empowering learners through technology and AI.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUs