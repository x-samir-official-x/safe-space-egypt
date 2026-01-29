
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [history, setHistory] = useState([
    { day: 'Mon', mood: 3 },
    { day: 'Tue', mood: 4 },
    { day: 'Wed', mood: 2 },
    { day: 'Thu', mood: 4 },
    { day: 'Fri', mood: 5 },
    { day: 'Sat', mood: 3 },
    { day: 'Sun', mood: 4 }
  ]);

  const moods = [
    { value: 1, emoji: '😔', label: 'Heavy', color: 'bg-slate-100 text-slate-600' },
    { value: 2, emoji: '😕', label: 'Unsettled', color: 'bg-indigo-50 text-indigo-600' },
    { value: 3, emoji: '😐', label: 'Steady', color: 'bg-blue-50 text-blue-600' },
    { value: 4, emoji: '🙂', label: 'Balanced', color: 'bg-teal-50 text-teal-600' },
    { value: 5, emoji: '✨', label: 'Glow', color: 'bg-pink-50 text-pink-600' }
  ];

  const handleSaveMood = () => {
    if (selectedMood === null) return;
    alert("Mood recorded. Patterns are the path to understanding.");
    setSelectedMood(null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
      <div>
        <h2 className="text-4xl font-black text-slate-900 mb-2">Emotional Pulse</h2>
        <p className="text-lg text-slate-500">Listen to what your heart is telling you.</p>
      </div>

      <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">How are you feeling right now?</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-3xl mx-auto mb-12">
          {moods.map((m) => (
            <button
              key={m.value}
              onClick={() => setSelectedMood(m.value)}
              className={`flex flex-col items-center space-y-3 p-6 rounded-[2rem] transition-all transform hover:scale-105 ${
                selectedMood === m.value 
                  ? 'bg-gradient-to-br from-[#114B9A] to-[#4AB9E2] text-white shadow-xl scale-110' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-400'
              }`}
            >
              <span className="text-5xl mb-2">{m.emoji}</span>
              <span className={`text-xs font-black uppercase tracking-widest ${selectedMood === m.value ? 'text-white' : 'text-slate-400'}`}>
                {m.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSaveMood}
            disabled={selectedMood === null}
            className="px-14 py-5 bg-[#F2548B] text-white rounded-2xl font-bold text-lg shadow-xl shadow-pink-900/20 hover:bg-[#114B9A] transition-all transform hover:-translate-y-1 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
          >
            Check In Today
          </button>
        </div>
      </div>

      <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-8">Your Well-being Rhythm</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history}>
              <defs>
                <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4AB9E2" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4AB9E2" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 600 }}
                dy={15}
              />
              <YAxis 
                hide 
                domain={[0, 6]}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '16px' }}
                cursor={{ stroke: '#F2548B', strokeWidth: 2, strokeDasharray: '5 5' }}
              />
              <Area 
                type="monotone" 
                dataKey="mood" 
                stroke="#114B9A" 
                strokeWidth={5} 
                fillOpacity={1} 
                fill="url(#colorMood)"
                dot={{ fill: '#F2548B', strokeWidth: 4, stroke: '#fff', r: 7 }}
                activeDot={{ r: 10, fill: '#114B9A', stroke: '#fff', strokeWidth: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="bg-[#4AB9E2]/5 px-8 py-4 rounded-2xl border border-[#4AB9E2]/10 text-center">
            <p className="text-[#114B9A] font-bold text-sm italic">
              "Healing isn't a straight line, it's a journey of thousands of moments."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
