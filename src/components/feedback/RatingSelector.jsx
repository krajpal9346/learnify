import { Star } from "lucide-react";

const RatingSelector = () => {
    return (
        <div className="flex flex-col gap-4">
            <label className="text-lg font-bold">How would you rate your overall experience?</label>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" className="cursor-pointer transition-transform duration-300 hover:scale-110">
                        <Star size={36} color="#9ca3af" className="sm:h-10.5 sm:w-10.5" aria-hidden="true" />
                    </button>
                ))}

                <span className="text-sm text-gray-600 sm:ml-2 sm:text-base">Select a rating</span>
            </div>
        </div>
    );
};

export default RatingSelector;