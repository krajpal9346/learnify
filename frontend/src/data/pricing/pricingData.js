import { Send, Crown, Gem } from "lucide-react";
import { ROUTES } from "../routes";

export const pricingData = [
    {
        id: "basic",
        title: "Basic",
        subtitle: "Perfect for getting started",
        icon: Send,
        featured: false,

        pricing: {
            monthly: { price: "₹0", period: "/month", note: "Forever Free", billed: "", originalPrice: "", save: "" },
            yearly: { price: "₹0", period: "/year", note: "Forever Free", billed: "", originalPrice: "", save: "" }
        },

        buttonText: { monthly: "Get Started Free", yearly: "Get Started Free" },

        action: {
            monthly: {
                pathname: ROUTES.STARTED,
                state: { plan: "Basic", billing: "monthly" }
            },
            yearly: {
                pathname: ROUTES.STARTED,
                state: { plan: "Basic", billing: "yearly" }
            }
        },

        features: ["AI-powered learning recommendations", "Access to free courses", "Basic learning roadmap", "Progress tracking", "Community access"]
    },

    {
        id: "pro",
        title: "Pro",
        subtitle: "For serious learners",
        icon: Crown,
        featured: true,
        badge: "Most Popular",

        pricing: {
            monthly: { price: "₹499", period: "/month", note: "", billed: "", originalPrice: "", save: "" },
            yearly: { price: "₹4,792", period: "/year", note: "", billed: "Billed annually", originalPrice: "₹5,988", save: "Save ₹1,196 (20%)" }
        },

        buttonText: { monthly: "Start Monthly Plan", yearly: "Start Annual Plan" },

        action: {
            monthly: {
                pathname: ROUTES.STARTED,
                state: { plan: "Pro", billing: "monthly" }
            },
            yearly: {
                pathname: ROUTES.STARTED,
                state: { plan: "Pro", billing: "yearly" }
            }
        },

        features: ["Everything in Basic", "AI skill gap analysis", "Personalized learning roadmap", "Unlimited premium courses", "Practice tests & quizzes", "Priority support"]
    },

    {
        id: "premium",
        title: "Premium",
        subtitle: "For career achievers",
        icon: Gem,
        featured: false,

        pricing: {
            monthly: { price: "₹999", period: "/month", note: "", billed: "", originalPrice: "", save: "" },
            yearly: { price: "₹9,592", period: "/year", note: "", billed: "Billed annually", originalPrice: "₹11,988", save: "Save ₹2,396 (20%)" }
        },

        buttonText: { monthly: "Upgrade to Premium", yearly: "Upgrade Annually" },

        action: {
            monthly: {
                pathname: ROUTES.STARTED,
                state: { plan: "Premium", billing: "monthly" }
            },
            yearly: {
                pathname: ROUTES.STARTED,
                state: { plan: "Premium", billing: "yearly" }
            },
        },

        features: ["Everything in Pro", "1-on-1 AI mentor", "Advanced analytics", "Interview preparation", "Industry certifications", "Early feature access"]
    }
];