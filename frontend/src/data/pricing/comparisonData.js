import { BrainCog, BrainCircuit, Map, BookOpen, ClipboardList, UserRound, Medal, Headphones, Rocket, Wallet, BadgeCheck, } from "lucide-react";

export const comparisonData = {
    plans: ["Basic", "Pro", "Premium"],

    features: [
        {
            icon: Wallet,
            name: "Billing",
            values: {
                monthly: ["Free Forever", "₹499 / month", "₹999 / month"],
                yearly: ["Free Forever", "₹4,792 / year", "₹9,592 / year"]
            }
        },
        {
            icon: BadgeCheck,
            name: "Yearly Savings",
            values: {
                monthly: ["-", "-", "-"],
                yearly: ["-", "Save ₹1,196", "Save ₹2,396"]
            }
        },
        {
            icon: BrainCog,
            name: "AI-powered learning recommendations",
            values: {
                monthly: [true, true, true],
                yearly: [true, true, true]
            }
        },
        {
            icon: BrainCircuit,
            name: "AI skill gap analysis",
            values: {
                monthly: [false, true, true],
                yearly: [false, true, true]
            }
        },
        {
            icon: Map,
            name: "Personalized learning roadmap",
            values: {
                monthly: ["Basic Roadmap", "Advanced Roadmap", "Advanced Roadmap"],
                yearly: ["Basic Roadmap", "Advanced Roadmap", "Advanced Roadmap"]
            }
        },
        {
            icon: BookOpen,
            name: "Premium Courses",
            values: {
                monthly: [false, true, true],
                yearly: [false, true, true]
            }
        },
        {
            icon: ClipboardList,
            name: "Practice Tests & Quizzes",
            values: {
                monthly: [false, true, true],
                yearly: [false, true, true]
            }
        },
        {
            icon: UserRound,
            name: "1-on-1 AI Mentor",
            values: {
                monthly: [false, false, true],
                yearly: [false, false, true]
            }
        },
        {
            icon: Medal,
            name: "Industry Certifications",
            values: {
                monthly: [false, false, true],
                yearly: [false, false, true]
            }
        },
        {
            icon: Headphones,
            name: "Priority Support",
            values: {
                monthly: [false, true, true],
                yearly: [false, true, true]
            }
        },
        {
            icon: Rocket,
            name: "Early Access Features",
            values: {
                monthly: [false, false, true],
                yearly: [false, false, true]
            }
        }
    ]
};