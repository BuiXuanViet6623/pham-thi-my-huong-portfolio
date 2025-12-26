
import React from 'react';

const Skills: React.FC = () => {
  const tools = [
    { name: 'Photoshop', slug: 'adobephotoshop', color: '31A8FF' },
    { name: 'Illustrator', slug: 'adobeillustrator', color: 'FF9A00' },
    { name: 'InDesign', slug: 'adobeindesign', color: 'FF3366' },
    { name: 'After Effects', slug: 'adobeaftereffects', color: '9999FF' },
    { name: 'Premiere', slug: 'adobepremierepro', color: '9999FF' },
    { name: 'Figma', slug: 'figma', color: 'F24E1E' },
    { name: 'Canva', slug: 'canva', color: '00C4CC' },
    { name: 'CapCut', slug: 'capcut', color: '000000' }
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
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center group cursor-default">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gray-50 flex items-center justify-center mb-4 border border-rose-50 hover:border-rose-300 hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-500 p-4 md:p-5 overflow-hidden relative">
                    <img 
                      src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`} 
                      alt={tool.name} 
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).onerror = null;
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=FFF9FA&color=E87A90&bold=true`;
                      }}
                    />
                  </div>
                  <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-300 group-hover:text-rose-500 transition-colors text-center">{tool.name}</p>
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
