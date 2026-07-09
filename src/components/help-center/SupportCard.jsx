import { MessageSquare, MessagesSquare } from "lucide-react";

const SupportCard = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-purple-100 p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold sm:text-2xl">Still Need Help?</h3>
                    <p className="leading-6 text-gray-700">Our support team is always here to help.</p>
                </div>

                <MessagesSquare size={64} color="#6044da" strokeWidth={2} className="shrink-0 sm:h-18 sm:w-18" aria-hidden="true" />
            </div>

            <button type="button" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#6044da] px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5338d4] hover:shadow-lg">
                Contact Support
                <MessageSquare size={18} aria-hidden="true" />
            </button>
        </section>
    );
};

export default SupportCard;