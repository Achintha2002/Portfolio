<div align="center">

#  Achintha Edirisinghe — Next-Gen Developer Portfolio

[![Live Website](https://img.shields.io/badge/Live%20Demo-achinthaedirisinghe.me-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://achinthaedirisinghe.me)
[![Vite Powered](https://img.shields.io/badge/Powered%20by-Vite%205.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An ultra-responsive, highly interactive **Bento Grid** software engineering portfolio built with modern Web Standards and **Vite**. Engineered to showcase full-stack projects, architectural case studies, and technical proficiency through fluid UI/UX interactions, an interactive 3D skill sphere, and a dynamic AI-inspired assistant.

[Explore Live Demo](https://achinthaedirisinghe.me) • [View Case Studies](./project-details.html) • [Report Bug](https://github.com/Achintha2002/Portfolio/issues) • [Request Feature](https://github.com/Achintha2002/Portfolio/issues)

</div>

---

##  Overview

Unlike static developer portfolios, this repository implements a **data-driven architecture** where all content—from hero details and skill tags to full-stack project spotlights and chatbot answers—is hydrated dynamically via a central config engine (`js/config.js`). 

Designed with a sleek **Dark Mode Glassmorphism** aesthetic, micro-animations, and responsive Bento Grid cards, this project delivers a truly memorable, high-performance web experience.

---

##  Key Highlights & Features

| Feature | Description |
| :--- | :--- |
|  **Bento Grid UI/UX** | Inspired by Apple & Linear design systems, organizing content into modular, scannable, and interactive grid containers. |
| ⚡ **Dynamic Hydration Engine** | Zero-touch HTML content updates! Update bio, social links, project cards, and achievements purely through `config.js`. |
| 🌐 **3D Interactive Skill Sphere** | A physics-based, rotating 3D tag cloud visualizing frontend, backend, database, and cloud technologies. |
| 🤖 **Interactive Portfolio Assistant** | Built-in smart chatbot widget that allows recruiters and visitors to interactively query information about projects, skills, and contact info. |
| 📖 **Deep-Dive Case Studies** | Dedicated architectural breakdowns (`sportify-details.html`, `raanicream-details.html`, etc.) highlighting technical challenges, database schemas, and engineering decisions. |
| 📱 **Mobile-First & Touch Optimized** | Smooth touch gestures, responsive card flipping, and adaptive layouts tailored for smartphones and tablets. |
| 🚀 **Blazing Fast Performance** | Powered by **Vite** for instantaneous hot-module replacement (HMR) during dev and hyper-optimized production bundles. |

---

##  Featured Case Studies & Projects

Here are some of the full-stack applications featured within the portfolio:

###  [BrightPath LMS](https://github.com/Gagana0819/BrightPath-LMS-ITPM-.git)
> **Stack:** Python, Django, React, Supabase, Celery, PostgreSQL  
> Interactive live *Kuppi* sessions and peer-led learning ecosystem built for university student networks with real-time notifications and background task processing.  
> 📄 [View Architectural Case Study](./project-details.html)

###  [Sportify E-Commerce](https://sportify-frontend-eight.vercel.app)
> **Stack:** React, Node.js, Express, MongoDB, Tailwind CSS, Stripe  
> Next-generation sports equipment marketplace featuring role-based dashboards (Admin/Customer), secure payment gateways, and cloud asset management.  
> 📄 [View Architectural Case Study](./sportify-details.html)

###  [Raani Cream Skincare](https://cream-web-ten.vercel.app/)
> **Stack:** MERN Stack (MongoDB, Express, React, Node.js), Tailwind CSS  
> Premium organic skincare platform featuring an intuitive product discovery catalog, administrative inventory controls, and sleek visual storytelling.  
> 📄 [View Architectural Case Study](./raanicream-details.html)

### [Smart Campus Hub](./smartcampus-details.html)
> **Stack:** Spring Boot, Java, React, PostgreSQL, Google OAuth  
> Comprehensive smart facility management platform enabling automated room scheduling, real-time ticketing for campus maintenance, and secure identity management.  

---

## 🛠️ Technology Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHubPages&logoColor=white)

</div>

* **Core Architecture:** Semantic HTML5, Vanilla ES6+ JavaScript modules
* **Styling & Effects:** Custom CSS Variables, Flexbox/Grid layouts, CSS Keyframe Animations, Glassmorphism backdrop filters
* **Tooling & Bundler:** Vite 5.x
* **External Libraries:** FontAwesome Icons, TagCloud.js (3D Sphere)

---

## 📂 Repository Structure

```text
Portfolio/
├── assets/                  # Images, project screenshots, avatars, icons
├── js/
│   ├── config.js            # 🎯 SINGLE SOURCE OF TRUTH: All portfolio data lives here
│   └── script.js            # Core UI logic, modal controllers, chatbot, 3D sphere
├── index.html               # Main Bento Grid application entry point
├── project-details.html     # Case study template & BrightPath LMS details
├── sportify-details.html    # Sportify architectural case study page
├── raanicream-details.html  # Raani Cream architectural case study page
├── smartcampus-details.html # Smart Campus Hub case study page
├── my-links.html            # Linktree-style interactive social hub
├── style.css                # Comprehensive design token & styling system
├── package.json             # NPM dependencies and script definitions
└── vite.config.js           # Vite development server & build configuration
```

---

##  Quick Start & Local Development

To run or customize this portfolio locally on your machine, follow these steps:

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### 1. Clone the Repository
```bash
git clone https://github.com/Achintha2002/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with instant Hot Module Replacement (HMR).

### 4. Build for Production
To generate optimized static assets for deployment (Vercel, Netlify, or GitHub Pages):
```bash
npm run build
```
Preview the built distribution locally:
```bash
npm run preview
```

---

##  How to Customize for Yourself

Love the design and want to use it for your own developer portfolio? You can adapt it in less than 5 minutes!

1. Open `js/config.js` in your favorite code editor.
2. Modify the `PORTFOLIO_CONFIG` object:
   * **`owner`**: Update your name, role, email, avatar, and social URLs.
   * **`projects`**: Add or replace projects with your own GitHub links, tags, and screenshots.
   * **`skills`**: Customize the array of technologies displayed in the 3D rotating sphere.
   * **`chatbot`**: Tailor custom automated responses for your personal assistant.
3. Save the file and see the changes reflect immediately!

---

##  Connect with Me

**Achintha Edirisinghe**  
*Full Stack Developer & Software Engineering Undergraduate*

<div align="left">

[![GitHub](https://img.shields.io/badge/GitHub-Achintha2002-181717?style=for-the-badge&logo=github)](https://github.com/Achintha2002)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/achintha-edirisinghe-a4a23b3ab)
[![Email](https://img.shields.io/badge/Email-achintha.w101%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:achintha.w101@gmail.com)

</div>

---


