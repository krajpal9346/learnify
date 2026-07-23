import { useState } from "react";
import {
    Send,
    User,
    Mail,
    MessageSquare,
    FileText,
    CheckCircle2,
} from "lucide-react";

const categories = [
    "General Inquiry",
    "Technical Support",
    "Course Related",
    "Partnership",
    "Feedback",
    "Bug Report",
    "Other",
];

import { marketingApi } from "../../services/api";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        category: categories[0],
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        } else if (formData.message.length < 20) {
            newErrors.message =
                "Message should contain at least 20 characters.";
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        try {
            await marketingApi.contact(formData);
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                category: categories[0],
                message: "",
            });
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (error) {
            setErrors({
                message: error.message || "Failed to send message. Please try again.",
            });
        }
    };

    return (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    Send us a Message
                </h2>

                <p className="mt-2 text-gray-500">
                    Fill out the form below and our team will get back to you
                    as soon as possible.
                </p>
            </div>

            {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                    <CheckCircle2 size={22} />

                    <span className="font-medium">
                        Thank you! Your message has been sent successfully.
                    </span>
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
                            <User size={18} />
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"
                        />

                        {errors.name && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
                            <Mail size={18} />
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"
                        />

                        {errors.email && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
                        <FileText size={18} />
                        Subject
                    </label>

                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"
                    />

                    {errors.subject && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.subject}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
                        <MessageSquare size={18} />
                        Category
                    </label>

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"
                    >
                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
                        <MessageSquare size={18} />
                        Message
                    </label>

                    <textarea
                        rows={7}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={1000}
                        placeholder="Write your message..."
                        className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"
                    />

                    <div className="mt-2 flex items-center justify-between">
                        {errors.message ? (
                            <p className="text-sm text-red-500">
                                {errors.message}
                            </p>
                        ) : (
                            <span />
                        )}

                        <span className="text-sm text-gray-500">
                            {formData.message.length}/1000
                        </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#5137c9]"
                >
                    Send Message
                    <Send size={18} />
                </button>
            </form>
        </section>
    );
};

export default ContactForm;