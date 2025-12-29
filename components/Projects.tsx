
import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const images = project.galleryImages || [project.imageUrl];
  const isEven = index % 2 === 0;
  
  const thumbRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const moveDistance = useRef(0);

  // Hàm chuyển ảnh cực nhanh
  const handleJump = (newIdx: number) => {
    if (newIdx === activeIndex) return;
    setIsChanging(true);
    setActiveIndex(newIdx);
    // Thời gian hiệu ứng cực ngắn để tạo cảm giác nhạy
    const timer = setTimeout(() => setIsChanging(false), 200);
    return () => clearTimeout(timer);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextIdx = (activeIndex + 1) % images.length;
    handleJump(nextIdx);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const prevIdx = (activeIndex - 1 + images.length) % images.length;
    handleJump(prevIdx);
  };

  // Tự động cuộn thumbnail vào giữa khi activeIndex thay đổi
  useEffect(() => {
    if (thumbRef.current) {
      const container = thumbRef.current;
      const activeThumb = container.children[activeIndex] as HTMLElement;
      
      if (activeThumb) {
        const targetScroll = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2);
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!thumbRef.current) return;
    isDragging.current = true;
    moveDistance.current = 0;
    thumbRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - thumbRef.current.offsetLeft;
    scrollLeft.current = thumbRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !thumbRef.current) return;
    const x = e.pageX - thumbRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    moveDistance.current = Math.abs(x - startX.current);
    
    if (moveDistance.current > 5) {
      e.preventDefault();
      thumbRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (thumbRef.current) {
      thumbRef.current.classList.remove('cursor-grabbing');
    }
  };

  const titleWords = project.title.split(' ');
  const lastWord = titleWords.pop();
  const mainTitle = titleWords.join(' ');

  return (
    <div className="relative w-full py-24 md:py-56 group/card overflow-hidden border-b border-rose-50/30 last:border-0">
      <div className={`absolute top-1/2 ${isEven ? 'right-[-10%]' : 'left-[-10%]'} -translate-y-1/2 w-[70%] h-[60%] bg-gradient-to-br from-rose-100/10 to-transparent blur-[120px] rounded-full -z-10 animate-pulse`}></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* VISUAL SHOWCASE BLOCK */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} order-1`}>
            <div className="space-y-6 md:space-y-10">
              
              {/* Main Viewport - Bỏ các nút mũi tên đè lên, chỉ giữ lại logic click vào ảnh để next */}
              <div 
                className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[32px] md:rounded-[64px] shadow-[0_40px_100px_-20px_rgba(232,122,144,0.2)] bg-gray-100 border border-white/40 backdrop-blur-md group/main cursor-pointer"
                onClick={() => nextImage()}
              >
                <img 
                  key={activeIndex}
                  src={images[activeIndex]} 
                  className={`w-full h-full object-cover select-none pointer-events-none transition-all duration-200 ${isChanging ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`} 
                  alt={project.title} 
                />

                {/* Chỉ giữ lại badge số thứ tự */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full border border-white/10 z-30">
                  <span className="text-[10px] font-black text-white tracking-widest uppercase">{activeIndex + 1} — {images.length}</span>
                </div>
              </div>

              {/* THUMBNAIL ROW - Điều hướng chính nằm ở đây */}
              <div className="relative space-y-4">
                <div className="flex items-center justify-between px-2">
                   <p className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">Tap image or use arrows below</p>
                   <div className="flex space-x-3">
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="p-2.5 rounded-full border border-rose-100 text-rose-300 hover:bg-rose-500 hover:text-white transition-all active:scale-90"
                        title="Previous Image"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="p-2.5 rounded-full border border-rose-100 text-rose-300 hover:bg-rose-500 hover:text-white transition-all active:scale-90"
                        title="Next Image"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                   </div>
                </div>

                <div 
                  ref={thumbRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  className="flex overflow-x-auto gap-3 md:gap-4 pb-4 px-1 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {images.map((img, i) => (
                    <button 
                      key={`${project.id}-t-${i}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (moveDistance.current < 10) handleJump(i);
                      }}
                      className={`relative flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-[20px] md:rounded-[32px] overflow-hidden border-2 snap-center transition-all duration-300 transform ${
                        activeIndex === i ? 'border-rose-500 scale-105 shadow-xl opacity-100 z-10' : 'border-transparent opacity-30 hover:opacity-100'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover pointer-events-none" alt={`Gallery ${i}`} />
                      {activeIndex === i && (
                        <div className="absolute inset-0 bg-rose-500/10 ring-2 ring-inset ring-rose-500/40 rounded-[20px] md:rounded-[32px]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EDITORIAL DATA */}
          <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} order-2 space-y-10 md:space-y-12`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <span className="text-[10px] md:text-[12px] font-black text-rose-400 uppercase tracking-[1em]">Collection</span>
                <div className="h-px w-16 bg-rose-200"></div>
              </div>
              
              <h3 className="text-4xl md:text-7xl lg:text-[5.5vw] font-display font-medium text-gray-900 leading-[0.85] tracking-tighter">
                {mainTitle} <br />
                <span className="italic font-light text-rose-300 md:ml-12 relative inline-block">
                  {lastWord}.
                  <div className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[1px] bg-rose-100"></div>
                </span>
              </h3>
            </div>

            <div className="space-y-10">
              <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed italic border-l-4 border-rose-100 pl-8">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-10 pt-10 border-t border-rose-50">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Industry</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">Premium Branding</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Category</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter truncate">{project.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Role</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">{project.role}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Period</p>
                  <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter">2024 - 2025</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tools.map(tool => (
                  <span key={tool} className="text-[8px] font-black uppercase tracking-[0.4em] px-5 py-3 bg-white text-rose-400 rounded-xl border border-rose-100 shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute top-1/2 -translate-y-1/2 text-[45vw] font-display font-black text-rose-50/5 pointer-events-none select-none z-0 ${isEven ? '-right-32' : '-left-32'}`}>
        0{index + 1}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="project" className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03] mix-blend-overlay z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

      <div className="pt-32 pb-16 md:pt-64 md:pb-32 container mx-auto px-6 md:px-12 lg:px-20 border-b border-rose-50 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9 space-y-12">
            <div className="flex items-center space-x-12">
              <div className="w-12 md:w-32 h-[1px] bg-rose-400"></div>
              <p className="text-[12px] md:text-[14px] font-black uppercase tracking-[1.2em] text-rose-400">Selected Works</p>
            </div>
            <h2 className="text-5xl md:text-[13vw] font-display font-bold leading-[0.75] tracking-[-0.05em] text-gray-900">
              Visual <br />
              <span className="italic font-light holographic-text md:ml-[15vw]">Portfolio.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      <div className="py-48 md:py-64 bg-white relative">
         <div className="container mx-auto px-6 flex flex-col items-center">
            <div className="w-px h-32 md:h-48 bg-gradient-to-b from-gray-200 via-rose-300 to-transparent mb-16"></div>
            <div className="text-center space-y-12">
              <p className="text-[12px] font-black uppercase tracking-[1.8em] text-gray-300">The Next Chapter</p>
              <h4 className="text-5xl md:text-8xl font-display font-medium text-gray-900 tracking-tighter">
                Refine your <span className="italic text-rose-300">Story.</span>
              </h4>
              <div className="pt-10">
                <a href="#contact" className="group flex flex-col items-center space-y-8">
                  <div className="w-20 h-20 rounded-full border border-rose-200 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-700 transform group-hover:scale-110 shadow-xl shadow-rose-100/10">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-rose-300 group-hover:text-white transition-colors">
                      <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-gray-400 group-hover:text-rose-500 transition-colors">Start Inquiring</span>
                </a>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Projects;
