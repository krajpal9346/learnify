import SectionHeader from "../common/SectionHeader";
import { testimonialsData } from "../../data/home/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const TestimonialsGrid = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 pb-5">
            <div className="flex flex-col items-center gap-6">
                <SectionHeader
                    title="What Our Learners Say"
                    description="Real stories from real people who transformed their learning journey."
                    align="center"
                />

                <div className="mt-6 flex w-full flex-col items-center gap-8 lg:gap-10 md:flex-row xl:items-stretch xl:justify-center">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsGrid;