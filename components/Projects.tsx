
import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ExhibitionRibbon: React.FC<{ images: string[] }> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationId: number;
    const scroll = () => {
      if (scrollRef.current && !isHovered) {
        scrollRef.current.scrollLeft += 0.5; // Auto slow scroll
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Duplicate images for infinite effect
  const displayImages = [...images, ...images];

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex space-x-10 overflow-x-hidden whitespace-nowrap cursor-grab active:cursor-grabbing py-10"
      >
        {displayImages.map((img, i) => (
          <div 
            key={i} 
            className="inline-block w-[300px] md:w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-2 relative group"
          >
            <img src={img} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt="Exhibition Item" />
            <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
               <span className="bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-rose-500">Asset Detail</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectExhibition: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeView, setActiveView] = useState<'mosaic' | 'cinema'>('mosaic');

  return (
    <div className="relative py-40 border-b border-rose-50 last:border-0">
      {/* Editorial Header */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-24 mb-24 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8 space-y-8">
           <div className="flex items-center space-x-4">
             <span className="text-[12px] font-black uppercase tracking-[0.8em] text-rose-400">Genesis Series 0{index + 1}</span>
             <div className="h-px flex-grow bg-rose-100"></div>
           </div>
           <h2 className="text-[10vw] md:text-[8vw] font-display font-bold text-gray-900 leading-[0.85] tracking-tighter">
             {project.title.split(' ')[0]} <br />
             <span className="italic font-light text-rose-300 holographic-text pb-4">{project.title.split(' ').slice(1).join(' ')}</span>
           </h2>
        </div>
        <div className="lg:col-span-4 pb-4">
           <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
             {project.description}
           </p>
           <div className="flex space-x-4">
              <button 
                onClick={() => setActiveView('mosaic')}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeView === 'mosaic' ? 'bg-gray-900 text-white' : 'bg-rose-50 text-rose-400'}`}
              >
                Mosaic Spread
              </button>
              <button 
                onClick={() => setActiveView('cinema')}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeView === 'cinema' ? 'bg-gray-900 text-white' : 'bg-rose-50 text-rose-400'}`}
              >
                Cinema Ribbon
              </button>
           </div>
        </div>
      </div>

      {/* Main Exhibition Area */}
      {activeView === 'mosaic' ? (
        <div className="max-w-[1920px] mx-auto px-6 md:px-24">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Feature Large */}
              <div className="md:col-span-7 h-[600px] md:h-[900px] rounded-[60px] md:rounded-[100px] overflow-hidden relative group shadow-2xl">
                 <img src={project.imageUrl} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Main" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                 <div className="absolute bottom-12 left-12 space-y-4">
                    <p className="text-white text-[10px] font-black uppercase tracking-[0.5em]">Masterpiece Concept</p>
                    <h4 className="text-white text-4xl font-display italic">Visual Core Identity</h4>
                 </div>
              </div>

              {/* Grid of Details */}
              <div className="md:col-span-5 grid grid-cols-2 gap-10">
                 {project.galleryImages?.slice(1, 5).map((img, i) => (
                   <div key={i} className={`rounded-[40px] md:rounded-[60px] overflow-hidden shadow-xl transition-all duration-700 hover:scale-[1.03] ${i === 1 || i === 2 ? 'aspect-[3/4] mt-10' : 'aspect-square'}`}>
                      <img src={img} className="w-full h-full object-cover" alt="Detail" />
                   </div>
                 ))}
              </div>
           </div>
           
           {/* Secondary Full-Width Asset */}
           {project.galleryImages && project.galleryImages.length > 5 && (
             <div className="mt-20 w-full h-[400px] md:h-[700px] rounded-[60px] md:rounded-[100px] overflow-hidden shadow-2xl relative group">
                <img src={project.galleryImages[5]} className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110" alt="Wide" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700">
                   <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-10 rounded-full">
                      <p className="text-white text-xs font-black uppercase tracking-[0.8em]">Deep Context View</p>
                   </div>
                </div>
             </div>
           )}
        </div>
      ) : (
        <div className="w-full animate-[revealUp_1s_cubic-bezier(0.19,1,0.22,1)]">
           <ExhibitionRibbon images={project.galleryImages || [project.imageUrl]} />
           <div className="max-w-4xl mx-auto px-6 text-center mt-10">
              <p className="text-gray-400 italic text-lg leading-relaxed">
                "We believe that the best way to showcase a brand is through a diverse ecosystem of touchpoints. Every asset tells a micro-story."
              </p>
           </div>
        </div>
      )}

      {/* Case Metrics Card */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-24 mt-20">
         <div className="p-12 md:p-16 rounded-[60px] bg-rose-50/50 border border-rose-100/50 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               {project.tools.map(tool => (
                 <span key={tool} className="px-6 py-2 rounded-full bg-white text-[10px] font-black text-rose-400 uppercase tracking-widest border border-rose-100">
                   {tool}
                 </span>
               ))}
            </div>
            <div className="text-center md:text-right">
               <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Project Outcome</p>
               <p className="text-xl text-rose-900 font-medium italic leading-relaxed max-w-md">
                 {project.outcome}
               </p>
            </div>
            <button className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center hover:bg-rose-500 hover:scale-110 transition-all shadow-xl active:scale-95 group">
               <svg className="text-white transform group-hover:rotate-45 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </button>
         </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="project" className="relative bg-white pt-64 pb-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[1500px] bg-[radial-gradient(circle_at_0%_0%,rgba(255,192,203,0.15),transparent_60%)] pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-[1200px] h-[1200px] bg-indigo-50/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Cinematic Section Intro */}
        <div className="max-w-[1920px] mx-auto px-6 md:px-24 mb-64 flex flex-col items-center">
          <div className="relative mb-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-rose-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
             <p className="text-rose-400 font-black uppercase tracking-[1.5em] text-[10px] md:text-[12px] mb-12 text-center">Visual Catalog • 2025 Edition</p>
             <h2 className="text-[14vw] md:text-[12vw] font-display font-black tracking-tighter text-gray-900 leading-[0.7] text-center select-none">
               The <br />
               <span className="italic holographic-text font-black">Collection.</span>
             </h2>
          </div>
          <div className="w-px h-64 bg-gradient-to-b from-rose-300 to-transparent"></div>
        </div>

        {/* Dynamic Project Feed */}
        <div className="space-y-[15vh]">
          {PROJECTS.map((project, idx) => (
            <ProjectExhibition key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Global CTA Hook */}
        <div className="mt-80 max-w-[1920px] mx-auto px-6 md:px-24">
           <div className="relative py-40 bg-gray-900 rounded-[100px] overflow-hidden text-center group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-500/30 via-transparent to-indigo-500/20"></div>
              
              <div className="relative z-10 space-y-12">
                 <h4 className="text-6xl md:text-9xl font-display font-bold text-white leading-none tracking-tighter">
                   Your Brand <br />
                   <span className="italic text-rose-400 group-hover:holographic-text transition-all duration-700">Awaits Perfection.</span>
                 </h4>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <p className="text-xl text-gray-400 font-light tracking-[0.4em] uppercase">Now Booking for 2025</p>
                    <div className="h-px w-20 bg-rose-500 hidden md:block"></div>
                    <a href="#contact" className="text-white font-bold border-b-2 border-rose-500 pb-2 hover:text-rose-400 transition-colors uppercase tracking-widest text-sm">Start the Project</a>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
