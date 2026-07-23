import { MessageSquare } from "lucide-react";
import CTAIllustration from "./CTAIllustration";

const CTA = () => {
    return (
        <section className="px-4 pb-10 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-gray-200 bg-purple-100 p-6 shadow-sm sm:p-8 xl:flex-row xl:px-12">
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                    <CTAIllustration />

                    <div>
                        <h2 className="text-2xl font-bold">Can't find what you're looking for?</h2>
                        <p className="mt-2 leading-7 text-gray-700">Search our help center or contact our support team for personalized assistance.</p>
                    </div>
                </div>

                <a href="mailto:support@learnifyai.com?subject=Learnify%20AI%20Support" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6044da] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg sm:w-auto">
                    Contact Support
                    <MessageSquare size={18} aria-hidden="true" />
                </a>
            </div>
        </section>
    );
};

export default CTA;