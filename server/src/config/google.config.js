// ============================================
// google.config.js - Google OAuth Configuration
// ============================================

import { OAuth2Client } from 'google-auth-library';

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // OAuth client setup (Express.js: OAuth Integration)

// Using async/await pattern (JS Essentials: Async/Await)
const verifyGoogleToken = async (credential) => {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(clientId);
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: clientId,
    });

    const payload = ticket.getPayload();

    return {
      googleId: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    };
  } catch (error) {
    console.error('Google token verification failed:', error.message);
    throw new Error(`Google token verification failed: ${error.message}`);
  }
};

export { googleClient, verifyGoogleToken };
