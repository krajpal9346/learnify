import { roadmapData } from "../../data/roadmap/roadmapData";
import PhaseCard from "./PhaseCard";

const Timeline = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5">
                {roadmapData.map((phase) => (
                    <PhaseCard key={phase.phase} phase={phase} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;