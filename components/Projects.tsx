
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
    setTimeout(() => setIsChanging(false), 600);
  };

  const titleWords = project.title.split(' ');
  const lastWord = titleWords.pop();
  const mainTitle = titleWords.join(' ');

  return (
    <div className={`relative w-full py-24 md:py-40 border-b border-rose-50 last:border-0 group/card ${isEven ? 'bg-white' : 'bg-[#FFFBFB]'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE SHOWCASE - Alternating Order */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative group/img-container">
              {/* Main Image Viewport */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] md:rounded-[60px] shadow-[0_40px_80px_-20px_rgba(232,122,144,0.15)] bg-gray-50 border border-rose-50">
                <div 
                  key={activeIndex}
                  className={`w-full h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isChanging ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
                >
                  <img src={images[activeIndex]} className="w-full h-full object-cover" alt={project.title} />
                </div>
                
                {/* Floating Navigation Controls */}
                <div className="absolute inset-x-6 bottom-6 flex justify-between items-center">
                  <div className="flex space-x-2 bg-white/20 backdrop-blur-xl p-2 rounded-full border border-white/30">
                    {images.slice(0, 3).map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => handleImageChange(i)}
                        className={`w-8 h-1 rounded-full transition-all duration-500 ${activeIndex === i ? 'bg-rose-400 w-12' : 'bg-white/40 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                  <div className="hidden md:block">
                    <span className="text-[8px] font-black text-white uppercase tracking-[0.4em] px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
                      Visual Fragment 0{activeIndex + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className={`absolute -inset-4 bg-rose-200/10 blur-[60px] rounded-full -z-10 transition-opacity duration-1000 group-hover/img-container:opacity-100 opacity-0`}></div>
            </div>
          </div>

          {/* PROJECT TEXT - Alternating Order */}
          <div className={`lg:col-span-5 space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-black text-rose-300 uppercase tracking-[0.6em]">Brand Identity Case</span>
                <div className="h-px w-8 bg-rose-200"></div>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-[4.5vw] font-display font-medium text-gray-900 leading-[0.9] tracking-tighter">
                {mainTitle} <br />
                <span className="italic font-light text-rose-300 relative inline-block">
                  {lastWord}.
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-rose-100 origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700"></div>
                </span>
              </h3>
            </div>

            <p className="text-lg text-gray-500 font-light leading-relaxed italic border-l-2 border-rose-50 pl-6 py-1">
              {project.description}
            </p>

            {/* Technical Specs Grid */}
            <div className="pt-8 grid grid-cols-2 gap-10 border-t border-rose-100/50">
              <div className="space-y-1">
                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Discipline</p>
                <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">{project.category}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Project Role</p>
                <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">{project.role}</p>
              </div>
            </div>

            {/* Tool Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tools.map(tool => (
                <span key={tool} className="text-[7px] font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-rose-50/50 text-rose-400 rounded-lg border border-rose-100/50">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Numbering */}
      <div className={`absolute top-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-rose-50/10 pointer-events-none select-none z-0 ${isEven ? 'right-0' : 'left-0'}`}>
        0{index + 1}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="project" className="bg-white overflow-hidden">
      {/* Editorial Header */}
      <div className="pt-40 pb-20 container mx-auto px-6 md:px-12 lg:px-20 border-b border-rose-50">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-[2px] bg-rose-400"></div>
              <p className="text-[10px] font-black uppercase tracking-[1em] text-rose-400">Project Archives</p>
            </div>
            <h2 className="text-6xl md:text-[9vw] font-display font-bold leading-[0.85] tracking-tighter text-gray-900">
              Selected <br />
              <span className="italic font-light holographic-text ml-[8vw]">Creations.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 hidden lg:block pb-4">
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-[240px] uppercase tracking-widest">
              A curated collection of visual strategies and brand identities defined by precision and poetic narrative.
            </p>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div>
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="py-40 flex flex-col items-center justify-center space-y-10 bg-white">
        <div className="w-px h-24 bg-gradient-to-b from-gray-100 to-rose-300"></div>
        <a href="#contact" className="group flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-[1.5em] text-gray-400 group-hover:text-rose-500 transition-colors mb-4">Inquire Full Portfolio</span>
          <div className="w-10 h-10 rounded-full border border-rose-100 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-300 group-hover:text-white group-hover:translate-y-1 transition-all">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
