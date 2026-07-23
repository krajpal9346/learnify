import { Lightbulb } from "lucide-react";

const CTAIllustration = () => {
    return (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-200 transition-transform duration-300 hover:scale-105 sm:h-18 sm:w-18">
            <Lightbulb size={42} color="#6044da" strokeWidth={2} aria-hidden="true" />
        </div>
    );
};

export default CTAIllustration;