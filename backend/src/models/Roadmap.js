const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        order: { type: Number, required: true },
        description: { type: String, default: "" },
    },
    { _id: true }
);

const roadmapSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        goal: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            default: "",
        },
        steps: [stepSchema],
        isDefault: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Roadmap", roadmapSchema);
