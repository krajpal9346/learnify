import { CheckCircle, Circle } from "lucide-react";

const PhaseCard = ({ phase }) => {
    const HeaderIcon = phase.headerIcon;
    const StatusIcon = phase.statusIcon;

    return (
        <article className="flex w-full flex-col items-center gap-5">
            <div className={`flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full border border-gray-200 ${phase.cardBg}`}>
                <HeaderIcon size={36} color={phase.color} strokeWidth={2.5} />
            </div>

            <div className={`flex h-full w-full flex-col rounded-2xl border bg-white p-4 sm:p-5 shadow-sm ${phase.cardBorder}`}>
                <div className="flex justify-center">
                    <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase ${phase.badgeBg} ${phase.statusColor}`}>
                        <StatusIcon size={16} color={phase.color} strokeWidth={2.75} fill={phase.status !== "Completed" ? phase.color : "none"} />
                        {phase.status}
                    </span>
                </div>

                <div className="mt-5 text-center">
                    <p className="text-sm font-bold" style={{ color: phase.color }}>{phase.phase}</p>
                    <h3 className="text-lg sm:text-xl font-bold" style={{ color: phase.color }}>{phase.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{phase.timeline}</p>
                </div>

                <div className="mt-6 flex flex-1 flex-col gap-3">
                    {phase.items.map((item) => (
                        <div key={item.text} className="flex items-start gap-2">
                            {item.completed ? (<CheckCircle size={16} color={phase.color} strokeWidth={2.75} className="mt-1 shrink-0" />) : (<Circle size={16} color={phase.color} strokeWidth={2.75} className="mt-1 shrink-0" />
                            )}

                            <p className="text-sm leading-6 text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default PhaseCard;