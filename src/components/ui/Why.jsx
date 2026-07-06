import { whyFeaturesData } from "../../data/home/whyFeaturesData";
import SectionHeader from "../common/SectionHeader";

const Why = () => {
    return (
        <section className="px-5 sm:px-10 xl:px-25 pt-5">
            <div className="flex flex-col items-center justify-center gap-10 xl:gap-15 py-10 bg-[#f5f2ff] rounded-xl">
                <SectionHeader title="Why learners choose Learnify AI" centered />

                <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-evenly gap-6 xl:gap-0 w-full">
                    {whyFeaturesData.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div key={feature.title} className={`w-full sm:w-[45%] xl:w-1/5 flex flex-col gap-3 items-center justify-center p-5 ${index !== whyFeaturesData.length - 1 ? "xl:border-r border-dotted border-gray-400" : ""}`}>
                                <div className="flex justify-center items-center bg-white h-16 w-16 sm:h-20 sm:w-20 rounded-xl">
                                    <Icon size={36} color="#6044da" aria-hidden="true" />
                                </div>

                                <h4 className="text-lg xl:text-xl font-bold text-center">{feature.title}</h4>
                                <p className="text-center text-sm xl:text-base text-gray-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Why;