const mongoose = require("mongoose");

const learningActivitySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        hours: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    { timestamps: true }
);

learningActivitySchema.index({ user: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("LearningActivity", learningActivitySchema);
