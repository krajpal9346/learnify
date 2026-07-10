import { Check } from "lucide-react";

const FeedbackTypeCard = ({ type, selected, onClick }) => {
    const Icon = type.icon;

    return (
        <button type="button" onClick={onClick} aria-pressed={selected} className={`group relative flex h-full cursor-pointer flex-col items-center gap-5 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6044da]/30 ${selected ? "border-[#6044da] bg-purple-50 shadow-md" : "border-gray-200 bg-white hover:border-[#6044da]/30 hover:bg-purple-50"}`}>
            {selected && (
                <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#6044da] text-white">
                    <Check size={16} strokeWidth={3} aria-hidden="true" />
                </div>
            )}

            <div className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 sm:h-16 sm:w-16 ${selected ? "bg-[#6044da]" : "bg-gray-100 group-hover:scale-110"}`}>
                <Icon size={28} strokeWidth={2.5} className={`transition-colors duration-300 ${selected ? "text-white" : "text-[#9ca3af] group-hover:text-[#6044da]"}`} aria-hidden="true" />
            </div>

            <p className={`text-center text-base font-semibold transition-colors duration-300 sm:text-lg ${selected ? "text-[#6044da]" : "text-gray-800 group-hover:text-[#6044da]"}`}>{type.title}</p>
        </button>
    );
};

export default FeedbackTypeCard;