import {
    Search,
    Plus,
    Minus,
    ArrowRight,
    ExternalLink,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import bg from "../assets/bg.png";
import headphones from "../assets/headphones.png";

import { useState } from "react";
import { Link } from "react-router-dom";

import { faqData } from "../components/Questions";
import { faqCategories } from "../data/faqCategories";
import { quickHelpData } from "../data/quickHelpData";

const FAQs = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [openQuestion, setOpenQuestion] = useState(0);

    const categories = faqCategories(faqData);

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <div
                    className="w-full flex flex-col items-center px-5 sm:px-10 xl:px-20 py-12 xl:py-15 bg-cover bg-bottom bg-no-repeat"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                >
                    <div className="flex flex-col gap-5 items-center w-full">
                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center leading-tight">
                            Frequently Asked{" "}
                            <span className="text-[#6044da]">
                                Questions
                            </span>
                        </h1>

                        <p className="text-center text-sm sm:text-base xl:text-lg text-gray-700 max-w-2xl">
                            Find answers to the most common questions
                            about Learnify AI.
                        </p>

                        <div className="flex gap-3 sm:gap-5 px-5 sm:px-8 py-3 bg-white rounded-full items-center w-full max-w-xl shadow-sm">
                            <Search color="#9ca3af" size={20} />

                            <input
                                type="text"
                                className="border-none outline-none w-full bg-transparent"
                                placeholder="Search for questions..."
                            />
                        </div>

                        {/* Quick Help */}
                        <div className="mt-10 flex flex-col gap-10 items-center w-full">
                            <h3 className="text-2xl font-bold">
                                Quick Help
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 justify-items-center w-full">
                                {quickHelpData.map(
                                    (item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="w-full max-w-sm flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                                            >
                                                <div className="h-14 w-14 rounded-3xl bg-purple-200 flex items-center shrink-0 justify-center">
                                                    <Icon
                                                        color="#6044da"
                                                        size={32}
                                                        strokeWidth={2.25}
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <h6 className="font-bold">
                                                        {item.title}
                                                    </h6>

                                                    <p className="text-sm text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="px-5 sm:px-10 xl:px-20 py-10 xl:py-15 flex flex-col gap-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center">
                        Browse by category or popular questions
                    </h2>

                    <div className="flex flex-col xl:flex-row gap-8">
                        {/* Categories */}
                        <div className="w-full xl:w-1/4 bg-white border border-gray-200 rounded-3xl p-4 h-fit shadow-sm">
                            {categories.map((category) => {
                                const Icon = category.icon;

                                return (
                                    <div
                                        key={category.key}
                                        onClick={() => {
                                            setSelectedCategory(
                                                category.key
                                            );
                                            setOpenQuestion(null);
                                        }}
                                        className={`flex justify-between items-center px-4 py-4 rounded-2xl cursor-pointer mb-2 transition-all ${
                                            selectedCategory ===
                                            category.key
                                                ? "bg-purple-100 text-[#6044da]"
                                                : "hover:bg-gray-50"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={18} />

                                            <p className="font-medium">
                                                {category.title}
                                            </p>
                                        </div>

                                        <div
                                            className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${
                                                selectedCategory ===
                                                category.key
                                                    ? "bg-[#6044da] text-white"
                                                    : "bg-gray-100 text-gray-500"
                                            }`}
                                        >
                                            {category.count}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Questions */}
                        <div className="w-full xl:w-3/4 flex flex-col gap-4">
                            {faqData[selectedCategory].map(
                                (faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <div
                                            onClick={() =>
                                                setOpenQuestion(
                                                    openQuestion ===
                                                        index
                                                        ? null
                                                        : index
                                                )
                                            }
                                            className="flex justify-between items-start sm:items-center gap-4 px-5 sm:px-8 py-5 sm:py-6 cursor-pointer"
                                        >
                                            <h3
                                                className={`font-semibold text-base sm:text-lg flex-1 transition ${
                                                    openQuestion ===
                                                    index
                                                        ? "text-[#6044da]"
                                                        : ""
                                                }`}
                                            >
                                                {faq.question}
                                            </h3>

                                            <div className="h-8 w-8 rounded-full border border-[#6044da] flex items-center justify-center shrink-0">
                                                {openQuestion ===
                                                index ? (
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

                                        {openQuestion ===
                                            index && (
                                            <div className="px-5 sm:px-8 pb-6 text-gray-600 leading-7 border-t border-gray-100">
                                                <p className="pt-5">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="px-5 sm:px-10 xl:px-20 mt-5 mb-10">
                    <div className="relative overflow-hidden bg-[#6044da] min-h-75 xl:h-70 rounded-2xl px-6 sm:px-10 xl:px-16 py-10 xl:py-0 flex flex-col xl:flex-row items-center justify-between gap-10">
                        <div className="flex flex-col justify-center gap-6 w-full xl:w-[60%] text-center xl:text-left z-20">
                            <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-bold text-white">
                                Still have questions?
                            </h1>

                            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                                Our support team is here to help you.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 sm:gap-5">
                                <Link to="/support">
                                    <button className="cursor-pointer flex items-center justify-center gap-2 bg-white text-[#6044da] px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                                        Contact Support
                                        <ArrowRight size={18} />
                                    </button>
                                </Link>

                                <Link to="/help-center">
                                    <button className="cursor-pointer px-5 py-2.5 border border-white flex items-center justify-center gap-2 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                                        View Help Center
                                        <ExternalLink
                                            color="#ffffff"
                                            size={18}
                                        />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative w-full xl:w-[40%] h-52 sm:h-64 xl:h-80 flex justify-center items-center mt-5 xl:mt-0">
                            <img
                                className="h-44 sm:h-56 xl:h-70 object-contain"
                                src={headphones}
                                alt="Customer support illustration"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default FAQs;