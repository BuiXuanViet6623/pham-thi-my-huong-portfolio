
import React from 'react';

const Skills: React.FC = () => {
  const categories = [
    {
      num: '01',
      title: 'Brand Identity & Strategy',
      desc: 'Crafting foundational visual systems and strategic market positioning.'
    },
    {
      num: '02',
      title: 'UI/UX & Digital Design',
      desc: 'Engineering user-centric interfaces where aesthetics meet performance.'
    },
    {
      num: '03',
      title: 'Editorial & Information',
      desc: 'Synthesizing complex data into elegant, intuitive layouts.'
    },
    {
      num: '04',
      title: 'Motion & Storytelling',
      desc: 'Infusing cinematic transitions and narratives into static assets.'
    }
  ];

  const tools = [
    { name: 'Photoshop', icon: 'https://img.icons8.com/color/144/adobe-photoshop.png' },
    { name: 'Illustrator', icon: 'https://img.icons8.com/color/144/adobe-illustrator.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/144/figma--v1.png' },
    { name: 'InDesign', icon: 'https://img.icons8.com/color/144/adobe-indesign.png' },
    { name: 'After Effects', icon: 'https://img.icons8.com/color/144/adobe-after-effects.png' },
    { name: 'Premiere', icon: 'https://img.icons8.com/color/144/adobe-premiere-pro.png' }
  ];

  return (
    <section id="skills" className="py-32 md:py-48 bg-[#FCF9F7] relative border-t border-rose-50">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Header - Minimalist & Elegant */}
        <div className="mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.8em] text-rose-400 block mb-4">Mastery</span>
          <h2 className="text-5xl md:text-7xl font-display font-medium text-gray-900 leading-none tracking-tighter">
            Skill <span className="italic font-light text-rose-300">Set.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: 4 Skills in 2x2 Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {categories.map((cat) => (
                <div key={cat.num} className="group flex flex-col space-y-5">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-display italic text-rose-200 group-hover:text-rose-400 transition-colors duration-500 leading-none">
                      {cat.num}
                    </span>
                    <div className="h-px flex-1 bg-gray-100 group-hover:bg-rose-100 transition-colors duration-500"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-rose-500 transition-colors duration-500">
                      {cat.title}
                    </h3>
                    <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-sm">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Compact Toolbox - Icons are full color */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-[0_30px_60px_-15px_rgba(232,122,144,0.1)] sticky top-32">
              <div className="mb-10 text-center">
                <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-900 mb-2">Technical Toolbox</h4>
                <div className="w-8 h-px bg-rose-200 mx-auto"></div>
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-8">
                {tools.map((tool) => (
                  <div key={tool.name} className="group flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-50 transition-all duration-500 hover:shadow-lg hover:shadow-rose-100/50">
                      <img 
                        src={tool.icon} 
                        alt={tool.name} 
                        className="w-7 h-7 md:w-8 md:h-8 object-contain"
                      />
                    </div>
                    <span className="mt-3 text-[7px] font-black text-gray-400 tracking-widest uppercase text-center w-full truncate">
                      {tool.name.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-50 text-center">
                <p className="text-[10px] text-gray-400 font-light italic leading-relaxed">
                  Industry standard tools for <br/> <span className="text-rose-400">digital precision.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
