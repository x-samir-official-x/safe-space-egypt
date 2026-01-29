
import React from 'react';
import { BRANDING, COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="pt-40 pb-20 md:pt-64 md:pb-40 flex flex-col items-center text-center px-6">
      <div className="max-w-4xl animate-fade-in">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase rounded-full" style={{ color: COLORS.primary, backgroundColor: `${COLORS.secondary}15` }}>
          {BRANDING.location}'s Mental Health Sanctuary
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
          {BRANDING.name.first}{BRANDING.name.second}: <br />
          <span style={{ color: COLORS.accent }}>Your Place</span> <span style={{ color: COLORS.secondary }}>To Heal</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          {BRANDING.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('ai-friend')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 text-white rounded-[2rem] font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1"
            style={{ backgroundColor: COLORS.primary, boxShadow: `0 20px 25px -5px ${COLORS.primary}33` }}
          >
            Speak with Safe Friend
          </button>
          <button 
            onClick={() => document.getElementById('wellness')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 border border-slate-200 rounded-[2rem] font-bold text-lg hover:bg-slate-50 transition-all"
          >
            Explore Wellness
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
