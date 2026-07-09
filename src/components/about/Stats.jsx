import { statsData } from "../../data/about/statsData";
import StatCard from "./StatCard";

const Stats = () => {
    return (
        <section className="w-full px-4 py-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-[#6044da] py-6 shadow-lg sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
                {statsData.map((stat, index) => (
                    <StatCard key={stat.title} icon={stat.icon} iconColor={stat.iconColor} value={stat.value} title={stat.title} description={stat.description} isLast={index === statsData.length - 1} />
                ))}
            </div>
        </section>
    );
};

export default Stats;