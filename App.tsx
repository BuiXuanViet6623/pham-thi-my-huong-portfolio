
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FloatingControls from './components/FloatingControls';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <main>
        <Hero />
        
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        {/* Refined Academic Foundation Section */}
        <section className="py-40 md:py-64 bg-[#FFF9FA] relative overflow-hidden">
          {/* Background Decorative Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-display font-black text-rose-100/20 select-none pointer-events-none italic">
            ACADEMIC
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-16">
              
              <div className="space-y-4">
                <p className="text-rose-400 font-bold uppercase tracking-[0.8em] text-[10px] md:text-xs mb-6">Academic Foundation</p>
                <div className="w-16 h-px bg-rose-200 mx-auto"></div>
              </div>

              <div className="space-y-10 group cursor-default">
                <h3 className="text-5xl md:text-[90px] font-display font-bold text-gray-900 leading-[0.9] tracking-tighter transition-all duration-700 group-hover:tracking-normal group-hover:text-rose-500">
                  FPT Polytechnic <br /><span className="italic font-light">HCM College</span>
                </h3>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 pt-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Expertise Major</p>
                    <p className="text-2xl md:text-3xl font-display italic text-gray-800">Graphic Design</p>
                  </div>
                  
                  <div className="hidden md:block w-px h-16 bg-rose-100"></div>
                  
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Session Period</p>
                    <p className="text-2xl md:text-3xl font-display text-gray-800">Aug 2022 — Jan 2025</p>
                  </div>
                </div>
              </div>

              <div className="relative inline-block px-12 py-6 rounded-[30px] border border-rose-100 bg-white shadow-xl shadow-rose-100/20">
                <div className="flex items-center space-x-6">
                   <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                   </div>
                   <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-rose-900">Professional Certification Verified</p>
                </div>
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
