import { ExternalLink, ShieldCheck } from "lucide-react";
import FeedbackTypeSelector from "./FeedbackTypeSelector";
import RatingSelector from "./RatingSelector";
import FileUpload from "./FileUpload";

const FeedbackForm = () => {
    return (
        <section className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 xl:w-2/3">
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className="text-2xl font-bold">Share Your Feedback</h2>
                    <p className="mt-2 leading-7 text-gray-600">Let us know what you think, suggest improvements, or report an issue.</p>
                </div>

                <FeedbackTypeSelector />

                <div className="flex flex-col gap-3">
                    <label className="text-lg font-bold">
                        Tell us more
                        <span className="ml-1 text-red-600">*</span>
                    </label>

                    <textarea rows={6} placeholder="Share your thoughts..." className="rounded-xl border border-gray-300 p-5 text-sm outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base" />
                </div>

                <RatingSelector />

                <div className="flex flex-col gap-3">
                    <label className="text-lg font-bold">Email (optional)</label>
                    <input type="email" placeholder="Enter your email" className="rounded-xl border border-gray-300 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base" />
                    <p className="text-sm leading-6 text-gray-500">We'll only contact you if additional clarification is needed.</p>
                </div>

                <FileUpload />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#6044da] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg sm:w-auto">
                        Submit Feedback
                        <ExternalLink size={18} aria-hidden="true" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-center text-sm text-gray-600 sm:justify-start">
                        <ShieldCheck size={16} color="#6044da" aria-hidden="true" />
                        <span>Your feedback is secure and confidential.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackForm;