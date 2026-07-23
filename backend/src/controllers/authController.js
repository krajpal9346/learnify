const crypto = require("crypto");
const User = require("../models/User");
const Roadmap = require("../models/Roadmap");
const UserRoadmap = require("../models/UserRoadmap");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");
const { signToken, cookieOptions } = require("../utils/token");

const sendAuthResponse = (res, user, statusCode = 200, message = "Success") => {
    const token = signToken(user._id);
    const cookieName = process.env.COOKIE_NAME || "learnify_token";

    res.cookie(cookieName, token, cookieOptions());

    res.status(statusCode).json({
        success: true,
        message,
        data: {
            user: user.toSafeObject(),
            token,
        },
    });
};

const ensureUserRoadmap = async (user) => {
    const existing = await UserRoadmap.findOne({ user: user._id });
    if (existing) return existing;

    let roadmap = await Roadmap.findOne({ goal: user.goal });
    if (!roadmap) {
        roadmap = await Roadmap.findOne({ isDefault: true });
    }
    if (!roadmap) return null;

    return UserRoadmap.create({
        user: user._id,
        roadmap: roadmap._id,
        currentStepOrder: 1,
        completedStepIds: [],
    });
};

const register = asyncHandler(async (req, res) => {
    const { fullName, name, email, password, plan, billingCycle, goal } = req.body;
    const resolvedName = (fullName || name || "").trim();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
        throw new AppError("An account with this email already exists.", 409);
    }

    const user = await User.create({
        name: resolvedName,
        email,
        password,
        plan: plan || "Basic",
        billingCycle: billingCycle || "monthly",
        goal: goal || "Full-Stack Developer",
    });

    await ensureUserRoadmap(user);

    // Do not set JWT cookie — user must log in after signup
    res.status(201).json({
        success: true,
        message: "Account created successfully. Please log in to continue.",
    });
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
        throw new AppError("Invalid email or password.", 401);
    }

    await ensureUserRoadmap(user);
    sendAuthResponse(res, user, 200, "Logged in successfully");
});

const logout = asyncHandler(async (req, res) => {
    const cookieName = process.env.COOKIE_NAME || "learnify_token";
    const { maxAge, ...clearOptions } = cookieOptions();
    res.clearCookie(cookieName, clearOptions);

    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
});

const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        data: { user: req.user.toSafeObject() },
    });
});

const forgotPassword = asyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email.toLowerCase() });

    if (!user) {
        // Do not reveal whether the email exists
        return res.status(200).json({
            success: true,
            message: "If that email exists, a reset link has been generated.",
        });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "If that email exists, a reset link has been generated.",
        ...(process.env.NODE_ENV !== "production" ? { resetToken } : {}),
    });
});

const resetPassword = asyncHandler(async (req, res) => {
    const hashedToken = crypto.createHash("sha256").update(req.body.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() },
    }).select("+password");

    if (!user) {
        throw new AppError("Reset token is invalid or has expired.", 400);
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    sendAuthResponse(res, user, 200, "Password reset successfully");
});

module.exports = {
    register,
    login,
    logout,
    getMe,
    forgotPassword,
    resetPassword,
};
