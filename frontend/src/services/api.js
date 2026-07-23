const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const parseResponse = async (response) => {
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        const error = new Error(data.message || "Request failed");
        error.status = response.status;
        error.data = data;
        throw error;
    }

    return data;
};

export const apiRequest = async (path, options = {}) => {
    const { body, headers, ...rest } = options;
    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;

    const response = await fetch(`${API_BASE_URL}${path}`, {
        credentials: "include",
        headers: {
            ...(body && !isFormData ? { "Content-Type": "application/json" } : {}),
            ...headers,
        },
        body: body && !isFormData ? JSON.stringify(body) : body,
        ...rest,
    });

    return parseResponse(response);
};

export const authApi = {
    register: (payload) => apiRequest("/auth/register", { method: "POST", body: payload }),
    login: (payload) => apiRequest("/auth/login", { method: "POST", body: payload }),
    logout: () => apiRequest("/auth/logout", { method: "POST" }),
    me: () => apiRequest("/auth/me"),
    forgotPassword: (payload) =>
        apiRequest("/auth/forgot-password", { method: "POST", body: payload }),
};

export const userApi = {
    updateMe: (payload) => apiRequest("/users/me", { method: "PATCH", body: payload }),
};

export const dashboardApi = {
    overview: () => apiRequest("/dashboard/overview"),
    learning: () => apiRequest("/dashboard/learning"),
    roadmap: () => apiRequest("/dashboard/roadmap"),
    achievements: () => apiRequest("/dashboard/achievements"),
};

export const marketingApi = {
    contact: (payload) => apiRequest("/contact", { method: "POST", body: payload }),
    feedback: (formData) =>
        apiRequest("/feedback", { method: "POST", body: formData }),
    newsletter: (payload) =>
        apiRequest("/newsletter", { method: "POST", body: payload }),
};
