
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.2-2.1c.3-.1.6.1.6.4v3.6c1.1 1.7 1.1 3.7.1 5.6z"/></svg>
    ), href: '#', color: '#0084ff' },
    { name: 'Telegram', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
    ), href: '#', color: '#229ED9' },
    { name: 'Zalo', icon: (
      <span className="text-[8px] font-black tracking-tighter">ZALO</span>
    ), href: '#', color: '#0068ff' },
    { name: 'LinkedIn', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    ), href: '#', color: '#0077b5' },
    { name: 'Facebook', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ), href: '#', color: '#1877f2' },
    { name: 'Gmail', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ), href: 'mailto:phammyhuong393@gmail.com', color: '#ea4335' },
    { name: 'Call', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ), href: 'tel:0972367457', color: '#10b981' }
  ];

  return (
    <>
      {/* Contact Hub (Bottom Left) */}
      <div className="fixed bottom-10 left-10 z-[100] flex flex-col items-start">
        <div className={`grid grid-cols-2 gap-3 mb-5 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-bottom-left ${
          showSocials ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'
        }`}>
          {socials.map((social, i) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 bg-white/95 backdrop-blur-2xl rounded-[18px] shadow-2xl flex items-center justify-center border border-rose-50 hover:scale-110 active:scale-95 transition-all group"
              style={{ transitionDelay: `${i * 0.03}s` }}
              title={social.name}
            >
              <div style={{ color: social.color }} className="group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => setShowSocials(!showSocials)}
          className={`w-16 h-16 rounded-[24px] shadow-2xl flex items-center justify-center transition-all duration-500 overflow-hidden active:scale-90 ${
            showSocials ? 'bg-rose-500' : 'bg-gray-900'
          }`}
        >
          <div className={`transition-all duration-500 ${showSocials ? 'rotate-180' : 'rotate-0'}`}>
            {showSocials ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
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
