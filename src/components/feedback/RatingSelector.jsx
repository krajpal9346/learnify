import { useState } from "react";
import { Star } from "lucide-react";

const ratingLabels = { 1: "Poor", 2: "Fair", 3: "Good", 4: "Very Good", 5: "Excellent" };

const RatingSelector = ({ rating, onChange }) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const activeRating = hoveredRating || rating;

    const handleKeyDown = (event, value) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onChange(value);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <label className="text-lg font-bold">How would you rate your overall experience?</label>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                        onClick={() => onChange(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onKeyDown={(event) =>
                            handleKeyDown(event, star)
                        }
                        className="cursor-pointer rounded-md transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#6044da]/30">
                        <Star size={38} strokeWidth={2} fill={star <= activeRating ? "#facc15" : "transparent"} color={star <= activeRating ? "#facc15" : "#9ca3af"} className="transition-colors duration-200" aria-hidden="true" />
                    </button>
                ))}

                <span className="min-w-30 text-sm font-medium text-gray-600 sm:ml-2 sm:text-base">
                    {activeRating ? ratingLabels[activeRating] : "Select a rating"}
                </span>
            </div>
        </div>
    );
};

export default RatingSelector;