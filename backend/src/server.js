require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const { ensureSeeded } = require("./seed");

const PORT = process.env.PORT || 5000;

const assertProductionConfig = () => {
    if (process.env.NODE_ENV !== "production") return;

    const missing = [];
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.includes("change_in_production")) {
        missing.push("JWT_SECRET");
    }
    if (!process.env.MONGODB_URI || process.env.MONGODB_URI === "memory") {
        missing.push("MONGODB_URI (Atlas connection string)");
    }
    if (!process.env.CLIENT_URL) {
        missing.push("CLIENT_URL (Vercel frontend origin)");
    }

    if (missing.length) {
        throw new Error(
            `Missing required production env: ${missing.join(", ")}. See DEPLOY.md.`
        );
    }
};

const startServer = async () => {
    try {
        assertProductionConfig();
        await connectDB();
        await ensureSeeded();
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
