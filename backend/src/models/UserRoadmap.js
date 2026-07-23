const mongoose = require("mongoose");

const userRoadmapSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
        roadmap: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Roadmap",
            required: true,
        },
        currentStepOrder: {
            type: Number,
            default: 1,
        },
        completedStepIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("UserRoadmap", userRoadmapSchema);
