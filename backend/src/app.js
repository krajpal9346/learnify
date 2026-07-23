const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const marketingRoutes = require("./routes/marketingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Required on Render/Heroku so secure cookies work behind the proxy
if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}

const parseOriginList = (value) =>
    (value || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

const allowedOrigins = new Set([
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    ...parseOriginList(process.env.CLIENT_URL),
    ...parseOriginList(process.env.CLIENT_URLS),
]);

const isVercelPreview = (origin) => {
    try {
        const { hostname } = new URL(origin);
        return hostname === "vercel.app" || hostname.endsWith(".vercel.app");
    } catch {
        return false;
    }
};

const corsOrigin = (origin, callback) => {
    // Non-browser clients (curl, health checks) often omit Origin
    if (!origin) {
        return callback(null, true);
    }

    if (allowedOrigins.has(origin) || isVercelPreview(origin)) {
        return callback(null, true);
    }

    return callback(null, false);
};

app.use(helmet());
app.use(
    cors({
        origin: corsOrigin,
        credentials: true,
    })
);
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Learnify API is running",
        timestamp: new Date().toISOString(),
    });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1", marketingRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
