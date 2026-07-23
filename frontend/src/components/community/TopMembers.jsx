import { Crown } from "lucide-react";
import { topMembersData } from "../../data/community/topMembersData";
import MemberCard from "./MemberCard";

const TopMembers = () => {
    return (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                    <Crown
                        size={24}
                        color="#6044da"
                        strokeWidth={2.5}
                        aria-hidden="true"
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Top Members
                    </h2>

                    <p className="text-sm text-gray-500">
                        Meet our most active contributors helping the community
                        every day.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                {topMembersData.map((member) => (
                    <MemberCard
                        key={member.id}
                        member={member}
                    />
                ))}
            </div>
        </section>
    );
};

export default TopMembers;