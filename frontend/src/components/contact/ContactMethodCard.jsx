import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";

const ContactMethodCard = ({ method }) => {
    const Icon = method.icon;

    const isExternal =
        method.href.startsWith("http") ||
        method.href.startsWith("mailto:") ||
        method.href.startsWith("tel:");

    return (
        <a
            href={method.href}
            target={isExternal ? "_blank" : "_self"}
            rel={
                isExternal
                    ? "noopener noreferrer"
                    : undefined
            }
            className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6044da]/30 hover:shadow-lg"
        >
            <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${method.color}`}
            >
                <Icon
                    size={26}
                    strokeWidth={2.2}
                    aria-hidden="true"
                />
            </div>

            <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#6044da]">
                        {method.title}
                    </h3>

                    {isExternal ? (
                        <ExternalLink
                            size={18}
                            className="text-gray-400 transition-all duration-300 group-hover:text-[#6044da]"
                        />
                    ) : (
                        <ArrowUpRight
                            size={18}
                            className="text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#6044da]"
                        />
                    )}
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    {method.description}
                </p>

                <p className="mt-3 font-semibold text-[#6044da] break-all">
                    {method.value}
                </p>

                {method.responseTime && (
                    <div className="mt-4 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#6044da]">
                        {method.responseTime}
                    </div>
                )}
            </div>
        </a>
    );
};

export default ContactMethodCard;