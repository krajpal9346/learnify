const ContactMessage = require("../models/ContactMessage");
const Feedback = require("../models/Feedback");
const NewsletterSubscriber = require("../models/NewsletterSubscriber");
const asyncHandler = require("../utils/asyncHandler");

const createContact = asyncHandler(async (req, res) => {
    const message = await ContactMessage.create(req.body);

    res.status(201).json({
        success: true,
        message: "Message sent successfully. We will get back to you soon.",
        data: { contact: message },
    });
});

const createFeedback = asyncHandler(async (req, res) => {
    const attachments = (req.files || []).map((file) => ({
        filename: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
    }));

    const feedback = await Feedback.create({
        user: req.user?._id || null,
        feedbackType: req.body.feedbackType,
        message: req.body.message,
        rating: req.body.rating ? Number(req.body.rating) : null,
        email: req.body.email || "",
        attachments,
    });

    res.status(201).json({
        success: true,
        message: "Thank you for your feedback!",
        data: { feedback },
    });
});

const subscribeNewsletter = asyncHandler(async (req, res) => {
    const email = req.body.email.toLowerCase().trim();
    const existing = await NewsletterSubscriber.findOne({ email });

    if (existing) {
        if (!existing.isActive) {
            existing.isActive = true;
            existing.source = req.body.source || existing.source;
            await existing.save();
        }

        return res.status(200).json({
            success: true,
            message: "You are already subscribed to our newsletter.",
            data: { subscriber: existing },
        });
    }

    const subscriber = await NewsletterSubscriber.create({
        email,
        source: req.body.source || "website",
    });

    res.status(201).json({
        success: true,
        message: "Successfully subscribed to the newsletter.",
        data: { subscriber },
    });
});

module.exports = {
    createContact,
    createFeedback,
    subscribeNewsletter,
};
