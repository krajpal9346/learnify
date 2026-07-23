const SecurityFeatureCard = ({ feature }) => {
    const Icon = feature.icon;

    return (
        <article className="group rounded-xl border border-gray-200 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6044da]/20 hover:shadow-lg">
            <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 ${feature.bgColor}`}>
                <Icon size={22} color={feature.iconColor} />
            </div>

            <h3 className="font-semibold transition-colors duration-300 group-hover:text-[#6044da]">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">{feature.description}</p>
        </article>
    );
};

export default SecurityFeatureCard;