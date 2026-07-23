// ============================================
// PORTFOLIO DATA FILE
// Update all your information here!
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  availability: string;
  image: string;
}

export interface AboutMe {
  paragraphs: string[];
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  ogImage: string;
}

export const personalInfo: PersonalInfo = {
  name: "Tejas Mistry",
  title: "Software Engineer,Crafting Software, AI Systems & AR/VR Experiences",
  tagline: "Creating Technology that solves problems, not just code that works.",
  description:
    "Software Engineer with 2+ years of experience delivering 8+ real-world projects across AI systems, full-stack applications, enterprise solutions, and AR/VR experiences. Mentored 20+ students in C++ and Python.",
  location: "Vadodara, Gujarat, India",
  email: "tejasmistry2222@gmail.com",
  availability: "Open to opportunities",
  image: "/images/profile.jpg",
}

export const aboutMe: AboutMe = {
  paragraphs: [
    "I'm a Software Engineer with 2+ years of experience delivering scalable software solutions across enterprise applications, AI-powered systems, full-stack development, and immersive AR/VR experiences. I enjoy building secure, high-performance applications that solve real-world problems.",

    "Over the years, I have successfully delivered 8+ real-world projects, including enterprise platforms with multi-tenant architecture, analytics dashboards, role-based access control, and comprehensive reporting by following Agile methodologies and industry-standard SDLC practices.",

    "My work spans AI-driven traffic management systems, enterprise diagnostic platforms, full-stack social media applications, and immersive XR simulations, combining intelligent automation with scalable software engineering principles.",

    "Alongside development, I have mentored 20+ students in C++ and Python, helping them strengthen programming fundamentals, problem-solving skills, and software development practices while contributing across the complete Software Development Life Cycle (SDLC)."
  ],
  highlights: [
    "8+ real-world projects (Software, Web, AI)",
    "Software Development (Agile Methodology, SDLC, DataBase)",
    "AR/VR Air Traffic Control simulation",
    "Experience with AI-based vehicle detection systems",
  ],
}

export const skills: Skill[] = [
  { name: "JavaScript", level: 82 },
  { name: "Java", level: 85 },
  { name: "C++", level: 80 },
  { name: "React.js", level: 79 },
  { name: "Node.js", level: 78 },
  { name: "Express.js", level: 78 },
  { name: "PostgreSQL", level: 80 },
  { name: "Unity (XR)", level: 60 },
  { name: "Android (Java)", level: 70 },
  { name: "Deep Learning", level: 85 },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Corporate Future Readiness Diagnostic Tool",
    description:
      "Built a scalable enterprise diagnostic platform that streamlines organizational assessments, participant management, analytics visualization, and secure report generation.",
    image: "/projects/diagnostic.svg",
    technologies: ["Agile Methodology", "SDLC", "Supabase Auth", "PostgreSQL", "ReactJS", "NodeJS"],
    githubUrl: "https://github.com/tejas2435/Invictus-Application-for-IFRD-Diagnostic",
    liveUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Traffic Management System",
    description:
      "AI-based system using real-time vehicle detection (MobileNet-SSD) to dynamically control traffic signals via ESP8266, optimizing traffic flow and reducing idle wait times.",
    image: "/projects/traffic.svg",
    technologies: ["Python", "OpenCV", "Android", "ESP8266"],
    githubUrl: "https://github.com/tejas2435/Smart-Traffic-Signals-using-AI-Object-Detection",
    liveUrl: "https://www.linkedin.com/posts/tejasmistry77_smarttraffic-iot-opencv-ugcPost-7333427598384852992-WaXm",
    featured: true,
  },
  {
    id: 3,
    title: "Contact Management System",
    description:
      "Java-based application for managing contacts with functionalities like add, search, update, and delete through a simple interface.",
    image: "/projects/contact.svg",
    technologies: ["Java"],
    githubUrl: "https://github.com/tejas2435/Contact-Managment-System-Java-",
    liveUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Air Traffic Controller (AR/VR Simulation)",
    description:
      "Currently developing an immersive AR/VR simulation for real-time aircraft control, path management, and interactive 3D visualization using Unity XR.",
    image: "/projects/atc.svg",
    technologies: ["Unity", "C#", "XR", "AR/VR"],
    githubUrl: "https://github.com/tejas2435/Air-Traffic-Controller",
    liveUrl: "https://play.unity.com/api/v1/games/game/a564be52-eb2c-4b93-83a6-7d3c5140b342/build/latest/frame",
    featured: true,
  },
  {
    id: 5,
    title: "Gatherly (Social Media Platform)",
    description:
      "Full-stack social media platform featuring authentication, private/public profiles, follow system, notifications, and secure backend APIs.",
    image: "/projects/social.svg",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/tejas2435/Gatherly",
    liveUrl: "https://gatherly-lemon.vercel.app/",
    featured: true,
  },
  {
    id: 6,
    title: "PDF Tool (JavaScript)",
    description:
      "A lightweight browser-based tool for basic PDF operations and manipulation using Vanilla JavaScript.",
    image: "/projects/pdf.jpg",
    technologies: ["JavaScript"],
    githubUrl: "https://github.com/tejas2435/PDF-Merger-",
    liveUrl: "",
    featured: false,
  },
  {
    id: 7,
    title: "Bill Generator (C)",
    description:
      "Console-based billing application developed in C to generate invoices and perform basic calculations.",
    image: "/projects/bill.jpg",
    technologies: ["C"],
    githubUrl: "https://github.com/tejas2435/Bill-Generator-C-Language-",
    liveUrl: "",
    featured: false,
  },
  {
    id: 8,
    title: "To-Do List Application",
    description:
      "Simple task management application for adding, tracking, and organizing daily tasks.",
    image: "/projects/todo.jpg",
    technologies: ["JavaScript"],
    githubUrl: "https://github.com/tejas2435/TODO-LIST-",
    liveUrl: "",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Startup's Friend",
    companyUrl: "https://www.startupsfriend.com/",
    period: "May 2026 — Present",
    description:
      "Worked on building enterprise applications with multi-tenant architecture, analytics dashboards, role-based access control, and comprehensive reporting by following Agile methodologies and industry-standard SDLC practices.",
    technologies: ["Agile Methodology", "SDLC", "Supabase Auth", "PostgreSQL", "ReactJS", "NodeJS"],
  },
  {
    id: 2,
    role: "Academic Associate",
    company: "GSFC University",
    companyUrl: "https://www.gsfcuniversity.ac.in/",
    period: "Jan 2026 — Present",
    description:
      "Worked as a Academic Associate in GSFC University, where I help 20+ students with their academic work and provide guidance to them.",
    technologies: ["SQL", "PostgreSQL"],
  },
  {
    id: 3,
    role: "SQL Developer Intern",
    company: "Soft Nexis Technologies",
    companyUrl: "https://www.softnexis.com/",
    period: "Nov 2025 — Dec 2025",
    description:
      "Worked on database design, optimized SQL queries, and handled structured data efficiently.",
    technologies: ["SQL", "PostgreSQL"],
  }, {
    id: 4,
    role: "Vanilla JavaScript Developer Intern",
    company: "Technospot Technologies",
    companyUrl: "",
    period: "Dec 2024 — Jan 2025",
    description:
      "Developed interactive frontend components using Vanilla JavaScript and improved UI responsiveness.",
    technologies: ["JavaScript", "HTML", "CSS"],
  }
];

export const socialLinks: SocialLinks = {
  github: "https://github.com/tejas2435",
  linkedin: "https://www.linkedin.com/in/tejasmistry77",
  twitter: "https://x.com/TEJASMI21677047",
  email: "tejasmistry2222@gmail.com",
}

export const navigation: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const siteConfig: SiteConfig = {
  title: "Tejas Mistry | Developer",
  description:
    "Computer Engineering student building full-stack applications, AR/VR experiences, and intelligent systems.",
  url: "",
  ogImage: "/images/profile.jpg",
}
