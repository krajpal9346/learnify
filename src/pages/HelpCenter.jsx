import headphones from "../assets/headphones.png";
import { ArrowRight, ChevronRight, Search, MessagesSquare, MessageSquare, Circle, ChevronDown, Lightbulb } from "lucide-react";
import { helpCategoriesData } from "../data/help-center/helpCategoriesData";
import { popularArticlesData } from "../data/help-center/popularArticlesData";
import { miniFaqData } from "../data/help-center/miniFaqData";

const HelpCenter = () => {
    return (
        <section>
            <div className="flex flex-col items-center gap-5 px-5 sm:px-10 xl:px-20 pt-28 xl:pt-30 pb-10 bg-purple-100">
                <img className="h-28 sm:h-36 xl:h-40 object-contain" src={headphones} alt="Help center support illustration" />
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center">Help Center</h1>
                <p className="text-gray-600 text-center text-sm sm:text-base px-4">Find answers, solve issues, and make the most of Learnify AI.</p>

                <div className="px-5 py-3 rounded-xl bg-white border items-center w-full max-w-4xl border-gray-300 flex gap-3">
                    <Search color="#4b5563" size={20} />

                    <input type="text" placeholder="Search for articles, topics or questions..." className="w-full outline-none" />
                </div>
            </div>

            <div className="flex flex-col gap-5 px-5 sm:px-10 xl:px-20 py-10">
                <h3 className="text-2xl font-bold">Browse by category</h3>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-5">
                    {helpCategoriesData.map((category) => {
                        const Icon = category.icon;

                        return (
                            <div key={category.title} className="w-full flex flex-col gap-3 px-6 sm:px-8 py-5 rounded-xl items-center border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                                <div className={`h-20 w-20 rounded-full ${category.iconBg} flex items-center justify-center`}>
                                    <Icon color={category.iconColor} size={42} strokeWidth={2.5} />
                                </div>

                                <h4 className="font-bold text-xl text-center">{category.title}</h4>
                                <p className="text-gray-700 text-center text-sm sm:text-base">{category.description}</p>

                                <div className="flex gap-2 items-center">
                                    <p className="text-[#6044da] font-bold">View articles</p>

                                    <ArrowRight color="#6044da" size={18} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20 pb-10 flex flex-col xl:flex-row gap-10">
                <div className="w-full xl:w-3/4 border border-gray-300 rounded-xl flex flex-col gap-5 px-5 sm:px-8 py-5">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full justify-between">
                        <h3 className="text-2xl font-bold">Popular Articles</h3>

                        <div className="flex gap-2 items-center cursor-pointer">
                            <p className="text-[#6044da] font-semibold">View all articles</p>

                            <ArrowRight color="#6044da" size={20} />
                        </div>
                    </div>

                    {popularArticlesData.map((article, index) => {
                        const Icon = article.icon;

                        return (
                            <div key={article.title} className={`flex flex-col sm:flex-row sm:justify-between gap-5 ${index !== 0 ? "border-t border-gray-300 pt-5" : "pt-5"}`}>
                                <div className="flex gap-5 sm:gap-10">
                                    <div className={`h-14 w-14 sm:h-15 sm:w-18 shrink-0 ${article.iconBg} rounded-xl flex items-center justify-center`}>
                                        <Icon color={article.iconColor} size={30} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold">{article.title}</h3>
                                        <p className="text-gray-700 text-sm sm:text-base">{article.description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end sm:justify-center">
                                    <ChevronRight color="#4b5563" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="w-full xl:w-1/3 flex flex-col gap-5">
                    <div className="bg-purple-100 w-full rounded-xl flex flex-col gap-3 px-6 sm:px-10 py-5 border border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
                            <div className="w-full sm:w-2/3 flex flex-col gap-3 text-center sm:text-left">
                                <h3 className="font-bold text-2xl">Still Need Help?</h3>
                                <p className="text-gray-700">Our support team is here for you.</p>
                            </div>

                            <div className="w-full sm:w-1/3 flex items-center justify-center">
                                <MessagesSquare color="#6044da" size={80} />
                            </div>
                        </div>

                        <button className="w-full flex gap-3 px-5 py-3 rounded-xl justify-center bg-[#6044da] text-white font-semibold hover:bg-[#5338d4] transition-all duration-300">
                            Contact Support
                            <MessageSquare color="#ffffff" size={20} />
                        </button>
                    </div>

                    <div className="bg-purple-100 w-full rounded-xl flex flex-col sm:flex-row items-center gap-5 px-6 sm:px-10 py-5 border border-gray-200">
                        <div className="w-full sm:w-2/3 flex flex-col gap-2 text-center sm:text-left">
                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                <Circle color="#22c55e" fill="#22c55e" size={12} />
                                <h3 className="font-bold text-2xl">Live Chat</h3>
                            </div>

                            <p className="text-gray-700">Chat with our support team <br />9AM - 9PM (Mon - Sat)</p>
                        </div>

                        <button className="w-full sm:w-1/2 h-fit flex gap-2 items-center px-4 py-3 rounded-xl justify-center bg-white text-[#6044da] border border-[#6044da] font-semibold hover:bg-purple-50 transition-all duration-300">
                            Start Live Chat
                            <MessageSquare color="#6044da" size={20} />
                        </button>
                    </div>

                    <div className="w-full rounded-xl flex flex-col gap-2 px-6 sm:px-10 py-5 border border-gray-200">
                        <h3 className="text-2xl font-bold mb-3">FAQs</h3>

                        {miniFaqData.map((faq) => (
                            <div key={faq} className="pb-2 flex justify-between items-center border-b border-gray-200 gap-3">
                                <p className="text-gray-700 text-sm sm:text-base">{faq}</p>
                                <ChevronDown color="#4b5563" size={20} className="shrink-0" />
                            </div>
                        ))}

                        <div className="py-2 font-bold text-[#6044da] flex gap-2 items-center cursor-pointer">
                            <p>View all FAQs</p>
                            <ArrowRight color="#6044da" size={18} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 sm:px-10 xl:px-20 pb-10">
                <div className="bg-purple-100 w-full items-center border border-gray-100 rounded-xl px-6 sm:px-10 xl:px-20 py-6 flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center text-center sm:text-left">
                        <div className="h-18 w-18 rounded-full bg-purple-200 flex items-center justify-center shrink-0">
                            <Lightbulb color="#6044da" size={50} />
                        </div>

                        <div className="flex flex-col gap-1 justify-center">
                            <h3 className="font-bold text-lg">Can't find what you're looking for?</h3>
                            <p className="text-gray-700">Search our help center or reach out to our support team.</p>
                        </div>
                    </div>

                    <button className="w-full sm:w-auto flex gap-2 bg-[#6044da] text-white px-5 py-3 items-center justify-center font-semibold rounded-xl hover:bg-[#5338d4] transition-all duration-300">
                        Contact Support
                        <MessageSquare color="#ffffff" size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HelpCenter;