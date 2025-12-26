
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectSlider: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = project.galleryImages || [project.imageUrl];
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (newIndex: number) => {
    if (newIndex === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.children[activeIndex] as HTMLElement;
      if (activeThumb) {
        thumbnailRef.current.scrollTo({
          left: activeThumb.offsetLeft - thumbnailRef.current.offsetWidth / 2 + activeThumb.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full py-16 md:py-24 mb-20 md:mb-32 group/project border-b border-rose-50 last:border-0">
      {/* Giant Background Number - Hidden on mobile for clarity */}
      <div className="absolute top-0 left-10 pointer-events-none select-none z-0 hidden lg:block">
        <span className="text-[20vw] font-display font-black text-rose-50 opacity-40 italic leading-none">
          0{index + 1}
        </span>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Layout Switch: Column on Mobile, Grid on Desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16">
          
          {/* Header Info - Mobile optimized order */}
          <div className="lg:col-span-4 space-y-6 md:space-y-10 lg:pt-20">
            <div className="space-y-3 md:space-y-4">
               <div className="flex items-center space-x-3">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-rose-400">0{index + 1} / Case Study</span>
                  <div className="h-px w-8 md:w-12 bg-rose-200"></div>
               </div>
               <h3 className="text-4xl md:text-8xl font-display font-bold text-gray-900 leading-[1.1] md:leading-[0.85] tracking-tight md:tracking-tighter">
                 {project.title.split(' ')[0]} <br className="hidden md:block" />
                 <span className="italic font-light text-rose-300">{project.title.split(' ').slice(1).join(' ')}</span>
               </h3>
               <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest italic">{project.category}</p>
            </div>

            {/* Description - Compact on mobile */}
            <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed max-w-md">
              {project.description}
            </p>
          </div>

          {/* Cinematic Slider - The Hero on all screens */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            
            {/* Main Stage */}
            <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-[40px] md:rounded-[80px] overflow-hidden bg-gray-50 shadow-2xl shadow-rose-200/20">
              
              <div className={`w-full h-full transition-all duration-700 ease-out ${isTransitioning ? 'scale-105 blur-sm opacity-50' : 'scale-100 blur-0 opacity-100'}`}>
                <img 
                  src={images[activeIndex]} 
                  alt={`${project.title} slide`} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Progress Overlay - Refined for mobile */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center space-x-3 bg-black/40 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10">
                 <span className="text-[9px] font-black text-white tracking-widest">0{activeIndex + 1}</span>
                 <div className="w-8 md:w-12 h-[1px] bg-white/20">
                    <div 
                      className="h-full bg-rose-400 transition-all duration-500" 
                      style={{ width: `${((activeIndex + 1) / images.length) * 100}%` }}
                    ></div>
                 </div>
                 <span className="text-[9px] font-black text-white/40 tracking-widest">0{images.length}</span>
              </div>

              {/* Minimal Navigation Hooks */}
              <div className="absolute inset-x-0 bottom-6 flex justify-center space-x-4 md:hidden">
                 <button onClick={() => handleImageChange((activeIndex - 1 + images.length) % images.length)} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                 <button onClick={() => handleImageChange((activeIndex + 1) % images.length)} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
              </div>
            </div>

            {/* Thumbnail Strip - Better touch targets for mobile */}
            <div className="relative px-2">
               <div 
                 ref={thumbnailRef}
                 className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory"
               >
                 {images.map((img, i) => (
                   <button
                    key={i}
                    onClick={() => handleImageChange(i)}
                    className={`flex-shrink-0 snap-center relative transition-all duration-500 ${
                      activeIndex === i ? 'w-24 md:w-40 aspect-video opacity-100 scale-105' : 'w-16 md:w-24 aspect-square opacity-40'
                    }`}
                   >
                     <div className={`w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                       activeIndex === i ? 'border-rose-400' : 'border-rose-50'
                     }`}>
                       <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
                     </div>
                   </button>
                 ))}
               </div>
            </div>

            {/* Sub-info: Tools & Outcome (Stacked on Mobile) */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-rose-50/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="p-6 md:p-8 rounded-[30px] md:rounded-[40px] bg-rose-50/30 border border-rose-100/50 italic text-sm md:text-base text-rose-900 font-medium leading-relaxed max-w-sm">
                  "{project.outcome}"
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
    <section id="project" className="relative bg-white pt-24 md:pt-64 pb-20 md:pb-32 overflow-hidden">
      {/* Ambient background decor */}
      <div className="absolute top-0 left-0 w-full h-[1500px] bg-[radial-gradient(circle_at_20%_10%,rgba(255,192,203,0.1),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Section Header - Mobile optimized */}
        <div className="max-w-[1920px] mx-auto px-6 md:px-24 mb-16 md:mb-40">
          <div className="inline-block relative">
            <h2 className="text-[14vw] md:text-[10vw] font-display font-black tracking-tighter text-gray-900 leading-[0.8] mb-4">
              Featured <br />
              <span className="holographic-text italic font-black">Archive.</span>
            </h2>
            <div className="w-12 md:w-24 h-1.5 md:h-2 bg-rose-400 mt-6"></div>
          </div>
          <p className="text-lg md:text-2xl text-gray-400 font-light mt-8 max-w-2xl italic leading-relaxed">
            A curated selection of visual identities and narratives built with strategic purpose.
          </p>
        </div>

        {/* Project Feed */}
        <div className="space-y-12 md:space-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectSlider key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Dynamic CTA Footer */}
        <div className="mt-32 md:mt-64 px-6 md:px-24">
           <div className="relative py-20 md:py-40 bg-gray-900 rounded-[50px] md:rounded-[100px] overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              <div className="relative z-10 space-y-8 md:space-y-12">
                 <h4 className="text-4xl md:text-[80px] font-display font-bold text-white leading-tight tracking-tighter px-4">
                   Let's Create <br />
                   <span className="italic text-rose-400">Something Iconic.</span>
                 </h4>
                 <div className="flex flex-col items-center space-y-6">
                    <a href="#contact" className="px-10 py-5 bg-rose-500 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-rose-600 transition-all shadow-xl shadow-rose-500/20">Start a Project</a>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Currently accepting Q3 commissions</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Projects;
