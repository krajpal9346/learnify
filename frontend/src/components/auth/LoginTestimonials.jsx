import { Quote } from "lucide-react";
import { loginTestimonialsData } from "../../data/auth/loginTestimonialsData";

const LoginTestimonials = () => {
    return (
        <section className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">What learners say</h3>

            <div className="flex flex-col gap-4">
                {loginTestimonialsData.map((testimonial) => (
                    <article key={testimonial.name} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl sm:p-5">
                        <Quote size={22} color="white" className="mb-3 opacity-80" />

                        <p className="text-sm leading-6 text-purple-100 sm:leading-7">"{testimonial.text}"</p>

                        <div className="mt-5">
                            <h4 className="font-semibold text-white">{testimonial.name}</h4>
                            <p className="text-sm text-purple-200">{testimonial.role}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default LoginTestimonials;