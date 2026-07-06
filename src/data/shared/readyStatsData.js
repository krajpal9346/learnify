import { Sparkles, Flame } from "lucide-react";

export const readyStatsData = [
    {
        title: "Courses Completed",
        value: "24",
        change: "+12 this month",
        changeColor: "text-green-500",
        icon: Sparkles,
        iconColor: "#6044da",
        position:
            "absolute top-2 left-1/2 translate-x-[-75%] sm:left-8 sm:translate-x-0 lg:top-10 lg:left-30 xl:top-8 xl:left-20",
    },

    {
        title: "Learning Streak",
        value: "12 days",
        change: "Keep going",
        changeColor: "text-orange-500",
        icon: Flame,
        iconColor: "#f9911a",
        iconFill: "#f9911a",
        position:
            "absolute top-20 left-1/2 translate-x-[-25%] sm:right-10 sm:left-auto sm:translate-x-0 lg:top-25 lg:right-20 xl:top-12 xl:right-10",
    },

    {
        title: "Skills Mastered",
        value: "8",
        change: "+2 this month",
        changeColor: "text-green-500",
        icon: Sparkles,
        iconColor: "#10b981",
        position:
            "absolute bottom-0 left-1/2 -translate-x-1/2 xl:bottom-10 xl:right-0 xl:left-auto xl:translate-x-0",
    },
];