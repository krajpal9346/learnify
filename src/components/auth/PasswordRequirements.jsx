import { CircleCheck } from "lucide-react";
import { passwordRequirementsData } from "../../data/auth/passwordRequirementsData";

const PasswordRequirements = () => {
    return (
        <section className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">Password must contain:</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {passwordRequirementsData.map((requirement) => (
                    <div key={requirement} className="flex items-center gap-2">
                        <CircleCheck size={16} color="#6044da" />
                        <span className="text-sm text-gray-600">{requirement}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PasswordRequirements;