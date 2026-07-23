const mongoose = require("mongoose");

let memoryServer = null;

const connectDB = async () => {
    let uri = process.env.MONGODB_URI;
    const isProduction = process.env.NODE_ENV === "production";
    const useMemory = !uri || uri === "memory";

    if (useMemory && isProduction) {
        throw new Error(
            "MONGODB_URI=memory is not allowed in production. " +
                "Set MONGODB_URI to a MongoDB Atlas connection string. See DEPLOY.md."
        );
    }

    if (useMemory) {
        const { MongoMemoryServer } = require("mongodb-memory-server");
        memoryServer = await MongoMemoryServer.create();
        uri = memoryServer.getUri("learnify");
        console.log("Using in-memory MongoDB (set MONGODB_URI for a persistent database)");
    }

    await mongoose.connect(uri);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
};

const stopMemoryServer = async () => {
    if (memoryServer) {
        await memoryServer.stop();
        memoryServer = null;
    }
};

module.exports = connectDB;
module.exports.stopMemoryServer = stopMemoryServer;
