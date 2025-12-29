
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { 
      name: 'FACEBOOK', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
      href: '#' 
    },
    { 
      name: 'INSTAGRAM', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
      href: '#' 
    },
    { 
      name: 'ZALO', 
      icon: <div className="w-4 h-4 flex items-center justify-center border-[1px] border-current rounded-sm"><span className="text-[5px] font-black tracking-tighter">ZL</span></div>, 
      href: '#' 
    },
    { 
      name: 'TELEGRAM', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>, 
      href: '#' 
    },
    { 
      name: 'MESSENGER', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.2-2.1c.3-.1.6.1.6.4v3.6c1.1 1.7 1.1 3.7.1 5.6z"></path></svg>, 
      href: '#' 
    }
  ];

  return (
    <section id="contact" className="relative bg-white pt-40 pb-16 overflow-hidden border-t border-rose-50">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/10 -skew-x-6 transform origin-top pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Editorial Heading */}
        <div className="mb-24 max-w-4xl">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-[9px] font-black uppercase tracking-[0.8em] text-rose-300">Inquiry Hub</span>
            <div className="h-[0.5px] flex-1 bg-rose-100"></div>
          </div>
          <h2 className="text-5xl md:text-[5vw] font-display font-bold text-gray-900 leading-[0.95] tracking-tighter">
            Starting a <br />
            <span className="italic holographic-text font-black text-rose-400">new Chapter.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Information & Vertical Socials */}
          <div className="lg:col-span-6 flex flex-col md:flex-row gap-12 md:gap-16">
            
            {/* VERTICAL SOCIAL BAR - Slimmer */}
            <div className="flex flex-col items-center space-y-8 border-r border-rose-50 pr-8">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="group relative flex flex-col items-center transition-all duration-700"
                >
                  <div className="text-rose-200 group-hover:text-rose-400 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                    {social.icon}
                  </div>
                  <span className="absolute left-12 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-[7px] font-bold tracking-[0.2em] text-rose-400 whitespace-nowrap bg-white border border-rose-50 px-2 py-1 rounded-full shadow-sm">
                    {social.name}
                  </span>
                </a>
              ))}
              <div className="w-px h-16 bg-gradient-to-b from-rose-100 to-transparent mt-2"></div>
            </div>

            {/* CONTACT DETAILS - REFINED & SMALLER */}
            <div className="space-y-12 pt-1">
              <div className="group cursor-default">
                <p className="text-[8px] font-black text-rose-300 uppercase tracking-[0.5em] mb-3 flex items-center">
                   <span className="w-3 h-[1px] bg-rose-200 mr-2"></span> Email
                </p>
                <a 
                  href="mailto:phammyhuong393@gmail.com" 
                  className="relative inline-block text-xl md:text-2xl lg:text-3xl font-display font-medium tracking-tight text-rose-400 hover:text-rose-500 transition-all duration-700 pb-1 group/link overflow-hidden"
                >
                  <span className="relative inline-block transition-transform duration-700 group-hover/link:translate-x-2">
                    phammyhuong393<span className="italic font-light text-rose-300 px-0.5">@</span>gmail.com
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-rose-100 scale-x-100 origin-left transition-transform duration-500 group-hover/link:scale-x-0"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-rose-400 scale-x-0 origin-left transition-transform duration-700 delay-100 group-hover/link:scale-x-100"></div>
                </a>
              </div>

              <div className="group cursor-default">
                <p className="text-[8px] font-black text-rose-300 uppercase tracking-[0.5em] mb-3 flex items-center">
                   <span className="w-3 h-[1px] bg-rose-200 mr-2"></span> Voice
                </p>
                <a 
                  href="tel:0972367457" 
                  className="inline-block text-xl md:text-2xl lg:text-3xl font-display italic font-light text-gray-400 hover:text-rose-400 transition-all duration-700 tracking-tight group/link"
                >
                  <span className="inline-block transition-transform duration-700 group-hover/link:translate-x-2">
                    +84 <span className="text-rose-300 font-bold tracking-tighter">972 367 457</span>
                  </span>
                </a>
              </div>

              <div className="pt-2">
                <div className="p-6 rounded-[30px] bg-rose-50/30 border border-rose-100/30 max-w-[240px] relative overflow-hidden group/box transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-rose-100/20">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-rose-300 scale-y-0 group-hover/box:scale-y-100 transition-transform duration-700 origin-top"></div>
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest leading-loose">
                    Open for high-end <span className="text-rose-400 font-bold">freelance</span> and creative collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Slim Minimal Form */}
          <div className="lg:col-span-6">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="NAME"
                    className="w-full bg-transparent border-b border-rose-50 py-3 focus:border-rose-300 outline-none transition-all text-sm font-light placeholder:text-[8px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-100" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-300 group-focus-within:w-full transition-all duration-700"></div>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="EMAIL"
                    className="w-full bg-transparent border-b border-rose-50 py-3 focus:border-rose-300 outline-none transition-all text-sm font-light placeholder:text-[8px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-100" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-300 group-focus-within:w-full transition-all duration-700"></div>
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  rows={1} 
                  placeholder="TELL ME ABOUT YOUR PROJECT"
                  className="w-full bg-transparent border-b border-rose-50 py-3 focus:border-rose-300 outline-none transition-all text-sm font-light placeholder:text-[8px] placeholder:font-black placeholder:tracking-[0.4em] placeholder:text-rose-100 resize-none"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-300 group-focus-within:w-full transition-all duration-700"></div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="group relative py-3 px-1 overflow-hidden">
                  <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.8em] text-gray-400 group-hover:text-rose-400 transition-all duration-500">Send Inquiry</span>
                  <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-rose-50 group-hover:bg-rose-400 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-rose-400 group-hover:w-full transition-all duration-1000"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Signature Footer - Compressed */}
        <footer className="mt-32 pt-12 border-t border-rose-50 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <h4 className="text-3xl font-display font-bold text-gray-900 tracking-tighter hover:text-rose-400 transition-colors cursor-default">HP.</h4>
            <div className="flex items-center space-x-4 text-[7px] font-black uppercase tracking-[0.4em] text-rose-200">
               <span>Visual Archive</span>
               <div className="w-1 h-1 rounded-full bg-rose-50"></div>
               <span>Edition 2025</span>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <p className="text-[8px] font-bold text-gray-300 uppercase tracking-[0.3em] italic">Saigon — Vietnam</p>
            <p className="text-[7px] font-black uppercase tracking-[0.4em] text-rose-100">© 2025 All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
