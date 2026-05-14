<div align="center">

# 🚀 Personal Portfolio — Next.js

**A fast, responsive developer portfolio built with Next.js & TypeScript**

[![Live Demo](https://img.shields.io/badge/Live_Demo-ambarmishra.vercel.app-black?style=flat-square&logo=vercel)](https://ambarmishra.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-76%25-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

---

## 🌐 Live Demo

**[ambarmishra.vercel.app](https://ambarmishra.vercel.app)**

---

## ✨ Features

- **Server-Side Rendering** — powered by Next.js for fast load times and SEO
- **Fully Responsive** — works across desktop, tablet, and mobile
- **Projects Showcase** — filterable gallery of personal and freelance projects with live links and GitHub repos
- **Skills Section** — visual breakdown of technical stack
- **Resume Download** — direct PDF download of CV
- **Work History Timeline** — experience presented chronologically
- **Docker Support** — containerised for consistent local development and easy deployment
- **Optimised Images** — Next.js `Image` component with lazy loading and CDN delivery

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js |
| Language | TypeScript |
| Styling | CSS Modules |
| Deployment | Vercel |
| Containerisation | Docker |

---

## 📁 Project Structure

```
Portfolio-NextJs/
└── portfolio/
    ├── app/               # Next.js App Router — pages and layouts
    ├── components/        # Reusable UI components
    │   ├── Navbar/
    │   ├── Hero/
    │   ├── About/
    │   ├── Skills/
    │   ├── Projects/
    │   └── History/
    ├── public/            # Static assets (images, CV PDF, icons)
    ├── styles/            # Global and module CSS
    ├── Dockerfile         # Docker configuration
    ├── next.config.js
    ├── tsconfig.json
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/ambarmishraa/Portfolio-NextJs.git
cd Portfolio-NextJs/portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🐳 Docker

Run the portfolio in a container without installing Node.js locally:

```bash
# Build the image
docker build -t portfolio-nextjs ./portfolio

# Run the container
docker run -p 3000:3000 portfolio-nextjs
```

Open [http://localhost:3000](http://localhost:3000).

---

## ☁️ Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

To deploy your own fork:

1. Fork this repository
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Set the **Root Directory** to `portfolio`
4. Deploy — Vercel auto-detects Next.js and configures everything

---

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Home** | Hero with name, role, and intro |
| **About** | Background, motivation, and approach |
| **Skills** | Technology stack with visual indicators |
| **Projects** | Showcase of personal, freelance, and hackathon projects |
| **History** | Work experience timeline |
| **Resume** | Direct CV download |

---

## 👤 Author

**Ambar Mishra** — M.Sc. Computer Science, TU Darmstadt

[![Portfolio](https://img.shields.io/badge/Portfolio-ambarmishra.vercel.app-black?style=flat-square&logo=vercel)](https://ambarmishra.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/ambar-mishra-5940922b4/)
[![Email](https://img.shields.io/badge/Email-ambar.mishra.cs@gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:ambar.mishra.cs@gmail.com)

---

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio — a ⭐ is appreciated if you found it helpful!
