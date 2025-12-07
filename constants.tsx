import { Project, Certification, Education } from './types';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  Cpu, 
  Layout, 
  AppWindow,
  ExternalLink
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Pourush Siddharth",
  role: "Software Developer",
  email: "pourushsiddharth@gmail.com",
  phone: "+91-9334807758",
  location: "Dehradun, Uttarakhand, India",
  linkedin: "https://linkedin.com/in/pourushsiddharth",
  github: "https://github.com/pourushsiddharth",
  profileImage: "https://github.com/pourushsiddharth/portfolio/blob/main/smalldp.png?raw=true",
  about: "Highly motivated and analytical Computer Science Engineering student with a strong foundation in data structures, algorithms, and full-stack web development. Proven ability to design and implement efficient, robust software solutions. Expertise in Python, Flask, HTML5, CSS, JavaScript, and SQLite.",
  resumeLink: "pourush-siddharth-resume.pdf" 
};

export const SKILLS = [
  { name: "Python", icon: <Terminal className="w-8 h-8 text-[#34a853]" /> },
  { name: "Flask", icon: <Server className="w-8 h-8 text-[#5f6368]" /> },
  { name: "React", icon: <AppWindow className="w-8 h-8 text-[#61dafb]" /> },
  { name: "JavaScript", icon: <Code2 className="w-8 h-8 text-[#fbbc04]" /> },
  { name: "HTML5 & CSS3", icon: <Layout className="w-8 h-8 text-[#ea4335]" /> },
  { name: "SQL / SQLite", icon: <Database className="w-8 h-8 text-[#1a73e8]" /> },
  { name: "Gemini API", icon: <Cpu className="w-8 h-8 text-[#1a73e8]" /> },
  { name: "n8n", icon: <Globe className="w-8 h-8 text-[#ea4335]" /> },
  { name: "Tailwind CSS", icon: <Layout className="w-8 h-8 text-[#1a73e8]" /> },
];

export const PROJECTS: Project[] = [
  {
    id: "3d-portfolio",
    title: "3D Interactive Portfolio",
    shortDescription: "A gamified 3D scrolling experience turning a traditional portfolio into a virtual road trip using React Three Fiber.",
    longDescription: "This application reimagines the personal portfolio as a 3D driving experience. Built with React 18, Three.js, and React Three Fiber, it replaces vertical scrolling with a car driving down a highway. As users scroll, they pass procedurally generated environments—billboards representing projects, buildings symbolizing milestones, and a 'Tech Park' for dream companies. The application features a custom physics-based movement system, particle effects for vehicle exhaust, and a hybrid rendering engine that overlays HTML content on a dynamic 3D scene. Optimized for performance, it uses procedural textures and level-of-detail techniques to maintain 60FPS.",
    technologies: ["React 18", "Three.js", "React Three Fiber", "Tailwind CSS", "Vite", "Netlify"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    liveUrl: "https://3d-portfolio-pourush.netlify.app",
    githubUrl: "https://github.com/pourushsiddharth/3d-portfolio",
    features: [
      "Scroll Control: Virtual scroll container with physics-based lerping (0 to -380 z-axis).",
      "Procedural Assets: Canvas API generated road textures and dynamic particle smoke system.",
      "Performance: Level of Detail (LOD) scaling and memory-efficient procedural generation.",
      "Environment: Dynamic Sky (Rayleigh scattering), Fog, and procedural buildings/scenery.",
      "Hybrid UI: HTML Overlay for text content synchronized with WebGL 3D scene."
    ],
    role: "Frontend Engineer",
    date: "2024"
  },
  {
    id: "ai-model-resume",
    title: "AI Resume Analyzer",
    shortDescription: "An intelligent resume analyzer and generator using Google Gemini API to optimize job applications.",
    longDescription: "An advanced web application that leverages Google's Gemini Generative AI to analyze resumes against specific job descriptions. It parses PDF and text inputs, identifies keyword gaps, provides a match percentage score, and suggests concrete improvements. The system uses a RAG (Retrieval-Augmented Generation) approach to contextually understand industry standards and role requirements. It includes a built-in markdown editor for real-time resume tailoring and exports optimized versions in multiple formats.",
    technologies: ["React", "Gemini API", "Node.js", "Express", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    features: [
       "AI Analysis: Detailed feedback on content, structure, and keywords.",
       "Scoring Engine: ATS-style compatibility score generation.",
       "Privacy First: Local processing of sensitive data where possible.",
       "Real-time Editing: Interactive suggestions implementation."
    ],
    role: "Full Stack Developer",
    date: "2024",
    liveUrl: "https://model-resume.vercel.app/",
    githubUrl: "https://github.com/pourushsiddharth/ai-resume"
  },
  {
    id: "smart-task-manager",
    title: "Smart Task Manager",
    shortDescription: "A productivity tool with automated prioritization and team collaboration features.",
    longDescription: "A comprehensive project management tool designed for small agile teams. Unlike standard to-do lists, this application uses a weighted algorithm to automatically prioritize tasks based on deadlines, dependencies, and estimated effort. It features real-time WebSocket updates for team collaboration, drag-and-drop kanban boards, and time tracking analytics. The backend is built with Flask and SQLAlchemy, ensuring data integrity with complex relationships.",
    technologies: ["Python", "Flask", "SQLAlchemy", "JavaScript", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    features: [
        "Smart Sorting: Algorithm-based task prioritization.",
        "Kanban Board: Interactive drag-and-drop interface.",
        "Analytics: Visual reports on team velocity and task completion.",
        "Real-time: Live updates using WebSockets."
    ],
    role: "Backend Lead",
    date: "2023",
    githubUrl: "https://github.com/pourushsiddharth/task-manager"
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Analytics",
    shortDescription: "Visual dashboard for tracking sales, inventory, and customer metrics.",
    longDescription: "An administrative dashboard for an e-commerce platform that aggregates data from multiple sources. It visualizes key performance indicators (KPIs) such as daily active users, conversion rates, and inventory levels. The frontend uses React with Recharts for data visualization, while the backend utilizes Python pandas for data processing and aggregation. It includes export functionality for generating PDF reports for stakeholders.",
    technologies: ["React", "Python", "Pandas", "Recharts", "Material UI"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    features: [
        "Data Viz: Interactive charts and graphs.",
        "Inventory Mgmt: Low-stock alerts and prediction.",
        "Reporting: PDF and CSV export capabilities.",
        "Responsive: Mobile-optimized layout for on-the-go checking."
    ],
    role: "Frontend Developer",
    date: "2023"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Graphic Era Hill University",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2022 - 2026",
    score: "CGPA: 8.0"
  },
  {
    institution: "Touch Wood School",
    degree: "Intermediate (ISC)",
    year: "2022",
    score: "92%"
  },
  {
    institution: "Touch Wood School",
    degree: "High School (ICSE)",
    year: "2020",
    score: "93.4%"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    link: "#",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    link: "#",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    link: "#",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
  }
];
