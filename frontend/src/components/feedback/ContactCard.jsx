import { useState } from "react";
import { Check, Copy, MailOpen } from "lucide-react";

const EMAIL = "support@learnifyai.com";

const ContactCard = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section className="rounded-2xl bg-purple-100 p-5 shadow-sm sm:p-8">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <div className="flex-1">
                    <h2 className="text-xl font-bold">Have something else to share?</h2>
                    <p className="mt-2 leading-6 text-gray-600">You can also reach us directly at</p>

                    <a href={`mailto:${EMAIL}`} className="mt-3 inline-block break-all font-semibold text-[#6044da] transition-colors duration-300 hover:underline">
                        {EMAIL}
                    </a>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                        <button type="button" onClick={copyEmail} className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#6044da] bg-white px-4 py-2 text-sm font-medium text-[#6044da] transition-all duration-300 hover:bg-[#6044da] hover:text-white">
                            {copied ? (
                                <>
                                    <Check size={16} />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <Copy size={16} />
                                    Copy Email
                                </>
                            )}
                        </button>

                        {copied && (
                            <span className="text-sm font-medium text-green-600">Email copied to clipboard!</span>
                        )}
                    </div>
                </div>

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <MailOpen size={42} color="#6044da" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
};

export default ContactCard;