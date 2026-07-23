const TextInput = ({ label, type = "text", placeholder, icon: Icon, name, value, onChange, error = "", required = false, disabled = false, }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="font-semibold">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </label>

            <div className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-all duration-300 ${error ? "border-red-500 focus-within:ring-2 focus-within:ring-red-200" : "border-gray-300 focus-within:border-[#6044da] focus-within:ring-2 focus-within:ring-[#6044da]/20"} ${disabled ? "cursor-not-allowed bg-gray-100 opacity-70" : ""}`}>
                {Icon && <Icon size={20} color="#6d6d6d" />}
                <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} autoComplete="off" className="w-full border-none bg-transparent text-sm outline-none sm:text-base" />
            </div>

            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default TextInput;