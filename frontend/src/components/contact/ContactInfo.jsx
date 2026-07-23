import {
    Clock3,
    MapPin,
    Globe,
    ShieldCheck,
} from "lucide-react";
import { contactMethods } from "../../data/contact/contactMethods";
import ContactMethodCard from "./ContactMethodCard";

const ContactInfo = () => {
    return (
        <aside className="flex flex-col gap-6">
            {/* Contact Methods */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">
                    Contact Information
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    Reach out through any of the following channels.
                    We're always happy to help.
                </p>

                <div className="mt-6 flex flex-col gap-4">
                    {contactMethods.map((method) => (
                        <ContactMethodCard
                            key={method.id}
                            method={method}
                        />
                    ))}
                </div>
            </section>

            {/* Office Hours */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                        <Clock3
                            size={24}
                            color="#6044da"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900">
                            Support Hours
                        </h3>

                        <p className="text-sm text-gray-500">
                            We're available during these hours.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl bg-purple-50 p-4">
                        <span className="font-medium text-gray-700">
                            Monday - Friday
                        </span>

                        <span className="font-semibold text-[#6044da]">
                            9:00 AM – 7:00 PM
                        </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-purple-50 p-4">
                        <span className="font-medium text-gray-700">
                            Saturday
                        </span>

                        <span className="font-semibold text-[#6044da]">
                            10:00 AM – 4:00 PM
                        </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-purple-50 p-4">
                        <span className="font-medium text-gray-700">
                            Sunday
                        </span>

                        <span className="font-semibold text-red-500">
                            Closed
                        </span>
                    </div>
                </div>
            </section>

            {/* Office Address */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                        <MapPin
                            size={24}
                            color="#6044da"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900">
                            Office
                        </h3>

                        <p className="text-sm text-gray-500">
                            Visit us anytime.
                        </p>
                    </div>
                </div>

                <p className="leading-7 text-gray-600">
                    Learnify AI
                    <br />
                    Gurugram, Haryana
                    <br />
                    India
                </p>
            </section>

            {/* Secure Support */}
            <section className="rounded-3xl bg-linear-to-r from-[#6044da] to-[#7a5af8] p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                    <ShieldCheck size={28} />

                    <h3 className="text-xl font-bold">
                        Safe & Secure
                    </h3>
                </div>

                <p className="mt-4 leading-7 text-purple-100">
                    Your messages remain private and are handled
                    securely. We never share your information with
                    third parties.
                </p>

                <div className="mt-6 flex items-center gap-2">
                    <Globe size={18} />

                    <span className="font-medium">
                        Trusted by learners worldwide.
                    </span>
                </div>
            </section>
        </aside>
    );
};

export default ContactInfo;