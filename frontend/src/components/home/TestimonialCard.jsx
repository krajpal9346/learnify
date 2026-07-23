import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="flex flex-col w-full sm:w-80 xl:w-52 lg:h-58 xl:h-78 rounded-xl border border-gray-300 px-5 py-3">
            <div className="h-8 mb-4">
                <Quote size={30} color="#6044da" fill="#6044da" className="rotate-180 shrink-0" aria-hidden="true" />
            </div>

            <div className="flex flex-col h-full justify-between">
                <p className="text-sm text-gray-700">{testimonial.review}</p>

                <div className="pt-6">
                    <p className="text-sm font-semibold text-purple-800">- {testimonial.name}</p>
                    <p className="text-[13px] text-gray-600">{testimonial.role}</p>

                    <div className="flex gap-1 mt-1" aria-label="5 star rating">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} size={14} color="#6044da" fill="#6044da" aria-hidden="true" />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TestimonialCard;