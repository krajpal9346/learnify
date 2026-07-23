import { Circle, MessageSquare } from "lucide-react";

const LiveChatCard = () => {
    return (
        <section className="rounded-2xl border border-gray-200 bg-purple-100 p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-col gap-6 text-center sm:text-left">
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <Circle size={10} color="#22c55e" fill="#22c55e" aria-hidden="true" />

                    <h3 className="text-xl font-bold sm:text-2xl">Live Chat</h3>
                </div>

                <p className="leading-7 text-gray-700">Chat with our support team <br />9 AM – 9 PM (Mon – Sat)</p>

                <button type="button" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#6044da] bg-white px-5 py-3.5 font-semibold text-[#6044da] transition-all duration-300 hover:bg-purple-50">
                    Start Chat
                    <MessageSquare size={18} aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};

export default LiveChatCard;