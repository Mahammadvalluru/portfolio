# Mahammad Valluru — Personal Portfolio Website

> **Modern, High-Impact Developer Portfolio engineered for Java Full Stack, Backend Developer, and Associate Software Engineer roles in India.**

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**. Designed to showcase solid Java/Spring Boot backend depth, relational schema design, Docker containerization, cloud AI certifications, and production-grade case studies.

---

## 🌟 Key Highlights

- **Recruiter-Focused Storytelling**: Emphasizes the journey from Electronics & Communication Engineering (ECE, 8.62 CGPA) into enterprise Java backend engineering.
- **Deep-Dive Project Case Studies**: Includes Problem Statement, Solution Architecture, My Role, Tech Stack badges, and interactive Case Study Modal for ShopVerse (Spring Boot + Redis + Stripe), Job Board (Full Stack Recruitment Platform), Task Management API, and ResumeAI.
- **Visual Tech Skills Grid**: Categorized by Languages, Backend & Frameworks, Databases & Caching, Frontend, DevOps & Tools, and Core CS Concepts—without fake percentage bars.
- **Dual Theme Support**: Modern Dark theme by default with light/dark toggle, persistent via `localStorage`.
- **Live GitHub Activity**: Real-time stats integration with GitHub REST API (`@Mahammadvalluru`) plus graceful offline fallback.
- **Working Contact Section**: Integrated with Formspree / EmailJS support, direct WhatsApp instant message link, phone call link, email, and LinkedIn profile.
- **Single Source of Truth**: All text, links, stats, and projects are centralized in `src/data/portfolioData.js` for instant updates.
- **Production Performance**: Blazing-fast Vite build (< 1.5s), zero external styling bottlenecks, semantic HTML5, accessible tags, and Open Graph SEO meta tags.

---

## 📁 Project Structure

```
portfolio/
├── index.html                   # HTML entry point with OpenGraph & Twitter SEO tags
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite + Tailwind v4 + React configuration
├── vercel.json                  # Vercel SPA routing configuration
├── .gitignore                   # Standard ignore rules
├── public/
│   ├── favicon.svg              # Custom developer initials badge
│   └── Mahammad_Valluru_Resume.pdf # Downloadable resume placeholder
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application orchestrator & theme manager
    ├── index.css                # Tailwind CSS v4 setup & custom tokens
    ├── data/
    │   └── portfolioData.js     # Single file containing ALL portfolio content
    └── components/
        ├── Navbar.jsx           # Sticky blurred header with active scroll highlighting
        ├── Hero.jsx             # Animated typing roles, value proposition & CTAs
        ├── About.jsx            # ECE-to-Software narrative & recruiter quick facts
        ├── Skills.jsx           # Categorized skill cards with filter pills
        ├── Projects.jsx         # Case-study cards with GitHub & live preview links
        ├── ProjectModal.jsx     # Deep-dive architecture and implementation modal
        ├── Experience.jsx       # Vertical timeline for TAP Academy & Garuda Aerospace
        ├── Certifications.jsx   # Badge-style cards for Oracle AI, GCP, EF SET C2, Cisco
        ├── Education.jsx        # Compact academic timeline (B.Tech, Diploma, SSC)
        ├── GitHubStats.jsx      # GitHub API stats & pinned repository showcases
        ├── Contact.jsx          # Working message form, WhatsApp & recruiter direct contacts
        ├── Footer.jsx           # Social links & back-to-top button
        └── Icons.jsx            # Crisp, zero-dependency brand SVGs (GitHub, LinkedIn, Java)
```

---

## 🚀 Local Setup & Run Guide

### 1. Prerequisites
- **Node.js** (v18 or higher recommended; v20 LTS tested)
- **npm** (v9+) or **pnpm**

### 2. Installation
Open your terminal in the portfolio folder:

```bash
# Navigate to the portfolio directory
cd portfolio

# Install dependencies
npm install
```

### 3. Development Server
Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser at: **`http://localhost:3000`** (or the port indicated in your console).

### 4. Production Build
Test and verify the production bundle:

```bash
npm run build
```

The output will be placed in the `dist/` directory, ready to deploy.

You can preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Option A: Deploy to Vercel (Recommended — Easiest & Free)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mahammad Valluru Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/Mahammadvalluru/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select `portfolio` from your repositories.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your portfolio will be live at `https://mahammad-valluru.vercel.app` (or custom domain) in under 60 seconds!

*(The included `vercel.json` ensures client-side routing and assets function seamlessly).*

---

### Option B: Deploy to GitHub Pages

1. In `vite.config.js`, add the repository base URL:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repository name if different
     plugins: [react(), tailwindcss()],
   })
   ```
2. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository **Settings → Pages**, set the source to `gh-pages` branch.

---

## ✏️ How to Customize Your Content

All information is isolated in **`src/data/portfolioData.js`**. You don't need to touch JSX code to update your info!

- **Update Resume**: Drop your updated resume PDF into `public/Mahammad_Valluru_Resume.pdf`.
- **Contact Form**: In `src/data/portfolioData.js`, update `contact.formspreeEndpoint` with your free [Formspree](https://formspree.io/) form ID or link it to EmailJS.
- **Add New Project**: Add a new object inside the `projects` array in `portfolioData.js`.
- **Add New Certification**: Add a new entry inside `certifications` in `portfolioData.js`.

