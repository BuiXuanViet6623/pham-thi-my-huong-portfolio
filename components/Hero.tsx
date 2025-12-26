
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#FFFBFC] overflow-hidden pt-28 pb-20">
      {/* Immersive Artistic Background */}
      <div className="absolute top-[-15%] right-[-5%] w-[800px] h-[800px] bg-rose-200/20 rounded-full blur-[160px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[0%] left-[-10%] w-[700px] h-[700px] bg-indigo-100/30 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* Refined Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E87A90 1.5px, transparent 1.5px)', backgroundSize: '50px 50px' }}></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10">
        
        {/* Left Content: The Visual Powerhouse */}
        <div className="lg:col-span-7 space-y-12 lg:space-y-16 relative">
          <div className="flex items-center space-x-6 reveal-container">
             <div className="h-[2px] w-24 bg-gradient-to-r from-rose-400 to-transparent"></div>
             <p className="text-[12px] uppercase tracking-[0.8em] font-black text-rose-500 reveal-item">
               Visual Artist • Portfolio 2025
             </p>
          </div>

          <div className="relative group">
            {/* Background floating text for depth */}
            <span className="absolute -top-16 -left-8 text-[12vw] font-display font-black text-rose-50/80 select-none pointer-events-none -z-10 group-hover:translate-x-4 transition-transform duration-1000">CREATIVE</span>
            
            <div className="space-y-4">
              <div className="reveal-container overflow-visible">
                <h1 className="text-[10vw] lg:text-[7.5vw] font-display font-bold leading-[0.8] tracking-tighter text-gray-800 reveal-item">
                  <span className="relative inline-block hover:scale-105 transition-transform cursor-default">
                    Pham Thi
                  </span>
                </h1>
              </div>
              <div className="reveal-container overflow-visible">
                <h1 className="text-[10vw] lg:text-[7.5vw] font-display italic font-light leading-[0.9] tracking-tighter reveal-item" style={{ animationDelay: '0.2s' }}>
                  <span className="holographic-text font-black drop-shadow-sm pb-4">My Huong.</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="max-w-xl space-y-10 relative">
            <div className="space-y-4 reveal-container" style={{animationDelay: '0.4s'}}>
              <h2 className="text-3xl lg:text-4xl font-display text-rose-400 italic font-medium reveal-item">
                Graphic & Visual Designer
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed reveal-item">
                Crafting <span className="text-rose-500 font-semibold">sophisticated brand experiences</span> through poetic visual narratives and strategic design precision.
              </p>
            </div>
            
            {/* CTA Buttons in a single horizontal row */}
            <div className="flex flex-row items-center gap-4 md:gap-6 reveal-container" style={{animationDelay: '0.6s'}}>
               <div className="reveal-item">
                 <a href="#" className="group relative px-7 md:px-10 py-5 md:py-6 rounded-[22px] md:rounded-[28px] overflow-hidden inline-flex items-center space-x-3 md:space-x-4 bg-rose-500 transition-all hover:bg-rose-600 shadow-2xl shadow-rose-200/50 active:scale-95 whitespace-nowrap">
                    <span className="relative z-10 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">Download CV</span>
                    <svg className="relative z-10 text-white group-hover:translate-y-1 transition-transform duration-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                 </a>
               </div>
               
               <div className="reveal-item">
                 <a 
                   href="#contact" 
                   onClick={(e) => handleScrollTo(e, 'contact')}
                   className="group px-7 md:px-10 py-5 md:py-6 rounded-[22px] md:rounded-[28px] inline-flex items-center space-x-3 md:space-x-4 border-2 border-rose-100 hover:border-rose-400 transition-all bg-white shadow-xl shadow-rose-50/30 active:scale-95 whitespace-nowrap"
                 >
                    <span className="text-rose-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] group-hover:text-rose-500">Contact Me</span>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-rose-400 group-hover:scale-150 transition-all group-hover:bg-rose-500"></div>
                 </a>
               </div>
            </div>
          </div>
        </div>

        {/* Right Content: Premium Editorial Avatar */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-16 lg:pt-0">
           <div className="relative w-[340px] h-[510px] sm:w-[420px] sm:h-[630px]">
              
              {/* Abstract Glass Glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-rose-200/30 via-transparent to-indigo-100/30 rounded-full blur-[100px] opacity-60 animate-spin-slow"></div>

              {/* Sophisticated Image Mask */}
              <div className="relative w-full h-full rounded-[140px] sm:rounded-[200px] overflow-hidden shadow-[0_100px_160px_-40px_rgba(232,122,144,0.4)] z-20 group border-[12px] border-white/80 backdrop-blur-sm">
                 <img 
                   src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" 
                   className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110 ease-out grayscale group-hover:grayscale-0" 
                   alt="Pham Thi My Huong Portrait" 
                 />
                 
                 {/* Inner Glass Vignette */}
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent opacity-60"></div>

                 {/* Minimal Overlay Label */}
                 <div className="absolute inset-0 flex flex-col justify-end p-16 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px]">
                      <p className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-2">Designer Identity</p>
                      <p className="text-white text-2xl font-display italic">Master Series 2025</p>
                    </div>
                 </div>
              </div>

              {/* Floating Architectural Elements */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/90 backdrop-blur-2xl rounded-[50px] shadow-[0_40px_80px_rgba(0,0,0,0.05)] z-30 flex flex-col items-center justify-center p-8 border border-rose-50/50 animate-float">
                 <div className="relative mb-4">
                   <div className="w-14 h-14 rounded-full border-2 border-rose-400 border-dashed animate-spin-slow"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-rose-500 font-bold text-[9px] tracking-tighter">PH.</span>
                   </div>
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-rose-900/60 text-center leading-tight">Concept<br/>Specialist</p>
              </div>

              <div className="absolute -bottom-8 -left-16 w-64 h-28 bg-gray-900/95 backdrop-blur-2xl rounded-[40px] shadow-2xl z-30 flex items-center px-8 space-x-6 border border-white/5 animate-float" style={{ animationDelay: '1.5s' }}>
                 <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white text-[11px] font-bold uppercase tracking-widest">Premium Output</span>
                    <span className="text-rose-200/40 text-[9px] uppercase tracking-widest font-black">2025 Standard</span>
                 </div>
              </div>

              {/* Dynamic Aura Text */}
              <div className="absolute top-1/2 -left-32 transform -rotate-90 origin-center hidden xl:block opacity-20">
                 <span className="text-[14px] font-black uppercase tracking-[2em] text-rose-300">CURATED VISUALS</span>
              </div>
           </div>
        </div>
      </div>

      {/* Modern Bottom Decor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
         <div className="w-10 h-10 rounded-full border border-rose-200 flex items-center justify-center animate-bounce">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E87A90" strokeWidth="3"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path></svg>
         </div>
      </div>
    </section>
  );
};

export default Hero;
