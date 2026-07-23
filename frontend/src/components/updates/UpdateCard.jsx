import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

const UpdateCard = ({ update }) => {
    const Icon = update.icon;
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:gap-8 sm:p-6 xl:gap-10">
            <div className={`flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl sm:h-20 sm:w-20 xl:h-28 xl:w-28 ${update.iconBg}`}>
                <Icon size={40} color={update.iconColor} strokeWidth={2.25} aria-hidden="true" />
            </div>

            <div className="flex flex-1 flex-col gap-4">
                <div className={`w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${update.badgeBg} ${update.badgeText}`}>
                    {update.badge}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{update.title}</h3>
                    <p className="text-sm leading-7 text-gray-700 sm:text-base">{update.description}</p>
                </div>

                {expanded && (
                    <div className="rounded-xl border border-purple-100 bg-purple-50 p-4">
                        <p className="text-sm leading-7 text-gray-700 whitespace-pre-line">{update.fullDescription}</p>
                    </div>
                )}

                <button type="button" onClick={() => setExpanded(!expanded)} className="mt-2 flex w-fit cursor-pointer items-center gap-2 font-semibold text-[#6044da] transition-all duration-300 hover:gap-3">
                    {expanded ? (
                        <>
                            Read Less
                            <ChevronUp size={16} color="#6044da" aria-hidden="true" />
                        </>
                    ) : (
                        <>
                            Read More
                            <ArrowRight size={16} color="#6044da" aria-hidden="true" />
                        </>
                    )}
                </button>
            </div>
        </article>
    );
};

export default UpdateCard;