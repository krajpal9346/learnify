const multer = require("multer");
const AppError = require("../utils/AppError");

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
        files: 5,
    },
    fileFilter: (req, file, cb) => {
        const allowed = [
            "image/png",
            "image/jpeg",
            "image/gif",
            "application/pdf",
        ];

        if (!allowed.includes(file.mimetype)) {
            return cb(new AppError("Only PNG, JPG, GIF, and PDF files are allowed.", 400));
        }

        cb(null, true);
    },
});

module.exports = upload;
