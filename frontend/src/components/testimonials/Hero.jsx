import { UsersRound } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import FloatingReviews from "./FloatingReviews";

const Hero = () => {
    return (
        <section className="w-full bg-purple-50 px-4 sm:px-8 lg:px-12 xl:px-20 pt-28 pb-12">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
                <FloatingReviews side="left" />

                <div className="w-full xl:w-3/5 flex flex-col items-center gap-5 text-center">
                    <SectionHeader badge={
                        <>
                            <UsersRound size={16} color="#6044da" strokeWidth={2.75} aria-hidden="true" />
                            <span>Trusted by learners worldwide</span>
                        </>
                    } title={
                        <>
                            Turn Learning Goals <br />Into{" "}<span className="text-[#6044da]">Career Wins</span>
                        </>
                    }
                        description="See how students, professionals and career switchers used AI-powered learning to achieve their goals faster."
                        align="center" />
                </div>

                <FloatingReviews side="right" />
            </div>
        </section>
    );
};

export default Hero;