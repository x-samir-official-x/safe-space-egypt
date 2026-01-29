
import React from 'react';

const Mission: React.FC = () => {
  const pillars = [
    {
      title: "Total Anonymity",
      desc: "No accounts, no numbers, no tracking. Your safe space is truly yours.",
      icon: "🔒"
    },
    {
      title: "Stigma-Free",
      desc: "Cultural understanding built for Egypt's youth. Mental health is health.",
      icon: "🌱"
    },
    {
      title: "Local Connection",
      desc: "Resources tailored for students of Suez Canal University and the Ismailia community.",
      icon: "📍"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Built for the youth of <span className="text-[#114B9A]">Ismailia</span>,<br /> 
            open to all of <span className="text-[#F2548B]">Egypt</span>.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-10">
            Safe Space was born from a simple belief: no one should have to navigate emotional turbulence alone. We provide a bridge between silence and support, using modern AI to offer immediate comfort while protecting your absolute privacy.
          </p>
          <div className="space-y-8">
            {pillars.map((p, i) => (
              <div key={i} className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-xl">{p.title}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#114B9A] to-[#F2548B] rounded-[3rem] opacity-10 blur-xl"></div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-100 flex items-center justify-center p-12 text-center">
               <div className="space-y-6">
                 <div className="text-7xl">🕊️</div>
                 <h3 className="text-3xl font-black text-slate-800">Your calm starts here.</h3>
                 <p className="text-slate-500 italic text-lg leading-relaxed">"Healing is not a destination, but a way of moving through the world."</p>
                 <div className="pt-4">
                   <div className="w-12 h-1 bg-[#F2548B] mx-auto rounded-full"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
