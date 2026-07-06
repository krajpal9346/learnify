import { Star, Quote } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { categoriesData } from "../../data/shared/categoriesData";
import { testimonialsData } from "../../data/home/testimonialsData";

const Categories = () => {
    return (
        <section className="flex flex-col xl:flex-row gap-16 xl:gap-20 px-5 sm:px-10 xl:px-25 pt-10 xl:pt-15">
            <div className="flex flex-col w-full xl:w-1/2 gap-5">
                <SectionHeader badge="Explore Top Categories" title="Popular Learning Paths" />

                <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-4">
                    {categoriesData.map((category) => {
                        const Icon = category.icon;

                        return (
                            <div key={category.title} className="flex flex-col gap-3 w-full sm:w-45 xl:w-32 h-52 rounded-xl border border-gray-300 p-3">
                                <div className={`flex justify-center items-center h-16 w-16 rounded-xl ${category.bg}`}>
                                    <Icon size={36} color={category.color} />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <h3 className="text-base font-bold">{category.title}</h3>
                                    <p className="text-sm text-gray-600 mt-auto">{category.courses}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col w-full xl:w-1/2 gap-5">
                <SectionHeader badge="Student Testimonials" title="Learners Love Learnify AI" />

                <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-4">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.name} className="flex flex-col w-full sm:w-80 xl:w-52 h-68 rounded-xl border border-gray-300 px-5 py-3">
                            <div className="h-8 mb-4">
                                <Quote size={30} color="#6044da" fill="#6044da" className="rotate-180 shrink-0" />
                            </div>

                            <div className="flex flex-col flex-1">
                                <p className="text-sm text-gray-700">{testimonial.review}</p>

                                <div className="mt-auto pt-6">
                                    <p className="text-sm font-semibold text-purple-800">- {testimonial.name}</p>
                                    <p className="text-[13px] text-gray-600">{testimonial.role}</p>

                                    <div className="flex gap-1 mt-1">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star key={index} size={14} color="#6044da" fill="#6044da" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;