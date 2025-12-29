
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { 
      name: 'FACEBOOK', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
      href: '#' 
    },
    { 
      name: 'INSTAGRAM', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
      href: '#' 
    },
    { 
      name: 'ZALO', 
      icon: <div className="w-4 h-4 flex items-center justify-center border-[1px] border-current rounded-sm"><span className="text-[5px] font-black tracking-tighter">ZL</span></div>, 
      href: '#' 
    },
    { 
      name: 'TELEGRAM', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>, 
      href: '#' 
    },
    { 
      name: 'MESSENGER', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.2-2.1c.3-.1.6.1.6.4v3.6c1.1 1.7 1.1 3.7.1 5.6z"></path></svg>, 
      href: '#' 
    }
  ];

  return (
    <section id="contact" className="relative bg-white pt-32 pb-16 overflow-hidden border-t border-rose-50">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-rose-50/20 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Editorial Heading */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-[8px] font-black uppercase tracking-[1em] text-rose-300">Strategic Partnership</span>
            <div className="h-[0.5px] w-24 bg-rose-200"></div>
          </div>
          <h2 className="text-4xl md:text-[4.5vw] font-display font-bold text-gray-900 leading-[1] tracking-tighter">
            Architecting Your <br />
            <span className="italic holographic-text font-black text-rose-400">Visual Legacy.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Professional Inquiries */}
          <div className="lg:col-span-6 flex flex-col md:flex-row gap-10 md:gap-14">
            
            {/* DIGITAL FOOTPRINT (Vertical Socials) */}
            <div className="flex flex-col items-center space-y-7 border-r border-rose-50 pr-8">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="group relative flex flex-col items-center transition-all duration-700"
                  aria-label={social.name}
                >
                  <div className="text-rose-200 group-hover:text-rose-400 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                    {social.icon}
                  </div>
                </a>
              ))}
              <div className="w-px h-12 bg-rose-100 mt-2"></div>
            </div>

            {/* DIRECT CHANNELS */}
            <div className="space-y-10 pt-1">
              <div className="group cursor-default">
                <p className="text-[7px] font-black text-rose-300 uppercase tracking-[0.6em] mb-2 flex items-center">
                   <span className="w-2 h-[1px] bg-rose-200 mr-2"></span> Brand Strategy & Inquiries
                </p>
                <a 
                  href="mailto:phammyhuong393@gmail.com" 
                  className="relative inline-block text-lg md:text-xl lg:text-2xl font-display font-medium tracking-tight text-rose-400 hover:text-rose-500 transition-all duration-700 pb-1 group/link overflow-hidden"
                >
                  <span className="relative inline-block transition-transform duration-700 group-hover/link:translate-x-2">
                    phammyhuong393<span className="italic font-light text-rose-300 px-0.5">@</span>gmail.com
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-rose-50 scale-x-100 origin-left transition-transform duration-500 group-hover/link:scale-x-0"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-rose-400 scale-x-0 origin-left transition-transform duration-700 delay-100 group-hover/link:scale-x-100"></div>
                </a>
              </div>

              <div className="group cursor-default">
                <p className="text-[7px] font-black text-rose-300 uppercase tracking-[0.6em] mb-2 flex items-center">
                   <span className="w-2 h-[1px] bg-rose-200 mr-2"></span> Creative Consultation
                </p>
                <a 
                  href="tel:0972367457" 
                  className="inline-block text-lg md:text-xl lg:text-2xl font-display italic font-light text-gray-400 hover:text-rose-400 transition-all duration-700 tracking-tight group/link"
                >
                  <span className="inline-block transition-transform duration-700 group-hover/link:translate-x-2">
                    +84 <span className="text-rose-300 font-bold tracking-tighter">972 367 457</span>
                  </span>
                </a>
              </div>

              <div className="pt-2">
                <div className="p-5 rounded-[25px] bg-rose-50/20 border border-rose-100/20 max-w-[200px] group/box transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-rose-100/10">
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                    Elevating brands through <span className="text-rose-400 italic">Strategic Visual Narratives.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Brief (Minimal Form) */}
          <div className="lg:col-span-6">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="CLIENT NAME"
                    className="w-full bg-transparent border-b border-rose-50 py-2 focus:border-rose-300 outline-none transition-all text-xs font-light placeholder:text-[7px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-100 uppercase" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-300 group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="REPLY EMAIL"
                    className="w-full bg-transparent border-b border-rose-50 py-2 focus:border-rose-300 outline-none transition-all text-xs font-light placeholder:text-[7px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-100 uppercase" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-300 group-focus-within:w-full transition-all duration-700"></div>
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  rows={1} 
                  placeholder="BRIEF PROJECT SCOPE"
                  className="w-full bg-transparent border-b border-rose-50 py-2 focus:border-rose-300 outline-none transition-all text-xs font-light placeholder:text-[7px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-100 resize-none uppercase"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-300 group-focus-within:w-full transition-all duration-700"></div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="group relative py-2 px-1 overflow-hidden">
                  <span className="relative z-10 text-[8px] font-black uppercase tracking-[1em] text-gray-400 group-hover:text-rose-400 transition-all duration-500">Send Brief</span>
                  <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-rose-50 group-hover:bg-rose-400 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-rose-400 group-hover:w-full transition-all duration-1000"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Brand Signature Footer */}
        <footer className="mt-24 pt-10 border-t border-rose-50 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-3">
            <h4 className="text-2xl font-display font-bold text-gray-900 tracking-tighter">HP.</h4>
            <div className="flex items-center space-x-3 text-[6px] font-black uppercase tracking-[0.4em] text-rose-200">
               <span>Artistic Direction</span>
               <div className="w-0.5 h-0.5 rounded-full bg-rose-100"></div>
               <span>Curated Archive 2025</span>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <p className="text-[7px] font-bold text-gray-300 uppercase tracking-[0.3em] italic">Saigon — Vietnam</p>
            <p className="text-[6px] font-black uppercase tracking-[0.4em] text-rose-100">© 2025 Intellectual Property</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
