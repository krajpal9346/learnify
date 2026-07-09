const QuickHelpCard = ({ item }) => {
    const Icon = item.icon;

    return (
        <article className="flex w-full max-w-sm min-h-35 items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-3xl bg-purple-200">
                <Icon size={30} color="#6044da" strokeWidth={2.25} aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-base sm:text-lg font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm leading-6 text-gray-600">{item.description}</p>
            </div>
        </article>
    );
};

export default QuickHelpCard;