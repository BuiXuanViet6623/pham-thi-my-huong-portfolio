
import React, { useState, useEffect, useRef } from 'react';

export const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix?: string }> = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Philosophies */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            <div>
              <p className="text-rose-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6">Introduction</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6 md:mb-8">
                A blend of <br />
                <span className="italic">strategy</span> & <span className="text-rose-300">aesthetics.</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-rose-200"></div>
            </div>
            
            <div className="space-y-8 md:space-y-12">
               <div className="flex items-start space-x-4 md:space-x-6">
                 <span className="font-display text-3xl md:text-4xl text-rose-200">01</span>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-xs md:sm">Design Philosophy</h4>
                   <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">Design is the silent ambassador of a brand. I focus on creating visual languages that communicate values without uttering a single word.</p>
                 </div>
               </div>
               <div className="flex items-start space-x-4 md:space-x-6">
                 <span className="font-display text-3xl md:text-4xl text-rose-200">02</span>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-xs md:sm">Design Process</h4>
                   <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">From research and sketching to digital refinement, my process is meticulous, ensuring every pixel serves a purpose for the final objective.</p>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Right Column: Imagery & Bio */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12 mt-12 lg:mt-0">
            {/* Optimized Image Frame for Mobile */}
            <div className="relative aspect-[4/3] md:aspect-video rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200" 
                 alt="Workspace" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-rose-900/5"></div>
               {/* Decorative tag for mobile interest */}
               <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg lg:hidden">
                  <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">Creative Hub</span>
               </div>
            </div>
            
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-display first-letter:text-rose-400 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  I am Pham Thi My Huong, a graduate of FPT Polytechnic HCM College. My journey in design began with a simple fascination for how colors and shapes can influence human emotion and decision-making. 
                </p>
                <p>
                  Over the years, I have honed my skills in Brand Identity and Visual Communication. I believe that a good designer must be a lifelong student, constantly adapting to new technologies while staying true to timeless aesthetic principles.
                </p>
                <p>
                  Whether it's a minimal logo for a startup or a complex editorial layout for a corporation, I bring the same level of passion and precision to every project. My goal is to exceed client expectations by delivering designs that are not only beautiful but strategically sound.
                </p>
              </div>

              {/* Responsive Quote Box */}
              <div className="relative p-6 md:p-10 rounded-[30px] md:rounded-[40px] bg-rose-50/50 border border-rose-100 overflow-hidden">
                <div className="absolute -top-4 -left-4 text-8xl font-display text-rose-100/50 pointer-events-none">“</div>
                <p className="relative z-10 italic text-rose-700 text-lg md:text-xl font-display leading-relaxed">
                  "Creativity is intelligence having fun, but design is intelligence making sense."
                </p>
                <div className="mt-4 flex items-center space-x-3">
                   <div className="w-8 h-px bg-rose-200"></div>
                   <span className="text-[10px] uppercase font-bold tracking-widest text-rose-300">Brand Manifesto</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
