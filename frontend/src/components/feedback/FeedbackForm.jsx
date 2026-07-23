import { useMemo, useState } from "react";
import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import FeedbackTypeSelector from "./FeedbackTypeSelector";
import RatingSelector from "./RatingSelector";
import FileUpload from "./FileUpload";
import { marketingApi } from "../../services/api";

const FeedbackForm = ({ formData, updateField, resetForm }) => {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const emailRegex = useMemo(
        () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        []
    );

    const validateForm = () => {
        const newErrors = {};

        if (!formData.feedbackType) {
            newErrors.feedbackType = "Please select a feedback type.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter your feedback.";
        } else if (formData.message.trim().length < 10) {
            newErrors.message =
                "Feedback should contain at least 10 characters.";
        }

        if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(false);
        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            const payload = new FormData();
            payload.append("feedbackType", formData.feedbackType);
            payload.append("message", formData.message);
            if (formData.rating) payload.append("rating", String(formData.rating));
            if (formData.email.trim()) payload.append("email", formData.email.trim());
            (formData.files || []).forEach((file) => payload.append("files", file));

            await marketingApi.feedback(payload);
            resetForm();
            setErrors({});
            setSubmitted(true);
        } catch (error) {
            setErrors({
                message: error.message || "Failed to submit feedback. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 xl:w-2/3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                <div>
                    <h2 className="text-2xl font-bold">Share Your Feedback</h2>
                    <p className="mt-2 leading-7 text-gray-600">Let us know what you think, suggest improvements, or report an issue.</p>
                </div>

                <FeedbackTypeSelector selectedType={formData.feedbackType} onSelect={(type) => updateField("feedbackType", type)} />

                {errors.feedbackType && (
                    <p className="-mt-4 text-sm font-medium text-red-600">{errors.feedbackType}</p>
                )}

                <div className="flex flex-col gap-3">
                    <label className="text-lg font-bold">
                        Tell us more
                        <span className="ml-1 text-red-600">*</span>
                    </label>

                    <textarea rows={6} value={formData.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Share your thoughts..."
                        className={`rounded-xl border p-5 text-sm outline-none transition-all duration-300 sm:text-base ${errors.message
                            ? "border-red-500 focus:ring-red-300"
                            : "border-gray-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"
                            }`}
                    />

                    {errors.message && (
                        <p className="text-sm font-medium text-red-600">{errors.message}</p>
                    )}
                </div>

                <RatingSelector rating={formData.rating} onChange={(rating) => updateField("rating", rating)} />

                <div className="flex flex-col gap-3">
                    <label className="text-lg font-bold">Email (optional)</label>
                    <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="Enter your email"
                        className={`rounded-xl border px-5 py-3.5 text-sm outline-none transition-all duration-300 sm:text-base ${errors.email
                            ? "border-red-500 focus:ring-red-300"
                            : "border-gray-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20"
                            }`}
                    />

                    {errors.email && (
                        <p className="text-sm font-medium text-red-600">{errors.email}</p>
                    )}

                    <p className="text-sm leading-6 text-gray-500">We'll only contact you if additional clarification is needed.</p>
                </div>

                <FileUpload files={formData.files} onFilesChange={(files) => updateField("files", files)} />

                {submitted && (
                    <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                        <CheckCircle2 size={22} className="shrink-0" />

                        <div>
                            <p className="font-semibold">Feedback submitted successfully!</p>
                            <p className="text-sm">Thank you for helping us improve Learnify AI.</p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" disabled={isSubmitting} className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#6044da] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                        {!isSubmitting && (<ExternalLink size={18} aria-hidden="true" />)}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-center text-sm text-gray-600 sm:justify-start">
                        <ShieldCheck size={16} color="#6044da" aria-hidden="true" />
                        <span>Your feedback is secure and confidential.</span>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default FeedbackForm;