import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({ size = "default", showSubtitle = true, className = "" }) => {
    const sizes = {
        small: { icon: 18, title: "text-lg", subtitle: "text-xs", },
        default: { icon: 22, title: "text-xl", subtitle: "text-sm" },
        large: { icon: 30, title: "text-2xl", subtitle: "text-base" }
    };

    const currentSize = sizes[size];

    return (
        <Link to="/" className={`flex items-center gap-3 ${className}`}>
            <Sparkles size={currentSize.icon} className="text-[#6044da]" />

            <div className="leading-tight">
                <h1 className={`font-bold ${currentSize.title}`}>Learnify AI</h1>

                {showSubtitle && (
                    <p className={`text-gray-600 ${currentSize.subtitle}`}>AI Learning Recommender</p>
                )}
            </div>
        </Link>
    );
};

export default Logo;