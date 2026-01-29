
import React from 'react';
import { LOGO_SVG } from '../constants';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-1000">
      <div className="w-32 h-32 animate-pulse mb-6">
        {LOGO_SVG}
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-800 animate-fade-in">
        Safe <span className="text-[#F2548B]">Space</span>
      </h1>
      <div className="mt-8 flex space-x-2">
        <div className="w-2 h-2 bg-[#4AB9E2] rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-[#114B9A] rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-[#F2548B] rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
