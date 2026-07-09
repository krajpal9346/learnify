const TextInput = ({ label, type = "text", placeholder, icon: Icon }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold">{label}</label>

            <div className="flex items-center gap-4 rounded-xl border border-gray-300 px-4 py-3.5 transition-all duration-300 focus-within:border-[#6044da] focus-within:ring-2 focus-within:ring-[#6044da]/20">
                <Icon size={20} color="#6d6d6d" />
                <input type={type} placeholder={placeholder} className="w-full border-none bg-transparent text-sm outline-none sm:text-base" />
            </div>
        </div>
    );
};

export default TextInput;