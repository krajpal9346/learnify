const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
        feedbackType: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            minlength: [10, "Feedback must be at least 10 characters"],
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            default: null,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            default: "",
        },
        attachments: [
            {
                filename: String,
                mimetype: String,
                size: Number,
            },
        ],
        status: {
            type: String,
            enum: ["new", "reviewed"],
            default: "new",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
