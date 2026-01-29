
import React from 'react';
import { LOGO_COMPONENT, BRANDING, COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12">{LOGO_COMPONENT()}</div>
              <span className="text-2xl font-bold text-slate-900">
                {BRANDING.name.first} <span style={{ color: COLORS.accent }}>{BRANDING.name.second}</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {BRANDING.tagline}. Providing a bridge to mental well-being for the youth of Egypt. Stigma-free and secure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h5 className="font-black uppercase tracking-widest text-xs text-slate-900 mb-6">Explore</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#ai-friend" className="hover:text-[#114B9A]">Safe Friend</a></li>
                <li><a href="#wellness" className="hover:text-[#114B9A]">Wellness Tool</a></li>
                <li><a href="#library" className="hover:text-[#114B9A]">Resources</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black uppercase tracking-widest text-xs text-slate-900 mb-6">Connect</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#114B9A]">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#114B9A]">About Our Mission</a></li>
                <li><a href="#" className="hover:text-[#114B9A]">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] border max-w-sm" style={{ backgroundColor: `${COLORS.accent}08`, borderColor: `${COLORS.accent}20` }}>
            <h5 className="font-bold mb-3" style={{ color: COLORS.accent }}>Emergency?</h5>
            <p className="text-sm text-slate-600 mb-4">If you are in immediate danger or in crisis, please call the Egypt National Mental Health Line:</p>
            <p className="text-2xl font-black" style={{ color: COLORS.accent }}>{BRANDING.emergencyPhone}</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          © {new Date().getFullYear()} {BRANDING.name.full} Sanctuary. Dedicated to the youth of {BRANDING.location}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
