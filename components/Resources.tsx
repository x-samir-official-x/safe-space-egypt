
import React from 'react';

const Resources: React.FC = () => {
  const library = [
    { title: "Exam Resilience", desc: "Techniques specifically for Suez Canal University students.", icon: "📚", tag: "Study stress" },
    { title: "Calm Breath", desc: "A guided 4-7-8 technique for immediate panic relief.", icon: "🌬️", tag: "Tool" },
    { title: "Sleep Sanctuary", desc: "Building a ritual to silence the nighttime noise.", icon: "🌙", tag: "Health" },
    { title: "Social Ease", desc: "Navigating large gatherings in Ismailia with confidence.", icon: "🤝", tag: "Anxiety" },
    { title: "Self-Compassion", desc: "A guide to being as kind to yourself as you are to others.", icon: "✨", tag: "Self-help" },
    { title: "Crisis Links", desc: "Verified emergency mental health numbers in Egypt.", icon: "🆘", tag: "Emergency" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {library.map((item, i) => (
        <div key={i} className="group p-8 bg-slate-800 rounded-[2.5rem] border border-slate-700 hover:border-[#4AB9E2] transition-all cursor-pointer hover:bg-slate-800/50">
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4AB9E2] mb-3 block">{item.tag}</span>
          <h4 className="text-xl font-bold mb-3">{item.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
          <span className="text-xs font-bold group-hover:text-[#F2548B] transition-colors">Read Full Resource →</span>
        </div>
      ))}
    </div>
  );
};

export default Resources;
