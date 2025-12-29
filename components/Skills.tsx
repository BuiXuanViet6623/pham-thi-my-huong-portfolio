
import React from 'react';

const Skills: React.FC = () => {
  const tools = [
    { 
      name: 'Photoshop', 
      icon: 'https://img.icons8.com/color/144/adobe-photoshop.png' 
    },
    { 
      name: 'Illustrator', 
      icon: 'https://img.icons8.com/color/144/adobe-illustrator.png' 
    },
    { 
      name: 'InDesign', 
      icon: 'https://img.icons8.com/color/144/adobe-indesign.png' 
    },
    { 
      name: 'After Effects', 
      icon: 'https://img.icons8.com/color/144/adobe-after-effects.png' 
    },
    { 
      name: 'Premiere Pro', 
      icon: 'https://img.icons8.com/color/144/adobe-premiere-pro.png' 
    },
    { 
      name: 'Figma', 
      icon: 'https://img.icons8.com/color/144/figma--v1.png' 
    },
    { 
      name: 'Canva', 
      icon: 'https://img.icons8.com/color/144/canva.png' 
    }
  ];

  const coreExpertise = [
    { title: 'Brand Identity & Strategy', desc: 'Crafting foundational visual systems and strategic market positioning.' },
    { title: 'UI/UX & Digital Design', desc: 'Engineering user-centric interfaces where aesthetics meet performance.' },
    { title: 'Editorial & Information', desc: 'Synthesizing complex data into elegant, intuitive layouts.' },
    { title: 'Motion & Storytelling', desc: 'Infusing cinematic transitions and narratives into static assets.' }
  ];

  return (
    <section id="skills" className="py-32 md:py-48 bg-[#FFF9FA] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-[2px] bg-rose-400"></div>
              <p className="text-rose-400 font-bold uppercase tracking-[0.8em] text-[10px]">Technical Stack</p>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[7vw] font-display font-medium tracking-tighter leading-[0.85] text-gray-900">
              Creative <br /><span className="italic holographic-text font-light">Ecosystem.</span>
            </h2>
          </div>
          <div className="lg:text-right hidden lg:block pb-4">
            <p className="text-lg md:text-xl text-gray-400 font-light italic max-w-sm ml-auto leading-relaxed">
              Industry-standard precision merged with creative intuition.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* TECHNICAL STACK - Tools */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[40px] md:rounded-[50px] shadow-[0_30px_80px_-20px_rgba(232,122,144,0.1)] border border-rose-50/50 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 tracking-tight">Software <span className="text-rose-400 italic">Proficiency</span></h3>
              <span className="text-[9px] font-black uppercase tracking-widest text-rose-200">The Toolbox</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group cursor-default">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 transition-all duration-500">
                    <div className="absolute inset-[-10px] bg-rose-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=FFF1F3&color=E87A90&bold=true&font-size=0.45&rounded=true`;
                      }}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-rose-500 transition-colors duration-500 text-center">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CORE DISCIPLINES - Disciplines (Compact) */}
          <div className="lg:col-span-5 bg-gray-900 p-10 md:p-16 rounded-[40px] md:rounded-[50px] shadow-2xl flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-10">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">Core <span className="text-rose-300 italic">Disciplines</span></h3>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {coreExpertise.map((item, idx) => (
                <div key={item.title} className="group cursor-default">
                  <div className="flex items-baseline space-x-4 mb-1">
                    <span className="text-[9px] font-display italic text-rose-400 opacity-60">0{idx + 1}</span>
                    <h4 className="text-base text-white/90 font-medium group-hover:text-rose-300 transition-colors duration-300">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-[11px] md:text-xs font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300 pl-7 border-l border-white/5 ml-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400">Strategic Design Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
