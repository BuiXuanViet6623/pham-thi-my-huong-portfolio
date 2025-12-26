
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECT', id: 'project' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ), href: '#' },
    { name: 'LinkedIn', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    ), href: '#' },
    { name: 'Instagram', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ), href: '#' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed navbar height
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
          // Adjust detection logic to be more sensitive to the top of the viewport
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
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-700 ${
      isScrolled ? 'py-0' : 'py-4'
    }`}>
      {/* Gradient Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] z-[110] transition-all duration-150 ease-out shadow-sm" 
        style={{ 
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #E87A90, #FFC0CB, #6366f1, #E87A90)'
        }}
      ></div>

      <nav className={`w-full px-8 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-2xl border-b border-rose-50 shadow-sm' : 'bg-transparent'
      }`}>
        {/* Left: Name & Position */}
        <div className="flex-1 flex justify-start">
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="flex flex-col group">
            <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-gray-900 group-hover:text-rose-500 transition-colors">
              Pham Thi My Huong
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-rose-400 font-bold mt-1">
              Graphic Designer
            </span>
          </a>
        </div>

        {/* Center: Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-[10px] uppercase tracking-[0.5em] font-bold transition-all relative group py-2 ${
                  isActive ? 'text-rose-500 scale-110' : 'text-gray-400 hover:text-gray-600'
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

        {/* Right: Socials & Hire Me */}
        <div className="flex-1 flex items-center justify-end space-x-6">
          <div className="hidden sm:flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                className="text-gray-400 hover:text-rose-500 transition-all transform hover:-translate-y-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-gray-200 hidden sm:block mx-1"></div>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="text-[10px] font-bold uppercase tracking-widest text-white bg-gray-900 px-7 py-3 rounded-full hover:bg-rose-500 transition-all shadow-xl shadow-gray-900/10 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
