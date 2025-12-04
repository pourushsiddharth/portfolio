import { Project, Certification, Education } from './types';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  Cpu, 
  Layout, 
  Cloud 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Pourush Siddharth",
  role: "Software Developer",
  email: "pourushsiddharth@gmail.com",
  phone: "+91-9334807758",
  location: "Dehradun, Uttarakhand, India",
  linkedin: "https://linkedin.com/in/pourushsiddharth",
  github: "https://github.com/pourushsiddharth",
  profileImage: "https://pourushsiddharth.in/me.jpg",
  about: "Highly motivated and analytical Computer Science Engineering student with a strong foundation in data structures, algorithms, and full-stack web development. Proven ability to design and implement efficient, robust software solutions. Expertise in Python, Flask, HTML5, CSS, JavaScript, and SQLite.",
  resumeLink: "pourush-siddharth-resume.pdf" 
};

export const SKILLS = [
  { name: "Python", icon: <Terminal className="w-8 h-8 text-[#34a853]" /> }, // Google Green
  { name: "Flask", icon: <Server className="w-8 h-8 text-[#5f6368]" /> }, // Google Gray
  { name: "JavaScript", icon: <Code2 className="w-8 h-8 text-[#fbbc04]" /> }, // Google Yellow
  { name: "HTML5 & CSS3", icon: <Layout className="w-8 h-8 text-[#ea4335]" /> }, // Google Red
  { name: "SQL / SQLite", icon: <Database className="w-8 h-8 text-[#1a73e8]" /> }, // Google Blue
  { name: "Gemini API", icon: <Cpu className="w-8 h-8 text-[#1a73e8]" /> }, // Google Blue
  { name: "n8n", icon: <Globe className="w-8 h-8 text-[#ea4335]" /> }, // Red accent
  { name: "Tailwind CSS", icon: <Layout className="w-8 h-8 text-[#1a73e8]" /> }, // Google Blue
];

export const PROJECTS: Project[] = [
  {
    id: "gps-prints",
    title: "GPS Prints",
    shortDescription: "A full-stack e-commerce solution digitizing a local printing business with order tracking and file management.",
    longDescription: "Engineered a comprehensive e-commerce and service management platform that successfully transitioned a local printing business into the digital space. The application features a robust order tracking system, secure file upload capabilities for custom prints, and a dynamic admin dashboard for inventory and client management. Key technical achievements include implementing secure user authentication, optimizing database queries for faster load times, and designing a responsive UI that led to a significant increase in online customer engagement.",
    technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "SQLite"],
    imageUrl: "https://picsum.photos/id/3/800/600",
    liveUrl: "https://gpsprints.in",
    role: "Full Stack Developer",
    date: "Ongoing",
    features: [
      "User authentication and profile management",
      "Order tracking system",
      "Admin dashboard for order management",
      "Responsive design for mobile and desktop"
    ]
  },
  {
    id: "filmies",
    title: "Filmies (OTT Platform)",
    shortDescription: "An interactive OTT prototype featuring movie browsing, user feedback loops, and personalized content discovery.",
    longDescription: "Architected and developed a scalable OTT platform prototype designed to deliver a seamless movie browsing experience. The system integrates a responsive frontend with a lightweight SQLite backend to handle content delivery and user interactions efficiently. I implemented a custom rating and feedback algorithm to foster user engagement and solved complex state management challenges to ensure real-time updates across the application interface.",
    technologies: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "SQLite"],
    imageUrl: "https://picsum.photos/id/12/800/600",
    githubUrl: "https://github.com/pourushsiddharth/Filmies",
    role: "Backend & Frontend Developer",
    date: "Sept 2023 – April 2024",
    features: [
      "Movie catalog browsing",
      "User feedback and rating system",
      "Search functionality",
      "Database integration for content management"
    ]
  },
  {
    id: "emotional-mapping",
    title: "Emotional Mapping",
    shortDescription: "AI-powered mental wellness tool generating visual emotional flowcharts using Gemini API and LLMs.",
    longDescription: "Pioneered the development of an AI-driven mental health tool that leverages the Gemini API to analyze textual inputs and visualize emotional patterns. The project involved fine-tuning prompts for Large Language Models to accurately extract sentiment and causality, translating abstract emotional data into structured, interactive flowcharts. This innovation provides users with actionable insights into their emotional triggers, bridging the gap between advanced AI capabilities and accessible mental wellness resources.",
    technologies: ["Python", "Flask", "LLM (Gemini API)", "JavaScript", "HTML5", "CSS3"],
    imageUrl: "https://picsum.photos/id/26/800/600",
    liveUrl: "https://ems.pourushsiddharth.in",
    githubUrl: "https://github.com/pourushsiddharth/emotional-mapping/",
    role: "AI Developer",
    date: "April 2025 – May 2025",
    features: [
      "Integration with Generative AI models",
      "Visual flowchart generation",
      "Sentiment analysis",
      "Interactive web interface"
    ]
  },
  {
    id: "personal-cloud",
    title: "Personal Cloud",
    shortDescription: "Secure, mobile-optimized private cloud storage solution with remote access via ngrok tunneling.",
    longDescription: "Designed and built a private cloud storage system to tackle the need for secure, ownership-centric data management. The application serves files from a local server while providing global access through secure ngrok tunneling. Technical highlights include implementing a mobile-first UI for seamless on-the-go access, building a custom file explorer with rename/delete capabilities, and ensuring data security through basic authentication and session management, offering a lightweight alternative to commercial cloud services.",
    technologies: ["Python", "Flask", "ngrok", "HTML5", "CSS3", "JavaScript"],
    imageUrl: "https://picsum.photos/id/0/800/600",
    githubUrl: "https://github.com/pourushsiddharth/cloud",
    role: "Full Stack Developer",
    date: "Feb 2025 – March 2025",
    features: [
      "File upload, download, rename, and delete",
      "Folder navigation",
      "Search functionality",
      "Basic authentication for security",
      "Mobile-optimized UI"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Tula's Institute Dehradun",
    degree: "B.Tech. - Computer Science & Engineering",
    year: "2021 – 2025",
    score: "Percentage: 68 / 100"
  },
  {
    institution: "Tula's Institute, Dehradun",
    degree: "Diploma (UBTER)",
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
    issuer: "JPMorgan Chase & Co.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_PwD6xxKrSow2dM4HC_1721534340331_completion_certificate.pdf",
    icon: "https://companieslogo.com/img/orig/JPM-6b337108.png?t=1720244492"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Hewlett%20Packard%20Enterprise%20/da2T3WZCbMAJD7bNB_Hewlett%20Packard%20Enterprise_PwD6xxKrSow2dM4HC_1721914786981_completion_certificate.pdf",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/1024px-Hewlett_Packard_Enterprise_logo.svg.png"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1CSpkWNvIdUzTuKobWcWEHzaMAFGbrphi/view",
    icon: "https://nptel.ac.in/_app/immutable/assets/logo-d.Cr_Q8GSy.avif"
  },
  {
    title: "Letter of Excellence",
    issuer: "GitHub",
    link: "https://drive.google.com/file/d/1SuSdB0U71Wfv0dZ2cDWqfbYoYOZrl4x0/view",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  }
];