import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-medium google-font text-gray-700">&lt;{PERSONAL_INFO.name} /&gt;</h3>
            <p className="text-gray-500 mt-2 text-sm">{PERSONAL_INFO.role}</p>
            <p className="text-gray-400 text-sm mt-1">{PERSONAL_INFO.location}</p>
          </div>
          
          <div className="flex space-x-8">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 hover:text-[#ea4335] transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#202124] transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1a73e8] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
           <div className="flex space-x-6 mb-4 md:mb-0">
             <span>Python</span>
             <span>Flask</span>
             <span>React</span>
             <span>Google Cloud</span>
           </div>
           <p>&copy; {new Date().getFullYear()} Pourush Siddharth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;