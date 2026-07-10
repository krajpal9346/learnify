const FeedbackTypeCard = ({ type }) => {
    const Icon = type.icon;

    return (
        <button type="button" className="group flex h-full cursor-pointer flex-col items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#6044da]/30 hover:bg-purple-50 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                <Icon size={28} strokeWidth={2.5} className="text-[#9ca3af] transition-colors duration-300 group-hover:text-[#6044da]" aria-hidden="true" />
            </div>

            <p className="text-center text-base font-semibold transition-colors duration-300 group-hover:text-[#6044da] sm:text-lg">{type.title}</p>
        </button>
    );
};

export default FeedbackTypeCard;