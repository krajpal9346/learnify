import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ label = "Password", placeholder = "Enter your password" }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold">{label}</label>

            <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder={placeholder} className="w-full rounded-xl border border-gray-300 px-4 py-3.5 pr-12 text-sm outline-none transition-all duration-300 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base" />
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors duration-300 hover:text-[#6044da]" aria-label={showPassword ? "Hide password" : "Show password"}>
                    {showPassword ? (<Eye size={20} />) : (<EyeOff size={20} />)}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;