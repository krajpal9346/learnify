import { UsersRound } from "lucide-react";
import { learnerAvatarsData } from "../../data/home/learnerAvatarsData";

const LearnerStats = () => {
    return (
        <section className="z-20 mt-6 w-full rounded-2xl bg-white p-4 shadow-lg sm:w-fit sm:px-5 sm:py-4">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <UsersRound size={20} color="#6044da" fill="#6044da" />
                </div>

                <div>
                    <h3 className="font-semibold">50,000+ learners</h3>
                    <p className="text-xs leading-5 text-gray-600">are already learning with Learnify AI</p>
                </div>
            </div>

            <div className="flex -space-x-2">
                {learnerAvatarsData.map((avatar) => (
                    <img key={avatar.id} src={avatar.image} alt="Learner" className="h-7 w-7 rounded-full border-2 border-white object-cover sm:h-8 sm:w-8" />
                ))}

                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-purple-300 bg-[#6044da] text-[9px] font-semibold text-white sm:h-8 sm:w-8 sm:text-[10px]">
                    +50K
                </div>
            </div>
        </section>
    );
};

export default LearnerStats;