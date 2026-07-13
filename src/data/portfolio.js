import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const profile = {
  name: "Harsh Kumar Garg",
  title: "Application Developer at IBM",
  subtitle:
    "Full Stack Developer focused on React, Next.js, modern web applications, enterprise development, cloud technologies, and AI-powered products.",
  location: "Delhi, India",
  email: "harshugarg2907@gmail.com",
  resumePath: "/resume-placeholder.pdf",
  profileImage: "/profile-sticker.png",
  availability: "Available for high-impact product teams",
  socials: [
    { label: "GitHub", href: "https://github.com/harshugarg2907/", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-kumar-garg-1805ab247/", icon: FaLinkedinIn },
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroLabels = ["React", "Next.js", "AI Products", "SAP UX", "Cloud"];

export const stats = [
  { value: "5+", label: "product-grade projects" },
  { value: "2025", label: "CSE graduate" },
  { value: "IBM", label: "enterprise engineering" },
  { value: "AI", label: "automation focus" },
];

export const focusAreas = [
  {
    title: "Product Frontends",
    text: "Responsive interfaces with modern React, strong information hierarchy, and motion that clarifies intent.",
    icon: Layers3,
  },
  {
    title: "Enterprise Systems",
    text: "Practical experience across Oracle VBCS, OIC, Fusion HCM, SAP UX, SQL, and workflow-heavy applications.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI Workflows",
    text: "AI integrations, link intelligence, retrieval-augmented chat, and tool platforms that reduce repetitive work.",
    icon: BrainCircuit,
  },
];

export const skillGroups = [
  { name: "Frontend", icon: Code2, skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { name: "Backend", icon: TerminalSquare, skills: ["Node.js", "Express.js", "REST APIs", "Git", "GitHub"] },
  { name: "Database", icon: Database, skills: ["MongoDB", "SQL", "Data modeling", "Analytics"] },
  { name: "Cloud & Enterprise", icon: Cloud, skills: [ "AWS", "Fusion HCM", "SAP UX"] },
  { name: "AI & Tools", icon: Sparkles, skills: ["AI integrations", "RAG systems", "Gemini AI", "Vector search"] },
];

export const orbitTech = ["React", "Next", "AI", "VBCS", "Mongo", "SAP", "OIC", "Tailwind"];

export const experiences = [
  {
    company: "IBM",
    role: "Application Developer",
    duration: "2025 - Present",
    summary: "Working on enterprise application development after technical training and certification.",
    impact: [
      "Builds maintainable application features for enterprise delivery environments.",
      "Applies modern engineering practices across UI, integration, and platform workflows.",
      "Collaborates across technical tracks to convert business needs into working software.",
    ],
  },
  {
    company: "KIS IT Services Pvt. Ltd.",
    role: "Software Developer Intern",
    duration: "Internship",
    summary: "Developed web and desktop applications using ASP.NET, VB.NET, SQL Server, and related technologies.",
    impact: [
      "Delivered data-backed application screens and business workflows.",
      "Worked with SQL Server-backed features and desktop/web application maintenance.",
      "Strengthened fundamentals in enterprise software delivery and debugging.",
    ],
  },
];

export const projects = [
  {
    name: "EveryTools",
    description: "A modern productivity platform containing PDF, image, text, calculator, and AI-powered tools.",
    tech: ["Next.js", "React", "Tailwind CSS", "Gemini AI"],
    liveUrl: "https://every-tools.vercel.app",
    accent: "cyan",
  },
  
  {
    name: "LinkSage",
    description: "An AI-powered web application that extracts and summarizes information from webpage links.",
    tech: ["Next.js", "AI", "Tailwind CSS"],
    liveUrl: "https://link-sage-seven.vercel.app",
    accent: "blue",
  },
  {
    name: "Finance Tracker",
    description: "A personal finance application for budgets, transactions, analytics, and spending insights.",
    tech: ["Next.js", "MongoDB", "Recharts"],
    liveUrl: "https://finance-tracker-eta-six.vercel.app/",
    accent: "violet",
  },
  {
    name: "RAG AI Chatbot",
    description: "A retrieval-augmented chatbot that answers questions using indexed knowledge sources.",
    tech: ["React", "AI", "Embeddings", "Vector search"],
    accent: "cyan",
  },
  // {
  //   name: "Employee Transfer and Internal Mobility System",
  //   description: "An enterprise employee transfer platform built with Oracle Fusion HCM, OIC, and VBCS.",
  //   tech: ["Oracle VBCS", "Oracle Integration Cloud", "Fusion HCM"],
  //   accent: "violet",
  // },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "HMR Institute of Technology and Management",
  university: "Guru Gobind Singh Indraprastha University",
  period: "2021 - 2025",
  icon: GraduationCap,
};

export const contactMethods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Location", value: profile.location, href: "#contact", icon: MapPin },
  { label: "Focus", value: "React, enterprise UX, AI products", href: "#projects", icon: Rocket },
];
