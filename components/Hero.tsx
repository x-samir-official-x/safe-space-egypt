
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="pt-40 pb-20 md:pt-64 md:pb-40 flex flex-col items-center text-center px-6">
      <div className="max-w-4xl animate-fade-in">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-[#114B9A] uppercase bg-[#4AB9E2]/10 rounded-full">
          Ismailia's Mental Health Sanctuary
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
          Balance your <span className="text-[#4AB9E2]">Mind</span>,<br />
          Embrace your <span className="text-[#F2548B]">Heart</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          The first digital sanctuary in Egypt dedicated to providing young adults with stigma-free, confidential, and immediate psychological support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('ai-friend')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-[#114B9A] text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-blue-900/20 hover:bg-[#F2548B] transition-all transform hover:-translate-y-1"
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
