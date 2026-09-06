// ============================================
// db.config.js - MongoDB Connection
// ============================================

import mongoose from 'mongoose'; // Mongoose ODM (MongoDB: Database Connection)

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Using async/await pattern with connection caching for Serverless & Long-running servers
const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoURI, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => {
        console.log(`MongoDB Connected: ${mongooseInstance.connection.host}`);
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error(`MongoDB Connection Error: ${error.message}`);
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
    throw error;
  }
};

export default connectDB;
