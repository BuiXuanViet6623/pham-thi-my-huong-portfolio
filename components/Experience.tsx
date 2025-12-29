
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Studio Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#E87A90 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Minimalist Header */}
        <div className="text-left md:text-center mb-24 md:mb-32">
          <div className="flex items-center md:justify-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-rose-200"></div>
            <span className="text-[8px] font-black uppercase tracking-[1em] text-rose-300">The Chronicle</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-none tracking-tighter">
            Work <span className="italic holographic-text font-light pl-1">History.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Main Central Vertical Axis - Always at center on Desktop */}
          <div className="absolute left-[12px] md:left-1/2 top-0 bottom-0 w-[0.5px] bg-rose-100 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-20 md:space-y-28">
            {EXPERIENCES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={item.id} className="group relative">
                  
                  {/* Central Node Marker */}
                  <div className="absolute left-[12px] md:left-1/2 top-1.5 -translate-x-1/2 flex flex-col items-center z-20">
                    <div className="w-6 h-6 rounded-full bg-white border border-rose-100 flex items-center justify-center shadow-sm group-hover:border-rose-400 group-hover:scale-110 transition-all duration-500">
                      <span className="text-[8px] font-display italic text-rose-300 group-hover:text-rose-500 font-bold">0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Content Wrapper - Alternating columns but uniform left-aligned text */}
                  <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:justify-start' : 'md:justify-end'} relative z-10`}>
                    
                    {/* Content Box - Forces text-left for everything */}
                    <div className={`w-full md:w-[45%] text-left ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-12 pr-0`}>
                      
                      {/* Period Label - Left Aligned */}
                      <div className="mb-4 flex flex-col items-start">
                        <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-rose-50/40 border border-rose-100/50 mb-3">
                          <div className="w-1 h-1 rounded-full bg-rose-300"></div>
                          <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em] group-hover:text-rose-400 transition-colors duration-500">
                          {item.company}
                        </p>
                      </div>

                      {/* Role Heading - Refined & Left Aligned */}
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-gray-900 leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
                        {item.role}
                      </h3>

                      {/* Smaller, Elegant Description - Left Aligned */}
                      <div className="max-w-sm">
                        <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      {/* Professional Tags - Left Aligned */}
                      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-rose-50/50 justify-start">
                        {['Strategic Design', 'Visual Identity'].map((tag) => (
                          <div key={tag} className="flex items-center space-x-1.5">
                            <div className="w-0.5 h-0.5 rounded-full bg-rose-200"></div>
                            <span className="text-[7px] font-black uppercase tracking-widest text-gray-300 group-hover:text-rose-400 transition-colors">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Bottom Decor */}
        <div className="mt-24 flex flex-col items-center">
           <div className="w-[0.5px] h-12 bg-rose-100"></div>
           <div className="mt-6 flex items-center space-x-2">
              <span className="text-[7px] font-black text-rose-200 uppercase tracking-[1em] ml-[1em]">Signature Excellence</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
