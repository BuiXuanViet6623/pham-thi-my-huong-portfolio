
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-64 bg-white relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-rose-50/50 rounded-full blur-[150px] opacity-40"></div>
      
      <div className="max-w-[1920px] mx-auto px-10 md:px-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-32">
          
          <div className="lg:col-span-5 space-y-20">
            <div className="space-y-10">
              <p className="text-rose-400 font-bold uppercase tracking-[0.8em] text-[11px]">Get in touch</p>
              <h2 className="text-8xl md:text-9xl font-display font-medium leading-[0.8] tracking-tighter">
                Let’s build <br /><span className="italic holographic-text">Icons.</span>
              </h2>
              <p className="text-2xl text-gray-400 font-light max-w-sm leading-relaxed">Whether you have a fully formed vision or just the seed of an idea, I'm here to help it bloom.</p>
            </div>
            
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 group-hover:text-rose-400 transition-colors mb-2">Electronic Mail</p>
                <p className="text-3xl font-display font-bold text-gray-900 group-hover:translate-x-4 transition-transform duration-500">phammyhuong393@gmail.com</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 group-hover:text-rose-400 transition-colors mb-2">Direct Line</p>
                <p className="text-3xl font-display font-bold text-gray-900 group-hover:translate-x-4 transition-transform duration-500">0972 367 457</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
             <div className="bg-white/40 backdrop-blur-3xl p-16 md:p-24 rounded-[100px] border border-rose-50 shadow-[0_80px_160px_-40px_rgba(232,122,144,0.15)]">
                <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-16">
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-rose-400 transition-colors">Your Name</label>
                      <input type="text" placeholder="Pham Thi My Huong" className="w-full bg-transparent border-b border-gray-100 py-6 focus:border-rose-300 outline-none transition-all text-xl font-light placeholder:text-gray-100" />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-rose-400 transition-colors">Email Address</label>
                      <input type="email" placeholder="hello@studio.com" className="w-full bg-transparent border-b border-gray-100 py-6 focus:border-rose-300 outline-none transition-all text-xl font-light placeholder:text-gray-100" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-rose-400 transition-colors">Your Vision</label>
                    <textarea rows={4} placeholder="Tell me about your brand story..." className="w-full bg-transparent border-b border-gray-100 py-6 focus:border-rose-300 outline-none transition-all text-xl font-light placeholder:text-gray-100 resize-none"></textarea>
                  </div>
                  
                  <button className="group relative w-full overflow-hidden py-10 rounded-full bg-gray-900 hover:bg-rose-500 transition-colors duration-700">
                     <span className="relative z-10 text-white font-bold uppercase tracking-[0.5em] text-xs">Start the Conversation</span>
                  </button>
                </form>
             </div>
          </div>
        </div>
        
        <footer className="mt-64 pt-20 border-t border-rose-50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300">
           <p>© 2025 Pham Thi My Huong • Design for the Bold</p>
           <div className="flex space-x-12 mt-12 md:mt-0">
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
