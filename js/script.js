document.addEventListener("DOMContentLoaded", () => {
  // Initialize config values
  setupPortfolioContent();
  
  // Feature Initializations
  initCursorGlow();
  initThemeToggle();
  initScrollHighlight();
  initBentoTabs();
  initChatbot();
  initSkillsSphere();
  initGuestbook();
  initModals();
});

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
  if (ownerNameText) ownerNameText.innerHTML = `Hi, I'm <span class="gradient-text">${config.owner.name}</span>`;
  
  // Bento Grid: Name Card
  const bentoName = document.getElementById("bento-name");
  if (bentoName) bentoName.textContent = config.owner.name;
  const bentoRole = document.getElementById("bento-role");
  if (bentoRole) bentoRole.textContent = config.owner.role;
  
  // Bento Grid: Craft Card
  const bentoCraftDesc = document.getElementById("bento-craft-desc");
  if (bentoCraftDesc) bentoCraftDesc.textContent = config.craft.bullets[0];
  
  const craftTechList = document.getElementById("bento-craft-techs");
  if (craftTechList) {
    craftTechList.innerHTML = "";
    config.craft.technologies.forEach(tech => {
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
  if (bentoMindsetQuote) bentoMindsetQuote.textContent = config.mindset.quote;
  const bentoMindsetTagline = document.getElementById("bento-mindset-tagline");
  if (bentoMindsetTagline) bentoMindsetTagline.textContent = config.mindset.tagline;
  const mindsetOverlay = document.querySelector(".mindset-img-overlay");
  if (mindsetOverlay) mindsetOverlay.style.backgroundImage = `url('${config.mindset.image}')`;

  // Bento Grid: Photo Card
  const photoCardImg = document.getElementById("bento-photo-img");
  if (photoCardImg) photoCardImg.src = config.owner.avatar;
  const photoName = document.getElementById("bento-photo-name");
  if (photoName) photoName.textContent = config.owner.firstName;
  
  // Bento Grid: Location Card
  const locationTitle = document.getElementById("bento-location-title");
  if (locationTitle) locationTitle.textContent = config.owner.location;
  const locationCoord = document.getElementById("bento-location-coord");
  if (locationCoord) locationCoord.textContent = `${config.owner.coordinates} - ${config.owner.timezone}`;

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
        <div class="project-media">
          <img class="project-img" src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
          <div>
            <div class="project-num">${project.id}</div>
            <div class="project-category">${project.category}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-btn">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
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
// Bento Card Tabs Logic
// =========================================================================
function initBentoTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(`tab-${target}`).classList.add("active");
    });
  });
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

  // Devicon class mapping for each skill
  const iconMap = {
    "React":      "devicon-react-original colored",
    "Node.js":    "devicon-nodejs-plain colored",
    "Python":     "devicon-python-original colored",
    "Docker":     "devicon-docker-plain colored",
    "PostgreSQL": "devicon-postgresql-plain colored",
    "Next.js":    "devicon-nextjs-original",
    "Git":        "devicon-git-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "HTML5":      "devicon-html5-plain colored",
    "CSS3":       "devicon-css3-plain colored",
    "AWS":        "devicon-amazonwebservices-plain-wordmark colored",
    "Figma":      "devicon-figma-plain colored",
    "Redux":      "devicon-redux-original colored",
    "Tailwind":   "devicon-tailwindcss-original colored",
    "Express":    "devicon-express-original",
    "TypeScript": "devicon-typescript-plain colored",
    "MongoDB":    "devicon-mongodb-plain colored",
    "Linux":      "devicon-linux-plain colored",
    "GraphQL":    "devicon-graphql-plain colored",
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
    const iconClass = iconMap[skill] || "fas fa-code";
    div.innerHTML = `<i class="${iconClass}"></i>`;

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

      item.el.style.left = `${CX + sx}px`;
      item.el.style.top  = `${CY + sy}px`;
      item.el.style.opacity = opacity;
      item.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      item.el.style.zIndex = idx;
      item.el.querySelector("i").style.fontSize = `${fontSize}rem`;
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
    { name: "Saman Kumara", date: "2026-06-08 14:23", message: "Absolutely gorgeous design! The chatbot responses are so fluid." },
    { name: "John Doe", date: "2026-06-09 09:12", message: "A highly premium portfolio. The 3D skills sphere is mind-blowing!" },
    { name: "Sophia Lopez", date: "2026-06-10 11:45", message: "Hi Achintha! Loved browsing through your projects. Let's collaborate soon!" }
  ];

  // Load entries
  let entries = JSON.parse(localStorage.getItem("portfolio_guestbook"));
  if (!entries || entries.length === 0) {
    entries = mockEntries;
    localStorage.setItem("portfolio_guestbook", JSON.stringify(entries));
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
  const achievementsTriggers = document.querySelectorAll(".open-achievements");
  const linksTriggers = document.querySelectorAll(".open-links");

  guestbookTriggers.forEach(t => t.addEventListener("click", () => openModal("guestbook")));
  achievementsTriggers.forEach(t => t.addEventListener("click", () => openModal("achievements")));
  linksTriggers.forEach(t => t.addEventListener("click", () => openModal("links")));

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
    else if (type === "achievements") {
      modalTitle.textContent = config.explore.achievements.title;
      modalSubtitle.textContent = config.explore.achievements.description;
      
      const listContainer = document.getElementById("modal-sec-achievements-list");
      listContainer.innerHTML = "";
      config.achievementsList.forEach(ach => {
        const item = document.createElement("div");
        item.className = "achievement-modal-item";
        item.innerHTML = `
          <div class="achievement-modal-icon"><i class="fas fa-trophy"></i></div>
          <div class="achievement-modal-details">
            <h4 class="achievement-modal-title">${ach.title}</h4>
            <p class="achievement-modal-desc">${ach.detail}</p>
          </div>
        `;
        listContainer.appendChild(item);
      });
      
      document.getElementById("modal-sec-achievements").style.display = "block";
    } 
    else if (type === "links") {
      modalTitle.textContent = config.explore.links.title;
      modalSubtitle.textContent = config.explore.links.description;
      
      const linksContainer = document.getElementById("modal-sec-links-list");
      linksContainer.innerHTML = "";
      config.socialLinks.forEach(link => {
        const item = document.createElement("a");
        item.href = link.url;
        item.target = "_blank";
        item.className = "link-modal-item";
        item.innerHTML = `
          <div class="link-modal-icon-name">
            <i class="${link.icon}"></i>
            <span>${link.name}</span>
          </div>
          <i class="fas fa-arrow-right"></i>
        `;
        linksContainer.appendChild(item);
      });
      
      document.getElementById("modal-sec-links").style.display = "block";
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // disable background scrolling
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = ""; // restore scrolling
  }
}
