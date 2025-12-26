
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FloatingControls from './components/FloatingControls';
import { AnimatedCounter } from './components/About';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Refined & Colorful Statistics Banner */}
        <section className="bg-white py-20 relative overflow-hidden">
          <div className="max-w-[1920px] mx-auto px-10 md:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
               
               {/* Stat Card 1 */}
               <div className="group p-8 rounded-[40px] bg-rose-50/30 border border-rose-100/50 hover:bg-rose-50 transition-all duration-500">
                 <p className="text-4xl md:text-5xl font-display font-bold text-rose-500 leading-none mb-4 group-hover:scale-110 transition-transform origin-left">
                   <AnimatedCounter target={12} suffix="+" />
                 </p>
                 <div className="flex items-center space-x-3">
                   <div className="w-4 h-[1px] bg-rose-300"></div>
                   <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-rose-400/80">Projects Completed</p>
                 </div>
               </div>

               {/* Stat Card 2 */}
               <div className="group p-8 rounded-[40px] bg-indigo-50/20 border border-indigo-100/50 hover:bg-indigo-50/40 transition-all duration-500">
                 <p className="text-4xl md:text-5xl font-display font-bold text-indigo-400 leading-none mb-4 group-hover:scale-110 transition-transform origin-left">
                   <AnimatedCounter target={98} suffix="%" />
                 </p>
                 <div className="flex items-center space-x-3">
                   <div className="w-4 h-[1px] bg-indigo-200"></div>
                   <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-indigo-400/70">Client Satisfaction</p>
                 </div>
               </div>

               {/* Stat Card 3 */}
               <div className="group p-8 rounded-[40px] bg-amber-50/30 border border-amber-100/50 hover:bg-amber-50 transition-all duration-500">
                 <p className="text-4xl md:text-5xl font-display font-bold text-amber-500 leading-none mb-4 group-hover:scale-110 transition-transform origin-left">
                   <AnimatedCounter target={5} suffix="" />
                 </p>
                 <div className="flex items-center space-x-3">
                   <div className="w-4 h-[1px] bg-amber-300"></div>
                   <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-amber-500/60">Creative Awards</p>
                 </div>
               </div>

               {/* Stat Card 4 */}
               <div className="group p-8 rounded-[40px] bg-rose-50/40 border border-rose-100/50 hover:bg-rose-50 transition-all duration-500">
                 <p className="text-4xl md:text-5xl font-display font-bold text-rose-400 leading-none mb-4 group-hover:scale-110 transition-transform origin-left">
                   <AnimatedCounter target={2025} suffix="" />
                 </p>
                 <div className="flex items-center space-x-3">
                   <div className="w-4 h-[1px] bg-rose-200"></div>
                   <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-rose-400/70">Design Graduate</p>
                 </div>
               </div>

            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        
        {/* Education Highlight */}
        <section className="py-32 bg-[#FFFBFC] border-y border-rose-100/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-rose-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Academic Foundation</p>
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-800 tracking-tight">FPT Polytechnic HCM College</h3>
              <p className="text-lg text-gray-400 font-light leading-relaxed">Major in <span className="text-rose-500 font-medium">Graphic Design</span></p>
              <div className="flex justify-center items-center space-x-4 pt-4">
                 <div className="h-px w-8 bg-rose-100"></div>
                 <p className="text-[10px] font-bold text-rose-300 uppercase tracking-[0.3em]">Aug 2022 — Jan 2025</p>
                 <div className="h-px w-8 bg-rose-100"></div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <FloatingControls />
    </div>
  );
};

export default App;
