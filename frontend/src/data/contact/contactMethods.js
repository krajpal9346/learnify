import {
    Mail,
    Phone,
    MessageCircle,
    MapPin,
} from "lucide-react";

export const contactMethods = [
    {
        id: 1,
        icon: Mail,
        title: "Email Support",
        description:
            "Send us an email and we'll get back to you as soon as possible.",
        value: "support@learnifyai.com",
        href: "mailto:support@learnifyai.com",
        responseTime: "Replies within 24 hours",
        color: "bg-purple-100 text-[#6044da]",
    },
    {
        id: 2,
        icon: Phone,
        title: "Call Us",
        description:
            "Speak directly with our support team during business hours.",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
        responseTime: "Mon - Sat",
        color: "bg-green-100 text-green-600",
    },
    {
        id: 3,
        icon: MessageCircle,
        title: "Community",
        description:
            "Join thousands of learners and get help from the community.",
        value: "Visit Community",
        href: "/community",
        responseTime: "Available 24/7",
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: 4,
        icon: MapPin,
        title: "Office",
        description:
            "Visit our office during working hours.",
        value: "Gurugram, Haryana, India",
        href: "https://maps.google.com",
        responseTime: "By Appointment",
        color: "bg-orange-100 text-orange-600",
    },
];