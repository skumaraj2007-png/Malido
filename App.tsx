
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { LocationHours } from './components/LocationHours';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#F9F8F6]">
      <Navbar />
      
      <main className="pt-2 md:pt-4">
        <Hero />
        
        {/* Experience Showcase */}
        <section className="mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-stone-900 text-white rounded-[4rem] p-12 lg:p-24 relative overflow-hidden group shadow-[0_48px_100px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 opacity-15 transition-transform duration-[2000ms] group-hover:scale-110">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbd5f95a-c6f8-4fdc-b784-5bc8291b4621_3840w.jpg" 
                alt="Malido Texture" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="relative z-10 text-center mb-24">
              <span className="text-amber-500 font-black uppercase text-[10px] tracking-[0.4em] mb-6 block">The Malido Concept</span>
              <h2 className="text-5xl sm:text-7xl font-serif mb-10 max-w-3xl mx-auto leading-[1.1]">The art of <span className="italic">Apéro</span> culture.</h2>
              <p className="text-stone-400 text-xl font-light max-w-xl mx-auto">From morning artisan roasts to sunset moonlit conversations.</p>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-8 text-center group/item">
                <div className="text-6xl font-serif text-amber-600/30 group-hover/item:text-amber-600 transition-colors duration-500 italic">40.</div>
                <h3 className="text-2xl font-bold tracking-tight">Intimate Seating</h3>
                <p className="text-stone-400 font-light leading-relaxed text-lg">Curated seating designed for deep focus and genuine artistic connection.</p>
              </div>
              <div className="space-y-8 text-center group/item">
                <div className="text-6xl font-serif text-amber-600/30 group-hover/item:text-amber-600 transition-colors duration-500 italic">01.</div>
                <h3 className="text-2xl font-bold tracking-tight">Art District</h3>
                <p className="text-stone-400 font-light leading-relaxed text-lg">Located in the heart of Kala Ghoda, surrounded by heritage and galleries.</p>
              </div>
              <div className="space-y-8 text-center group/item">
                <div className="text-6xl font-serif text-amber-600/30 group-hover/item:text-amber-600 transition-colors duration-500 italic">PM.</div>
                <h3 className="text-2xl font-bold tracking-tight">Sunset Transition</h3>
                <p className="text-stone-400 font-light leading-relaxed text-lg">Watch our calm aesthetic evolve into a warm, intimate apéro lounge.</p>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Menu />
        <Gallery />
        <LocationHours />
        <Reservation />
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;
