document.addEventListener("DOMContentLoaded", () => {
  // Initialize config values
  setupPortfolioContent();
  
  // Feature Initializations
  initCursorGlow();
  initThemeToggle();
  initScrollHighlight();
  initChatbot();
  initSkillsSphere();
  initGuestbook();
  initModals();
  initCertsCarousel();
  initMobileMenu();
  initMindsetCard();
});

// =========================================================================
// Mindset Card Auto-Unflip
// =========================================================================
function initMindsetCard() {
  const mindsetCard = document.querySelector('.mindset-card');
  if (!mindsetCard) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        mindsetCard.classList.remove('flipped');
      }
    });
  }, { threshold: 0 });

  observer.observe(mindsetCard);
}

// =========================================================================
// Mouse Cursor Lit Dots Effect
// =========================================================================
function initCursorGlow() {
  // Lit dots overlay — CSS mask follows mouse via CSS variables
  const dotOverlay = document.createElement("div");
  dotOverlay.className = "cursor-dot-overlay";
  document.body.appendChild(dotOverlay);

  document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  });
}


// =========================================================================
// Mobile Navigation Drawer
// =========================================================================
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const drawer = document.getElementById('nav-drawer');
  const navLinks = drawer ? drawer.querySelectorAll('.nav-link') : [];

  if (!openBtn || !closeBtn || !backdrop || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close menu when a navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// =========================================================================
// Setup Dynamic Content from config.js
// =========================================================================
function setupPortfolioContent() {
  const config = PORTFOLIO_CONFIG;
  
  // Set window title & meta properties
  document.title = `${config.owner.name} | ${config.owner.role}`;
  
  // Hero section setup
  const avatarImg = document.getElementById("hero-avatar-img");
  if (avatarImg) avatarImg.src = config.owner.avatar;
  
  const ownerNameText = document.getElementById("owner-name");
  if (ownerNameText) {
    initTypewriter();
  }
  
  // Bento Grid: Name Card
  const bentoName = document.getElementById("bento-name");
  if (bentoName) bentoName.textContent = config.owner.name;
  const bentoRole = document.getElementById("bento-role");
  if (bentoRole) bentoRole.textContent = config.owner.role;
  
  // Bento Grid: Craft Card
  const bentoCraftDesc = document.getElementById("bento-craft-desc");
  // We removed the id from desc to hardcode it beautifully, but if it exists we can update it.
  if (bentoCraftDesc) bentoCraftDesc.textContent = config.craft.bullets[0];
  
  const craftTechList = document.getElementById("bento-craft-techs");
  if (craftTechList) {
    craftTechList.innerHTML = "";
    // Duplicate the technologies a few times to create a seamless infinite marquee
    const repeatedTechs = [...config.craft.technologies, ...config.craft.technologies, ...config.craft.technologies, ...config.craft.technologies];
    repeatedTechs.forEach(tech => {
      const tag = document.createElement("div");
      tag.className = "tech-icon-tag";
      tag.innerHTML = `
        <span class="tech-icon-dot" style="background-color: ${tech.color}"></span>
        <span>${tech.name}</span>
      `;
      craftTechList.appendChild(tag);
    });
  }
  
  const bentoCraftCta = document.getElementById("bento-craft-cta");
  if (bentoCraftCta) bentoCraftCta.textContent = config.craft.cta;

  // Bento Grid: Mindset Card
  const bentoMindsetQuote = document.getElementById("bento-mindset-quote");
  if (bentoMindsetQuote) bentoMindsetQuote.innerHTML = `<strong>${config.mindset.quote.split('.')[0]}.</strong>${config.mindset.quote.substring(config.mindset.quote.indexOf('.'))}`;

  const bentoMindsetTagline = document.getElementById("bento-mindset-tagline");
  if (bentoMindsetTagline) bentoMindsetTagline.innerHTML = `<strong>${config.mindset.tagline.split('is')[0]}</strong> is ${config.mindset.tagline.split('is')[1]}`;


  // Bento Grid: Photo Card
  const photoCardImg = document.getElementById("bento-photo-img");
  if (photoCardImg) photoCardImg.src = config.owner.realPhoto || config.owner.avatar;
  const photoName = document.getElementById("bento-photo-name");
  if (photoName) photoName.textContent = config.owner.firstName;
  
  // Bento Grid: Location Card
  const locationTitle = document.getElementById("bento-location-title");
  if (locationTitle) locationTitle.textContent = config.owner.location;
  const locationCoord = document.getElementById("bento-location-coord");
  if (locationCoord) locationCoord.textContent = config.owner.coordinates;
  const locationTimezone = document.getElementById("bento-location-timezone");
  if (locationTimezone) locationTimezone.textContent = config.owner.timezone;

  // Calendar Link
  const bookCallBtn = document.getElementById("book-call-btn");
  if (bookCallBtn) bookCallBtn.href = config.owner.calendar;

  // Featured Projects Section Setup
  const projectsContainer = document.getElementById("projects-grid-container");
  if (projectsContainer) {
    projectsContainer.innerHTML = "";
    config.projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
          <div class="project-meta">
            <span class="project-num">${project.id}</span>
            <span class="project-line"></span>
            <span class="project-category">${project.category}</span>
          </div>
          <h3 class="project-title-new">${project.title}</h3>
          
          <div class="project-visual-block" style="background-color: ${project.color};">
            <p class="project-desc-overlay">${project.description}</p>
            <div class="project-img-wrapper">
              <img class="project-img-mockup" src="${project.image}" alt="${project.title}">
            </div>
          </div>
          
          ${project.tags ? `
          <div class="project-tags-new">
            ${project.tags.map(tag => `<span class="project-tag-pill">${tag}</span>`).join('')}
          </div>
          ` : ''}
          
          <div class="project-links-new">
            <a href="${project.github}" target="_blank" class="project-btn-new">
              <i class="fab fa-github"></i>
            </a>
            ${project.link ? `
            <a href="${project.link}" target="_blank" class="project-btn-new primary">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            ` : ''}
            ${project.hasCaseStudy ? `
            <a href="${project.caseStudyUrl}" class="project-btn-new outline">
              <i class="fas fa-book-open"></i> Details
            </a>
            ` : ''}
          </div>
        `;
      projectsContainer.appendChild(card);
    });
  }

  // Explore Cards Setup
  const exploreGuestbookDesc = document.getElementById("explore-guestbook-desc");
  if (exploreGuestbookDesc) exploreGuestbookDesc.textContent = config.explore.guestbook.description;
  const exploreAchievementsDesc = document.getElementById("explore-achievements-desc");
  if (exploreAchievementsDesc) exploreAchievementsDesc.textContent = config.explore.achievements.description;
  const exploreLinksDesc = document.getElementById("explore-links-desc");
  if (exploreLinksDesc) exploreLinksDesc.textContent = config.explore.links.description;

  // Footer Setup
  const footerText = document.getElementById("footer-copyright");
  if (footerText) {
    footerText.innerHTML = `&copy; ${new Date().getFullYear()} ${config.owner.name}. Made with dedication &amp; style.`;
  }
}

// =========================================================================
// Light / Dark Theme Switcher
// =========================================================================
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle-btn");
  const themeIcon = themeToggle.querySelector("i");
  
  // Set initial theme
  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio_theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === "light") {
      themeIcon.className = "fas fa-sun";
    } else {
      themeIcon.className = "fas fa-moon";
    }
  }
}

// =========================================================================
// Navigation Active Section Tracking
// =========================================================================
function initScrollHighlight() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -60% 0px", // Trigger when section is in the middle of viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}



// =========================================================================
// Simulated AI Chatbot Logic
// =========================================================================
function initChatbot() {
  const config = PORTFOLIO_CONFIG.chatbot;
  const messagesContainer = document.getElementById("chat-messages");
  const chipsContainer = document.getElementById("chat-chips");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send-btn");
  
  let isTyping = false;

  // Render welcome message
  addMessage("bot", config.welcome);
  
  // Render quick chips
  renderChips();

  // Send button listener
  sendBtn.addEventListener("click", handleUserSend);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserSend();
  });

  function renderChips() {
    chipsContainer.innerHTML = "";
    config.defaultQuestions.forEach(q => {
      const chip = document.createElement("button");
      chip.className = "chip-btn";
      chip.textContent = q.text;
      chip.addEventListener("click", () => {
        if (isTyping) return;
        addUserMessage(q.text, q.keyword);
      });
      chipsContainer.appendChild(chip);
    });
  }

  function handleUserSend() {
    const text = chatInput.value.trim();
    if (!text || isTyping) return;
    
    chatInput.value = "";
    addUserMessage(text, null);
  }

  function addUserMessage(text, keyword) {
    addMessage("user", text);
    
    // Auto-reply process
    showTypingIndicator();
    
    // Simple natural language matching if no keyword was clicked directly
    let key = keyword;
    if (!key) {
      const lowerText = text.toLowerCase();
      if (lowerText.includes("work") || lowerText.includes("project") || lowerText.includes("build")) {
        key = "work";
      } else if (lowerText.includes("about") || lowerText.includes("who") || lowerText.includes("personal") || lowerText.includes("life")) {
        key = "about";
      } else if (lowerText.includes("skill") || lowerText.includes("stack") || lowerText.includes("tech") || lowerText.includes("language")) {
        key = "skills";
      } else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("hire") || lowerText.includes("call")) {
        key = "contact";
      } else {
        key = "default";
      }
    }

    const reply = config.responses[key] || config.responses.default;
    
    // Simulate thinking/typing delay (1 to 1.5 seconds)
    setTimeout(() => {
      hideTypingIndicator();
      addMessage("bot", reply);
    }, 1000 + Math.random() * 500);
  }

  function addMessage(sender, text) {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${sender}`;
    
    // Formats bold tags (e.g. **text**) and line breaks (\n)
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
    
    bubble.innerHTML = formattedText;
    messagesContainer.appendChild(bubble);
    scrollToBottom();
  }

  function showTypingIndicator() {
    isTyping = true;
    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.id = "chat-typing";
    indicator.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    messagesContainer.appendChild(indicator);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    isTyping = false;
    const indicator = document.getElementById("chat-typing");
    if (indicator) indicator.remove();
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

// =========================================================================
// 3D Icon Sphere (Devicons, Div-based)
// =========================================================================
function initSkillsSphere() {
  const iconsLayer = document.getElementById("sphere-icons-layer");
  const scene = document.getElementById("sphere-scene");
  const label = document.getElementById("sphere-label");
  if (!iconsLayer || !scene) return;

  // ── SVG Globe Wireframe ────────────────────────────────────────────────
  (function buildWireframe() {
    const SIZE = 480, R = 185, CX = SIZE / 2, CY = SIZE / 2;
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);
    svg.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;";

    const BASE_STROKE = "rgba(139,92,246,0.13)";
    const PERSP = 0.38; // latitude ellipse y-compression

    function el(tag, attrs) {
      const e = document.createElementNS(ns, tag);
      Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
      e.setAttribute("fill", "none");
      svg.appendChild(e);
      return e;
    }

    // Outer boundary circle
    el("ellipse", { cx: CX, cy: CY, rx: R, ry: R,
      stroke: "rgba(139,92,246,0.3)", "stroke-width": "1" });

    // Latitude parallels (horizontal ellipses)
    [-70, -50, -30, 0, 30, 50, 70].forEach(deg => {
      const phi = deg * Math.PI / 180;
      const rx  = R * Math.cos(phi);
      const ry  = rx * PERSP;
      const cyP = CY + R * Math.sin(phi);
      el("ellipse", { cx: CX, cy: cyP, rx, ry,
        stroke: deg === 0 ? "rgba(139,92,246,0.2)" : BASE_STROKE,
        "stroke-width": deg === 0 ? "0.9" : "0.7" });
    });

    // Longitude meridians (vertical ellipses)
    // Center meridian as a line
    el("line", { x1: CX, y1: CY - R, x2: CX, y2: CY + R,
      stroke: BASE_STROKE, "stroke-width": "0.7" });

    [22.5, 45, 67.5, 90, 112.5, 135, 157.5].forEach(deg => {
      const lambda = deg * Math.PI / 180;
      const rx = R * Math.sin(lambda);
      el("ellipse", { cx: CX, cy: CY, rx, ry: R,
        stroke: BASE_STROKE, "stroke-width": "0.7" });
    });

    scene.insertBefore(svg, scene.firstChild);
  })();
  // ── End Wireframe ──────────────────────────────────────────────────────

  // Devicon class mapping or raw SVG for each skill
  const iconMap = {
    "React":      "devicon-react-original colored",
    "Node.js":    "devicon-nodejs-plain colored",
    "Python":     "devicon-python-original colored",
    "Docker":     "devicon-docker-plain colored",
    "Next.js":    `<svg viewBox="0 0 512 512" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="256" fill="white"/><path d="M380.5 407.7L194.2 153.8H148v204.4h39.6V226l165 225.8c9.5-13.6 19.3-27.5 27.9-44.1zM324.5 153.8h39.6v204.4h-39.6z" fill="black"/></svg>`,
    "Git":        "devicon-git-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "HTML5":      "devicon-html5-plain colored",
    "CSS3":       "devicon-css3-plain colored",
    "Figma":      "devicon-figma-plain colored",
    "MongoDB":    "devicon-mongodb-plain-wordmark colored",
    "GitHub":     "devicon-github-original",
    "C++":        "devicon-cplusplus-plain colored",
    "Vercel":     `<svg viewBox="0 0 512 512" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48L496 464H16Z" fill="white"/></svg>`,
    "Expo":       `<svg viewBox="0 0 256 256" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M141.04 18.17l96.65 174.56c8.53 15.42-2.6 34.61-20.16 34.61H214.3c-7.31 0-14.18-3.92-17.75-10.15L127.97 97.43l-68.42 119.7c-3.61 6.32-10.45 10.21-17.75 10.21H18.66c-17.58 0-28.71-19.16-20.2-34.56l96.53-174.61c8.89-16.08 31.96-16.05 40.85 0z"/></svg>`
  };

  const skills = PORTFOLIO_CONFIG.skills;
  const N = skills.length;
  const SIZE = 480;
  const RADIUS = 170;
  const CX = SIZE / 2;
  const CY = SIZE / 2;

  // Create icon div elements using golden ratio sphere distribution
  const items = skills.map((skill, i) => {
    const phi = Math.acos(1 - 2 * (i + 0.5) / N);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    const x0 = RADIUS * Math.sin(phi) * Math.cos(theta);
    const y0 = RADIUS * Math.cos(phi);
    const z0 = RADIUS * Math.sin(phi) * Math.sin(theta);

    const div = document.createElement("div");
    div.className = "sphere-icon-item";
    const iconData = iconMap[skill] || "fas fa-code";
    if (iconData.startsWith("<svg")) {
      div.innerHTML = iconData;
    } else {
      div.innerHTML = `<i class="${iconData}"></i>`;
    }

    div.addEventListener("mouseenter", () => {
      if (label) label.textContent = skill;
    });
    div.addEventListener("mouseleave", () => {
      if (label) label.textContent = "\u00a0";
    });

    iconsLayer.appendChild(div);
    return { el: div, x: x0, y: y0, z: z0 };
  });

  // Rotation state
  let rotX = 0, rotY = 0;
  let speedX = 0.0005;
  let speedY = 0.003;
  let mouseActive = false;

  scene.addEventListener("mousemove", (e) => {
    const rect = scene.getBoundingClientRect();
    const mx = e.clientX - rect.left - CX;
    const my = e.clientY - rect.top - CY;
    speedY = mx * 0.00004;
    speedX = my * 0.00004;
    mouseActive = true;
  });

  scene.addEventListener("mouseleave", () => {
    mouseActive = false;
  });

  function animate() {
    // Ease back to default speed when mouse leaves
    if (!mouseActive) {
      speedX += (0.0005 - speedX) * 0.05;
      speedY += (0.003 - speedY) * 0.05;
    }

    rotX += speedX;
    rotY += speedY;

    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

    // Project each icon to 2D and compute depth
    const projected = items.map(item => {
      // Rotate around Y axis
      const x1 = item.x * cosY + item.z * sinY;
      const z1 = -item.x * sinY + item.z * cosY;
      // Rotate around X axis
      const y2 = item.y * cosX - z1 * sinX;
      const z2 = item.y * sinX + z1 * cosX;
      return { item, sx: x1, sy: y2, sz: z2 };
    });

    // Sort back-to-front for correct stacking
    projected.sort((a, b) => a.sz - b.sz);

    projected.forEach(({ item, sx, sy, sz }, idx) => {
      const norm = (sz + RADIUS) / (2 * RADIUS); // 0=back, 1=front
      const opacity = Math.max(0.08, 0.15 + norm * 0.85);
      const scale = 0.45 + norm * 0.75;
      const fontSize = Math.round(1.1 + norm * 1.2);

      item.el.style.left = `${50 + (sx / CX) * 50}%`;
      item.el.style.top  = `${50 + (sy / CY) * 50}%`;
      item.el.style.opacity = opacity;
      item.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      item.el.style.zIndex = idx;
      
      const iconElem = item.el.querySelector("i") || item.el.querySelector("svg");
      if (iconElem) iconElem.style.fontSize = `${fontSize}rem`;
      
      item.el.style.filter = norm < 0.25 ? "grayscale(80%) brightness(0.6)" : "none";
    });

    requestAnimationFrame(animate);
  }

  animate();
}


// =========================================================================
// Guestbook LocalStorage Implementation
// =========================================================================
function initGuestbook() {
  const form = document.getElementById("gb-form");
  const list = document.getElementById("gb-list");
  
  if (!form || !list) return;

  const mockEntries = [
    { name: "Sadun Weerarathne", date: "2026-06-08 14:23", message: "Absolutely gorgeous design! The chatbot responses are so fluid." },
    { name: "John Doe", date: "2026-06-09 09:12", message: "A highly premium portfolio. The 3D skills sphere is mind-blowing!" },
    { name: "Sophia Lopez", date: "2026-06-10 11:45", message: "Hi Achintha! Loved browsing through your projects. Let's collaborate soon!" }
  ];

  // Load entries
  let entries = JSON.parse(localStorage.getItem("portfolio_guestbook"));
  if (!entries || entries.length === 0) {
    entries = mockEntries;
    localStorage.setItem("portfolio_guestbook", JSON.stringify(entries));
  } else {
    // Migrate old names if they exist in localStorage
    let updated = false;
    entries.forEach(entry => {
      if (entry.name === "Saman Kumara") {
        entry.name = "Sadun Weerarathne";
        updated = true;
      }
    });
    if (updated) {
      localStorage.setItem("portfolio_guestbook", JSON.stringify(entries));
    }
  }

  renderEntries();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById("gb-name");
    const msgInput = document.getElementById("gb-msg");
    
    const name = nameInput.value.trim();
    const msg = msgInput.value.trim();
    
    if (!name || !msg) return;

    // Create entry
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newEntry = { name, date: dateStr, message: msg };
    
    entries.unshift(newEntry); // Prepend to top
    localStorage.setItem("portfolio_guestbook", JSON.stringify(entries));
    
    // Clear form
    nameInput.value = "";
    msgInput.value = "";
    
    renderEntries();
  });

  function renderEntries() {
    list.innerHTML = "";
    entries.forEach(entry => {
      const el = document.createElement("div");
      el.className = "guestbook-entry";
      el.innerHTML = `
        <div class="guestbook-entry-header">
          <span class="guestbook-entry-name">${escapeHTML(entry.name)}</span>
          <span class="guestbook-entry-date">${entry.date}</span>
        </div>
        <div class="guestbook-entry-msg">${escapeHTML(entry.message)}</div>
      `;
      list.appendChild(el);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
}

// =========================================================================
// Modal Managers (Guestbook, Achievements, Links)
// =========================================================================
function initModals() {
  const config = PORTFOLIO_CONFIG;
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalBody = document.getElementById("modal-body-content");

  // Targets to launch modals
  const guestbookTriggers = document.querySelectorAll(".open-guestbook");
  const githubStatsTriggers = document.querySelectorAll(".open-github-stats");

  guestbookTriggers.forEach(t => t.addEventListener("click", () => openModal("guestbook")));
  githubStatsTriggers.forEach(t => t.addEventListener("click", () => openModal("githubStats")));

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  function openModal(type) {
    // Hide sections inside modal body
    const sections = modalBody.querySelectorAll(".modal-sec");
    sections.forEach(s => s.style.display = "none");
    
    if (type === "guestbook") {
      modalTitle.textContent = config.explore.guestbook.title;
      modalSubtitle.textContent = config.explore.guestbook.description;
      document.getElementById("modal-sec-guestbook").style.display = "flex";
    } 
    else if (type === "githubStats") {
      modalTitle.textContent = "GitHub Stats";
      modalSubtitle.textContent = "My open source contributions and coding activity.";
      document.getElementById("modal-sec-github-stats").style.display = "flex";
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // disable background scrolling
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = ""; // restore scrolling
  }

  // Note: Case studies are now handled via separate HTML files.
}

// =========================================================================
// Certificates Auto-Scroll Animation
// =========================================================================
function initCertsCarousel() {
  const carousel = document.querySelector(".certs-carousel");
  if (!carousel) return;

  // Disable scroll snap for smooth programmatic scrolling
  carousel.style.scrollSnapType = "none";
  
  let isHovered = false;
  let scrollSpeed = 0.5; // pixels per frame (slower, premium feel)
  let scrollDirection = 1; // 1 = right, -1 = left

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    isHovered = true;
    carousel.style.scrollSnapType = "x mandatory"; // Re-enable snap when user might interact manually
  });
  
  carousel.addEventListener("mouseleave", () => {
    isHovered = false;
    carousel.style.scrollSnapType = "none"; // Disable snap again for auto scroll
  });

  // Touch support for mobile
  carousel.addEventListener("touchstart", () => {
    isHovered = true;
    carousel.style.scrollSnapType = "x mandatory";
  }, { passive: true });

  carousel.addEventListener("touchend", () => {
    // Delay resuming animation after touch to allow natural scrolling momentum
    setTimeout(() => {
      isHovered = false;
      carousel.style.scrollSnapType = "none";
    }, 1500);
  });

  function autoScroll() {
    if (!isHovered) {
      carousel.scrollLeft += scrollSpeed * scrollDirection;

      // Reverse direction at edges (with a tiny buffer to prevent locking)
      if (scrollDirection === 1) {
        // Going right: check if we hit the end
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
          scrollDirection = -1;
        }
      } else {
        // Going left: check if we hit the beginning
        if (carousel.scrollLeft <= 0) {
          scrollDirection = 1;
        }
      }
    }
    requestAnimationFrame(autoScroll);
  }

  // Start animation loop
  requestAnimationFrame(autoScroll);
}

// =========================================================================
// Hero Typewriter Effect
// =========================================================================
function initTypewriter() {
  const container = document.getElementById("owner-name");
  if (!container) return;
  
  const textOptions = [PORTFOLIO_CONFIG.owner.name, "Full Stack Developer"];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  container.innerHTML = `Hi, I'm <span class="gradient-text" id="typewriter-text"></span><span class="typewriter-cursor">|</span>`;
  const textSpan = document.getElementById("typewriter-text");
  
  function type() {
    const currentWord = textOptions[currentWordIndex];
    
    if (isDeleting) {
      textSpan.textContent = currentWord.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      textSpan.textContent = currentWord.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }
    let typingSpeed = 100;
    // If word is completely typed out
    if (!isDeleting && currentCharIndex === currentWord.length) {
      typingSpeed = 2000; // Hold for 2 seconds
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % textOptions.length;
      typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start the typing effect
  setTimeout(type, 500);
}

/* ============================================
   PARTICLE SPHERE ANIMATION
   ============================================ */
function initGalaxy(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const container = canvas.parentElement;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
 
  let width, height, angle = 0;
  let stars = [], planetDots = [], ringSet = [];
 
  const planetColorDeep = [40, 28, 70];
  const planetColorMid = [90, 60, 150];
  const planetColorLight = [160, 130, 220];
 
  function resize() {
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    generateStars();
    generatePlanet();
    generateRings();
  }
 
  function generateStars() {
    stars = [];
    const count = 220;
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() > 0.93 ? (1.4 + Math.random()*1.4) : (0.4 + Math.random()*0.8),
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.008 + Math.random() * 0.02,
        hue: Math.random() > 0.7 ? 'warm' : 'cool'
      });
    }
  }
 
  function generatePlanet() {
    planetDots = [];
    const count = 2600;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      planetDots.push({
        x0: x, y0: y, z0: z,
        size: 0.5 + Math.random() * 0.7,
        flicker: Math.random() * Math.PI * 2,
        flickerSpeed: 0.005 + Math.random() * 0.01
      });
    }
  }
 
  function generateRings() {
    // concentric tilted ellipses with varying radii, like the reference image
    ringSet = [];
    const ringCount = 10;
    for (let i = 0; i < ringCount; i++) {
      const t = i / (ringCount - 1);
      ringSet.push({
        rx: 1.3 + t * 2.2,    // relative to planetRadius
        ry: 0.32 + t * 0.55,
        opacity: 0.6 - t * 0.4,
        width: 1.3 - t * 0.5,
        phase: t * 0.6
      });
    }
  }
 
  function lerpColor(c1, c2, t) {
    return [c1[0]+(c2[0]-c1[0])*t, c1[1]+(c2[1]-c1[1])*t, c1[2]+(c2[2]-c1[2])*t];
  }
 
  function drawStars() {
    for (let s of stars) {
      s.twinkle += s.twinkleSpeed;
      const a = 0.35 + Math.sin(s.twinkle) * 0.35 + 0.3;
      const col = s.hue === 'warm' ? '255,220,190' : '210,220,255';
      ctx.beginPath();
      ctx.fillStyle = `rgba(${col},${Math.min(a,1)})`;
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
 
  function drawNebula(cx, cy, planetRadius) {
    // soft colored nebula clouds behind everything (native canvas radial gradients = smooth, no hard edges)
    const blobs = [
      { dx: -planetRadius*1.6, dy: -planetRadius*0.7, r: planetRadius*2.8, color: '76,90,170', a: 0.11 },
      { dx: planetRadius*1.6,  dy: -planetRadius*1.1, r: planetRadius*2.4, color: '150,120,200', a: 0.09 },
      { dx: planetRadius*2.0,  dy: planetRadius*1.0,  r: planetRadius*3.0, color: '200,140,90',  a: 0.08 },
      { dx: -planetRadius*1.8, dy: planetRadius*1.2,  r: planetRadius*2.6, color: '90,110,180',  a: 0.09 }
    ];
    for (let b of blobs) {
      const grad = ctx.createRadialGradient(cx+b.dx, cy+b.dy, 0, cx+b.dx, cy+b.dy, b.r);
      grad.addColorStop(0, `rgba(${b.color},${b.a})`);
      grad.addColorStop(1, `rgba(${b.color},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx+b.dx, cy+b.dy, b.r, 0, Math.PI*2);
      ctx.fill();
    }
  }
 
  function drawRingHalf(cx, cy, ring, planetRadius, behind) {
    const rx = planetRadius * ring.rx;
    const ry = planetRadius * ring.ry;
    const tilt = -0.36; // radians, matches reference diagonal tilt
 
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(tilt);
 
    ctx.beginPath();
    if (behind) {
      ctx.ellipse(0, 0, rx, ry, 0, Math.PI * 0.05, Math.PI * 0.95);
    } else {
      ctx.ellipse(0, 0, rx, ry, 0, Math.PI * 1.05, Math.PI * 1.95);
    }
 
    const grad = ctx.createLinearGradient(-rx, 0, rx, 0);
    grad.addColorStop(0, `rgba(255,210,130,0)`);
    grad.addColorStop(0.5, `rgba(255,225,160,${ring.opacity})`);
    grad.addColorStop(1, `rgba(255,210,130,0)`);
 
    ctx.strokeStyle = grad;
    ctx.lineWidth = ring.width;
    ctx.shadowColor = 'rgba(255,210,140,0.5)';
    ctx.shadowBlur = behind ? 1 : 4;
    ctx.stroke();
    ctx.restore();
  }
 
  function drawPlanet(cx, cy, planetRadius) {
    const cosA = Math.cos(angle), sinA = Math.sin(angle);
    const cosT = Math.cos(0.32), sinT = Math.sin(0.32);
 
    // glow behind planet
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, planetRadius*1.5);
    glow.addColorStop(0, 'rgba(255,225,180,0.35)');
    glow.addColorStop(0.4, 'rgba(180,140,255,0.14)');
    glow.addColorStop(1, 'rgba(10,8,16,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, planetRadius*1.5, 0, Math.PI*2);
    ctx.fill();
 
    const projected = [];
    for (let p of planetDots) {
      let x = p.x0*cosA - p.z0*sinA;
      let z = p.x0*sinA + p.z0*cosA;
      let y = p.y0;
      let y2 = y*cosT - z*sinT;
      let z2 = y*sinT + z*cosT;
      const perspective = 1/(1.8 - z2*0.55);
      const px = cx + x*planetRadius*perspective;
      const py = cy + y2*planetRadius*perspective;
      projected.push({p, x:px, y:py, z:z2, perspective});
    }
    projected.sort((a,b) => a.z - b.z);
 
    // planet base disc (slightly darker than dots for solid feel)
    ctx.beginPath();
    ctx.fillStyle = 'rgba(18,14,28,0.92)';
    ctx.arc(cx, cy, planetRadius*0.99, 0, Math.PI*2);
    ctx.fill();
 
    for (let item of projected) {
      const {p, x, y, z, perspective} = item;
      const depthT = (z+1)/2;
      p.flicker += p.flickerSpeed;
      const flickerAlpha = 0.8 + Math.sin(p.flicker)*0.2;
      let baseAlpha = (0.25 + depthT*0.6) * flickerAlpha;
      let size = p.size * perspective * (0.7 + depthT*0.5);
      const color = lerpColor(planetColorDeep, lerpColor(planetColorMid, planetColorLight, depthT), depthT*0.6);
      ctx.beginPath();
      ctx.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},${Math.min(baseAlpha,1)})`;
      ctx.arc(x, y, size, 0, Math.PI*2);
      ctx.fill();
    }
 
    // rim light
    const rim = ctx.createRadialGradient(cx, cy, planetRadius*0.85, cx, cy, planetRadius*1.02);
    rim.addColorStop(0, 'rgba(255,220,180,0)');
    rim.addColorStop(1, 'rgba(255,225,190,0.25)');
    ctx.fillStyle = rim;
    ctx.beginPath();
    ctx.arc(cx, cy, planetRadius*1.02, 0, Math.PI*2);
    ctx.fill();
  }
 
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const cx = width/2, cy = height/2;
    const planetRadius = Math.min(width, height) * 0.14; // Changed back to 0.14
 
    drawNebula(cx, cy, planetRadius);
    drawStars();
 
    // rings behind planet
    for (let i = ringSet.length - 1; i >= 0; i--) drawRingHalf(cx, cy, ringSet[i], planetRadius, true);
 
    drawPlanet(cx, cy, planetRadius);
 
    // rings in front of planet
    for (let i = ringSet.length - 1; i >= 0; i--) drawRingHalf(cx, cy, ringSet[i], planetRadius, false);
 
    angle += 0.0011;
    requestAnimationFrame(draw);
  }
 
  window.addEventListener('resize', resize);
  resize();
  draw();
}

/* ============================================
   DOTTED WORLD MAP BACKGROUND
   ============================================ */
function generateDotMap() {
  const g = document.getElementById('dotMap');
  const group = document.getElementById('worldSilhouetteGroup');
  if (!g || !group) return;
  const svgNS = "http://www.w3.org/2000/svg";
  const paths = Array.from(group.querySelectorAll('path'));
  const svgRoot = group.ownerSVGElement;

  const viewW = 1000, viewH = 460;
  const dotSpacing = 5.5;

  for (let x = 0; x < viewW; x += dotSpacing) {
    for (let y = 0; y < viewH; y += dotSpacing) {
      const jx = x + (Math.random() - 0.5) * 3.5;
      const jy = y + (Math.random() - 0.5) * 3.5;

      const pt = svgRoot.createSVGPoint();
      pt.x = jx;
      pt.y = jy;

      let inside = false;
      for (let i = 0; i < paths.length; i++) {
        if (paths[i].isPointInFill(pt)) { inside = true; break; }
      }

      if (inside && Math.random() > 0.15) {
        const circle = document.createElementNS(svgNS, 'circle');
        circle.setAttribute('cx', jx);
        circle.setAttribute('cy', jy);
        circle.setAttribute('r', Math.random() > 0.92 ? 1.5 : 0.85);
        circle.setAttribute('opacity', 0.25 + Math.random() * 0.55);
        g.appendChild(circle);
      }
    }
  }
}

/* ============================================
   LOCATION CARD LIVE TIME
   ============================================ */
function updateLocationTime() {
  const timeEl = document.getElementById('live-time-compact');
  if (!timeEl) return;
  
  const now = new Date();
  const sl = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
  const raw = sl.getHours();
  const ampm = raw >= 12 ? 'PM' : 'AM';
  const h = String(raw % 12 || 12).padStart(2, '0');
  const m = String(sl.getMinutes()).padStart(2, '0');
  
  timeEl.textContent = \`\${h}:\${m} \${ampm}\`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateLocationTime();
  setInterval(updateLocationTime, 1000);
});
