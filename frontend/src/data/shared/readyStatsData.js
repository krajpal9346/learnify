import { Sparkles, Flame } from "lucide-react";

export const readyStatsData = [
    {
        title: "Courses Completed",
        value: "24",
        change: "+12 this month",
        changeColor: "text-green-500",
        icon: Sparkles,
        iconColor: "#6044da",
        iconFill: "#6044da",
        position: "top-[3%] left-[2%] sm:top-[5%] sm:left-[5%] md:left-[8%]"
    },
    {
        title: "Learning Streak",
        value: "12 days",
        change: "Keep going",
        changeColor: "text-orange-500",
        icon: Flame,
        iconColor: "#f9911a",
        iconFill: "#f9911a",
        position: "top-[22%] right-[2%] sm:top-[18%] sm:right-[5%] md:right-[8%] xl:right-0"
    },
    {
        title: "Skills Mastered",
        value: "8",
        change: "+2 this month",
        changeColor: "text-green-500",
        icon: Sparkles,
        iconColor: "#10b981",
        iconFill: "#10b981",
        position: "bottom-[8%] left-[8%] sm:bottom-[6%] sm:left-[18%] md:left-[20%]"
    }
];