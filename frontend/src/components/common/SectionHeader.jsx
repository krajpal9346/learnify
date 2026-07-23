const SectionHeader = ({ badge, title, description, align = "center" }) => {
    const alignment = align === "left" ? "items-start text-left" : align === "right" ? "items-end text-right" : "items-center text-center";

    return (
        <div className={`flex flex-col gap-3 ${alignment}`}>
            {badge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-200 text-sm sm:text-base font-semibold text-[#6044da] whitespace-nowrap">
                    {badge}
                </div>
            )}

            {title && (
                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight">{title}</h2>
            )}

            {description && (
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl">{description}</p>
            )}
        </div>
    );
};

export default SectionHeader;