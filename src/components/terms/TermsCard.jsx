import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TermsCard = ({ id, icon: Icon, iconColor, title, description, fullDescription, isLast, isActive }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <article id={`term-${id}`} className={`scroll-mt-28 group flex flex-col gap-5 p-5 transition-all duration-300 sm:flex-row sm:items-start sm:gap-6 sm:p-6 ${isActive ? "bg-purple-50" : "hover:bg-purple-50"} ${!isLast ? "border-b border-gray-200" : ""}`}>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-100 transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                <Icon size={36} color={iconColor} aria-hidden="true" />
            </div>

            <div className="flex-1">
                <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h3 className={`text-lg font-bold transition-colors duration-300 sm:text-xl ${isActive ? "text-[#6044da]" : "group-hover:text-[#6044da]"}`}>{id}. {title}</h3>
                            <p className="mt-3 leading-7 text-gray-600">{description}</p>
                        </div>

                        <button type="button" onClick={() => setExpanded(!expanded)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:border-[#6044da] hover:bg-purple-100" aria-label={expanded ? "Collapse section" : "Expand section"}>
                            <ChevronDown size={20} className={`transition-all duration-300 ${expanded ? "rotate-180 text-[#6044da]" : "text-gray-500"}`} aria-hidden="true" />
                        </button>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
                            <p className="leading-7 text-gray-700">{fullDescription}</p>
                        </div>
                    </div>

                    <button type="button" onClick={() => setExpanded(!expanded)} className="w-fit font-semibold text-[#6044da] transition-colors duration-300 hover:text-[#4f36c9]">
                        {expanded ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default TermsCard;