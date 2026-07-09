import { Send, Crown, Gem } from "lucide-react";

export const pricingData = [
    {
        title: "Basic",
        subtitle: "Perfect for getting started",
        icon: Send,
        price: "₹0",
        period: "/month",
        note: "Forever free",
        buttonText: "Get Started Free",
        featured: false,
        features: [
            "AI-powered learning recommendations",
            "Access to free courses",
            "Basic roadmaps",
            "Progress tracking",
            "Community access"
        ]
    },
    {
        title: "Pro",
        subtitle: "For serious learners",
        icon: Crown,
        price: "₹499",
        period: "/month",
        yearly: "₹4,792 billed yearly",
        save: "Save 20%",
        buttonText: "Start Pro Plan",
        featured: true,
        badge: "Most Popular",
        features: [
            "Everything in Basic",
            "AI skill gap analysis",
            "Personalized learning roadmap",
            "Unlimited premium courses",
            "Practice tests & quizzes",
            "Priority support"
        ]
    },
    {
        title: "Premium",
        subtitle: "For career achievers",
        icon: Gem,
        price: "₹999",
        period: "/month",
        yearly: "₹9,592 billed yearly",
        save: "Save 20%",
        buttonText: "Start Premium Plan",
        featured: false,
        features: [
            "Everything in Pro",
            "1-on-1 AI mentor",
            "Advanced analytic",
            "Interview preparation",
            "Certifications",
            "Early feature access"
        ]
    }
];