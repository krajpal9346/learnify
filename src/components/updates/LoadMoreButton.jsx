import { ChevronDown } from "lucide-react";

const LoadMoreButton = ({
    hasMoreUpdates,
    loadMoreUpdates,
}) => {
    if (!hasMoreUpdates) {
        return null;
    }

    return (
        <section className="pb-12">
            <div className="flex justify-center px-4">
                <button
                    type="button"
                    onClick={loadMoreUpdates}
                    className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#6044da] px-5 sm:px-6 py-3 font-semibold text-[#6044da] transition-all duration-300 hover:bg-purple-50"
                >
                    Load More Updates

                    <ChevronDown
                        size={18}
                        color="#6044da"
                        strokeWidth={3}
                        aria-hidden="true"
                    />
                </button>
            </div>
        </section>
    );
};

export default LoadMoreButton;