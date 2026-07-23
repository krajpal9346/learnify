const StepCard = ({ step }) => {
    const Icon = step.icon;

    return (
        <article className="flex w-full max-w-xs flex-col items-center gap-4 rounded-2xl bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg xl:max-w-55">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6044da] text-lg font-semibold text-white">
                {step.step}
            </div>

            <div className="flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-gray-200 bg-white">
                <Icon size={48} color="#6044da" aria-hidden="true" />
            </div>

            <h3 className="text-center text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="text-center text-sm leading-6 text-gray-600 sm:text-base">{step.description}</p>
        </article>
    );
};

export default StepCard;