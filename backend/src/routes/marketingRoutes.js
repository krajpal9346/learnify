const express = require("express");
const {
    createContact,
    createFeedback,
    subscribeNewsletter,
} = require("../controllers/marketingController");
const { optionalAuth } = require("../middleware/auth");
const validate = require("../middleware/validate");
const upload = require("../middleware/upload");
const { contactRules, feedbackRules, newsletterRules } = require("../validators");

const router = express.Router();

router.post("/contact", contactRules, validate, createContact);
router.post(
    "/feedback",
    optionalAuth,
    upload.array("files", 5),
    feedbackRules,
    validate,
    createFeedback
);
router.post("/newsletter", newsletterRules, validate, subscribeNewsletter);

module.exports = router;
