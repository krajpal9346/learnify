import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ label = "Password", placeholder = "Enter your password", name, value, onChange, error = "", required = false, disabled = false, autoComplete = "current-password", }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="font-semibold">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </label>

            <div className={`relative rounded-xl border transition-all duration-300 ${error ? "border-red-500 focus-within:ring-2 focus-within:ring-red-200" : "border-gray-300 focus-within:border-[#6044da] focus-within:ring-2 focus-within:ring-[#6044da]/20"} ${disabled ? "bg-gray-100 opacity-70" : ""}`}>
                <input id={name} name={name} type={showPassword ? "text" : "password"} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} autoComplete={autoComplete} className="w-full rounded-xl bg-transparent px-4 py-3.5 pr-12 text-sm outline-none sm:text-base" />
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} disabled={disabled} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors duration-300 hover:text-[#6044da] disabled:cursor-not-allowed" aria-label={showPassword ? "Hide password" : "Show password"}>
                    {showPassword ? (<Eye size={20} />) : (<EyeOff size={20} />)}
                </button>
            </div>

            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default PasswordInput;