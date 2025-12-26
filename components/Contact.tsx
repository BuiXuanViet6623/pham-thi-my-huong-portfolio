
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { 
      name: 'FACEBOOK', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
      href: '#' 
    },
    { 
      name: 'INSTAGRAM', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
      href: '#' 
    },
    { 
      name: 'ZALO', 
      icon: <div className="w-5 h-5 flex items-center justify-center border-[1px] border-current rounded-sm"><span className="text-[6px] font-black tracking-tighter">ZL</span></div>, 
      href: '#' 
    },
    { 
      name: 'TELEGRAM', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>, 
      href: '#' 
    },
    { 
      name: 'MESSENGER', 
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.2-2.1c.3-.1.6.1.6.4v3.6c1.1 1.7 1.1 3.7.1 5.6z"></path></svg>, 
      href: '#' 
    }
  ];

  return (
    <section id="contact" className="relative bg-white pt-48 pb-20 overflow-hidden border-t border-rose-50">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-50/10 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Editorial Heading */}
        <div className="mb-32 max-w-4xl">
          <div className="flex items-center space-x-6 mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-rose-400">Connectivity</span>
            <div className="h-px flex-1 bg-gradient-to-r from-rose-200 to-transparent"></div>
          </div>
          <h2 className="text-6xl md:text-[7vw] font-display font-bold text-gray-900 leading-[0.9] tracking-tighter">
            Let's create <br />
            <span className="italic holographic-text font-black">Pure Magic.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Information & Vertical Socials */}
          <div className="lg:col-span-5 flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* VERTICAL SOCIAL BAR */}
            <div className="flex flex-col items-center space-y-10 border-r border-rose-100 pr-10">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="group relative flex flex-col items-center transition-all duration-500"
                >
                  <div className="text-rose-300 group-hover:text-rose-600 transition-colors duration-500 transform group-hover:scale-125 group-hover:-rotate-12">
                    {social.icon}
                  </div>
                  <span className="absolute left-14 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[8px] font-black tracking-[0.3em] text-rose-400 whitespace-nowrap bg-rose-50 px-3 py-1 rounded-full">
                    {social.name}
                  </span>
                </a>
              ))}
              <div className="w-px h-24 bg-gradient-to-b from-rose-200 to-transparent mt-4"></div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-20 pt-2">
              <div className="group">
                <p className="text-[9px] font-black text-rose-300 uppercase tracking-[0.5em] mb-6 flex items-center">
                   <span className="w-4 h-[1px] bg-rose-200 mr-3"></span> Email Inquiry
                </p>
                <a 
                  href="mailto:phammyhuong393@gmail.com" 
                  className="block text-2xl md:text-3xl font-light tracking-tight text-gray-800 hover:text-rose-500 transition-all duration-500"
                >
                  phammyhuong393<span className="text-rose-200 italic">@</span>gmail.com
                </a>
              </div>

              <div className="group">
                <p className="text-[9px] font-black text-rose-300 uppercase tracking-[0.5em] mb-6 flex items-center">
                   <span className="w-4 h-[1px] bg-rose-200 mr-3"></span> Direct Voice
                </p>
                <a 
                  href="tel:0972367457" 
                  className="block text-2xl md:text-3xl font-display italic text-gray-400 hover:text-rose-600 transition-all duration-500"
                >
                  +84 972 367 457
                </a>
              </div>

              <div className="pt-8">
                <div className="p-8 rounded-[40px] bg-rose-50/40 border border-rose-100/50 max-w-xs">
                  <p className="text-[10px] font-bold text-rose-900/40 uppercase tracking-widest leading-loose">
                    Available for freelance opportunities and brand collaborations worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Invisible Form */}
          <div className="lg:col-span-7">
            <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="NAME"
                    className="w-full bg-transparent border-b border-rose-100 py-4 focus:border-rose-400 outline-none transition-all text-lg font-light placeholder:text-[9px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-200" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rose-400 group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="EMAIL"
                    className="w-full bg-transparent border-b border-rose-100 py-4 focus:border-rose-400 outline-none transition-all text-lg font-light placeholder:text-[9px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-200" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rose-400 group-focus-within:w-full transition-all duration-700"></div>
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  rows={2} 
                  placeholder="A BRIEF ABOUT YOUR VISION"
                  className="w-full bg-transparent border-b border-rose-100 py-4 focus:border-rose-400 outline-none transition-all text-lg font-light placeholder:text-[9px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-200 resize-none"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-rose-400 group-focus-within:w-full transition-all duration-700"></div>
              </div>

              <div className="flex justify-end pt-10">
                <button className="group relative py-4 px-2 overflow-hidden">
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[1em] text-gray-900 group-hover:text-rose-500 transition-colors">Dispatch Message</span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-900 group-hover:bg-rose-500 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-500 group-hover:w-full transition-all duration-1000"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Minimal Signature Footer */}
        <footer className="mt-48 pt-16 border-t border-rose-100 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <h4 className="text-4xl font-display font-bold text-gray-900 tracking-tighter hover:text-rose-500 transition-colors cursor-default">HP.</h4>
            <div className="flex items-center space-x-6 text-[8px] font-black uppercase tracking-[0.4em] text-rose-300">
               <span>Visual Portfolio</span>
               <span className="w-1 h-1 rounded-full bg-rose-100"></span>
               <span>2025 Edition</span>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-4">
            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest italic">Saigon — Vietnam</p>
            <p className="text-[8px] font-black uppercase tracking-[0.6em] text-rose-200">© All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
