const TeamMemberCard = ({ image, name, role, description, }) => {
    return (
        <article className="group flex h-full w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6044da]/30 hover:shadow-xl sm:flex-row">
            <img src={image} alt={name} className="h-16 w-16 shrink-0 self-center rounded-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:self-start" />

            <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
                <div>
                    <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[#6044da] sm:text-xl">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#6044da]">{role}</p>
                </div>

                <p className="leading-7 text-gray-700">{description}</p>
            </div>
        </article>
    );
};

export default TeamMemberCard;