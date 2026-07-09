import { Calendar, ClipboardCheck } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const Hero = () => {
    return (
        <section className="bg-purple-50 px-4 py-10 pt-28 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center gap-10 lg:flex-row xl:gap-16">
                <div className="flex w-full flex-col gap-6 text-center xl:w-1/2 xl:text-left">
                    <SectionHeader badge="Terms of Service" title={
                        <>
                            Terms that build{" "}
                            <span className="text-[#6044da]">trust and clarity.</span>
                        </>
                    }
                        description="These Terms of Service ('Terms') govern your access to and use of Learnify AI and all related services."
                        align="left" />

                    <div className="mx-auto mt-2 flex w-fit items-center gap-2 rounded-xl bg-purple-200 px-5 py-3 text-sm text-gray-700 sm:text-base xl:mx-0">
                        <Calendar size={20} color="#6044da" aria-hidden="true" />
                        <span>Last updated: May 15, 2026</span>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center xl:w-1/2">
                    <div className="flex min-h-50 items-center justify-center">
                        <ClipboardCheck size={220} color="#6044da" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;