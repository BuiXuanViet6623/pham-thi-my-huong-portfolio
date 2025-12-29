
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const images = project.galleryImages || [project.imageUrl];

  const handleImageChange = (idx: number) => {
    if (idx === activeIndex || isChanging) return;
    setIsChanging(true);
    setActiveIndex(idx);
    setTimeout(() => setIsChanging(false), 600);
  };

  // Logic to split title for color effect - taking the last word as the accent
  const titleWords = project.title.split(' ');
  const lastWord = titleWords.pop();
  const mainTitle = titleWords.join(' ');

  return (
    <div className="relative w-full py-24 md:py-48 border-b border-rose-50/30 last:border-0 bg-white group/card overflow-hidden">
      {/* Background Project Number (Watermark) - Subtle and deep */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-display font-black text-rose-50/10 select-none pointer-events-none -z-0 italic transition-transform duration-[2s] group-hover/card:scale-110 group-hover/card:rotate-3 opacity-50">
        0{index + 1}
      </div>

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Editorial Typography */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.8em]">Archive_2025</span>
                <div className="h-[1px] w-12 bg-rose-200"></div>
              </div>
              
              <h3 className="text-5xl md:text-7xl lg:text-[6.5vw] font-display font-medium text-gray-900 leading-[0.9] tracking-tighter">
                {mainTitle} <br />
                <span className="holographic-text italic font-black pb-2 block mt-3 drop-shadow-sm">{lastWord}.</span>
              </h3>
            </div>

            <div className="max-w-md space-y-10">
              <div className="relative pl-6 border-l-[1px] border-rose-200">
                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed italic">
                  "{project.description}"
                </p>
              </div>

              {/* Minimal Stats Grid */}
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-rose-50">
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-rose-300">Strategy</p>
                  <p className="text-xs font-bold text-gray-700 tracking-tight uppercase">{project.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-rose-300">Leadership</p>
                  <p className="text-xs font-bold text-gray-700 tracking-tight uppercase">{project.role}</p>
                </div>
              </div>

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tools.map(tool => (
                  <span key={tool} className="text-[7px] font-bold uppercase tracking-[0.2em] px-3 py-1 bg-white text-gray-400 rounded-full border border-gray-100 group-hover/card:border-rose-200 transition-all">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Visual Showcase */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="relative group/stage">
              {/* Main Image Viewport - Sleek rounded corners */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] md:rounded-[60px] bg-gray-50 shadow-[0_40px_80px_-15px_rgba(232,122,144,0.15)] ring-1 ring-black/5">
                <div 
                  key={activeIndex}
                  className={`w-full h-full transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${
                    isChanging ? 'scale-110 blur-xl opacity-0' : 'scale-100 blur-0 opacity-100'
                  }`}
                >
                  <img 
                    src={images[activeIndex]} 
                    className="w-full h-full object-cover" 
                    alt={project.title} 
                  />
                </div>

                {/* Floating Navigation Controls */}
                <div className="absolute inset-x-6 bottom-6 flex justify-between items-center pointer-events-none">
                  <div className="flex gap-2 pointer-events-auto">
                    <button 
                      onClick={() => handleImageChange((activeIndex - 1 + images.length) % images.length)}
                      className="w-12 h-12 flex items-center justify-center text-white bg-black/20 backdrop-blur-xl border border-white/20 rounded-full hover:bg-rose-500 transition-all active:scale-90"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button 
                      onClick={() => handleImageChange((activeIndex + 1) % images.length)}
                      className="w-12 h-12 flex items-center justify-center text-white bg-black/20 backdrop-blur-xl border border-white/20 rounded-full hover:bg-rose-500 transition-all active:scale-90"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                  
                  <div className="px-5 py-2.5 bg-black/10 backdrop-blur-xl border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                    P_{activeIndex + 1} / 0{images.length}
                  </div>
                </div>
              </div>

              {/* THUMBNAIL GALLERY - Smaller & more elegant */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => handleImageChange(i)}
                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ring-offset-2 ${
                      activeIndex === i 
                      ? 'ring-2 ring-rose-400 scale-110 z-10 shadow-lg' 
                      : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="thumb" />
                    <div className={`absolute inset-0 bg-rose-500/10 transition-opacity ${activeIndex === i ? 'opacity-100' : 'opacity-0'}`}></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="project" className="relative bg-white pt-40 pb-20 overflow-hidden">
      {/* Editorial Title Section */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 mb-20 md:mb-32 relative z-10">
        <div className="flex flex-col space-y-6 md:space-y-10">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-[2.5px] bg-rose-400"></div>
            <p className="text-[12px] font-black uppercase tracking-[1em] text-rose-400">Visual Archives</p>
          </div>
          <h2 className="text-6xl md:text-[9vw] font-display font-medium tracking-tighter text-gray-900 leading-[0.85]">
            Curated <br />
            <span className="italic font-light holographic-text pl-8 md:pl-20">Works.</span>
          </h2>
        </div>
      </div>

      {/* Projects List */}
      <div className="relative z-10">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-24 md:mt-40 text-center pb-20">
         <a href="#" className="group inline-flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[1.2em] text-gray-300 group-hover:text-rose-500 transition-colors mb-4">Explore More Projects</span>
            <div className="w-16 h-px bg-gray-100 group-hover:w-40 group-hover:bg-rose-500 transition-all duration-700"></div>
         </a>
      </div>
    </section>
  );
};

export default Projects;
