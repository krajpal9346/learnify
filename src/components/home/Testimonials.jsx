import SectionHeader from "../common/SectionHeader";
import { testimonialsData } from "../../data/home/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <div className="flex flex-col w-full xl:w-1/2 gap-5">
            <SectionHeader badge="Student Testimonials" title="Learners Love Learnify AI" align="center" />

            <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-4">
                {testimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;