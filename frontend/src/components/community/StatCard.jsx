import { ArrowUpRight } from "lucide-react";

const StatCard = ({ stat }) => {
    const Icon = stat.icon;

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6044da]/30 hover:shadow-xl">
            <div className="absolute right-5 top-5 rounded-full bg-purple-100 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight
                    size={18}
                    className="text-[#6044da]"
                />
            </div>

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 transition-transform duration-300 group-hover:scale-110">
                <Icon
                    size={28}
                    color="#6044da"
                    strokeWidth={2.4}
                    aria-hidden="true"
                />
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
                {stat.value}
            </h3>

            <p className="mt-2 text-lg font-semibold text-gray-800">
                {stat.title}
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-500">
                {stat.description}
            </p>
        </article>
    );
};

export default StatCard;