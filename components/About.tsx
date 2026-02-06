
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { History, Heart, Sparkles, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-bold uppercase text-xs tracking-[0.3em] mb-6 block">Legacy & Heritage</span>
            <h2 className="text-4xl sm:text-6xl font-serif text-stone-900 mb-8 leading-[1.1]">
              A Soulful Intersection of <span className="italic">History</span> and <span className="italic">Art</span>
            </h2>
            
            <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed mb-12">
              <p>
                Founded in 2023 by the mother-son duo <span className="font-semibold text-stone-900">Kermeen and Neville Bose</span>, Malido Cafe & Apéro is more than a 40-seater sanctuary—it's a living tribute to a legendary lineage.
              </p>
              <p>
                Nestled in the vibrant <span className="font-semibold text-stone-900">Art District of South Mumbai</span>, our space reflects the grace of Neville's great-granduncle, Netaji Subhash Chandra Bose, blending historical weight with contemporary calm.
              </p>
              <p className="italic bg-stone-100 p-6 rounded-3xl border-l-4 border-stone-300">
                "Malido" refers to a traditional Parsi wheat and ghee pudding, but it also carries the soul of Pashto, meaning "finely crushed"—a metaphor for the delicate balance of flavors we serve.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-stone-200 pt-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 rounded-2xl text-white">
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xl font-bold text-stone-900">Est. 2023</span>
                  <span className="text-sm text-stone-400 font-medium tracking-tight">Heritage Reimagined</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 rounded-2xl text-white">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xl font-bold text-stone-900">South Mumbai</span>
                  <span className="text-sm text-stone-400 font-medium tracking-tight">Art District Hub</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] z-10"
            >
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6586e163-951e-453e-abaa-5e04803575da_1600w.webp" 
                alt="Malido Cafe Interior" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/90 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-3">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Atmosphere</span>
                  </div>
                  <p className="text-stone-900 font-medium text-lg leading-tight">
                    Transitions from a calm morning retreat into an intimate, moonlit Apéro.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply opacity-60 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-stone-200 rounded-full mix-blend-multiply opacity-60 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
