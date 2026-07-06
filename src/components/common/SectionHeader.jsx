const SectionHeader = ({ badge, title, subtitle, centered = false, className = "" }) => {
    return (
        <div className={`flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}>
            {badge && (
                <p className="w-fit bg-purple-200 text-sm uppercase font-semibold text-[#6044da] px-3 py-1 rounded-full">{badge}</p>
            )}

            {title && (
                <h2 className="font-bold text-2xl sm:text-3xl">{title}</h2>
            )}

            {subtitle && (
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl">{subtitle}</p>
            )}
        </div>
    );
};

export default SectionHeader;