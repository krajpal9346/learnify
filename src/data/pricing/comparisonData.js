import { BrainCog, BrainCircuit, Map, BookOpen, ClipboardList, UserRound, Medal, Headphones, Rocket } from "lucide-react";

export const comparisonData = {
    plans: ["Basic", "Pro", "Premium"],

    features: [
        {
            icon: BrainCog,
            name: "AI-powered learning recommendations",
            values: [true, true, true]
        },
        {
            icon: BrainCircuit,
            name: "AI skill gap analysis",
            values: [false, true, true]
        },
        {
            icon: Map,
            name: "Personalized learning roadmap",
            values: ["Basic roadmap", "Advanced roadmap", "Advanced roadmap"]
        },
        {
            icon: BookOpen,
            name: "Access to premium courses",
            values: [false, true, true]
        },
        {
            icon: ClipboardList,
            name: "Practice tests and quizzes",
            values: [false, true, true]
        },
        {
            icon: UserRound,
            name: "1-on-1 AI mentor",
            values: [false, false, true]
        },
        {
            icon: Medal,
            name: "Certifications",
            values: [false, false, true]
        },
        {
            icon: Headphones,
            name: "Priority Support",
            values: [false, true, true]
        },
        {
            icon: Rocket,
            name: "Early access to new features",
            values: [false, false, true]
        }
    ]
};