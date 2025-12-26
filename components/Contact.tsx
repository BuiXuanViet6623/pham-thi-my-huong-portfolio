
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-64 bg-white relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-rose-50/50 rounded-full blur-[100px] md:blur-[150px] opacity-40"></div>
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32">
          
          <div className="lg:col-span-5 space-y-12 md:space-y-20">
            <div className="space-y-6 md:space-y-10">
              <p className="text-rose-400 font-bold uppercase tracking-[0.6em] md:tracking-[0.8em] text-[10px] md:text-[11px]">Get in touch</p>
              <h2 className="text-6xl sm:text-7xl md:text-9xl font-display font-medium leading-[0.9] md:leading-[0.8] tracking-tighter">
                Let’s build <br /><span className="italic holographic-text">Icons.</span>
              </h2>
              <p className="text-lg md:text-2xl text-gray-400 font-light max-w-sm leading-relaxed">Whether you have a fully formed vision or just the seed of an idea, I'm here to help it bloom.</p>
            </div>
            
            <div className="space-y-8 md:space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-300 group-hover:text-rose-400 transition-colors mb-2">Electronic Mail</p>
                <p className="text-xl md:text-3xl font-display font-bold text-gray-900 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500 break-all md:break-normal">phammyhuong393@gmail.com</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-300 group-hover:text-rose-400 transition-colors mb-2">Direct Line</p>
                <p className="text-xl md:text-3xl font-display font-bold text-gray-900 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">0972 367 457</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
             <div className="bg-white/60 backdrop-blur-3xl p-8 sm:p-12 md:p-24 rounded-[40px] md:rounded-[100px] border border-rose-50 shadow-[0_40px_100px_-20px_rgba(232,122,144,0.1)] md:shadow-[0_80px_160px_-40px_rgba(232,122,144,0.15)]">
                <form className="space-y-10 md:space-y-16" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    <div className="relative group">
                      <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-rose-400 transition-colors">Your Name</label>
                      <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-100 py-4 md:py-6 focus:border-rose-300 outline-none transition-all text-lg md:text-xl font-light placeholder:text-gray-200" />
                    </div>
                    <div className="relative group">
                      <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-rose-400 transition-colors">Email Address</label>
                      <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-100 py-4 md:py-6 focus:border-rose-300 outline-none transition-all text-lg md:text-xl font-light placeholder:text-gray-200" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-rose-400 transition-colors">Your Vision</label>
                    {/* Fixed: Removed invalid 'md:rows' attribute and set standard 'rows' attribute. Responsive sizing should be handled via CSS. */}
                    <textarea rows={4} placeholder="Tell me about your brand story..." className="w-full bg-transparent border-b border-gray-100 py-4 md:py-6 focus:border-rose-300 outline-none transition-all text-lg md:text-xl font-light placeholder:text-gray-200 resize-none"></textarea>
                  </div>
                  
                  <button className="group relative w-full overflow-hidden py-6 md:py-10 rounded-full bg-gray-900 hover:bg-rose-500 transition-colors duration-700 shadow-xl shadow-gray-900/10 hover:shadow-rose-500/20 active:scale-95">
                     <span className="relative z-10 text-white font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-xs">Start the Conversation</span>
                  </button>
                </form>
             </div>
          </div>
        </div>
        
        <footer className="mt-32 md:mt-64 pt-12 md:pt-20 border-t border-rose-50 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-300 space-y-8 md:space-y-0 text-center md:text-left">
           <p>© 2025 Pham Thi My Huong • Design for the Bold</p>
           <div className="flex space-x-8 md:space-x-12">
              <a href="#" className="hover:text-rose-400 transition-colors">Behance</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Dribbble</a>
           </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
