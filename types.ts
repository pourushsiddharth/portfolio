export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  role: string;
  date: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  link: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  score?: string;
}
