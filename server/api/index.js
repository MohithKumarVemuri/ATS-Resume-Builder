// ============================================
// server/api/index.js - Vercel Serverless Entry Point
// ============================================

import app from '../src/app.js';
import connectDB from '../src/config/db.config.js';

export default async function handler(req, res) {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error('Serverless invocation error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while connecting to database.',
      error: error.message,
    });
  }
}
