// ============================================
// PORTFOLIO DATA FILE
// Update all your information here!
// ============================================

export const personalInfo = {
  name: "Tejas Mistry",
  title: "CSE Student",
  tagline: "Building scalable apps, immersive XR experiences, and intelligent systems",
  description:
    "I’m a Computer Engineering student with hands-on experience across 3+ real-world projects in full-stack development, AR/VR, and intelligent systems.",
  location: "Vadodara, Gujarat, India",
  email: "tejasmistry2017@gmail.com",
  availability: "Open to opportunities",
  image: "/images/profile.jpg", // Update this with your own profile image
}

export const aboutMe = {
  paragraphs: [
    "I’m a developer focused on building real-world, impactful applications across full-stack development, AR/VR, and intelligent systems. My work combines strong backend logic with clean and functional user experiences.",
    "I have built systems ranging from a secure social media platform with authentication and real-time features to an immersive Air Traffic Control simulation in Unity XR based on Smart India Hackathon problem statements.",
    "I also enjoy working on intelligent and hardware-integrated solutions, such as a vehicle detection system using MobileNet-SSD and ESP8266 for smart traffic management.",
    "Apart from development, I have experience mentoring students as a C++ Academic Associate, helping them strengthen problem-solving and programming fundamentals.",
  ],
  highlights: [
    "3+ real-world projects (Web, AR/VR, AI/IoT)",
    "Full-stack development with React, Node.js & PostgreSQL",
    "Built SIH-based Air Traffic Control VR simulation",
    "Mentored 20+ students in C++",
  ],
}

export const skills = [
  { name: "JavaScript", level: 90 },
  { name: "Java", level: 85 },
  { name: "C++", level: 80 },
  { name: "React.js", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "Unity (XR)", level: 82 },
  { name: "Android (Java)", level: 75 },
  { name: "Computer Vision (MobileNet-SSD)", level: 75 },
]


export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include product management, cart functionality, and secure checkout.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/johndoe/task-manager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.",
    image: "/projects/weather.jpg",
    technologies: ["JavaScript", "React", "OpenWeather API", "Chart.js"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description:
      "A CLI tool that generates beautiful portfolio websites from a simple configuration file.",
    image: "/projects/portfolio-gen.jpg",
    technologies: ["Node.js", "TypeScript", "Handlebars"],
    liveUrl: null,
    githubUrl: "https://github.com/johndoe/portfolio-generator",
    featured: false,
  },
  {
    id: 5,
    title: "Code Snippet Manager",
    description:
      "A VS Code extension for managing and organizing code snippets with syntax highlighting and search.",
    image: "/projects/snippets.jpg",
    technologies: ["TypeScript", "VS Code API", "SQLite"],
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=johndoe.snippets",
    githubUrl: "https://github.com/johndoe/snippet-manager",
    featured: false,
  },
  {
    id: 6,
    title: "API Rate Limiter",
    description:
      "A flexible rate limiting middleware for Express.js with Redis backend support.",
    image: "/projects/ratelimiter.jpg",
    technologies: ["Node.js", "Express", "Redis", "TypeScript"],
    liveUrl: null,
    githubUrl: "https://github.com/johndoe/rate-limiter",
    featured: false,
  },
]

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyUrl: "https://techcorp.example.com",
    period: "2023 — Present",
    description:
      "Lead frontend development for the main product dashboard. Implement new features, optimize performance, and mentor junior developers.",
    technologies: ["React", "TypeScript", "GraphQL", "TailwindCSS"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://startupxyz.example.com",
    period: "2021 — 2023",
    description:
      "Built and maintained multiple client-facing applications. Developed RESTful APIs and integrated third-party services.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "WebAgency",
    companyUrl: "https://webagency.example.com",
    period: "2019 — 2021",
    description:
      "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
    technologies: ["JavaScript", "React", "CSS", "WordPress"],
  },
]

export const socialLinks = {
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
  email: "mailto:john@example.com",
}

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const siteConfig = {
  title: "John Doe | JavaScript Developer",
  description:
    "JavaScript developer specializing in building exceptional digital experiences. View my projects and get in touch.",
  url: "https://johndoe.dev",
  ogImage: "/og-image.jpg",
}
