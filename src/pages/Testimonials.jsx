import { Star, UsersRound, Quote, ArrowRight } from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import { testimonialsData } from "../data/home/testimonialsData";
import { statsData } from "../data/testimonials/statsData";
import { journeyData } from "../data/testimonials/journeyData";
import { floatingTestimonialsData } from "../data/testimonials/floatingTestimonialsData";
import { Link } from "react-router-dom";
import girl from "../assets/girl.png"
import { readyStatsData } from "../data/shared/readyStatsData";

const Testimonials = () => {
    return (
        <section className="w-full mb-10 overflow-hidden">
            <div className="w-full flex flex-col xl:flex-row justify-between items-center xl:items-start bg-purple-50 px-5 sm:px-10 xl:px-20 pb-10 pt-30 gap-10">
                <div className="hidden xl:block relative w-1/5 h-48">
                    {floatingTestimonialsData.slice(0, 2).map((item) => (
                        <div key={item.id} className={`absolute ${item.position} h-18 flex items-center`}>
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img className="rounded-full object-cover" src={item.image} alt="Learner" />
                            </div>

                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl shadow-sm">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star key={index} size={16} color="#6044da" fill="#6044da" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full xl:w-3/5 flex flex-col items-center gap-5 text-center">
                    <div className="items-center flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                        <UsersRound size={16} color="#6044da" strokeWidth={2.75} />
                        <p className="font-semibold text-[#6044da] text-sm sm:text-base">Trusted by learners worldwide</p>
                    </div>

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center">Turn Learning Goals <br />Into{" "} <span className="text-[#6044da]">Career Wins</span></h1>
                    <p className="text-center text-gray-600 text-sm sm:text-base">See how students, professionals, and career switchers <br className="hidden sm:block" />used AI-powered learning to achieve their goals faster.</p>
                </div>

                <div className="hidden xl:block relative w-1/5 h-48">
                    {floatingTestimonialsData.slice(2, 4).map((item) => (
                        <div key={item.id} className={`absolute ${item.position} h-18 flex items-center`}>
                            <div className="flex items-center justify-center bg-white h-18 w-18 rounded-full p-2">
                                <img className="rounded-full object-cover" src={item.image} alt="Learner" />
                            </div>

                            <div className="-translate-x-1.5 flex bg-white items-center gap-1 p-3 rounded-r-xl shadow-sm">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star key={index} size={16} color="#6044da" fill="#6044da" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-40 py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                {statsData.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div key={stat.label} className="flex gap-6 justify-center xl:justify-start">
                            <div className="flex items-center justify-center h-15 w-15 p-2 rounded-full bg-white border border-gray-300">
                                <Icon color="#6044da" size={38} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-[#6044da] font-bold">
                                    <span className="text-4xl">{stat.value}</span>

                                    {stat.suffix && (
                                        <span className="text-2xl">{stat.suffix}</span>
                                    )}
                                </h3>

                                <p className="text-gray-700 text-sm">{stat.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="px-5 sm:px-10 xl:px-20 pb-12 flex flex-col items-center gap-4">
                <SectionHeader title="What Our Learners Say" subtitle="Real stories from real people who transformed their learning journey." centered />

                <div className="w-full mt-8 flex flex-col xl:flex-row items-center justify-between gap-6">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.name} className="w-full sm:w-105 xl:w-[24%] min-h-80 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                            <div className="flex flex-col gap-5">
                                <Quote color="#6044da" size={36} fill="#6044da" />
                                <p className="text-gray-700">{testimonial.review}</p>
                            </div>

                            <div className="flex items-center gap-4 mt-6">
                                <img className="h-14 w-14 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />

                                <div>
                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20 py-10 flex flex-col items-center justify-center gap-4">
                <div className="w-full px-5 sm:px-10 xl:px-15 py-8 flex flex-col xl:flex-row gap-10 items-center justify-between bg-purple-100 rounded-2xl">
                    <div className="w-full xl:w-[40%] flex flex-col gap-5 text-center xl:text-left">
                        <SectionHeader title="A Typical Learnify Journey" subtitle="From curiosity to career success - here's how our learners grow." />
                    </div>

                    <div className="w-full xl:w-[60%] grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
                        {journeyData.map((journey) => {
                            const Icon = journey.icon;

                            return (
                                <div key={journey.month} className="min-h-40 w-full max-w-37.5 flex flex-col gap-3 items-center">
                                    <div className="h-18 w-18 flex items-center justify-center bg-white rounded-full border border-gray-200">
                                        <Icon color="#6044da" size={38} />
                                    </div>

                                    <div className="flex flex-col gap-2 items-center">
                                        <p className="text-center text-lg font-bold text-[#6044da]">{journey.month}</p>
                                        <p className="text-center text-gray-700 text-sm">{journey.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="px-5 lg:px-10 xl:px-20 pb-10 flex flex-col items-center justify-center gap-4">
                <div className="w-full px-5 lg:px-15 py-10 flex flex-col lg:flex-row gap-5 items-center justify-between bg-purple-100 rounded-2xl">
                    <div className=" items-center w-70 lg:w-120 xl:w-170 flex gap-7 xl:gap-10">
                        <div className="h-12 w-12 xl:h-18 xl:w-18 flex items-center justify-center bg-[#6044da] rounded-full shrink-0">
                            <UsersRound color="#ffffff" size={28} stroke-width={2.75} />
                        </div>
                        <h3 className="text-lg xl:text-3xl font-bold">Join a growing community of learners building skills every single day.</h3>
                    </div>

                    <div className="flex agp-7 xl:gap-10 items-center">
                        <div className="flex -space-x-2 xl:-space-x-3">
                            <img className="h-8 w-8 xl:h-15 xl:w-15 rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                            <img className="h-8 w-8 xl:h-15 xl:w-15 rounded-full" src="https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg" />
                            <img className="h-8 w-8 xl:h-15 xl:w-15 rounded-full" src="https://aita-lab.github.io/images/Members/Alumni/ttduong/avatar.jpg" />
                            <img className="h-8 w-8 xl:h-15 xl:w-15 rounded-full" src="https://pochunhsu.group/wp-content/uploads/2023/02/2022.03.090266-1459x1536.jpg" />
                            <img className="h-8 w-8 xl:h-15 xl:w-15 rounded-full" src="https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg" />
                            <img className="h-8 w-8 xl:h-15 xl:w-15 rounded-full" src="https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg" />
                            <div className="h-8 w-8 xl:h-15 xl:w-15 rounded-full bg-white border border-gray-400 justify-end flex items-center text-xs xl:text-lg text-[#6044da] font-bold shrink-0">+10  .</div>
                            <div className="h-8 w-8 xl:h-15 xl:w-15 rounded-full bg-white border-r border-b border-t border-gray-400 justify-start flex items-center text-xs shrink-0 xl:text-lg text-[#6044da] font-bold">,000</div>
                        </div>

                        <div className="w-30">
                            <p className="text-center text-sm xl:text-lg text-gray-600">and thousands more worldwide</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20">
                <div className="relative overflow-hidden bg-[#6044da] min-h-10 xl:h-90 rounded-2xl px-6 sm:px-10 xl:px-16 py-10 flex flex-col xl:flex-row items-center justify-between">
                    <div className="flex flex-col justify-center gap-6 w-full xl:w-[45%] text-center xl:text-left z-20">
                        <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-bold text-white">Ready to write your <br />own success story?</h1>
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

                    <div className="relative w-full xl:w-[58%] h-105 xl:h-full flex justify-center items-end mt-10 xl:mt-0">
                        {readyStatsData.map(
                            (stat) => {
                                const Icon = stat.icon;

                                return (
                                    <div key={stat.title} className={`${stat.position} flex items-center gap-3 xl:gap-4 w-40 sm:w-44 xl:w-52 h-16 xl:h-20 bg-white rounded-2xl px-4 xl:px-5 shadow-xl z-30`}>
                                        <Icon size={20} color={stat.iconColor} fill={stat.iconFill} />

                                        <div>
                                            <p className="text-[10px] xl:text-xs text-gray-500">{stat.title}</p>
                                            <h1 className="text-lg xl:text-xl font-bold text-gray-900">{stat.value}</h1>
                                            <p className={`text-[10px] xl:text-xs font-semibold ${stat.changeColor}`}>{stat.change}</p>
                                        </div>
                                    </div>
                                );
                            }
                        )}

                        <img src={girl} alt="Student learning" className="absolute bottom-14 sm:bottom-10 xl:bottom-0 left-1/2 -translate-x-1/2 h-56 sm:h-72 xl:h-80 object-contain z-20" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;