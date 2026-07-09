import { ChevronRight, Pen } from "lucide-react";

const ContributorCard = () => {
    return (
        <section className="group flex flex-col gap-5 rounded-2xl bg-[#6044da] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                <Pen size={28} strokeWidth={3} aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold sm:text-2xl">Write for Learnify</h3>
                <p className="leading-7 text-purple-100">Share your insights, experiences, and expertise with thousands of learners around the world.</p>
            </div>

            <button type="button" className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3 font-semibold text-[#6044da] transition-all duration-300 hover:scale-[1.02]">
                Become a Contributor
                <ChevronRight size={18} aria-hidden="true" />
            </button>
        </section>
    );
};

export default ContributorCard;