
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#FFFBFC] overflow-hidden pt-24 md:pt-32 pb-20">
      {/* Background Decor - Optimized for scale */}
      <div className="absolute top-[-10%] right-[-10%] w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] bg-rose-200/20 rounded-full blur-[80px] md:blur-[160px] animate-pulse pointer-events-none opacity-60"></div>
      <div className="absolute bottom-[0%] left-[-10%] w-[100vw] h-[100vw] md:w-[700px] md:h-[700px] bg-indigo-100/20 rounded-full blur-[80px] md:blur-[140px] pointer-events-none opacity-60"></div>
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center z-10">
        
        {/* Mobile-First Image: Shown at top on mobile */}
        <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
           <div className="relative w-[260px] h-[360px] sm:w-[380px] sm:h-[540px]">
              {/* Image Frame with premium border */}
              <div className="relative w-full h-full rounded-[100px] sm:rounded-[180px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(232,122,144,0.3)] z-20 border-[6px] md:border-[10px] border-white bg-gray-50">
                 <img 
                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
                   className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
                   alt="My Huong" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
              </div>

              {/* Floating Professional Badge (Desktop Only for cleanliness) */}
              <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-white/95 backdrop-blur-xl rounded-[40px] shadow-2xl z-30 flex flex-col items-center justify-center p-4 border border-rose-50 hidden md:flex">
                 <div className="w-12 h-12 rounded-full border border-rose-100 flex items-center justify-center mb-2">
                    <span className="text-rose-400 font-bold text-[10px]">PH.</span>
                 </div>
                 <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 text-center">Creative<br/>Strategy</p>
              </div>
           </div>
        </div>

        {/* Content Block: Optimized Typography for Mobile */}
        <div className="lg:col-span-7 space-y-8 md:space-y-12 order-2 lg:order-1 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6">
             <div className="h-[1px] w-16 md:w-24 bg-rose-400"></div>
             <p className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-black text-rose-500">
               Art Director • Est. 2025
             </p>
          </div>

          <h1 className="text-[13vw] lg:text-[7.5vw] font-display font-bold leading-[0.85] tracking-tighter text-gray-900">
            Pham Thi <br />
            <span className="holographic-text font-black italic font-light lg:ml-[2vw]">My Huong.</span>
          </h1>

          <div className="max-w-xl mx-auto lg:mx-0 space-y-8 md:space-y-10">
            <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
              Synthesizing <span className="text-rose-500 font-medium italic">high-end aesthetics</span> with strategic precision to define digital legacies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-5 pt-4">
              <a href="#" className="group relative px-10 py-5 rounded-2xl bg-rose-500 text-center shadow-xl shadow-rose-200/50 hover:bg-rose-600 transition-all transform active:scale-95">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Acquire CV</span>
              </a>
              <a href="#project" onClick={(e) => handleScrollTo(e, 'project')} className="group px-10 py-5 rounded-2xl border border-rose-100 bg-white text-center hover:border-rose-300 transition-all transform active:scale-95 flex items-center justify-center space-x-4">
                <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.4em]">Portfolio</span>
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300 animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
