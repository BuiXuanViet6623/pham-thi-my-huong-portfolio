
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const images = project.galleryImages || [project.imageUrl];

  const handleImageChange = (idx: number) => {
    if (idx === activeIndex || isChanging) return;
    setIsChanging(true);
    setActiveIndex(idx);
    setTimeout(() => setIsChanging(false), 600);
  };

  const titleWords = project.title.split(' ');
  const lastWord = titleWords.pop();
  const mainTitle = titleWords.join(' ');

  return (
    <div className="relative w-full py-24 md:py-40 border-b border-rose-50 last:border-0 bg-white group/card">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE SHOWCASE */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl bg-gray-50 border border-rose-50">
              <div 
                key={activeIndex}
                className={`w-full h-full transition-all duration-700 ${isChanging ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
              >
                <img src={images[activeIndex]} className="w-full h-full object-cover" alt={project.title} />
              </div>
              
              {/* Image Navigation */}
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {images.slice(0, 3).map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => handleImageChange(i)}
                    className={`w-12 h-1 bg-white/40 backdrop-blur-md rounded-full transition-all ${activeIndex === i ? 'bg-rose-400 w-16' : 'hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT TEXT */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-black text-rose-300 uppercase tracking-[0.5em]">Brand Case Study</span>
                <div className="h-px w-8 bg-rose-100"></div>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-[4vw] font-display font-medium text-gray-900 leading-[0.9] tracking-tighter">
                {mainTitle} <br />
                <span className="italic font-light text-rose-300">{lastWord}.</span>
              </h3>
            </div>

            <p className="text-lg text-gray-500 font-light leading-relaxed italic">
              {project.description}
            </p>

            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-rose-50">
              <div>
                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1">Discipline</p>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-tighter">{project.category}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1">Design Role</p>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-tighter">{project.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.tools.map(tool => (
                <span key={tool} className="text-[7px] font-black uppercase tracking-widest px-3 py-1.5 bg-rose-50 text-rose-400 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="project" className="bg-white">
      {/* Editorial Header */}
      <div className="pt-32 pb-16 container mx-auto px-6 md:px-12 lg:px-20 border-b border-rose-50">
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-[2px] bg-rose-400"></div>
            <p className="text-[10px] font-black uppercase tracking-[1em] text-rose-400">Selected Creations</p>
          </div>
          <h2 className="text-6xl md:text-[8vw] font-display font-medium leading-[0.8] tracking-tighter text-gray-900">
            Visual <br />
            <span className="italic font-light text-rose-300 ml-[10vw]">Storytelling.</span>
          </h2>
        </div>
      </div>

      {/* Project List */}
      <div>
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
