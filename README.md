# 📄 AI-Powered ATS Resume Builder

> An intelligent, full-stack ATS Resume Builder and Analyzer powered by the MERN stack and Google Gemini AI. Create professional, ATS-friendly resumes and get real-time AI scoring and tailored optimization recommendations.

🚀 **Live Application:** [https://ats-resume-builder-client.vercel.app](https://ats-resume-builder-client.vercel.app)  
⚙️ **Backend API:** [https://ats-resume-builder-gray.vercel.app](https://ats-resume-builder-gray.vercel.app)

[![Live App](https://img.shields.io/badge/Live_App-ats--resume--builder--client.vercel.app-black?style=for-the-badge&logo=vercel)](https://ats-resume-builder-client.vercel.app)
[![API Status](https://img.shields.io/badge/API-Online-brightgreen?style=for-the-badge&logo=node.js)](https://ats-resume-builder-gray.vercel.app)

---

## 🌟 Features

- **ATS Score Analysis**: Evaluate resume readability, keyword matching, formatting, and industry relevance.
- **AI Bullet Point Enhancer**: Generate strong, action-oriented bullet points using Google Gemini AI.
- **Multiple Resume Templates**: Clean, modern, and professional ATS-optimized templates.
- **Instant PDF Export**: High-fidelity PDF rendering and download powered by `@react-pdf/renderer`.
- **Version Control**: Manage multiple iterations of your resume tailored to different job descriptions.
- **Secure Authentication**: JWT-based email/password authentication and optional Google OAuth integration.

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons & Notifications**: `react-icons`, `react-hot-toast`
- **PDF Generation**: `@react-pdf/renderer`

### Backend (`/server`)
- **Runtime**: [Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **AI Engine**: Google Gemini API (`@google/genai`, `@langchain/google-genai`, `@langchain/langgraph`)
- **Authentication**: `jsonwebtoken`, `bcryptjs`, `google-auth-library`
- **File Parsing**: `multer`, `pdfjs-dist`

---

## 🚀 Deployment Architecture (Vercel Serverless + MongoDB Atlas)

Both the frontend and backend are deployed 100% free on **Vercel** with **MongoDB Atlas Cloud**.

### Live URLs
- **Frontend App**: [https://ats-resume-builder-client.vercel.app](https://ats-resume-builder-client.vercel.app)
- **Backend API**: [https://ats-resume-builder-gray.vercel.app](https://ats-resume-builder-gray.vercel.app)

---

### 1. Database (MongoDB Atlas)
1. Create a free shared cluster (**M0 Free Tier**) on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Under **Network Access**, allow access from anywhere (`0.0.0.0/0`).
3. Under **Database Access**, create a user and copy the connection string:
   ```text
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/ats-resume-builder?retryWrites=true&w=majority
   ```

---

### 2. Backend Deployment (Vercel Serverless Function)
1. In [Vercel](https://vercel.com/), click **Add New...** > **Project** and import this repository.
2. Settings:
   - **Project Name**: `ats-resume-builder-server`
   - **Framework Preset**: `Other`
   - **Root Directory**: `server`
3. Environment Variables:
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: *Your MongoDB connection string*
   - `JWT_SECRET`: *A secure random 32+ character string*
   - `JWT_EXPIRES_IN`: `7d`
   - `CLIENT_URL`: `*` *(or your frontend Vercel URL)*
   - `GEMINI_API_KEY`: *Your Google AI Studio API Key*
   - `GOOGLE_CLIENT_ID`: *Your Google OAuth Web Client ID*
4. Click **Deploy**.

---

### 3. Frontend Deployment (Vercel Vite App)
1. In [Vercel](https://vercel.com/), click **Add New...** > **Project** and import this repository again.
2. Settings:
   - **Project Name**: `ats-resume-builder-client`
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
3. Environment Variables:
   - `VITE_API_URL`: `https://ats-resume-builder-gray.vercel.app/api`
   - `VITE_GOOGLE_CLIENT_ID`: *Your Google OAuth Web Client ID*
4. Click **Deploy**.

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/MohithKumarVemuri/ATS-Resume-Builder.git
cd ATS-Resume-Builder
```

### 2. Configure Backend
```bash
cd server
cp .env.example .env
# Edit .env with your MONGODB_URI and GEMINI_API_KEY
npm install
npm run dev
```
Backend runs on `http://localhost:5000`.

### 3. Configure Frontend
```bash
cd ../client
cp .env.example .env
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`.
