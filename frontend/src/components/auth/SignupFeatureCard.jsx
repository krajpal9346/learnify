const SignupFeatureCard = ({ feature }) => {
    const Icon = feature.icon;

    return (
        <article className="group flex gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                <Icon size={28} color={feature.iconColor} />
            </div>

            <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-purple-100">{feature.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-800">{feature.description}</p>
            </div>
        </article>
    );
};

export default SignupFeatureCard;