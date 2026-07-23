import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../data/routes";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isReady } = useAuth();
    const location = useLocation();

    if (!isReady) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f5f2ff]">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#6044da] border-t-transparent" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace state={{ from: location.pathname }} />;
    }

    return children;
};

export default ProtectedRoute;
