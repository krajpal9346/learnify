import {
    MessageCircle,
    Eye,
    Clock3,
    Pin,
    BadgeCheck,
    ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const DiscussionCard = ({ discussion }) => {
    return (
        <Link
            to={`/community/discussion/${discussion.id}`}
            className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6044da]/30 hover:shadow-xl"
        >
            <div className="flex items-start gap-4">
                <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="h-14 w-14 rounded-full object-cover"
                />

                <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                        {discussion.pinned && (
                            <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                                <Pin
                                    size={12}
                                    fill="currentColor"
                                />
                                Pinned
                            </span>
                        )}

                        {discussion.solved && (
                            <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                <BadgeCheck size={12} />
                                Solved
                            </span>
                        )}

                        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#6044da]">
                            {discussion.category}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-[#6044da]">
                        {discussion.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                        Posted by{" "}
                        <span className="font-semibold text-gray-700">
                            {discussion.author}
                        </span>
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <MessageCircle size={16} />
                            <span>
                                {discussion.replies} Replies
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Eye size={16} />
                            <span>
                                {discussion.views} Views
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Clock3 size={16} />
                            <span>{discussion.time}</span>
                        </div>
                    </div>
                </div>

                <ChevronRight
                    size={22}
                    className="mt-1 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#6044da]"
                />
            </div>
        </Link>
    );
};

export default DiscussionCard;