const User = require("../models/User");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");
const { verifyToken } = require("../utils/token");

const protect = asyncHandler(async (req, res, next) => {
    const cookieName = process.env.COOKIE_NAME || "learnify_token";
    let token = req.cookies?.[cookieName];

    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        throw new AppError("Not authorized. Please log in.", 401);
    }

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);

    if (!user) {
        throw new AppError("User no longer exists.", 401);
    }

    req.user = user;
    next();
});

const optionalAuth = asyncHandler(async (req, res, next) => {
    const cookieName = process.env.COOKIE_NAME || "learnify_token";
    let token = req.cookies?.[cookieName];

    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next();
    }

    try {
        const decoded = verifyToken(token);
        const user = await User.findById(decoded.id);
        if (user) {
            req.user = user;
        }
    } catch {
        // Ignore invalid optional tokens
    }

    next();
});

module.exports = {
    protect,
    optionalAuth,
};
