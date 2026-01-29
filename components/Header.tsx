
import React, { useState, useEffect } from 'react';
import { LOGO_COMPONENT, BRANDING, COLORS } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
            {LOGO_COMPONENT()}
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">
            {BRANDING.name.first} <span style={{ color: COLORS.accent }}>{BRANDING.name.second}</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { id: 'mission', label: 'Mission' },
            { id: 'ai-friend', label: 'Safe Friend' },
            { id: 'wellness', label: 'Wellness' },
            { id: 'library', label: 'Library' }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollTo(item.id)}
              className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#114B9A] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('ai-friend')}
            className="px-7 py-3 text-white rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-900/10 active:scale-95"
            style={{ backgroundColor: COLORS.primary }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
          >
            Connect Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
