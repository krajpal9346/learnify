import { Mail, ShieldCheck } from "lucide-react";

const ContactBanner = () => {
    return (
        <section className="px-4 pb-12 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col gap-8 rounded-3xl bg-purple-100 p-6 sm:p-8 xl:flex-row xl:items-center xl:justify-between xl:px-12">
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-200 sm:h-20 sm:w-20">
                        <ShieldCheck size={40} color="#6044da" aria-hidden="true" />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">Questions about your privacy?</h3>
                        <p className="mt-2 leading-7 text-gray-700">If you have any concerns or requests regarding your personal data, our team is always here to help.</p>
                    </div>
                </div>

                <button type="button" className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-[#6044da] px-6 py-3 font-semibold text-[#6044da] transition-all duration-300 hover:bg-[#6044da] hover:text-white sm:w-auto">
                    Contact Us
                    <Mail size={20} aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};

export default ContactBanner;