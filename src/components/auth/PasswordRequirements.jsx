import { CircleCheck, Circle } from "lucide-react";

const PasswordRequirements = ({ password = "" }) => {
    const requirements = [
        {
            label: "8+ characters",
            isValid: password.length >= 8,
        },
        {
            label: "One uppercase",
            isValid: /[A-Z]/.test(password),
        },
        {
            label: "One number",
            isValid: /\d/.test(password),
        },
        {
            label: "One special character",
            isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        },
    ];

    return (
        <section className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">Password must contain:</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {requirements.map((requirement) => (
                    <div key={requirement.label} className="flex items-center gap-2">
                        {requirement.isValid ? (<CircleCheck size={18} className="text-green-600" />) : (<Circle size={18} className="text-gray-400" />)}

                        <span className={`text-sm transition-colors duration-300 ${requirement.isValid ? "font-medium text-green-600" : "text-gray-500"}`}>
                            {requirement.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PasswordRequirements;