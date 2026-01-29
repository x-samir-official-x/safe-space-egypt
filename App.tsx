
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import SafeChat from './components/SafeChat';
import MoodTracker from './components/MoodTracker';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-white selection:bg-[#F2548B]/20 selection:text-[#F2548B]">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="mission" className="py-24 bg-white">
          <Mission />
        </section>
        
        <section id="ai-friend" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#114B9A] font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full">Immediate Support</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">Speak with your Safe Friend</h2>
              <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">A compassionate AI companion designed to listen without judgment. No accounts are required, and your identity remains entirely yours.</p>
            </div>
            <SafeChat />
          </div>
        </section>

        <section id="wellness" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#F2548B] font-bold uppercase tracking-widest text-sm bg-pink-50 px-4 py-1.5 rounded-full">Self-Discovery</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">The Wellness Pulse</h2>
              <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">Checking in with yourself is an act of courage. Use our tracker to visualize your emotional journey over time.</p>
            </div>
            <MoodTracker />
          </div>
        </section>

        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <Testimonials />
        </section>

        <section id="library" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[#4AB9E2] font-bold uppercase tracking-widest text-sm">Empowerment</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">Support Library</h2>
              <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">Knowledge is a shield. Explore verified articles on anxiety, student life in Ismailia, and mental resilience.</p>
            </div>
            <Resources />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
