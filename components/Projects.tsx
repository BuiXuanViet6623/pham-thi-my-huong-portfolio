
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectSlider: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = project.galleryImages || [project.imageUrl];
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

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
    <div className="relative w-full py-16 md:py-32 mb-20 md:mb-40 border-b border-rose-50 last:border-0 group/project">
      {/* Background Numbering */}
      <div className={`absolute top-0 pointer-events-none select-none z-0 hidden lg:block ${isEven ? 'left-10' : 'right-10'}`}>
        <span className="text-[20vw] font-display font-black text-rose-50 opacity-30 italic leading-none">
          0{index + 1}
        </span>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} gap-10 md:gap-24 items-center`}>
          
          {/* Information Side */}
          <div className="lg:w-1/3 space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
               <div className="flex items-center space-x-3">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-rose-400">0{index + 1} • Project Case Study</span>
                  <div className="h-px w-8 md:w-12 bg-rose-200"></div>
               </div>
               <h3 className="text-5xl md:text-8xl font-display font-bold text-gray-900 leading-[1] tracking-tighter">
                 {project.title.split(' ')[0]} <br className="hidden md:block" />
                 <span className="italic font-light text-rose-300">{project.title.split(' ').slice(1).join(' ')}</span>
               </h3>
               <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest italic">{project.category}</p>
            </div>

            <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed">
              {project.description}
            </p>

            <div className="p-8 rounded-[40px] bg-rose-50/30 border border-rose-100/50 italic text-sm md:text-base text-rose-900 font-medium leading-relaxed">
              "{project.outcome}"
            </div>
          </div>

          {/* Media Side */}
          <div className="lg:w-2/3 space-y-8 md:space-y-12">
            <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-[40px] md:rounded-[80px] overflow-hidden bg-gray-50 shadow-2xl shadow-rose-200/20">
              <div className={`w-full h-full transition-all duration-700 ease-out ${isTransitioning ? 'scale-105 blur-sm opacity-50' : 'scale-100 blur-0 opacity-100'}`}>
                <img src={images[activeIndex]} alt={`${project.title} visualization`} className="w-full h-full object-cover" />
              </div>
              
              {/* Counter Overlay */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center space-x-3 bg-black/40 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10">
                 <span className="text-[9px] font-black text-white tracking-widest">0{activeIndex + 1}</span>
                 <div className="w-8 md:w-12 h-[1px] bg-white/20">
                    <div className="h-full bg-rose-400 transition-all duration-500" style={{ width: `${((activeIndex + 1) / images.length) * 100}%` }}></div>
                 </div>
                 <span className="text-[9px] font-black text-white/40 tracking-widest">0{images.length}</span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleImageChange(i)}
                  className={`flex-shrink-0 snap-center relative transition-all duration-500 ${activeIndex === i ? 'w-24 md:w-40 aspect-video' : 'w-16 md:w-24 aspect-square opacity-40'}`}
                >
                  <div className={`w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-500 ${activeIndex === i ? 'border-rose-400' : 'border-rose-50'}`}>
                    <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-rose-50/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                  {tool}
                </span>
              ))}
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
      <div className="absolute top-0 left-0 w-full h-[1500px] bg-[radial-gradient(circle_at_20%_10%,rgba(255,192,203,0.1),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="max-w-[1920px] mx-auto px-6 md:px-24 mb-16 md:mb-40">
          <div className="inline-block relative">
            <h2 className="text-[14vw] md:text-[10vw] font-display font-black tracking-tighter text-gray-900 leading-[0.8] mb-4">
              Featured <br />
              <span className="holographic-text italic font-black">Projects.</span>
            </h2>
            <div className="w-12 md:w-24 h-1.5 md:h-2 bg-rose-400 mt-6"></div>
          </div>
          <p className="text-lg md:text-2xl text-gray-400 font-light mt-8 max-w-2xl italic leading-relaxed">
            A curated portfolio of high-impact visual identities and sophisticated brand narratives.
          </p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectSlider key={project.id} project={project} index={idx} />
          ))}
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
