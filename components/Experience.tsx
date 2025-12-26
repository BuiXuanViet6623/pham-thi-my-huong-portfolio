
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 bg-[#FFF9FA] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-10 md:px-24">
        <div className="grid lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <p className="text-rose-400 font-bold uppercase tracking-[0.6em] text-[10px]">Career Narrative</p>
              <h2 className="text-7xl md:text-9xl font-display font-medium tracking-tighter leading-[0.9]">
                Professional <br /><span className="italic font-light">Journey.</span>
              </h2>
            </div>
            <div className="relative w-full aspect-square rounded-[60px] overflow-hidden shadow-2xl group">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Workspace" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-rose-900/10 transition-opacity group-hover:opacity-0"></div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-20 relative">
            {/* The Vertical Timeline Line */}
            <div className="absolute left-[33px] md:left-[33px] top-10 bottom-10 w-px bg-rose-100 hidden md:block"></div>

            {EXPERIENCES.map((item, idx) => (
              <div key={item.id} className="group relative">
                <div className="flex items-start space-x-8 md:space-x-16">
                   <div className="relative z-10 flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-rose-100 flex items-center justify-center shadow-xl group-hover:border-rose-400 transition-colors duration-500 overflow-hidden">
                        <span className="text-3xl md:text-4xl font-display italic text-rose-200 group-hover:text-rose-400 transition-colors">0{idx + 1}</span>
                      </div>
                   </div>
                   
                   <div className="space-y-8 flex-grow pt-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                         <div className="space-y-1">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 group-hover:text-rose-500 transition-colors">{item.role}</h3>
                            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400">{item.company}</p>
                         </div>
                         <div className="px-6 py-2 border border-rose-100 rounded-full text-[10px] font-bold text-rose-400 uppercase tracking-widest bg-white h-fit shadow-sm">
                            {item.period}
                         </div>
                      </div>
                      
                      <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                         {['Market Research', 'Design Systems', 'Client Collaboration'].map(skill => (
                           <div key={skill} className="flex items-center space-x-3 group/skill">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-200 group-hover/skill:bg-rose-400 group-hover/skill:scale-150 transition-all"></div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover/skill:text-gray-600">{skill}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
