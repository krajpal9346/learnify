import { CodeXml, Brain, Smartphone, CloudSync, Quote, Star } from "lucide-react";

const Categories = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-20 px-5 sm:px-10 xl:px-25 pt-10 xl:pt-15">
            <div className="flex flex-col w-full xl:w-1/2 gap-5">
                <p className="w-fit bg-purple-200 text-sm uppercase font-semibold text-[#6044da] px-3 py-1 rounded-full">Explore Top Categories</p>
                <h1 className="font-bold text-2xl">Popular learning paths</h1>

                <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-4">
                    <div className="flex flex-col gap-3 w-full sm:w-45 xl:w-32 h-52 rounded-xl border border-gray-300 p-3">
                        <div className="flex justify-center items-center h-16 w-16 rounded-xl bg-purple-100">
                            <CodeXml size={36} color="#6044da" />
                        </div>

                        <div className="h-1/2 flex flex-col justify-between gap-2">
                            <h1 className="text-base font-bold">Web Development</h1>
                            <p className="text-sm text-gray-600">24 courses</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full sm:w-45 xl:w-32 h-52 rounded-xl border border-gray-300 p-3">
                        <div className="flex justify-center items-center h-16 w-16 rounded-xl bg-green-100">
                            <Brain size={36} color="#44da6f" />
                        </div>

                        <div className="h-1/2 flex flex-col justify-between gap-2">
                            <h1 className="text-base font-bold">Data Science</h1>
                            <p className="text-sm text-gray-600">18 courses</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full sm:w-45 xl:w-32 h-52 rounded-xl border border-gray-300 p-3">
                        <div className="flex justify-center items-center h-16 w-16 rounded-xl bg-purple-100">
                            <Brain size={36} color="#6044da" />
                        </div>

                        <div className="h-1/2 flex flex-col justify-between gap-2">
                            <h1 className="text-base font-bold">AI & Machine Learning</h1>
                            <p className="text-sm text-gray-600">16 courses</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full sm:w-45 xl:w-32 h-52 rounded-xl border border-gray-300 p-3">
                        <div className="flex justify-center items-center h-16 w-16 rounded-xl bg-orange-100">
                            <Smartphone size={36} color="#f9911a" />
                        </div>

                        <div className="h-1/2 flex flex-col justify-between gap-2">
                            <h1 className="text-base font-bold">Mobile Development</h1>
                            <p className="text-sm text-gray-600">16 courses</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full sm:w-45 xl:w-32 h-52 rounded-xl border border-gray-300 p-3">
                        <div className="flex justify-center items-center h-16 w-16 rounded-xl bg-blue-100">
                            <CloudSync size={36} color="#2563eb" />
                        </div>

                        <div className="h-1/2 flex flex-col justify-between">
                            <h1 className="text-base font-bold">Cloud Computing</h1>
                            <p className="text-sm text-gray-600">14 courses</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full xl:w-1/2 gap-5">
                <p className="w-fit bg-purple-200 text-sm uppercase font-semibold text-[#6044da] px-3 py-1 rounded-full">Learners Love Learnify AI</p>
                <h1 className="font-bold text-2xl">Learners Love Learnify AI</h1>
                <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-4">
                    <div className="flex flex-col gap-3 w-full sm:w-80 xl:w-44 h-68 rounded-xl border border-gray-300 p-4">
                        <Quote size={32} color="#6044da" fill="#6044da" className="rotate-180"/>

                        <div className="flex flex-col justify-between flex-1">
                            <p className="text-sm text-gray-700">Learnify AI helped me focus on the right skills.<br/>I got an internship in just 3 months!</p>

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

                    <div className="flex flex-col gap-3 w-full sm:w-80 xl:w-44 h-68 rounded-xl border border-gray-300 p-4">
                        <Quote size={32} color="#6044da" fill="#6044da" className="rotate-180"/>

                        <div className="flex flex-col justify-between flex-1">
                            <p className="text-sm text-gray-700">The recommendations are spot on! It saves so much time and keeps me motivated.</p>

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

                    <div className="flex flex-col gap-3 w-full sm:w-80 xl:w-44 h-68 rounded-xl border border-gray-300 p-4">
                        <Quote size={32} color="#6044da" fill="#6044da" className="rotate-180" />

                        <div className="flex flex-col justify-between flex-1">
                            <p className="text-sm text-gray-700">I love the roadmap feature. It's like having a personal mentor 24/7!</p>
                            <div>
                                <p className="text-sm font-semibold text-purple-800">- Mehak K.</p>
                                <p className="text-sm text-gray-600">Data Analyst</p>

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
            </div>
        </div>
    );
};

export default Categories;