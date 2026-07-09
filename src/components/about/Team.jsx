import SectionHeader from "../common/SectionHeader";
import TeamMemberCard from "./TeamMemberCard";
import { teamData } from "../../data/about/teamData";

const Team = () => {
    return (
        <section className="px-4 py-12 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center gap-10">
                <SectionHeader badge="Meet the Team" title="The People Behind Learnify AI" description="A passionate team of educators, engineers, and innovators dedicated to transforming learning through AI." />

                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {teamData.map((member) => (
                        <TeamMemberCard key={member.name} image={member.image} name={member.name} role={member.role} description={member.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;