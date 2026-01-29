
import React from 'react';
import { LOGO_COMPONENT, BRANDING, COLORS } from '../constants';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-1000">
      <div className="w-40 h-40 animate-pulse mb-6">
        {LOGO_COMPONENT()}
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-800">
        {BRANDING.name.first} <span style={{ color: COLORS.accent }}>{BRANDING.name.second}</span>
      </h1>
      <p className="mt-2 text-slate-400 font-medium tracking-widest uppercase text-xs">{BRANDING.tagline}</p>
      <div className="mt-8 flex space-x-2">
        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: COLORS.secondary }}></div>
        <div className="w-2 h-2 rounded-full animate-bounce [animation-delay:0.2s]" style={{ backgroundColor: COLORS.primary }}></div>
        <div className="w-2 h-2 rounded-full animate-bounce [animation-delay:0.4s]" style={{ backgroundColor: COLORS.accent }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
