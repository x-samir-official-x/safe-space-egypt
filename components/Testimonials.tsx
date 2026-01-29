
import React from 'react';

const Testimonials: React.FC = () => {
  const quotes = [
    {
      text: "I didn't think talking to an AI would help, but the Safe Friend actually listened when I was overwhelmed by my exams at SCU. It felt like a weight lifted.",
      author: "Student, Ismailia",
      color: "border-blue-100"
    },
    {
      text: "The privacy is what mattered most. In our culture, it's hard to talk about stress, but here I can be 100% honest without any judgment.",
      author: "Young Professional, Cairo",
      color: "border-pink-100"
    },
    {
      text: "The mood tracker helps me see patterns I never noticed. It makes me feel like I have control over my emotions for the first time.",
      author: "Artist, Port Said",
      color: "border-teal-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Voices from the Space</h3>
        <p className="text-slate-500 mt-4 text-lg">Real, anonymous impact from our community.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {quotes.map((q, i) => (
          <div key={i} className={`p-10 bg-white rounded-[2.5rem] border-b-4 ${q.color} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
            <div className="text-[#114B9A] text-5xl mb-6 opacity-20 font-serif">“</div>
            <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
              {q.text}
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-1 bg-slate-200"></div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">{q.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
