const { body } = require("express-validator");

const registerRules = [
    body("fullName")
        .optional()
        .trim()
        .isLength({ min: 3 })
        .withMessage("Full name must be at least 3 characters"),
    body("name")
        .optional()
        .trim()
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .matches(/[A-Z]/)
        .withMessage("Password must contain one uppercase letter")
        .matches(/\d/)
        .withMessage("Password must contain one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("Password must contain one special character"),
    body().custom((_, { req }) => {
        if (!(req.body.fullName || req.body.name)) {
            throw new Error("Full name is required");
        }
        return true;
    }),
    body("plan")
        .optional()
        .isIn(["Basic", "Pro", "Premium"])
        .withMessage("Invalid plan"),
    body("billingCycle")
        .optional()
        .isIn(["monthly", "yearly"])
        .withMessage("Invalid billing cycle"),
];

const loginRules = [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password").notEmpty().withMessage("Password is required"),
];

const forgotPasswordRules = [
    body("email").isEmail().withMessage("Please enter a valid email address"),
];

const resetPasswordRules = [
    body("token").notEmpty().withMessage("Reset token is required"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters"),
];

const updateProfileRules = [
    body("name")
        .optional()
        .trim()
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters"),
    body("email").optional().isEmail().withMessage("Please enter a valid email address"),
    body("goal").optional().trim().notEmpty().withMessage("Goal cannot be empty"),
];

const updatePasswordRules = [
    body("currentPassword").notEmpty().withMessage("Current password is required"),
    body("newPassword")
        .isLength({ min: 8 })
        .withMessage("New password must be at least 8 characters"),
];

const contactRules = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("subject").trim().notEmpty().withMessage("Subject is required"),
    body("category").trim().notEmpty().withMessage("Category is required"),
    body("message").trim().isLength({ min: 20 }).withMessage("Message must be at least 20 characters"),
];

const feedbackRules = [
    body("feedbackType").trim().notEmpty().withMessage("Feedback type is required"),
    body("message").trim().isLength({ min: 10 }).withMessage("Feedback must be at least 10 characters"),
    body("email").optional({ checkFalsy: true }).isEmail().withMessage("Please enter a valid email address"),
    body("rating").optional({ checkFalsy: true }).isInt({ min: 1, max: 5 }).withMessage("Rating must be 1-5"),
];

const newsletterRules = [
    body("email").isEmail().withMessage("Please enter a valid email address"),
];

const progressRules = [
    body("progress").isFloat({ min: 0, max: 100 }).withMessage("Progress must be between 0 and 100"),
];

module.exports = {
    registerRules,
    loginRules,
    forgotPasswordRules,
    resetPasswordRules,
    updateProfileRules,
    updatePasswordRules,
    contactRules,
    feedbackRules,
    newsletterRules,
    progressRules,
};
