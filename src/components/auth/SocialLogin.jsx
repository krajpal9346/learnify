import { useState } from "react";
import { socialProvidersData } from "../../data/auth/socialProvidersData";

const SocialLogin = ({ onSocialLogin }) => {
    const [loadingProvider, setLoadingProvider] = useState(null);

    const handleProviderLogin = async (provider) => {
        if (loadingProvider) return;

        setLoadingProvider(provider.name);
        if (onSocialLogin) {
            await onSocialLogin(provider.name);
        } else {
            await new Promise((resolve) => setTimeout(resolve, 1200));
            alert(`${provider.name} login will be connected soon.`);
        }
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {socialProvidersData.map((provider) => {
                    const isLoading = loadingProvider === provider.name;

                    return (
                        <button key={provider.name} type="button" onClick={() => handleProviderLogin(provider)} disabled={loadingProvider !== null} aria-label={`Continue with ${provider.name}`} className="flex items-center justify-center rounded-xl border border-gray-300 px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6044da] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:px-4">
                            {isLoading ? (<div className="h-5 w-5 animate-spin rounded-full border-2 border-[#6044da] border-t-transparent" />) : (<img src={provider.image} alt={provider.name} className="h-5 object-contain sm:h-6" />)}
                        </button>
                    );
                })}
            </div>

            <div className="mt-5 flex items-center gap-3 sm:gap-4">
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-center text-xs text-gray-500 sm:text-sm">or continue with email</span>
                <div className="h-px flex-1 bg-gray-300" />
            </div>
        </>
    );
};

export default SocialLogin;