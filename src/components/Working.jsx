import {
    User,
    ArrowRight,
    Brain,
    Map,
    ChartNoAxesCombined,
} from "lucide-react";

const Working = () => {
    return (
        <div
            id="working"
            className="flex flex-col items-center justify-center gap-5 px-4 sm:px-8 lg:px-12 xl:px-25 pt-10 xl:pt-15 pb-10"
        >
            <p className="bg-purple-200 text-sm font-semibold text-[#6044da] px-5 py-1 rounded-full">
                How It Works
            </p>

            <div className="flex flex-col gap-2 items-center">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
                    Your AI-Powered Learning Journey
                </h1>

                <p className="text-gray-700 text-center text-sm sm:text-base">
                    4 simple steps to personalized learning and growth
                </p>
            </div>

            <div className="w-full flex flex-col xl:flex-row justify-center items-center pt-10 gap-6 xl:gap-8">

                {/* Step 1 */}
                <div className="flex flex-col w-full max-w-[320px] h-auto min-h-60 rounded-2xl border border-gray-300 p-5 gap-4">
                    <div className="flex gap-5 sm:gap-8 items-center">
                        <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-xl shrink-0">
                            <User size={45} color="#6044da" />
                        </div>

                        <div className="text-lg font-semibold flex justify-center items-center text-white w-10 h-10 bg-[#6044da] rounded-full shrink-0">
                            1
                        </div>
                    </div>

                    <h1 className="font-bold text-xl">
                        Create Your Profile
                    </h1>

                    <p className="text-gray-600">
                        Tell us about your skills, experience, goals and
                        interests.
                    </p>
                </div>

                <ArrowRight
                    size={32}
                    color="#6044da"
                    className="rotate-90 xl:rotate-0 shrink-0"
                />

                {/* Step 2 */}
                <div className="flex flex-col w-full max-w-[320px] h-auto min-h-60 rounded-2xl border border-gray-300 p-5 gap-4">
                    <div className="flex gap-5 sm:gap-8 items-center">
                        <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-xl shrink-0">
                            <Brain size={45} color="#6044da" />
                        </div>

                        <div className="text-lg font-semibold flex justify-center items-center text-white w-10 h-10 bg-[#6044da] rounded-full shrink-0">
                            2
                        </div>
                    </div>

                    <h1 className="font-bold text-xl">
                        AI Analyzes & Matches
                    </h1>

                    <p className="text-gray-600">
                        Our AI finds skill gaps and matches the best learning
                        resources for you.
                    </p>
                </div>

                <ArrowRight
                    size={32}
                    color="#6044da"
                    className="rotate-90 xl:rotate-0 shrink-0"
                />

                {/* Step 3 */}
                <div className="flex flex-col w-full max-w-[320px] h-auto min-h-60 rounded-2xl border border-gray-300 p-5 gap-4">
                    <div className="flex gap-5 sm:gap-8 items-center">
                        <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-xl shrink-0">
                            <Map size={45} color="#6044da" />
                        </div>

                        <div className="text-lg font-semibold flex justify-center items-center text-white w-10 h-10 bg-[#6044da] rounded-full shrink-0">
                            3
                        </div>
                    </div>

                    <h1 className="font-bold text-xl">
                        Get Personalized Plan
                    </h1>

                    <p className="text-gray-600">
                        Receive a tailored learning roadmap and playlist just
                        for you.
                    </p>
                </div>

                <ArrowRight
                    size={32}
                    color="#6044da"
                    className="rotate-90 xl:rotate-0 shrink-0"
                />

                {/* Step 4 */}
                <div className="flex flex-col w-full max-w-[320px] h-auto min-h-60 rounded-2xl border border-gray-300 p-5 gap-4">
                    <div className="flex gap-5 sm:gap-8 items-center">
                        <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-xl shrink-0">
                            <ChartNoAxesCombined
                                size={45}
                                color="#6044da"
                            />
                        </div>

                        <div className="text-lg font-semibold flex justify-center items-center text-white w-10 h-10 bg-[#6044da] rounded-full shrink-0">
                            4
                        </div>
                    </div>

                    <h1 className="font-bold text-xl">
                        Learn & Track Progress
                    </h1>

                    <p className="text-gray-600">
                        Track your progress, earn streaks and achieve your goals
                        faster.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Working;