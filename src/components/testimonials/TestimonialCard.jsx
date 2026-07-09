import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="flex min-h-20 md:w-80 md:h-100 lg:w-100 lg:h-80 xl:w-150 flex-col justify-between rounded-3xl border border-gray-200 bg-white py-5 px-6 xl:px-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col gap-5">
                <Quote size={34} color="#6044da" fill="#6044da" aria-hidden="true" />
                <p className="leading-7 text-gray-700">{testimonial.review}</p>
            </div>

            <div className="mt-8 flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" />

                <div>
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>
        </article>
    );
};

export default TestimonialCard;