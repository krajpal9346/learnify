const ValueCard = ({ icon: Icon, iconColor, title, description }) => {
    return (
        <article className="group flex h-full w-full flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6044da]/30 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-200 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                <Icon size={40} color={iconColor} aria-hidden="true" />
            </div>

            <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[#6044da] sm:text-xl">{title}</h3>
            <p className="leading-7 text-gray-700">{description}</p>
        </article>
    );
};

export default ValueCard;