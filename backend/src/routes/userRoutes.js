const express = require("express");
const { updateMe, updatePassword } = require("../controllers/userController");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { updateProfileRules, updatePasswordRules } = require("../validators");

const router = express.Router();

router.use(protect);

router.get("/me", (req, res) => {
    res.status(200).json({
        success: true,
        data: { user: req.user.toSafeObject() },
    });
});

router.patch("/me", updateProfileRules, validate, updateMe);
router.patch("/me/password", updatePasswordRules, validate, updatePassword);

module.exports = router;
