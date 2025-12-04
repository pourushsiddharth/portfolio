import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle, Github, Globe } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] pt-16 font-sans text-[#202124]">
      <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
        <div className="flex flex-col w-full max-w-[960px] flex-1">
          
          <main className="flex-grow pt-10 sm:pt-16">
            
            {/* Header / Hero */}
            <div className="flex flex-wrap items-center justify-between gap-6 p-4">
              <div className="flex flex-col gap-3 flex-1">
                <h1 className="text-4xl sm:text-5xl font-medium leading-tight tracking-[-0.033em] text-[#202124] google-font">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg font-normal leading-normal text-[#5f6368]">
                  {project.shortDescription}
                </p>
              </div>
              <div className="flex justify-start sm:justify-end gap-3">
                 {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#1a73e8] text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-[#174ea6] transition-colors shadow-sm"
                    >
                      <span className="truncate flex items-center gap-2">
                         <Globe className="w-5 h-5" /> Live Demo
                      </span>
                    </a>
                 )}
                 {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white border border-[#dadce0] text-[#1a73e8] text-base font-medium leading-normal tracking-[0.015em] hover:bg-[#f8f9fa] transition-colors"
                    >
                      <span className="truncate flex items-center gap-2">
                        <Github className="w-5 h-5" /> Code
                      </span>
                    </a>
                 )}
              </div>
            </div>

            {/* Description */}
            <div className="mt-12">
              <h2 className="text-2xl font-medium leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#202124] google-font">
                Description
              </h2>
              <p className="text-base font-normal leading-relaxed pb-3 pt-1 px-4 text-[#3c4043]">
                {project.longDescription}
              </p>
            </div>

            {/* Illustration (Code Mockup) */}
            <div className="mt-10">
              <h2 className="text-2xl font-medium leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#202124] google-font">
                System Overview
              </h2>
              <div className="px-4">
                <div className="w-full rounded-xl border border-[#dadce0] bg-[#282a2e] shadow-sm overflow-hidden">
                  {/* Window Controls */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#202124] border-b border-[#3c4043]">
                    <div className="w-3 h-3 rounded-full bg-[#ea4335]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#fbbc04]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#34a853]"></div>
                    <div className="ml-4 text-xs text-[#9aa0a6] font-mono opacity-70">
                       {project.id}-controller.ts
                    </div>
                  </div>
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm md:text-base text-[#e8eaed] overflow-x-auto">
                    <div className="leading-relaxed whitespace-pre-wrap">
                       <p><span className="text-[#f78c6c]">import</span> <span className="text-[#ffcb6b]">{'{'}</span> {project.title.replace(/\s/g, '')} <span className="text-[#ffcb6b]">{'}'}</span> <span className="text-[#f78c6c]">from</span> <span className="text-[#c3e88d]">'./modules'</span>;</p>
                       <p className="mt-2"><span className="text-[#c792ea]">class</span> <span className="text-[#ffcb6b]">ProjectImplementation</span> <span className="text-[#c792ea]">implements</span> <span className="text-[#ffcb6b]">ISolution</span> <span className="text-[#89ddff]">{'{'}</span></p>
                       <div className="pl-4 border-l-2 border-[#3c4043] ml-1 mt-1">
                          <p className="mt-2">
                             <span className="text-[#c792ea]">constructor</span>() <span className="text-[#89ddff]">{'{'}</span>
                          </p>
                          <div className="pl-4">
                             <p><span className="text-[#f07178]">this</span>.name <span className="text-[#89ddff]">=</span> <span className="text-[#c3e88d]">'{project.title}'</span>;</p>
                             <p>
                               <span className="text-[#f07178]">this</span>.stack <span className="text-[#89ddff]">=</span> [
                               {project.technologies.slice(0,3).map((t, i) => (
                                 <span key={i}>
                                   <span className="text-[#c3e88d]">'{t}'</span>{i < (Math.min(project.technologies.length, 3) - 1) ? ', ' : ''}
                                 </span>
                               ))}
                               {project.technologies.length > 3 ? ', ...' : ''}
                               ];
                             </p>
                             <p><span className="text-[#f07178]">this</span>.status <span className="text-[#89ddff]">=</span> <span className="text-[#c3e88d]">'Production-Ready'</span>;</p>
                          </div>
                          <p><span className="text-[#89ddff]">{'}'}</span></p>
                          
                          <p className="mt-4">
                             <span className="text-[#c792ea]">async</span> <span className="text-[#82aaff]">initialize</span>() <span className="text-[#89ddff]">{'{'}</span>
                          </p>
                          <div className="pl-4">
                             <p className="text-[#546e7a] italic">// Booting up system services</p>
                             <p><span className="text-[#c792ea]">await</span> <span className="text-[#f07178]">this</span>.connectDB();</p>
                             <p><span className="text-[#89ddff]">return</span> <span className="text-[#c3e88d]">'System Online 🚀'</span>;</p>
                          </div>
                          <p><span className="text-[#89ddff]">{'}'}</span></p>
                       </div>
                       <p className="mt-2"><span className="text-[#89ddff]">{'}'}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mt-10">
              <h2 className="text-2xl font-medium leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#202124] google-font">
                Key Features
              </h2>
              <ul className="list-none space-y-4 p-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#1a73e8] mt-0.5 flex-shrink-0" />
                    <span className="flex-1 text-[#3c4043] font-normal leading-relaxed">
                      {feature.includes(':') ? (
                          <><strong>{feature.split(':')[0]}:</strong> {feature.substring(feature.indexOf(':') + 1)}</>
                      ) : (
                          feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-10 mb-20">
              <h2 className="text-2xl font-medium leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#202124] google-font">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3 p-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-[#e8f0fe] px-4 py-1.5 text-sm font-medium text-[#1967d2] hover:bg-[#d2e3fc] transition-colors cursor-default border border-transparent hover:border-[#d2e3fc]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
