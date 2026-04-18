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
  title: "Crafting Software, AI Systems & AR/VR Experiences",
  tagline: "Creating Technology that solves problems, not just code that works.",
  description:
    "I’m a Computer Engineering student with hands-on experience across 3+ real-world projects in full-stack development, AR/VR, and intelligent systems.",
  location: "Vadodara, Gujarat, India",
  email: "tejasmistry2222@gmail.com",
  availability: "Open to opportunities",
  image: "/images/profile.jpg",
}

export const aboutMe: AboutMe = {
  paragraphs: [
    "I’m a developer focused on building real-world applications across full-stack development, AR/VR, and intelligent systems, combining strong backend logic with clean and efficient user experiences.",

    "I have developed a secure social media platform with authentication and real-time features, and I am currently working on an AR/VR-based Air Traffic Controller simulation using Unity XR.",

    "I have also worked on an intelligent traffic management system inspired by a Smart India Hackathon problem statement, integrating real-time vehicle detection with hardware-based signal control.",

    "Additionally, I have mentored students in C++, helping them strengthen their programming fundamentals and problem-solving abilities.",
  ],
  highlights: [
    "3+ real-world projects (Web, AR/VR, AI/IoT)",
    "Full-stack development (React, Node.js, PostgreSQL)",
    "AR/VR Air Traffic Control simulation",
    "Experience with AI-based vehicle detection systems",
  ],
}

export const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "Java", level: 85 },
  { name: "C++", level: 80 },
  { name: "React.js", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "Unity (XR)", level: 78 },
  { name: "Android (Java)", level: 60 },
  { name: "Computer Vision (MobileNet-SSD)", level: 80 },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Traffic Management System",
    description:
      "AI-based system using real-time vehicle detection (MobileNet-SSD) to dynamically control traffic signals via ESP8266, optimizing traffic flow and reducing idle wait times.",
    image: "/projects/traffic.jpg",
    technologies: ["Python", "OpenCV", "Android", "ESP8266"],
    githubUrl: "https://github.com/tejas2435/Smart-Traffic-Signals-using-AI-Object-Detection",
    liveUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Contact Management System",
    description:
      "Java-based application for managing contacts with functionalities like add, search, update, and delete through a simple interface.",
    image: "/projects/contact.jpg",
    technologies: ["Java"],
    githubUrl: "https://github.com/tejas2435/Contact-Managment-System-Java-",
    liveUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Air Traffic Controller (AR/VR Simulation)",
    description:
      "Currently developing an immersive AR/VR simulation for real-time aircraft control, path management, and interactive 3D visualization using Unity XR.",
    image: "/projects/atc.jpg",
    technologies: ["Unity", "C#", "XR", "AR/VR"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Gatherly (Social Media Platform)",
    description:
      "Full-stack social media platform featuring authentication, private/public profiles, follow system, notifications, and secure backend APIs.",
    image: "/projects/social.jpg",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/tejas2435/Gatherly",
    liveUrl: "https://gatherly-lemon.vercel.app/",
    featured: true,
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    role: "Vanilla JavaScript Developer Intern",
    company: "Technospot Technologies",
    companyUrl: "",
    period: "Dec 2024—Jan 2025",
    description:
      "Developed interactive frontend components using Vanilla JavaScript and improved UI responsiveness.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    role: "SQL Developer Intern",
    company: "Soft Nexis Technologies",
    companyUrl: "https://www.softnexis.com/",
    period: "Nov 2025—Dec 2025",
    description:
      "Worked on database design, optimized SQL queries, and handled structured data efficiently.",
    technologies: ["SQL", "PostgreSQL"],
  },
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
