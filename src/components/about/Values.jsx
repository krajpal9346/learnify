import SectionHeader from "../common/SectionHeader";
import ValueCard from "./ValueCard";
import { valuesData } from "../../data/about/valuesData";

const Values = () => {
    return (
        <section className="px-4 py-5 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center gap-10">
                <SectionHeader badge="Our Values" title="What Drives Us" description="We are guided by a set of core values that shape everything we do." />

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                    {valuesData.map((value) => (
                        <ValueCard key={value.title} icon={value.icon} iconColor={value.iconColor} title={value.title} description={value.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;