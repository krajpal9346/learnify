const User = require("../models/User");
const Roadmap = require("../models/Roadmap");
const UserRoadmap = require("../models/UserRoadmap");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");

const updateMe = asyncHandler(async (req, res) => {
    const { name, email, goal } = req.body;
    const updates = {};

    if (name !== undefined) updates.name = name.trim();
    if (email !== undefined) updates.email = email.toLowerCase().trim();
    if (goal !== undefined) updates.goal = goal.trim();

    if (updates.email && updates.email !== req.user.email) {
        const existing = await User.findOne({ email: updates.email });
        if (existing) {
            throw new AppError("Email is already in use.", 409);
        }
    }

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
        new: true,
        runValidators: true,
    });

    if (updates.goal) {
        const roadmap = await Roadmap.findOne({ goal: updates.goal });
        if (roadmap) {
            await UserRoadmap.findOneAndUpdate(
                { user: user._id },
                {
                    roadmap: roadmap._id,
                    currentStepOrder: 1,
                    completedStepIds: [],
                },
                { upsert: true, new: true }
            );
        }
    }

    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: { user: user.toSafeObject() },
    });
});

const updatePassword = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("+password");
    const isMatch = await user.comparePassword(req.body.currentPassword);

    if (!isMatch) {
        throw new AppError("Current password is incorrect.", 400);
    }

    user.password = req.body.newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        message: "Password updated successfully",
    });
});

module.exports = {
    updateMe,
    updatePassword,
};
