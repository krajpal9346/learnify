import { ChevronDown } from "lucide-react";

const PolicyCard = ({ icon: Icon, iconColor, title, description, isLast, }) => {
    return (
        <article className={`group flex flex-col gap-5 p-5 transition-all duration-300 hover:bg-purple-50 sm:flex-row sm:items-start sm:gap-6 sm:p-6 ${!isLast ? "border-b border-gray-200" : ""}`}>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-100 transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                <Icon size={36} color={iconColor} aria-hidden="true" />
            </div>

            <div className="flex-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[#6044da] sm:text-xl">{title}</h3>
                        <p className="mt-3 leading-7 text-gray-600">{description}</p>
                    </div>

                    <button type="button" className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full border border-gray-200 transition-all duration-300 hover:border-[#6044da] hover:bg-purple-100">
                        <ChevronDown size={20} className="text-gray-500 transition-colors duration-300 group-hover:text-[#6044da]" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default PolicyCard;