const express = require("express");
const {
    getOverview,
    getLearning,
    getRoadmap,
    getAchievements,
    listCourses,
    enrollInCourse,
    updateProgress,
} = require("../controllers/dashboardController");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { progressRules } = require("../validators");

const router = express.Router();

router.use(protect);

router.get("/overview", getOverview);
router.get("/learning", getLearning);
router.get("/roadmap", getRoadmap);
router.get("/achievements", getAchievements);
router.get("/courses", listCourses);
router.post("/courses/:courseId/enroll", enrollInCourse);
router.patch("/enrollments/:enrollmentId/progress", progressRules, validate, updateProgress);

module.exports = router;
