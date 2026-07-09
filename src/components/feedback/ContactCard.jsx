import { MailOpen } from "lucide-react";

const ContactCard = () => {
    return (
        <section className="rounded-2xl bg-purple-100 p-5 shadow-sm sm:p-8">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <div>
                    <h2 className="text-xl font-bold">Have something else to share?</h2>
                    <p className="mt-2 leading-6 text-gray-600">You can also reach us directly at</p>

                    <a href="mailto:support@learnifyai.com" className="mt-3 inline-block font-semibold text-[#6044da] transition-colors duration-300 hover:underline">
                        support@learnifyai.com
                    </a>
                </div>

                <MailOpen size={56} color="#6044da" className="shrink-0 sm:h-18 sm:w-18" aria-hidden="true" />
            </div>
        </section>
    );
};

export default ContactCard;