import { Sparkles, Target, ChartLine, BookOpenCheck, UsersRound, Mail, LockKeyhole, EyeOff, User, CircleCheck } from "lucide-react"
import girl from '../assets/girl.png'

const Started = () => {
    return (
        <div className="min-h-screen bg-purple-100 flex">
            <div className="w-4/9 flex flex-col gap-5 px-15 py-8 xl:px-20 xl:py-12">
                <div className="flex gap-3 items-center">
                    <Sparkles color="#6044da" />

                    <div>
                        <h1 className="text-xl font-bold">Learnify AI</h1>
                        <p className="text-sm text-gray-600">AI Learning Recommender</p>
                    </div>
                </div>

                <div className="max-w-xl">
                    <h1 className="text-5xl xl:text-7xl font-bold leading-15 xl:leading-19">Start your <span className="text-[#6044da]">learning journey <br />with Learnify AI</span></h1>
                    <p className="xl:text-lg text-gray-600 mt-8">Create your account and get personalized course recommendations designed just for you.</p>
                </div>

                <div className="flex flex-col gap-5 w-full mt-5">
                    <div className="flex gap-3">
                        <div className="flex items-center justify-center h-15 w-15 rounded-lg bg-white">
                            <Target size={30} color="#6044da" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-semibold">Personalized Recommendations</h4>
                            <p className="text-gray-600">Courses tailored to your goals and skills</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex items-center justify-center h-15 w-15 rounded-lg bg-white">
                            <ChartLine size={30} color="#4ade80" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-semibold">Track Your Progress</h4>
                            <p className="text-gray-600">Monitor your learning and achievements</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex items-center justify-center h-15 w-15 rounded-lg bg-white">
                            <BookOpenCheck size={30} color="#f97316" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-semibold">Learn Anytime, Anywhere</h4>
                            <p className="text-gray-600">Access content on any device, anytime</p>
                        </div>
                    </div>
                </div>

                <img src={girl} alt="Student learning" className="h-120 absolute bottom-0 xl:right-230 object-contain z-20" />

                <div className="flex flex-col gap-5 w-fit rounded-xl bg-white px-5 py-4 mt-8">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100">
                            <UsersRound size={20} color="#6044da" fill="#6044da" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-semibold">50,000+ learners</h4>
                            <p className="text-xs text-gray-600">are already learning with Learnify AI</p>
                        </div>
                    </div>

                    <div className="flex -space-x-2">
                        <img className="h-8 w-8 rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                        <img className="h-8 w-8 rounded-full" src="https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg" />
                        <img className="h-8 w-8 rounded-full" src="https://aita-lab.github.io/images/Members/Alumni/ttduong/avatar.jpg" />
                        <img className="h-8 w-8 rounded-full" src="https://pochunhsu.group/wp-content/uploads/2023/02/2022.03.090266-1459x1536.jpg" />
                        <div className="text-[10px] font-semibold flex items-center justify-center h-8 w-8 rounded-full bg-[#6044da] border border-purple-400 text-white">+50K</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-5/9 border border-gray-300 bg-white rounded-2xl px-10 py-7 mx-20 my-10 gap-6">
                <div className="flex flex-col gap-2 xl:gap-4">
                    <h1 className="text-2xl xl:text-3xl font-bold">Get Started</h1>
                    <p className="text-sm xl:text-md text-gray-600">Create your account to continue</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg xl:text-xl font-semibold">Full Name</h3>
                    <div className="flex items-center gap-4 py-2 px-4 border border-gray-300 rounded-lg">
                        <User size={20} color="#6d6d6d" />
                        <input type="text" placeholder="Enter your full name" className="border-none outline-none" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg xl:text-xl font-semibold">Email address</h3>
                    <div className="flex items-center gap-4 py-2 px-4 border border-gray-300 rounded-lg">
                        <Mail size={20} color="#6d6d6d" />
                        <input type="email" placeholder="Enter your email" className="border-none outline-none" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg xl:text-xl font-semibold">Password</h3>
                    <div className="flex items-center justify-between py-2 px-4 border border-gray-300 rounded-lg">
                        <div className="flex gap-4">
                            <LockKeyhole size={20} color="#6d6d6d" />
                            <input type="password" placeholder="Enter your password" className="border-none outline-none" />
                        </div>
                        <EyeOff size={20} color="#6d6d6d" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg xl:text-xl font-semibold">Confirm Password</h3>
                    <div className="flex items-center justify-between py-2 px-4 border border-gray-300 rounded-lg">
                        <div className="flex gap-4">
                            <LockKeyhole size={20} color="#6d6d6d" />
                            <input type="password" placeholder="Confirm your password" className="border-none outline-none" />
                        </div>
                        <EyeOff size={20} color="#6d6d6d" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-600">Password must be atleast 8 characters and include:</p>
                    <div className="flex gap-10">
                        <div className="flex gap-2">
                            <div className="flex items-center justify-center">
                                <CircleCheck size={16} color="#6044da" />
                            </div>
                            <p className="text-sm text-gray-600">8+ characters</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex items-center justify-center">
                                <CircleCheck size={16} color="#6044da" />
                            </div>
                            <p className="text-sm text-gray-600">One uppercase</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex items-center justify-center">
                                <CircleCheck size={16} color="#6044da" />
                            </div>
                            <p className="text-sm text-gray-600">One number</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex items-center justify-center">
                                <CircleCheck size={16} color="#6044da" />
                            </div>
                            <p className="text-sm text-gray-600">One special character</p>
                        </div>
                    </div>
                </div>

                <button className="bg-[#6044da] cursor-pointer rounded-lg text-white text-lg py-1 xl:text-xl font-semibold xl:py-3">Create Account</button>

                <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm xl:text-md text-gray-500 whitespace-nowrap">or sign up with</p>
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
                    <p>Already have an account?</p>
                    <a className="text-[#6044da] cursor-pointer font-semibold">Log In</a>
                </div>
            </div>
        </div>
    )
}

export default Started