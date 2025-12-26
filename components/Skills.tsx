
import React from 'react';

const Skills: React.FC = () => {
  const tools = [
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', color: '#31A8FF' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', color: '#FF9A00' },
    { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg', color: '#CF96FD' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' },
    { name: 'InDesign', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-original.svg', color: '#FF3366' },
    { name: 'Premiere', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg', color: '#9999FF' }
  ];

  const specialties = [
    { title: 'Brand Identity', desc: 'Crafting unique visual languages that resonate with modern audiences.' },
    { title: 'Visual Storytelling', desc: 'Narrating powerful brand stories through emotional imagery and layout.' },
    { title: 'Motion Design', desc: 'Bringing static graphics to life with elegant, fluid transitions.' },
    { title: 'UI/UX Design', desc: 'Designing user-focused interfaces that combine function with high-end beauty.' },
    { title: 'Editorial Layout', desc: 'Managing complex hierarchies with typographic precision.' },
    { title: 'Packaging Design', desc: 'Creating tactile, luxury experiences through thoughtful physical design.' }
  ];

  return (
    <section id="skills" className="py-64 bg-[#FFF9FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] iridescent-blob"></div>
      
      <div className="max-w-[1920px] mx-auto px-10 md:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-40">
          <div className="space-y-6">
            <p className="text-rose-400 font-bold uppercase tracking-[1em] text-[10px]">Technical Arsenal</p>
            <h2 className="text-7xl md:text-[140px] font-display font-medium tracking-tighter leading-none">
              The <span className="italic holographic-text">Craft.</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-2xl text-gray-400 font-light italic max-w-sm ml-auto leading-relaxed">
              Empowering creativity through technical mastery of the industry's leading tools.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Software Section */}
          <div className="bg-white p-12 md:p-16 rounded-[60px] md:rounded-[80px] shadow-2xl shadow-rose-100/20 border border-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-16 relative z-10">Digital <span className="text-rose-400">Toolkit</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 relative z-10">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group/item cursor-default">
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gray-50 flex items-center justify-center mb-6 border border-transparent group-hover/item:border-rose-100 group-hover/item:bg-white group-hover/item:shadow-2xl group-hover/item:scale-110 transition-all duration-500 p-6"
                    style={{ '--hover-color': tool.color } as any}
                  >
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-500" />
                  </div>
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover/item:text-rose-500 transition-colors">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties Section */}
          <div className="bg-gray-900 p-12 md:p-16 rounded-[60px] md:rounded-[80px] shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 relative z-10">Design <span className="text-rose-300">Strategy</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              {specialties.map((item) => (
                <div key={item.title} className="group/item p-6 rounded-3xl hover:bg-white/5 transition-all">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <h4 className="text-lg text-white font-medium group-hover/item:text-rose-200 transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed group-hover/item:text-gray-300 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
