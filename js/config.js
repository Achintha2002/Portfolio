// Portfolio Configuration Data
const PORTFOLIO_CONFIG = {
  owner: {
    name: "Achintha Edirisinghe",
    firstName: "Achintha",
    lastName: "Edirisinghe",
    role: "Full Stack Developer",
    location: "Colombo, Sri Lanka",
    coordinates: "6.9271° N, 79.8612° E",
    timezone: "GMT+5:30",
    avatar: "assets/avatar.png",
    email: "hello@achintha.dev",
    github: "https://github.com/achinthaedirisinghe",
    linkedin: "https://linkedin.com",
    calendar: "https://calendly.com",
  },
  mindset: {
    title: "Mindset",
    quote: "Building more than software. My passions provide the discipline and focus I need to grow.",
    tagline: "Mastering body and mind is my path to excellence.",
    image: "assets/mindset.png",
  },
  craft: {
    title: "Craft",
    bullets: [
      "Building scalable apps, websites, and automations.",
      "I understand what advantages modern tech can provide, helping me advise on the solutions a business actually needs.",
      "I will find & deliver the best tech solution for your business."
    ],
    cta: "Active Hackathon competitor & open-source contributor. Feel free to invite me to collaborate.",
    technologies: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Next.js", icon: "simple-icons:nextdotjs", color: "#FFFFFF" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
      { name: "PostgreSQL", icon: "database-icon", color: "#4169E1" },
      { name: "Tailwind", icon: "css-icon", color: "#06B6D4" }
    ]
  },
  projects: [
    {
      id: "01",
      category: "DESKTOP APP",
      title: "Cube Solver",
      description: "Desktop application using computer vision to scan and solve Rubik's Cube in real-time.",
      image: "assets/cube-solver.png",
      github: "https://github.com/achinthaedirisinghe/Cube-Solver"
    },
    {
      id: "02",
      category: "MOBILE APP",
      title: "Improvement Tree",
      description: "Full-stack mobile app with cloud server that gamifies personal development.",
      image: "assets/improvement-tree.png",
      github: "https://github.com/achinthaedirisinghe/Self-Improvement-Tree"
    },
    {
      id: "03",
      category: "WEB APP",
      title: "Nebula Drift",
      description: "Arcade runner game with procedural terrain generation and dynamic gameplay.",
      image: "assets/nebula.png",
      github: "https://github.com/achinthaedirisinghe/Nebula"
    }
  ],
  skills: [
    "React", "Node.js", "Python", "Docker", "PostgreSQL", "Next.js", "Git", 
    "JavaScript", "HTML5", "CSS3", "Figma", "Redux", "Tailwind", 
    "Express", "TypeScript", "MongoDB", "Linux"
  ],
  chatbot: {
    avatar: "assets/avatar.png",
    welcome: "Hi, I'm Achintha. Ask me anything about my work, skills, mindset, or how we can collaborate!",
    defaultQuestions: [
      { text: "Work", keyword: "work" },
      { text: "About me", keyword: "about" },
      { text: "Skills", keyword: "skills" },
      { text: "Contact", keyword: "contact" }
    ],
    responses: {
      work: "I have built several interesting projects: 🚀 **Cube Solver** (computer vision real-time Rubik's cube solver), 🌳 **Improvement Tree** (a gamified mobile habits app), and 🌌 **Nebula Drift** (a procedural space arcade runner). You can explore them in detail in the Projects section!",
      about: "I'm Achintha Edirisinghe, a Full Stack Developer based in Colombo, Sri Lanka (GMT+5:30). I focus on creating high-performance, aesthetic web applications and automations. I'm passionate about clean architecture, hackathons, and physical fitness.",
      skills: "My tech stack includes **React**, **Next.js**, **Node.js**, **TypeScript**, **Python**, **PostgreSQL**, **Docker**, and **Git**. I am also familiar with AWS and Figma for cloud infrastructure and UI design.",
      contact: "Let's connect! 📞 You can email me at **hello@achintha.dev** or use the **Book a Call** button at the top of the page to schedule a chat directly through my calendar. I'm always open to freelance opportunities, hackathons, and collaborations!",
      default: "That's an interesting question! I am programmed to tell you about my Work, Skills, About me, and Contact info. Try clicking one of the buttons below or asking about one of those topics!"
    }
  },
  explore: {
    guestbook: {
      title: "Guestbook",
      description: "Leave your mark and see what others have to say."
    },
    achievements: {
      title: "Achievements",
      description: "Milestones, certifications, and accomplishments."
    },
    links: {
      title: "My Links",
      description: "Find me across the web and social platforms."
    }
  },
  achievementsList: [
    { title: "National Hackathon 2nd Place", detail: "Placed 2nd among 120+ teams in the Axios Smart City Hackathon." },
    { title: "Science Club Coordinator", detail: "Active coordinator managing technical workshops and AI bootcamps." },
    { title: "AWS Certified Developer", detail: "Certified Associate developer focusing on serverless cloud architecture." }
  ],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/achinthaedirisinghe", icon: "fab fa-github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
    { name: "Email", url: "mailto:hello@achintha.dev", icon: "fas fa-envelope" }
  ]
};
