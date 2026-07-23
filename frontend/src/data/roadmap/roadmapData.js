import { CircleCheckBig, ChartNoAxesColumnIncreasing, Rocket, Lightbulb, Target, Check, Circle } from "lucide-react";

export const roadmapData = [
    {
        phase: "Phase 1",
        title: "Foundation",
        timeline: "Q1 2024",
        status: "Completed",
        statusIcon: Check,
        headerIcon: CircleCheckBig,
        color: "#16a34a",
        cardBorder: "border-green-300",
        cardBg: "bg-green-50",
        badgeBg: "bg-green-100",
        statusColor: "text-[#16a34a]",
        items: [
            { text: "AI Recommendation Engine v1", completed: true },
            { text: "User Onboarding & Profiling", completed: true },
            { text: "Course Database Integration", completed: true },
            { text: "Basic Personalized Feed", completed: true },
            { text: "Progress Tracking", completed: true },
            { text: "Web Platform Launch", completed: true }
        ]
    },
    {
        phase: "Phase 2",
        title: "Enhancement",
        timeline: "Q2 2024",
        status: "Completed",
        statusIcon: Check,
        headerIcon: ChartNoAxesColumnIncreasing,
        color: "#2563eb",
        cardBorder: "border-blue-300",
        cardBg: "bg-blue-50",
        badgeBg: "bg-blue-100",
        statusColor: "text-[#2563eb]",
        items: [
            { text: "Advanced AI Algorithms", completed: true },
            { text: "Learning Path Generation", completed: true },
            { text: "Skill Gap Analysis", completed: true },
            { text: "Smart Content Filtering", completed: true },
            { text: "Email Notifications", completed: true },
            { text: "Mobile Responsive UI", completed: true }
        ]
    },
    {
        phase: "Phase 3",
        title: "Personalization+",
        timeline: "Q3 2024 - Q4 2024",
        status: "In Progress",
        statusIcon: Circle,
        headerIcon: Rocket,
        color: "#6044da",
        cardBorder: "border-purple-300",
        cardBg: "bg-purple-100",
        badgeBg: "bg-purple-100",
        statusColor: "text-[#6044da]",
        items: [
            { text: "Learning Style Detection", completed: true },
            { text: "Adaptive Content Difficulty", completed: true },
            { text: "Real-time Recommendations", completed: true },
            { text: "AI Mentor (Beta)", completed: false },
            { text: "Voice Search", completed: false },
            { text: "Deep Analytics Dashboard", completed: false }
        ]
    },
    {
        phase: "Phase 4",
        title: "Smart Learning",
        timeline: "Q1 2025 - Q2 2025",
        status: "Upcoming",
        statusIcon: Circle,
        headerIcon: Lightbulb,
        color: "#f97316",
        cardBorder: "border-orange-300",
        cardBg: "bg-orange-50",
        badgeBg: "bg-orange-100",
        statusColor: "text-[#f97316]",
        items: [
            { text: "AI Tutor (Chat-based)", completed: false },
            { text: "Interactive Practice Engine", completed: false },
            { text: "Peer Learning Communities", completed: false },
            { text: "Gamification & Rewards", completed: false },
            { text: "Certificates & Achievements", completed: false },
            { text: "Offline Learning Mode", completed: false }
        ]
    },
    {
        phase: "Phase 5",
        title: "Future Vision",
        timeline: "Q3 2025 and beyond",
        status: "Upcoming",
        statusIcon: Circle,
        headerIcon: Target,
        color: "#db2777",
        cardBorder: "border-pink-300",
        cardBg: "bg-pink-100",
        badgeBg: "bg-pink-100",
        statusColor: "text-[#db2777]",
        items: [
            { text: "AR/VR Immersive Learning", completed: false },
            { text: "Global Multi-language Support", completed: false },
            { text: "Career Path Prediction", completed: false },
            { text: "Employer Connect", completed: false },
            { text: "Marketplace for Creators", completed: false },
            { text: "Lifelong Learning Ecosystem", completed: false }
        ]
    }
];