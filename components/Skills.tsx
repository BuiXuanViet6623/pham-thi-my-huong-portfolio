
import React from 'react';

const Skills: React.FC = () => {
  const tools = [
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'InDesign', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-original.svg' },
    { name: 'Premiere', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' }
  ];

  const coreExpertise = [
    { title: 'Brand Architecture', desc: 'Developing foundational visual systems that define market position.' },
    { title: 'Information Design', desc: 'Synthesizing complex data into elegant, intuitive editorial experiences.' },
    { title: 'UI/UX Ecosystems', desc: 'Engineering user-centric interfaces where aesthetics meet high-performance utility.' },
    { title: 'Visual Storytelling', desc: 'Crafting emotional narratives through strategic use of imagery and typography.' },
    { title: 'Packaging Design', desc: 'Merging tactile craftsmanship with commercial appeal for premium brands.' },
    { title: 'Motion Dynamics', desc: 'Infusing life into static design through sophisticated cinematic transitions.' }
  ];

  return (
    <section id="skills" className="py-64 bg-[#FFF9FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] holographic-text opacity-[0.05] blur-[150px] -z-10"></div>
      
      <div className="max-w-[1920px] mx-auto px-10 md:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-40">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-rose-400 font-bold uppercase tracking-[1em] text-[10px]">Strategic Capabilities</p>
            <h2 className="text-7xl md:text-[140px] font-display font-medium tracking-tighter leading-none">
              Core <span className="italic holographic-text">Expertise.</span>
            </h2>
          </div>
          <div className="lg:text-right hidden lg:block">
            <p className="text-2xl text-gray-400 font-light italic max-w-sm ml-auto leading-relaxed">
              Synthesizing artistic vision with technical precision to build meaningful brand connections.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white p-12 md:p-16 rounded-[60px] md:rounded-[80px] shadow-2xl shadow-rose-100/20 border border-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-16">Technical <span className="text-rose-400">Stack</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group cursor-default">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gray-50 flex items-center justify-center mb-6 border border-rose-50 hover:border-rose-200 hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-500 p-6">
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-full h-full object-contain filter-none" 
                    />
                  </div>
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-rose-500 transition-colors">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-12 md:p-16 rounded-[60px] md:rounded-[80px] shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-16">Creative <span className="text-rose-300">Disciplines</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {coreExpertise.map((item) => (
                <div key={item.title} className="group p-6 rounded-3xl hover:bg-white/5 transition-all">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 group-hover:scale-150 transition-transform duration-300"></div>
                    <h4 className="text-lg text-white font-medium group-hover:text-rose-200 transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
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
