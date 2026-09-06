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

## 🚀 Deployment Guide (Vercel + Render + MongoDB Atlas)

Follow these 3 easy steps to host your ATS Resume Builder completely free.

### Step 1: Set Up MongoDB Atlas (Database)

1. Sign up or log into [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free shared cluster (**M0 Free Tier**).
3. Under **Database Access**, create a database user (save the username and password).
4. Under **Network Access**, click **Add IP Address** and select **Allow Access from Anywhere (`0.0.0.0/0`)**.
5. Click **Connect** on your cluster > **Drivers** > copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/ats-resume-builder?retryWrites=true&w=majority
   ```

---

### Step 2: Deploy Backend to Render

1. Sign in to [Render](https://render.com/).
2. Click **New +** > **Web Service**.
3. Connect your GitHub repository: `https://github.com/MohithKumarVemuri/ATS-Resume-Builder`.
4. Configure the Web Service:
   - **Name**: `ats-resume-builder-server`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. Under **Environment Variables**, add the following:

| Key | Example / Description |
|---|---|
| `PORT` | `5000` |
| `NODE_ENV` | `production` |
| `MONGODB_URI` | *Your MongoDB Atlas connection string from Step 1* |
| `JWT_SECRET` | *A random secure 32+ character string* |
| `JWT_EXPIRES_IN` | `7d` |
| `GEMINI_API_KEY` | *Your API Key from [Google AI Studio](https://aistudio.google.com/)* |
| `CLIENT_URL` | `*` *(or your Vercel URL once deployed in Step 3)* |
| `GOOGLE_CLIENT_ID` | *(Optional) Your Google OAuth Client ID* |

6. Click **Deploy Web Service**.
7. Once deployed, note down your Render backend URL (e.g., `https://ats-resume-builder-server.onrender.com`).

---

### Step 3: Deploy Frontend to Vercel

1. Sign in to [Vercel](https://vercel.com/).
2. Click **Add New...** > **Project**.
3. Import your `ATS-Resume-Builder` repository.
4. In the project configuration:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click **Edit** and choose `client`
5. Expand **Environment Variables** and add:

| Key | Value |
|---|---|
| `VITE_API_URL` | `https://<your-render-backend-name>.onrender.com/api` |
| `VITE_GOOGLE_CLIENT_ID` | *(Optional) Your Google OAuth Client ID* |

6. Click **Deploy**.
7. Once complete, update `CLIENT_URL` in your Render backend settings to your new Vercel URL (e.g., `https://ats-resume-builder.vercel.app`).

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
