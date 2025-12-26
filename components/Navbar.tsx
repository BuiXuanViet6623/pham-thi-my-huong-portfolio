
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'project' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
      href: 'https://facebook.com' 
    },
    { 
      name: 'Zalo', 
      icon: <span className="font-black text-[8px] tracking-tighter leading-none border border-current px-0.5 rounded-[2px]">ZALO</span>, 
      href: '#' 
    },
    { 
      name: 'Telegram', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>, 
      href: '#' 
    },
    { 
      name: 'Messenger', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.2-2.1c.3-.1.6.1.6.4v3.6c1.1 1.7 1.1 3.7.1 5.6z"/></svg>, 
      href: '#' 
    },
    { 
      name: 'Call', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, 
      href: 'tel:0972367457' 
    }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScrolled(scrolled > 50);
      
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalHeight = docHeight - winHeight;
      const progress = (scrolled / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = menuItems.map(item => item.id);
      let currentSection = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[500] w-full transition-all duration-700 ${
      isScrolled ? 'py-0' : 'py-2'
    }`}>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] z-[510] transition-all duration-150 ease-out" 
        style={{ 
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #E87A90, #FFC0CB, #6366f1, #E87A90)'
        }}
      ></div>

      <nav className={`w-full px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        {/* Branding */}
        <div className="relative z-[600]">
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="flex flex-col group">
            <span className="text-lg md:text-xl font-display font-bold tracking-tighter text-gray-900 group-hover:text-rose-500 transition-colors">
              Pham Thi My Huong
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-rose-400 font-bold mt-0.5">
              Graphic Designer
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-[9px] uppercase tracking-[0.5em] font-bold transition-all relative group py-2 ${
                  isActive ? 'text-rose-500' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-rose-400 transition-all duration-500 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Right Action Icons & Mobile Toggle */}
        <div className="flex items-center space-x-4 relative z-[600]">
          <div className="hidden sm:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-500 transition-all transform hover:-translate-y-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none bg-gray-900 rounded-full transition-transform active:scale-90"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-white z-[400] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col pt-32 pb-12 px-6 ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        {/* Navigation Links */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          {menuItems.map((item, idx) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="block group text-center"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className={`text-4xl font-display font-medium tracking-tighter transition-all duration-500 ${
                activeSection === item.id ? 'italic holographic-text font-black' : 'text-gray-300'
              }`}>
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Socials Footer - Always 1 row */}
        <div className="mt-auto pt-8 border-t border-rose-50">
          <div className="flex flex-row justify-center items-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group w-14"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-rose-500 group-hover:text-white transition-all mb-1.5">
                  {social.icon}
                </div>
                <span className="text-[7px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-rose-500 truncate w-full text-center">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
          <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-gray-300 text-center">© 2025 Huong Pham</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
