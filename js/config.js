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
    realPhoto: "assets/real_photo.png",
    email: "hello@achintha.dev",
    github: "https://github.com/achinthaedirisinghe",
    linkedin: "https://linkedin.com",
    calendar: "https://calendly.com",
  },
  mindset: {
    title: "Mindset",
    quote: "Engineering elegant solutions through continuous learning. My mindset is driven by curiosity, discipline, and a passion for scalable architecture.",
    tagline: "Bridging the gap between complex problems and seamless user experiences.",
    image: "assets/mindset.png",
  },
  craft: {
    title: "Craft",
    bullets: [
      "Building scalable apps and websites.",
      "I understand what advantages modern tech can provide, helping me advise on the solutions a business actually needs.",
      "I will find & deliver the best tech solution for your business."
    ],
    cta: "Passionate about building scalable web applications and seamless user experiences. Feel free to reach out for collaborations.",
    technologies: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Next.js", icon: "simple-icons:nextdotjs", color: "#FFFFFF" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
      { name: "PostgreSQL", icon: "database-icon", color: "#4169E1" },
      { name: "Tailwind", icon: "css-icon", color: "#06B6D4" },
      { name: "Kotlin", icon: "kotlin-icon", color: "#7F52FF" }
    ]
  },
  projects: [
    {
      id: "01",
      category: "WEB APP",
      title: "BrightPath LMS",
      description: "Interactive Live Kuppi Sessions and peer-led learning platform for university networks. Built with Django & Celery.",
      image: "assets/brightpath.jpg",
      github: "https://github.com/Gagana0819/BrightPath-LMS-ITPM-",
      tags: ["Python", "Django", "React", "Supabase", "Celery"]
    },
    {
      id: "02",
      category: "E-COMMERCE",
      title: "Sportify",
      description: "Modern e-commerce platform for sports equipment with role-based dashboards, Stripe payments, and Cloudinary integration.",
      image: "assets/sportify.jpg",
      github: "https://github.com/Achintha2002/Sportifyweb",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"]
    },
    {
      id: "03",
      category: "E-COMMERCE",
      title: "Raani Cream",
      description: "Premium MERN stack e-commerce platform for an organic skincare brand featuring an admin console and interactive shopping experience.",
      image: "assets/raani-cream.jpg",
      github: "https://github.com/Achintha2002/cream-web",
      link: "https://cream-web-ten.vercel.app/",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"]
    },
    {
      id: "04",
      category: "WEB APP",
      title: "Smart Campus Hub",
      description: "Full-stack Smart Campus Management System featuring resource booking, incident ticketing, and an automated notification system.",
      image: "assets/smart-campus.png",
      github: "https://github.com/sandundimantha/it3030-paf-2026-smart-campus-group54.git",
      tags: ["Spring Boot", "React", "PostgreSQL", "Google OAuth"]
    },
    {
      id: "05",
      category: "WEB APP",
      title: "Photo Home",
      description: "A modern photography portfolio website to showcase galleries, featured works, and photography services.",
      image: "assets/photo-home.png",
      github: "https://github.com/Achintha2002/PhotoFrameWeb.git",
      link: "https://photo-frame-web.vercel.app/",
      tags: ["React", "Vite", "Tailwind CSS"]
    }
  ],
  skills: [
    "React", "Node.js", "Python", "Docker", "PostgreSQL", "Next.js", "Git", 
    "JavaScript", "HTML5", "CSS3", "Figma", "Redux", "Tailwind", 
    "Express", "TypeScript", "MongoDB", "Linux", "Kotlin"
  ],
  chatbot: {
    avatar: "assets/real_photo.png",
    welcome: "Hi, I'm Achintha. Ask me anything about my work, skills, mindset, or how we can collaborate!",
    defaultQuestions: [
      { text: "Work", keyword: "work" },
      { text: "About me", keyword: "about" },
      { text: "Skills", keyword: "skills" },
      { text: "Contact", keyword: "contact" }
    ],
    responses: {
      work: "I have built several interesting projects: 🎓 **BrightPath LMS** (interactive university learning platform), 🛒 **Sportify** (modern e-commerce platform for sports equipment), ✨ **Raani Cream** (premium skincare e-commerce platform), 🏛️ **Smart Campus Hub** (full-stack campus management system), and 📷 **Photo Home** (photography portfolio). You can explore them in detail in the Projects section!",
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
