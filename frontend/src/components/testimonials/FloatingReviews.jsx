import { Star } from "lucide-react";
import { floatingTestimonialsData } from "../../data/testimonials/floatingTestimonialsData";

const FloatingReviews = ({ side }) => {
    const reviews = side === "left" ? floatingTestimonialsData.slice(0, 2) : floatingTestimonialsData.slice(2);

    return (
        <div className="relative hidden xl:block xl:w-1/5 h-60">
            {reviews.map((item) => (
                <div key={item.id} className={`absolute ${item.position} flex items-center h-18`}>
                    <div className="flex h-16 w-16 2xl:h-18 2xl:w-18 items-center justify-center rounded-full bg-white p-2 shadow-md">
                        <img src={item.image} alt="Learner" className="h-full w-full rounded-full object-cover" />
                    </div>

                    <div className="-translate-x-1.5 flex items-center gap-1 rounded-r-xl bg-white px-3 py-3 shadow-sm">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} size={15} color="#6044da" fill="#6044da" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FloatingReviews;