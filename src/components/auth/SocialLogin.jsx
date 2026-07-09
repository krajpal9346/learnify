import { socialProvidersData } from "../../data/auth/socialProvidersData";

const SocialLogin = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {socialProvidersData.map((provider) => (
                    <button key={provider.name} type="button" className="flex items-center justify-center rounded-xl border border-gray-300 px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6044da] hover:shadow-md sm:px-4">
                        <img src={provider.image} alt={provider.name} className="h-5 object-contain sm:h-6" />
                    </button>
                ))}
            </div>

            <div className="mt-5 flex items-center gap-3 sm:gap-4">
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-center text-xs text-gray-500 sm:text-sm">
                    or continue with email
                </span>
                <div className="h-px flex-1 bg-gray-300" />
            </div>
        </>
    );
};

export default SocialLogin;