
import React, { useState, useEffect } from 'react';

const FloatingControls: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'Messenger', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.2-2.1c.3-.1.6.1.6.4v3.6c1.1 1.7 1.1 3.7.1 5.6z"/></svg>
    ), href: '#' },
    { name: 'Telegram', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
    ), href: '#' },
    { name: 'Zalo', icon: (
      <span className="text-[8px] font-black tracking-tighter">ZALO</span>
    ), href: '#' },
    { name: 'Facebook', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ), href: '#' },
    { name: 'Gmail', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ), href: 'mailto:phammyhuong393@gmail.com' },
    { name: 'Call', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ), href: 'tel:0972367457' }
  ];

  return (
    <>
      {/* Contact Hub (Bottom Left) - Single Vertical Column */}
      <div className="fixed bottom-10 left-10 z-[100] flex flex-col items-center">
        {/* Vertical Social List */}
        <div className={`flex flex-col-reverse gap-3 mb-5 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          showSocials ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}>
          {socials.map((social, i) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-xl flex items-center justify-center border border-rose-100 hover:bg-rose-500 hover:text-white text-rose-400 transition-all duration-500 group"
              style={{ 
                transitionDelay: showSocials ? `${i * 50}ms` : '0ms',
                transform: showSocials ? 'scale(1)' : 'scale(0.8)'
              }}
              title={social.name}
            >
              <div className="group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              {/* Tooltip Label */}
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[8px] font-black tracking-[0.3em] uppercase text-rose-500 bg-white px-3 py-1.5 rounded-full shadow-lg pointer-events-none whitespace-nowrap border border-rose-50">
                {social.name}
              </span>
            </a>
          ))}
        </div>
        
        {/* Main Hub Toggle Button (Always Rose) */}
        <button 
          onClick={() => setShowSocials(!showSocials)}
          className={`relative w-16 h-16 rounded-[24px] shadow-2xl flex items-center justify-center transition-all duration-500 active:scale-90 bg-rose-500 hover:bg-rose-600 group`}
        >
          {/* Animated Background Pulse when closed */}
          {!showSocials && (
            <div className="absolute inset-0 rounded-[24px] bg-rose-400 animate-ping opacity-20 group-hover:opacity-0"></div>
          )}
          
          <div className={`transition-all duration-700 ${showSocials ? 'rotate-[225deg]' : 'rotate-0'}`}>
            {showSocials ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.2-2.1c.3-.1.6.1.6.4v3.6c1.1 1.7 1.1 3.7.1 5.6z"/></svg>
            )}
          </div>
        </button>
      </div>

      {/* Back to Top (Bottom Right) */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 z-[100] w-16 h-16 bg-white/90 backdrop-blur-xl border border-rose-100 rounded-[24px] shadow-2xl flex items-center justify-center transition-all duration-1000 active:scale-90 group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32 pointer-events-none'
        }`}
      >
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
          strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" 
          className="text-rose-400 group-hover:-translate-y-2 transition-transform duration-500"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
};

export default FloatingControls;
