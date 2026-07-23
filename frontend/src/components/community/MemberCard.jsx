import { Award, MessageSquare, Star, Trophy } from "lucide-react";

const MemberCard = ({ member }) => {
    const getRankColor = (rank) => {
        switch (rank) {
            case 1:
                return "bg-yellow-100 text-yellow-700";
            case 2:
                return "bg-gray-200 text-gray-700";
            case 3:
                return "bg-orange-100 text-orange-700";
            default:
                return "bg-purple-100 text-[#6044da]";
        }
    };

    return (
        <article className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6044da]/30 hover:shadow-lg">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-16 w-16 rounded-full object-cover"
                    />

                    <div
                        className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${getRankColor(
                            member.rank
                        )}`}
                    >
                        #{member.rank}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#6044da]">
                            {member.name}
                        </h3>

                        {member.rank === 1 && (
                            <Trophy
                                size={18}
                                className="text-yellow-500"
                                fill="currentColor"
                            />
                        )}
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                        {member.role}
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#6044da]">
                        {member.badge}
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-end gap-2 text-sm">
                <div className="flex items-center gap-1 font-semibold text-[#6044da]">
                    <Star
                        size={16}
                        fill="currentColor"
                    />
                    <span>{member.points.toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-500">
                    <Award size={14} />
                    <span>{member.answers} Answers</span>
                </div>

                <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare size={14} />
                    <span>{member.discussions} Posts</span>
                </div>
            </div>
        </article>
    );
};

export default MemberCard;