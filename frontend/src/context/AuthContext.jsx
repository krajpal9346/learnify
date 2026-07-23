import { createContext, useContext, useEffect, useState } from "react";
import { authApi, userApi } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const bootstrap = async () => {
            try {
                const response = await authApi.me();
                setUser(response.data.user);
            } catch {
                setUser(null);
            } finally {
                setIsReady(true);
            }
        };

        bootstrap();
    }, []);

    const login = async ({ email, password }) => {
        const response = await authApi.login({ email, password });
        setUser(response.data.user);
        return response.data.user;
    };

    const register = async (payload) => {
        // Register creates the account only — do not treat as logged in
        const response = await authApi.register(payload);
        return response;
    };

    const logout = async () => {
        try {
            await authApi.logout();
        } catch {
            // Clear local session even if the API call fails
        }
        setUser(null);
    };

    const updateProfile = async (updates) => {
        const response = await userApi.updateMe(updates);
        setUser(response.data.user);
        return response.data.user;
    };

    const refreshUser = async () => {
        const response = await authApi.me();
        setUser(response.data.user);
        return response.data.user;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: Boolean(user),
                isReady,
                login,
                register,
                logout,
                updateProfile,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
