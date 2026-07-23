const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        durationMinutes: { type: Number, default: 15 },
        order: { type: Number, default: 0 },
    },
    { _id: true }
);

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        description: {
            type: String,
            default: "",
        },
        instructor: {
            type: String,
            default: "AI Mentor",
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
            default: "Beginner",
        },
        color: {
            type: String,
            default: "#6044da",
        },
        durationHours: {
            type: Number,
            default: 4,
        },
        isRecommended: {
            type: Boolean,
            default: false,
        },
        recommendationReason: {
            type: String,
            default: "",
        },
        lessons: [lessonSchema],
        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

courseSchema.virtual("lessonCount").get(function lessonCount() {
    return this.lessons?.length || 0;
});

courseSchema.set("toJSON", { virtuals: true });
courseSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Course", courseSchema);
