# Achintha Edirisinghe - Portfolio

Welcome to my personal portfolio repository! This is a modern, highly interactive Bento Grid style portfolio website built to showcase my skills, projects, and professional background.

🌐 **Live Website:** [https://achinthaedirisinghe.me](https://achinthaedirisinghe.me)

## Features

*   **Bento Grid Layout:** A sleek, responsive grid system for optimal viewing on desktop and mobile.
*   **Interactive 3D Sphere:** A customized 3D projection of the programming languages, libraries, and tools I use (Next.js, Python, MongoDB, React, etc.).
*   **Dynamic Data Configuration:** All portfolio content (projects, experiences, skills) is dynamically hydrated via a central `config.js` file, making it extremely easy to update without touching HTML.
*   **Mobile Optimized:** Features mobile-specific micro-interactions, such as a 3D flip-card effect for reading expanded descriptions without breaking the UI.
*   **Dark Theme Design:** Aesthetic glassmorphism and subtle animations.

## Tech Stack

*   HTML5
*   CSS3 (Vanilla CSS, custom properties, animations)
*   JavaScript (Vanilla JS, DOM Manipulation)
*   GitHub Pages (Hosting)

## Setup & Local Development

To run this project locally, you simply need to serve the directory. No complex build tools are required.

1.  Clone the repository:
    ```bash
    git clone https://github.com/Achintha2002/Portfolio.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Portfolio
    ```
3.  Serve the files using any simple local server, for example:
    *   **Python:** `python3 -m http.server 8000`
    *   **Node.js / npm:** `npx serve .`
4.  Open `http://localhost:8000` in your browser.

## Customization

To update the content of the portfolio (name, projects, location, links), simply edit the `PORTFOLIO_CONFIG` object inside `js/config.js`.

---
*Designed and built by Achintha Edirisinghe.*
