const jwt = require("jsonwebtoken");

const signToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

/**
 * Cross-site auth cookies (Vercel frontend → Render API) require
 * sameSite: 'none' and secure: true in production.
 */
const cookieOptions = () => {
    const isProduction = process.env.NODE_ENV === "production";

    return {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    };
};

module.exports = {
    signToken,
    verifyToken,
    cookieOptions,
};
