import { X } from "lucide-react";

const FeatureModal = ({ feature, onClose }) => {
    if (!feature) return null;
    const Icon = feature.icon;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 sm:p-6">
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
                <button type="button" onClick={onClose} className="absolute right-5 top-5 text-gray-500 transition-colors duration-200 hover:text-black cursor-pointer" aria-label="Close modal">
                    <X size={24} aria-hidden="true" />
                </button>

                <div className={`mb-6 flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-3xl ${feature.bgColor}`}>
                    <Icon size={34} color={feature.iconColor} aria-hidden="true" />
                </div>

                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{feature.title}</h2>
                <p className="text-gray-600 leading-7 sm:leading-8">{feature.details}</p>

                <button type="button" onClick={onClose} className="mt-8 rounded-xl bg-[#6044da] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#5037c0] cursor-pointer">
                    Got it
                </button>
            </div>
        </div>
    );
};

export default FeatureModal;