import { Bell } from "lucide-react";
import updates from "../../assets/updates.png";
import SectionHeader from "../common/SectionHeader";

const Hero = () => {
    return (
        <section className="bg-purple-50 px-4 sm:px-8 lg:px-12 xl:px-20 pt-24 sm:pt-28 pb-10">
            <div className="flex flex-col items-center justify-between gap-10 xl:flex-row xl:gap-12">
                <div className="flex w-full flex-col items-center gap-5 text-center xl:w-4/9 xl:items-start xl:text-left">
                    <SectionHeader badge={
                        <>
                            <Bell size={16} color="#6044da" strokeWidth={2.75} aria-hidden="true" />
                            <span>Stay Informed</span>
                        </>
                    } title={
                        <>
                            Latest Updates & <br /><span className="text-[#6044da]">Announcements</span>
                        </>
                    }
                        description="Stay up to date with the latest features, improvements, and announcements from Learnify AI."
                        align="left" />
                </div>

                <div className="flex w-full justify-center xl:w-5/9">
                    <img src={updates} alt="Learnify AI Updates" className="h-52 object-contain sm:h-64 md:h-72 xl:h-80" />
                </div>
            </div>
        </section>
    );
};

export default Hero;