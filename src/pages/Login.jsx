import { Sparkles, Flame, Star, Quote, Copyright, Mail, LockKeyhole, EyeOff, ShieldUser, ShieldHalf, ShieldCheck } from "lucide-react";
import girl from "../assets/girl.png";

const Login = () => {
    return (
        <div className="min-h-screen flex">
            <div className="w-4/9 bg-purple-100 px-15 py-8 xl:px-20 xl:py-8 flex flex-col gap-10">
                <div className="flex gap-3 items-center">
                    <Sparkles color="#6044da" />

                    <div>
                        <h1 className="text-xl font-bold">Learnify AI</h1>
                        <p className="text-sm text-gray-600">AI Learning Recommender</p>
                    </div>
                </div>

                <div className="max-w-xl">
                    <h1 className="text-5xl xl:text-7xl font-bold leading-15 xl:leading-19">Welcome back! <span className="text-[#6044da]">Let's continue your learning journey</span></h1>
                    <p className="xl:text-lg text-gray-600 mt-8">Log in to access your personalized learning roadmap, courses, and progress.</p>
                </div>

                <div className="relative h-80 xl:h-110">
                    <div className="absolute top-0 translate-x-[-15%] xl:top-5 xl:left-10 flex items-center gap-4 w-46 xl:w-48 h-20 bg-white rounded-2xl px-5 shadow-xl z-30">
                        <Sparkles size={20} color="#6044da" />
                        <div>
                            <p className="text-xs text-gray-500">Courses Completed</p>
                            <h1 className="text-xl font-bold">24</h1>
                            <p className="text-xs text-green-500 font-semibold">+12 this month</p>
                        </div>
                    </div>

                    <div className="absolute top-20 right-45 translate-x-[120%] xl:top-35 xl:right-60 flex items-center gap-4 w-46 xl:w-48 h-20 bg-white rounded-2xl px-5 shadow-xl z-30">
                        <Flame size={20} color="#f9911a" fill="#f9911a" />

                        <div>
                            <p className="text-xs text-gray-500">Learning Streak</p>
                            <h1 className="text-xl font-bold">12 days</h1>
                            <p className="text-xs text-gray-500 font-semibold">Keep going</p>
                        </div>
                    </div>

                    <img src={girl} alt="Student learning" className="absolute bottom-0 left-30 xl:left-80 -translate-x-1/2 object-contain z-20" />
                </div>


                <h3 className="text-2xl text-center font-bold text-gray-800">Loved by 50,000+ learners</h3>

                <div className="flex gap-4">
                    <div className="flex flex-col w-full rounded-lg bg-purple-50 border-l-2 border-purple-200 px-3 py-2 xl:px-8 xl:py-5 mt-2 xl:mt-5 gap-5">
                        <Quote size={35} color="#6044da" fill="#6044da" className="rotate-180" />

                        <div className="flex flex-col justify-between h-45 xl:h-40">
                            <p className="text-sm xl:text-md text-gray-700">Learnify AI helped me focus on the right skills.<br />I got an internship in just 3 months!</p>

                            <div>
                                <p className="text-sm font-semibold text-purple-800">- Rohan P.</p>
                                <p className="text-sm text-gray-600">Software Engineer</p>

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

                    <div className="flex flex-col w-full rounded-lg bg-purple-50 border-l-2 border-purple-200 px-3 py-2 xl:px-8 xl:py-5 mt-2 xl:mt-5 gap-5">
                        <Quote size={35} color="#6044da" fill="#6044da" className="rotate-180" />

                        <div className="flex flex-col justify-between h-45 xl:h-40">
                            <p className="text-sm xl:text-md text-gray-700">The recommendations are spot on! It saves so much time and keeps me motivated.</p>

                            <div>
                                <p className="text-sm font-semibold text-purple-800">- Ananya S.</p>
                                <p className="text-sm text-gray-600">Student</p>

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
                </div>

                <div className="flex items-center justify-end w-full text-xs text-gray-500 gap-1 text-center">
                    <Copyright size={14} color="#8a8a8a" />
                    2026 Learnify AI. All rights reserved.
                </div>
            </div>

            <div className="w-5/9 flex flex-col px-10 py-15 xl:px-15 xl:py-15">
                <div className="flex flex-col w-full border border-gray-300 rounded-2xl py-8 xl:py-10 px-8 gap-8">
                    <div className="flex flex-col gap-2 xl:gap-4">
                        <h1 className="text-2xl xl:text-3xl font-bold">Log in to your account</h1>
                        <p className="text-sm xl:text-md text-gray-600">Enter your credentials to continue</p>
                    </div>

                    <div className="flex flex-col gap-2 xl:gap-4">
                        <h3 className="text-lg xl:text-xl font-semibold">Email address</h3>
                        <div className="flex items-center gap-4 py-2 px-4 border border-gray-200 rounded-lg">
                            <Mail size={20} color="#6d6d6d" />
                            <input type="email" placeholder="Enter your email" className="border-none outline-none"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 xl:gap-4">
                        <h3 className="text-lg xl:text-xl font-semibold">Password</h3>
                        <div className="flex items-center justify-between py-2 px-4 border border-gray-200 rounded-lg">
                            <div className="flex gap-4">
                                <LockKeyhole size={20} color="#6d6d6d" />
                                <input type="password" placeholder="Enter your password" className="border-none outline-none"/>
                            </div>
                            <EyeOff size={20} color="#6d6d6d" />
                        </div>
                        <div className="flex justify-end">
                            <a className="text-sm cursor-pointer font-semibold text-[#6044da]">Forgot password?</a>
                        </div>
                    </div>

                    <button className="bg-[#6044da] cursor-pointer rounded-lg text-white text-lg py-1 xl:text-xl font-semibold xl:py-3">Log In</button>

                    <div className="flex items-center gap-4 my-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="text-sm xl:text-md text-gray-500 whitespace-nowrap">or continue with</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className="flex justify-between items-center gap-5 h-10">
                        <button className="cursor-pointer h-full w-full items-center justify-center flex gap-3 border border-gray-400 py-2 rounded-lg">
                            <img className="h-full" src="https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol-768x480.png" />
                            <p>Google</p>
                        </button>
                        <button className="cursor-pointer h-full w-full items-center justify-center flex gap-3 border border-gray-400 py-2 rounded-lg">
                            <img className="h-full" src="https://app.readingwise.com/images/microsoft-logo.png" />
                            <p>Microsoft</p>
                        </button>
                        <button className="cursor-pointer h-full w-full items-center justify-center flex gap-3 border border-gray-400 py-2 rounded-lg">
                            <img className="h-full" src="https://th.bing.com/th/id/R.048ab214df337435e506a5ae8b2b77be?rik=koMiQ7QtuzC3Vw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cp%2fL85%2f9cpL854Ri.jpg&ehk=87pSdwBLFAya4Qk6DwFXxBCaAk7NdlhbXGodo%2bAIvCY%3d&risl=&pid=ImgRaw&r=0" />
                            <p>Apple</p>
                        </button>
                    </div>

                    <div className="flex gap-2 justify-center">
                        <p>Don't have an account?</p>
                        <a className="text-[#6044da] cursor-pointer font-semibold">Sign Up</a>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-2 py-10 xl:py-15 flex-col gap-10 px-10 xl:mt-5">
                    <h3 className="text-xl xl:text-2xl font-bold">Your security is our priority</h3>
                    <div className="flex justify-between w-full gap-10 xl:gap-15">
                        <div className="w-1/3 flex flex-col items-center gap-5">
                            <div className="flex items-center justify-center h-15 w-15 xl:h-18 xl:w-18 rounded-full bg-purple-100">
                                <ShieldUser size={38} color="#6044da" />
                            </div>
                            <div className="flex flex-col gap-3 items-center">
                                <h5 className="text-center xl:text-lg font-bold">Secure Login</h5>
                                <p className="text-sm xl:text-md text-center">256-bit SSL encryption keeps your data safe.</p>
                            </div>
                        </div>

                        <div className="w-1/3 flex flex-col items-center gap-5">
                            <div className="flex items-center justify-center h-15 w-15 xl:h-18 xl:w-18 rounded-full bg-green-100">
                                <ShieldHalf size={38} color="#16a34a" />
                            </div>
                            <div className="flex flex-col gap-3 items-center">
                                <h5 className="text-center xl:text-lg font-bold">Privacy Protected</h5>
                                <p className="text-sm xl:text-md text-center">We never share your personal information.</p>
                            </div>
                        </div>

                        <div className="w-1/3 flex flex-col items-center gap-5">
                            <div className="flex items-center justify-center h-15 w-15 xl:h-18 xl:w-18 rounded-full bg-blue-100">
                                <ShieldCheck size={38} color="#0000ff" />
                            </div>
                            <div className="flex flex-col gap-3 items-center">
                                <h5 className="text-center xl:text-lg font-bold">Trusted Platform</h5>
                                <p className="text-sm xl:text-md text-center">Used by 50,000+ learners worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-10 px-10 xl:px-20 py-5 pb-10 mt-8 bg-purple-100 border border-purple-200 rounded-xl w-full">
                    <h3 className="xl:text-lg">Trusted by learners and professionals from</h3>
                    <div className="w-full flex justify-between">
                        <img className="h-5 xl:h-8" src="https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0"/>
                        <img className="h-5 xl:h-8 scale-200" src="https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0"/>
                        <img className="h-5 xl:h-8 translate-y-1 xl:translate-y-2" src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Clipart.png"/>
                        <img className="h-5 xl:h-8 scale-450" src="https://www.pngmart.com/files/23/Deloitte-Logo-PNG-Pic.png"/>
                        <img className="h-5 xl:h-8 scale-300" src="https://static.vecteezy.com/system/resources/previews/024/806/538/non_2x/infosys-logo-transparent-free-png.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;