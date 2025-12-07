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
  profileImage: "https://raw.githubusercontent.com/pourushsiddharth/portfolio/refs/heads/main/smalldp.png",
  about: "Highly motivated and analytical Computer Science Engineering student with a strong foundation in data structures, algorithms, and full-stack web development. Proven ability to design and implement efficient, robust software solutions. Expertise in Python, Flask, HTML5, CSS, JavaScript, and SQLite.",
  resumeLink: "https://drive.google.com/file/d/1OAKetxMMwTnEgLcG3dPggDMUmhEi6bVT/view?usp=sharing" 
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
    id: "gps-prints",
    title: "GPS Prints",
    shortDescription: "A commercial website designed and developed using Python and Flask with custom API integration.",
    longDescription: "A full-stack web application developed for GPS Prints. The project involved designing the user interface and developing the backend using Python and Flask. Key contributions included constructing robust APIs to handle data flow and ensuring a responsive front-end design. The application focuses on performance, scalability, and providing an intuitive user experience for customers.",
    technologies: ["Python", "Flask", "API Development", "HTML5", "CSS3", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop",
    liveUrl: "https://gpsprints.in",
    features: [
        "Backend Architecture: Robust server-side logic using Flask.",
        "API Integration: Custom-built APIs for seamless data handling.",
        "UI/UX Design: Responsive and intuitive interface design.",
        "Data Management: Efficient database integration."
    ],
    role: "Web Developer",
    date: "July 2024 - June 2025"
  },
  {
    id: "emotional-map-generator",
    title: "Emotional Map Generator",
    shortDescription: "An AI-powered web application that analyzes personal situations to generate deep emotional insights and visual emotional flowcharts using Google's Gemini API.",
    longDescription: "The Emotional Map Generator helps users understand their feelings by translating narrative descriptions of situations into structured emotional data. By leveraging the advanced reasoning capabilities of the Google Gemini 2.5 Flash model, the app provides a safe space for self-reflection, offering clarity through visualization and empathetic feedback. The tool creates auto-generated, interactive SVG flowcharts depicting the journey from initial emotions to resolution and includes interactive bar charts showing the intensity of detected emotions. It also provides tailored psychological interpretations and healing suggestions based on age, culture, and context.",
    technologies: ["React 19", "Tailwind CSS", "Gemini API", "Recharts", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://ems.pourushsiddharth.in",
    githubUrl: "https://github.com/pourushsiddharth/emotional-map-generator",
    features: [
        "AI-Powered Analysis: Deep text analysis identifying emotions, triggers, and psychological patterns.",
        "Visual Flowcharts: Auto-generated, interactive SVG flowcharts depicting the emotional journey.",
        "Personalized Insights: Tailored psychological interpretations and healing suggestions.",
        "Secure Architecture: Client-side API key usage ensures user privacy.",
        "Data Visualization: Interactive charts visualizing emotional intensity."
    ],
    role: "Full Stack Developer",
    date: "2024"
  },
  {
    id: "personal-cloud",
    title: "Personal Cloud Drive",
    shortDescription: "A Python-based personal cloud file storage app running on Android via Termux.",
    longDescription: "This is a personal cloud file storage app built in Python. You can upload, download, rename, and delete files through a beautiful web interface — all hosted and running directly from your Android phone with Termux. It supports remote access via ngrok, includes basic authentication, and features a fully responsive mobile-friendly design. The project demonstrates the power of running server-side Python applications on mobile hardware.",
    technologies: ["Python", "Termux", "HTML/CSS", "Ngrok", "Shell Scripting"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    githubUrl: "https://github.com/pourushsiddharth/cloud",
    features: [
        "File Browser: View folders, files, types, and sizes.",
        "File Operations: Upload, rename, and delete files via web interface.",
        "Security: Basic authentication with customizable credentials.",
        "Remote Access: Integration with Ngrok for global connectivity.",
        "Platform: Optimized for running on Android via Termux."
    ],
    role: "Python Developer",
    date: "2023"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Tula's Institute Dehradun",
    degree: "B.Tech - Computer Science & Engineering",
    year: "2021 - 2025",
    score: "Percentage: 72 / 100"
  },
  {
    institution: "Tula's Institute, Dehradun",
    degree: "Diploma, UBTER",
    year: "2019",
    score: "CGPA: 8/10"
  },
  {
    institution: "St. Teresa's School, Dehradun",
    degree: "10th, CISCE",
    year: "2017",
    score: "Percentage: 65/100"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JP MORGAN & Co.",
    link: "#",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/JPMorgan_Chase.svg"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise",
    link: "#",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    link: "#",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
  },
  {
    title: "Letter of Excellence",
    issuer: "Github",
    link: "#",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
  }
];