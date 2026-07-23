const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: [3, "Name must be at least 3 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
            select: false,
        },
        role: {
            type: String,
            enum: ["learner", "admin"],
            default: "learner",
        },
        plan: {
            type: String,
            enum: ["Basic", "Pro", "Premium"],
            default: "Basic",
        },
        billingCycle: {
            type: String,
            enum: ["monthly", "yearly"],
            default: "monthly",
        },
        goal: {
            type: String,
            trim: true,
            default: "Full-Stack Developer",
        },
        avatarUrl: {
            type: String,
            default: "",
        },
        streak: {
            type: Number,
            default: 0,
        },
        bestStreak: {
            type: Number,
            default: 0,
        },
        totalHours: {
            type: Number,
            default: 0,
        },
        lastActiveDate: {
            type: Date,
            default: null,
        },
        resetPasswordToken: String,
        resetPasswordExpires: Date,
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

userSchema.virtual("avatarInitials").get(function avatarInitials() {
    return (this.name || "U")
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
});

userSchema.pre("save", async function hashPassword() {
    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
};

userSchema.methods.toSafeObject = function toSafeObject() {
    return {
        id: this._id,
        name: this.name,
        email: this.email,
        role: this.role === "learner" ? "Learner" : "Admin",
        plan: this.plan,
        billingCycle: this.billingCycle,
        goal: this.goal,
        avatarUrl: this.avatarUrl,
        avatarInitials: this.avatarInitials,
        streak: this.streak,
        bestStreak: this.bestStreak,
        totalHours: this.totalHours,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("User", userSchema);
