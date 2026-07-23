import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const Logo = ({ size = "medium", variant = "dark" }) => {
    const sizes = {
        small: { icon: 26, heading: "text-xl", subheading: "text-[10px]" },
        medium: { icon: 34, heading: "text-2xl", subheading: "text-xs" },
        large: { icon: 42, heading: "text-3xl", subheading: "text-sm" }
    };

    const currentSize = sizes[size] || sizes.medium;
    const isLight = variant === "light";

    return (
        <Link to={ROUTES.HOME} className="flex w-fit items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
                <GraduationCap size={currentSize.icon} color="#6044da" strokeWidth={2.5} />
            </div>

            <div className="flex flex-col gap-1">
                <h1 className={`font-bold leading-none ${currentSize.heading} ${isLight ? "text-white" : "text-gray-900"}`}>Learnify</h1>
                <p className={`${currentSize.subheading} tracking-[0.2em] ${isLight ? "text-purple-200" : "text-gray-500"}`}>AI Learning Platform</p>
            </div>
        </Link>
    );
};

export default Logo;