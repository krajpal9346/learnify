import { useState } from "react";
import Hero from "../components/feedback/Hero";
import FeedbackForm from "../components/feedback/FeedbackForm";
import Sidebar from "../components/feedback/Sidebar";
import CTA from "../components/feedback/CTA";

const Feedback = () => {
    const initialFormData = { feedbackType: "", message: "", rating: 0, email: "", files: [], };
    const [formData, setFormData] = useState(initialFormData);

    const updateField = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    return (
        <main>
            <Hero />

            <section className="flex flex-col gap-8 px-4 py-10 sm:px-8 lg:flex-row lg:px-12 xl:gap-10 xl:px-20">
                <FeedbackForm formData={formData} updateField={updateField} resetForm={resetForm} />
                <Sidebar />
            </section>

            <CTA />
        </main>
    );
};

export default Feedback;