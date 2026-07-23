const StatCard = ({ icon: Icon, iconColor, value, title, description, isLast }) => {
    return (
        <article className={`flex w-full flex-col items-center gap-5 px-6 py-8 text-center xl:flex-row xl:items-start xl:text-left ${!isLast ? "xl:border-r xl:border-purple-300" : ""}`}>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-200 sm:h-18 sm:w-18">
                <Icon size={32} color={iconColor} aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-white">{value}</h3>
                <p className="font-semibold text-white">{title}</p>
                <p className="text-sm leading-6 text-purple-100">{description}</p>
            </div>
        </article>
    );
};

export default StatCard;