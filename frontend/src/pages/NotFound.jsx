import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import { ROUTES } from "../data/routes";

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-5 bg-linear-to-br from-purple-50 via-white to-purple-100">
            <div className="text-center max-w-2xl flex flex-col items-center">
                <div className="relative">
                    <h1 className="text-[120px] sm:text-[180px] font-extrabold text-[#6044da]/15 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-full bg-[#6044da] flex items-center justify-center shadow-2xl">
                            <Search color="#ffffff" size={42} strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-6">Oops! Page not found</h2>
                <p className="mt-5 text-gray-600 leading-relaxed max-w-xl text-base sm:text-lg">The page you're looking for doesn't exist, may have been moved, or is temporarily unavailable.</p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link to={ROUTES.HOME} className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#6044da] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#5135c8] transition-all duration-300">
                            <Home size={18} />
                            Back to Home
                        </button>
                    </Link>

                    <button onClick={() => window.history.back()} className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                <p className="mt-8 text-sm text-gray-500">Need help? Visit our Help Center or contact support.</p>
            </div>
        </section>
    );
};

export default NotFound;