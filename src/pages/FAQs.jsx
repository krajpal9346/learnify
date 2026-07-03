import { Search, CreditCard, UserRound, BookOpen, Plus, Minus, CircleHelp, User, Wallet, Headphones, ArrowRight, ExternalLink } from "lucide-react"
import Header from "../components/Header";
import bg from "../assets/bg.png"
import { useState } from "react";
import { faqData } from "../components/Questions";
import { Link } from "react-router-dom";
import headphones from "../assets/headphones.png"
import Footer from "../components/Footer";

const FAQs = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [openQuestion, setOpenQuestion] = useState(0);

    return (
        <div>
            <Header />
            <div>
                <div className="w-full flex flex-col items-center px-20 mt-15 xl:mt-22 py-15 bg-cover bg-bottom bg-no-repeat"
                    style={{ backgroundImage: `url(${bg})` }}>
                    <div className="flex flex-col gap-5 items-center">
                        <h1 className="text-5xl font-bold text-center leading-tight">Frequently Asked <span className="text-[#6044da]">Questions</span></h1>
                        <p className="text-center text-lg">Find answers to the most common questions about Learnify AI.</p>

                        <div className="flex gap-5 px-8 py-3 bg-white rounded-full items-center w-120">
                            <Search color="#9ca3af" size={20} />
                            <input type="text" className="border-none outline-none" placeholder="Search for questions..." />
                        </div>

                        <div className="mt-10 flex flex-col gap-10 items-center">
                            <h3 className="text-2xl font-bold">Quick Help</h3>
                            <div className="flex gap-10 justify-center">
                                <div className="w-65 flex gap-5 ites-center justify-center">
                                    <div className="h-15 w-15 rounded-3xl bg-purple-200 flex items-center shrink-0 justify-center">
                                        <CreditCard color="#6044da" size={35} stroke-width={2.25} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h6 className="font-bold">Billing & Payments</h6>
                                        <p>Get help with payments and subscriptions</p>
                                    </div>
                                </div>

                                <div className="w-65 flex gap-5 ites-center justify-center">
                                    <div className="h-15 w-15 rounded-3xl bg-purple-200 flex items-center shrink-0 justify-center">
                                        <UserRound color="#6044da" size={35} stroke-width={2.25} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h6 className="font-bold">Your Account</h6>
                                        <p>Manage your account and settings</p>
                                    </div>
                                </div>

                                <div className="w-65 flex gap-5 ites-center justify-center">
                                    <div className="h-15 w-15 rounded-3xl bg-purple-200 flex items-center shrink-0 justify-center">
                                        <BookOpen color="#6044da" size={35} stroke-width={2.25} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h6 className="font-bold">Courses & Learning</h6>
                                        <p>Learn about courses and learning features</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="px-20 py-15 flex flex-col gap-10">
                    <h2 className="text-3xl font-bold text-center">
                        Browse by category or popular questions
                    </h2>

                    <div className="flex gap-8">
                        <div className="w-1/4 bg-white border border-gray-200 rounded-3xl p-4 h-fit shadow-sm">
                            {[
                                {
                                    key: "all",
                                    title: "All Questions",
                                    icon: CircleHelp,
                                    count: faqData.all.length
                                },
                                {
                                    key: "gettingStarted",
                                    title: "Getting Started",
                                    icon: CircleHelp,
                                    count: faqData.gettingStarted.length
                                },
                                {
                                    key: "accountProfile",
                                    title: "Account & Profile",
                                    icon: User,
                                    count: faqData.accountProfile.length
                                },
                                {
                                    key: "coursesLearning",
                                    title: "Courses & Learning",
                                    icon: BookOpen,
                                    count: faqData.coursesLearning.length
                                },
                                {
                                    key: "subscriptionsBilling",
                                    title: "Subscriptions & Billing",
                                    icon: CreditCard,
                                    count: faqData.subscriptionsBilling.length
                                },
                                {
                                    key: "payments",
                                    title: "Payments",
                                    icon: Wallet,
                                    count: faqData.payments.length
                                },
                                {
                                    key: "technicalSupport",
                                    title: "Technical Support",
                                    icon: Headphones,
                                    count: faqData.technicalSupport.length
                                }
                            ].map((category) => {
                                const Icon = category.icon;

                                return (
                                    <div
                                        key={category.key}
                                        onClick={() => {
                                            setSelectedCategory(category.key);
                                            setOpenQuestion(null);
                                        }}
                                        className={`flex justify-between items-center px-4 py-4 rounded-2xl cursor-pointer mb-2 transition-all
                        
                        ${selectedCategory === category.key
                                                ? "bg-purple-100 text-[#6044da]"
                                                : "hover:bg-gray-50"
                                            }
                        `}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={18} />
                                            <p className="font-medium">
                                                {category.title}
                                            </p>
                                        </div>

                                        <div
                                            className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold
                            
                            ${selectedCategory === category.key
                                                    ? "bg-[#6044da] text-white"
                                                    : "bg-gray-100 text-gray-500"
                                                }
                            `}
                                        >
                                            {category.count}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="w-3/4 flex flex-col gap-4">
                            {faqData[selectedCategory].map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm"
                                >
                                    <div
                                        onClick={() =>
                                            setOpenQuestion(
                                                openQuestion === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                        className="flex justify-between items-center px-8 py-6 cursor-pointer"
                                    >
                                        <h3
                                            className={`font-semibold text-lg transition
                            
                            ${openQuestion === index
                                                    ? "text-[#6044da]"
                                                    : ""
                                                }
                            `}
                                        >
                                            {faq.question}
                                        </h3>

                                        <div className="h-8 w-8 rounded-full border border-[#6044da] flex items-center justify-center">
                                            {openQuestion === index ? (
                                                <Minus
                                                    size={16}
                                                    color="#6044da"
                                                />
                                            ) : (
                                                <Plus
                                                    size={16}
                                                    color="#6044da"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {openQuestion === index && (
                                        <div className="px-8 pb-6 text-gray-600 leading-8 border-t border-gray-100">
                                            <p className="pt-5">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="px-5 sm:px-10 xl:px-20 mt-5">
                    <div className="relative overflow-hidden bg-[#6044da] min-h-10 xl:h-70 rounded-2xl px-6 sm:px-10 xl:px-16 flex flex-col xl:flex-row items-center justify-between">
                        <div className="flex flex-col justify-center gap-6 w-full xl:w-[60%] text-center xl:text-left z-20">
                            <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-bold text-white">Not sure which plan is right for you?</h1>
                            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">Start with a free plan and upgrade when you're ready.</p>

                            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 sm:gap-5">
                                <Link to="/support">
                                    <button className="cursor-pointer flex items-center justify-center gap-2 bg-white text-[#6044da] px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                                        Contact Support
                                        <ArrowRight size={18} />
                                    </button>
                                </Link>

                                <Link to="/support">
                                    <button className="cursor-pointer px-5 py-2.5 border border-white flex items-center justify-center gap-2 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                                        View Help Center
                                        <ExternalLink color="#ffffff" size={18} />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative w-full xl:w-[58%] h-80 flex justify-center items-center mt-10 xl:mt-0">
                            <img className="h-70" src={headphones} />
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    )
}

export default FAQs