import { communityStats } from "../../data/community/communityStats";
import StatCard from "./StatCard";

const Stats = () => {
    return (
        <section className="px-4 py-5 sm:px-8 lg:px-12 xl:px-20">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Our Community in Numbers
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-7">
                    Thousands of learners collaborate every day by asking
                    questions, sharing knowledge, solving problems, and helping
                    each other grow together.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {communityStats.map((stat) => (
                    <StatCard
                        key={stat.id}
                        stat={stat}
                    />
                ))}
            </div>
        </section>
    );
};

export default Stats;