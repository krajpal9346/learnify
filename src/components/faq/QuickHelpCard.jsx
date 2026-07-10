const QuickHelpCard = ({ item, onSelectCategory }) => {
    const Icon = item.icon;

    return (
        <button type="button" onClick={() => onSelectCategory(item.category)} className="flex w-full max-w-sm min-h-35 cursor-pointer items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6044da] hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-purple-200 sm:h-14 sm:w-14">
                <Icon size={30} color="#6044da" strokeWidth={2.25} aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-gray-900 sm:text-lg">{item.title}</h4>
                <p className="text-sm leading-6 text-gray-600">{item.description}</p>
            </div>
        </button>
    );
};

export default QuickHelpCard;