const express = require("express");
const {
    register,
    login,
    logout,
    getMe,
    forgotPassword,
    resetPassword,
} = require("../controllers/authController");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const {
    registerRules,
    loginRules,
    forgotPasswordRules,
    resetPasswordRules,
} = require("../validators");

const router = express.Router();

router.post("/register", registerRules, validate, register);
router.post("/login", loginRules, validate, login);
router.post("/logout", logout);
router.get("/me", protect, getMe);
router.post("/forgot-password", forgotPasswordRules, validate, forgotPassword);
router.post("/reset-password", resetPasswordRules, validate, resetPassword);

module.exports = router;
