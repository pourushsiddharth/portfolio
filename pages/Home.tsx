import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  ExternalLink, 
  Globe, 
  Download, 
  ChevronRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, EDUCATION, CERTIFICATIONS } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Use the 3D portfolio as the masterpiece
  const specialProject = PROJECTS.find(p => p.id === '3d-portfolio');

  return (
    <div className="pt-16">
      <SEO 
        title={`${PERSONAL_INFO.name} - Software Developer`}
        description={PERSONAL_INFO.about}
        image={PERSONAL_INFO.profileImage}
        url={window.location.origin}
      />
      
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden bg-white flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
           <svg className="h-full w-full text-gray-50" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
           </svg>
        </div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob pointer-events-none"></div>
        <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-50 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 max-w-4xl text-center lg:text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#1a73e8] text-sm font-medium mb-8 border border-blue-100">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1a73e8]"></span>
                    </span>
                   Available for new projects
               </div>
              <h1 className="text-5xl md:text-7xl font-medium google-font text-[#202124] tracking-tight mb-6 leading-[1.1]">
                Hi, I'm {PERSONAL_INFO.name}. <br />
                <span className="text-[#5f6368]">I build scalable digital solutions.</span>
              </h1>
              <p className="mt-6 text-xl text-[#5f6368] mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                {PERSONAL_INFO.about}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#projects"
                  className="px-8 py-3.5 bg-[#1a73e8] text-white font-medium rounded-lg hover:bg-[#174ea6] transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:bg-[#174ea6]"
                >
                  View Projects <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href={PERSONAL_INFO.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 bg-white border border-[#dadce0] text-[#3c4043] font-medium rounded-lg hover:bg-[#f8f9fa] hover:border-[#dadce0] transition-all flex items-center justify-center gap-2 hover:shadow-sm"
                >
                  <Download className="w-5 h-5" /> Download Resume
                </a>
              </div>
            </div>

            <div className="relative flex-shrink-0">
               <div className="relative w-32 h-32 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl">
                 <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out" 
                 />
               </div>
               {/* Decorative Circle */}
               <div className="absolute -z-10 top-4 -right-4 w-32 h-32 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-[#1a73e8] opacity-20 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight Section (Dark Theme) */}
      {specialProject && (
        <section className="relative py-24 bg-[#0f172a] overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse animation-delay-2000"></div>
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             
             <div className="flex justify-center mb-12">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-xl">
                 <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                 <span className="text-sm font-bold text-white tracking-wide uppercase">Featured Masterpiece</span>
               </div>
             </div>

             <div className="bg-gray-900/40 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
                   
                   {/* Image Content (Left) */}
                   <div 
                      className="w-full lg:w-3/5 relative group/image cursor-pointer" 
                      onClick={() => navigate(`/project/${specialProject.id}`)}
                   >
                      {/* Decorative back layers */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-25 group-hover/image:opacity-50 transition duration-500"></div>
                      
                      <div className="relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl border border-white/10">
                         {/* Browser Toolbar */}
                         <div className="h-10 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            <div className="ml-4 flex-1 h-5 bg-white/10 rounded text-xs text-gray-400 flex items-center px-2 font-mono truncate">
                               {specialProject.liveUrl}
                            </div>
                         </div>
                         <div className="aspect-[16/10] overflow-hidden">
                           <img 
                              src={specialProject.imageUrl} 
                              alt={specialProject.title} 
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover/image:scale-105"
                           />
                           {/* Overlay */}
                           <div className="absolute inset-0 bg-indigo-950/20 group-hover/image:bg-transparent transition-colors duration-500"></div>
                         </div>
                      </div>
                   </div>

                   {/* Text Content (Right) */}
                   <div className="w-full lg:w-2/5 text-center lg:text-left">
                      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {specialProject.title}
                      </h2>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {specialProject.shortDescription}
                      </p>

                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
                        {specialProject.technologies.slice(0, 5).map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-indigo-200">
                             {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                         <Link 
                            to={`/project/${specialProject.id}`}
                            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                         >
                            View Case Study <ArrowRight className="w-5 h-5" />
                         </Link>
                         {specialProject.liveUrl && (
                            <a 
                               href={specialProject.liveUrl}
                               target="_blank"
                               rel="noreferrer"
                               className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                               <Globe className="w-5 h-5" /> Live Demo
                            </a>
                         )}
                      </div>
                   </div>

                </div>
             </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-medium google-font text-[#202124]">Technical Proficiency</h2>
            <p className="mt-2 text-[#5f6368] text-lg">Tools and technologies I use to build robust applications.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-[#dadce0] hover:border-[#1a73e8] hover:shadow-md transition-all flex flex-col items-center justify-center text-center h-40 group cursor-default hover:-translate-y-1 duration-300">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200 bg-[#f8f9fa] p-3 rounded-full group-hover:bg-white border border-transparent group-hover:border-gray-100">
                  {skill.icon}
                </div>
                <span className="font-medium text-[#3c4043] group-hover:text-[#1a73e8] transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#f8f9fa] border-t border-[#dadce0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-medium google-font text-[#202124]">More Projects</h2>
              <p className="mt-2 text-[#5f6368] text-lg">Other exciting things I've built.</p>
            </div>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hidden md:flex items-center text-[#1a73e8] font-medium hover:text-[#174ea6] transition-colors mt-4 md:mt-0 px-4 py-2 hover:bg-blue-50 rounded">
              See more on GitHub <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.filter(p => p.id !== '3d-portfolio').map((project) => (
              <div key={project.id} className="group bg-white rounded-xl border border-[#dadce0] hover:border-[#d2e3fc] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden flex flex-col h-full">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-xs font-bold text-[#1a73e8] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                      {project.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium google-font text-[#202124] mb-3 group-hover:text-[#1a73e8] transition-colors">
                    <Link to={`/project/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="text-[#5f6368] text-sm mb-5 line-clamp-3 leading-relaxed flex-grow">
                    {project.shortDescription}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-[#5f6368] bg-[#f8f9fa] border border-[#f1f3f4] px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                       <span className="text-xs font-medium text-[#5f6368] bg-[#f8f9fa] border border-[#f1f3f4] px-2.5 py-1 rounded-full">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-[#f1f3f4] flex items-center justify-between">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1a73e8] font-medium text-sm hover:text-[#174ea6] flex items-center gap-1.5 px-2 py-1 -ml-2 rounded hover:bg-blue-50 transition-colors"
                      >
                        <Globe className="w-4 h-4" /> Live Demo
                      </a>
                    ) : (
                       <span className="w-1"></span>
                    )}
                    <Link 
                      to={`/project/${project.id}`}
                      className="text-[#5f6368] font-medium text-sm hover:text-[#1a73e8] flex items-center group/link px-2 py-1 -mr-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      View Details <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center text-[#1a73e8] font-medium hover:text-[#174ea6]">
              See more on GitHub <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Journey/Education Section */}
      <section id="journey" className="py-20 bg-white border-t border-[#dadce0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-3xl font-medium google-font text-[#202124] mb-8">Education</h2>
                 <div className="space-y-8">
                    {EDUCATION.map((edu, index) => (
                      <div key={index} className="flex gap-5 relative">
                        <div className="flex-shrink-0 mt-1 z-10">
                          <div className="w-4 h-4 rounded-full bg-[#1a73e8] ring-4 ring-blue-50"></div>
                        </div>
                        {index !== EDUCATION.length - 1 && (
                          <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-[#dadce0] -ml-px -mb-8"></div>
                        )}
                        <div>
                          <span className="text-sm font-bold text-[#1a73e8] mb-1 block uppercase tracking-wide">{edu.year}</span>
                          <h3 className="text-xl font-medium text-[#202124] mb-1">{edu.institution}</h3>
                          <p className="text-[#5f6368] text-lg">{edu.degree}</p>
                          {edu.score && <p className="text-sm text-[#5f6368] mt-2 bg-white inline-block px-2 py-1 rounded border border-[#dadce0]">{edu.score}</p>}
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div>
                <h2 className="text-3xl font-medium google-font text-[#202124] mb-8">Certifications</h2>
                <div className="space-y-4">
                  {CERTIFICATIONS.map((cert, index) => (
                    <a 
                      key={index} 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-start p-5 bg-white rounded-xl border border-[#dadce0] hover:border-[#1a73e8] hover:shadow-md transition-all group hover:-translate-y-0.5 duration-200"
                    >
                      <div className="w-12 h-12 flex-shrink-0 mr-5 bg-[#f8f9fa] rounded-lg p-2 flex items-center justify-center border border-[#f1f3f4]">
                        <img src={cert.icon} alt={cert.issuer} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <h4 className="text-lg font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors mb-1">{cert.title}</h4>
                        <p className="text-sm text-[#5f6368]">{cert.issuer}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-[#dadce0] group-hover:text-[#1a73e8] mt-1" />
                    </a>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-[#f8f9fa] border-t border-[#dadce0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-4 rounded-full bg-blue-50 mb-6">
             <Code2 className="w-10 h-10 text-[#1a73e8]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium google-font text-[#202124] mb-6">Let's build something together</h2>
          <p className="text-[#5f6368] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-4 bg-[#1a73e8] text-white font-medium rounded-lg hover:bg-[#174ea6] transition-colors shadow-sm text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;