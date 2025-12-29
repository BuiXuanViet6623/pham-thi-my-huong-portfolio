
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const images = project.galleryImages || [project.imageUrl];
  const isEven = index % 2 === 0;

  const handleImageChange = (idx: number) => {
    if (idx === activeIndex || isChanging) return;
    setIsChanging(true);
    setActiveIndex(idx);
    setTimeout(() => setIsChanging(false), 500);
  };

  const titleWords = project.title.split(' ');
  const lastWord = titleWords.pop();
  const mainTitle = titleWords.join(' ');

  return (
    <div className="relative w-full py-24 md:py-48 group/card overflow-hidden">
      {/* Dynamic Glow Background for each project card */}
      <div className={`absolute top-1/2 ${isEven ? 'right-[-10%]' : 'left-[-10%]'} -translate-y-1/2 w-[50%] h-[70%] bg-rose-100/20 blur-[150px] rounded-full -z-10 animate-pulse`}></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* VISUAL SHOWCASE BLOCK - Alternates position */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="space-y-8">
              {/* Main Large Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] md:rounded-[60px] shadow-[0_50px_100px_-20px_rgba(232,122,144,0.25)] bg-gray-50 border border-white/50 backdrop-blur-sm group/mainimg">
                <div 
                  key={activeIndex}
                  className={`w-full h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isChanging ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
                >
                  <img src={images[activeIndex]} className="w-full h-full object-cover" alt={project.title} />
                </div>
                
                {/* Floating Image Label */}
                <div className="absolute top-8 left-8">
                  <span className="text-[8px] font-black text-white/80 uppercase tracking-[0.5em] px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
                    Case Phase 0{activeIndex + 1}
                  </span>
                </div>
              </div>

              {/* Thumbnails Strip */}
              <div className={`flex flex-wrap gap-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => handleImageChange(i)}
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                      activeIndex === i ? 'border-rose-400 shadow-lg shadow-rose-200/50' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${i}`} />
                    {activeIndex === i && (
                      <div className="absolute inset-0 bg-rose-500/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT DATA BLOCK - Alternates position */}
          <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} pt-4 lg:pt-12 space-y-12`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.8em]">Excellence Study</span>
                <div className="h-px w-12 bg-rose-200"></div>
              </div>
              
              <h3 className="text-5xl md:text-6xl lg:text-[5vw] font-display font-medium text-gray-900 leading-[0.85] tracking-tighter">
                {mainTitle} <br />
                <span className="italic font-light text-rose-300 relative inline-block">
                  {lastWord}.
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-rose-100"></div>
                </span>
              </h3>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-gray-500 font-light leading-relaxed italic border-l-4 border-rose-50 pl-8 py-2">
                {project.description}
              </p>

              {/* Project Specs Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-8 border-t border-rose-50">
                <div className="space-y-2">
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Client Type</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">Premium Lifestyle</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Discipline</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">{project.category}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Design Role</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">{project.role}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Timeline</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">2024 / Q4</p>
                </div>
              </div>

              {/* Technical Stack Tags */}
              <div className="flex flex-wrap gap-2.5 pt-6">
                {project.tools.map(tool => (
                  <span key={tool} className="text-[7px] font-black uppercase tracking-[0.3em] px-5 py-2.5 bg-rose-50/50 text-rose-400 rounded-xl border border-rose-100/50">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Gigantic Background Numbering */}
      <div className={`absolute top-1/2 -translate-y-1/2 text-[35vw] font-display font-black text-rose-50/10 pointer-events-none select-none z-0 ${isEven ? '-right-20' : '-left-20'}`}>
        0{index + 1}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="project" className="relative bg-white overflow-hidden">
      {/* ARTISTIC ATMOSPHERE BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-[5%] left-[-10%] w-[70%] h-[50%] bg-gradient-to-br from-rose-50/60 to-transparent blur-[140px] rounded-full rotate-12"></div>
         <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-indigo-50/40 to-transparent blur-[140px] rounded-full -rotate-12"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>
      </div>

      {/* Editorial Section Header */}
      <div className="pt-48 pb-24 container mx-auto px-6 md:px-12 lg:px-20 border-b border-rose-50 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9 space-y-10">
            <div className="flex items-center space-x-8">
              <div className="w-24 h-[2px] bg-rose-400"></div>
              <p className="text-[12px] font-black uppercase tracking-[1.2em] text-rose-400">Selected Creations</p>
            </div>
            <h2 className="text-7xl md:text-[11vw] font-display font-bold leading-[0.8] tracking-[ -0.05em] text-gray-900">
              Visual <br />
              <span className="italic font-light holographic-text ml-[12vw]">Manifesto.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 hidden lg:block pb-6">
            <p className="text-[10px] text-gray-400 font-bold leading-relaxed uppercase tracking-[0.4em] text-right">
              A curated archive of <br/> design excellence and <br/> strategic storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* Project Exhibition List */}
      <div className="relative z-10">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Refined Footer CTA for Portfolio */}
      <div className="py-52 bg-[#FFFBFB] relative border-t border-rose-50">
         <div className="container mx-auto px-6 flex flex-col items-center">
            <div className="w-px h-40 bg-gradient-to-b from-gray-200 via-rose-300 to-transparent mb-12"></div>
            <div className="text-center space-y-8">
              <p className="text-[10px] font-black uppercase tracking-[1.5em] text-gray-400">Collaborative Inquiries</p>
              <h4 className="text-4xl md:text-6xl font-display font-medium text-gray-900 tracking-tighter">
                Let's define your <span className="italic text-rose-300">next era.</span>
              </h4>
              <a href="#contact" className="inline-flex items-center space-x-4 group mt-8">
                 <span className="text-xs font-black uppercase tracking-[0.5em] text-gray-900 group-hover:text-rose-500 transition-colors">Start a conversation</span>
                 <div className="w-14 h-14 rounded-full border border-rose-200 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-700 transform group-hover:rotate-45">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-300 group-hover:text-white">
                      <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                 </div>
              </a>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Projects;
