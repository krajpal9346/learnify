import { Heart } from "lucide-react";

import SectionHeader from "../common/SectionHeader";

const Hero = () => {
    return (
        <section className="bg-purple-50 px-4 pt-24 pb-10 sm:px-8 sm:pt-28 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center gap-6 text-center">
                <SectionHeader title={
                    <>
                        We'd love your{" "}
                        <span className="text-[#6044da]">feedback!</span>
                    </>
                }
                    description="Your feedback helps us improve Learnify AI and create a better learning experience for everyone."
                    align="center" />

                <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl bg-purple-200 px-5 py-3 sm:px-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6044da]">
                        <Heart size={18} color="white" fill="white" aria-hidden="true" />
                    </div>

                    <p className="text-center font-medium text-gray-700">Thank you for helping us grow!</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;