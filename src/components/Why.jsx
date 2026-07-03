import {Sparkles, Rocket, ShieldCheck, ChartColumnIncreasing, GraduationCap,} from "lucide-react";

const Why = () => {
    return (
        <div className="px-5 sm:px-10 xl:px-25 pt-5">
            <div className="flex flex-col items-center justify-center gap-10 xl:gap-15 py-10 bg-[#f5f2ff] rounded-xl">
                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center px-5">Why learners choose Learnify AI</h1>

                <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-evenly gap-6 xl:gap-0 w-full">
                    <div className="w-full sm:w-[45%] xl:w-1/5 flex flex-col gap-3 items-center justify-center p-5 xl:border-r border-dotted border-gray-400">
                        <div className="flex justify-center items-center bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-xl">
                            <Sparkles size={36} color="#6044da" />
                        </div>

                        <h4 className="text-lg xl:text-xl font-bold text-center">Personalized for You</h4>
                        <p className="text-center text-sm xl:text-base text-gray-600">AI customises learning based on your unique profile.</p>
                    </div>

                    <div className="w-full sm:w-[45%] xl:w-1/5 flex flex-col gap-3 items-center justify-center p-5 xl:border-r border-dotted border-gray-400">
                        <div className="flex justify-center items-center bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-xl">
                            <Rocket size={36} color="#6044da" />
                        </div>

                        <h4 className="text-lg xl:text-xl font-bold text-center">Save Time</h4>
                        <p className="text-center text-sm xl:text-base text-gray-600">No more searching randomly. Get the best resources in one place.</p>
                    </div>

                    <div className="w-full sm:w-[45%] xl:w-1/5 flex flex-col gap-3 items-center justify-center p-5 xl:border-r border-dotted border-gray-400">
                        <div className="flex justify-center items-center bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-xl">
                            <ShieldCheck size={36} color="#6044da" />
                        </div>

                        <h4 className="text-lg xl:text-xl font-bold text-center">Learn Effectively</h4>
                        <p className="text-center text-sm xl:text-base text-gray-600">Curated content, skill gaps and roadmaps that actually help.</p>
                    </div>

                    <div className="w-full sm:w-[45%] xl:w-1/5 flex flex-col gap-3 items-center justify-center p-5 xl:border-r border-dotted border-gray-400">
                        <div className="flex justify-center items-center bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-xl">
                            <ChartColumnIncreasing size={36} color="#6044da" />
                        </div>

                        <h4 className="text-lg xl:text-xl font-bold text-center">Track Progress</h4>
                        <p className="text-center text-sm xl:text-base text-gray-600">Visualize your growth, achieve streaks and stay consistent.</p>
                    </div>

                    <div className="w-full sm:w-[45%] xl:w-1/5 flex flex-col gap-3 items-center justify-center p-5">
                        <div className="flex justify-center items-center bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-xl">
                            <GraduationCap size={36} color="#6044da" />
                        </div>

                        <h4 className="text-lg xl:text-xl font-bold text-center">Achieve Goals</h4>
                        <p className="text-center text-sm xl:text-base text-gray-600">Build in-demand skills and accelerate your career.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;