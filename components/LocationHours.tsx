
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { MapPin, Phone, Instagram, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const LocationHours: React.FC = () => {
  return (
    <SectionWrapper id="location" className="py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-stone-900 rounded-[4rem] overflow-hidden shadow-3xl text-white">
        {/* Left Side: Visual/Map Placeholder */}
        <div className="relative min-h-[500px] overflow-hidden group">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_3840w.jpg" 
            alt="Kala Ghoda Art District" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-white text-stone-900 rounded-full flex items-center justify-center mb-8 shadow-2xl"
            >
              <MapPin className="w-8 h-8" />
            </motion.div>
            <h3 className="text-3xl font-serif mb-4">Kala Ghoda, Mumbai</h3>
            <p className="text-stone-300 font-light max-w-xs mx-auto text-lg leading-relaxed">
              Find us in the historic heart of the South Mumbai Art District.
            </p>
            <motion.a 
              href="https://maps.google.com/?q=15-17-19,+Ground+Floor,+Bharthania+Building,+C+Block,+Burjorji+Bharucha+Marg,+Kala+Ghoda,+Fort,+Mumbai,+Maharashtra+400001,+India"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="mt-10 flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-xs border-b border-amber-500/30 pb-2 hover:border-amber-500 transition-all"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="p-12 lg:p-20 flex flex-col justify-center">
          <div className="space-y-16">
            {/* Address & Contact */}
            <div>
              <span className="text-amber-500 font-black uppercase text-[10px] tracking-[0.4em] mb-6 block">Location & Contact</span>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <MapPin className="w-6 h-6 text-stone-500 shrink-0 mt-1" />
                  <p className="text-xl font-light leading-relaxed text-stone-200">
                    15-17-19, Ground Floor, Bharthania Building, C Block, Burjorji Bharucha Marg, Kala Ghoda, Fort, Mumbai 400001.
                  </p>
                </div>
                <div className="flex flex-wrap gap-10">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-stone-500" />
                    <a href="tel:+919076420030" className="text-lg font-bold hover:text-amber-500 transition-colors">+91 90764 20030</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="w-5 h-5 text-stone-500" />
                    <a href="https://instagram.com/malido.kalaghoda" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-amber-500 transition-colors">@malido.kalaghoda</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="pt-12 border-t border-stone-800">
              <span className="text-amber-500 font-black uppercase text-[10px] tracking-[0.4em] mb-6 block">Standard Operating Hours</span>
              <div className="flex items-start gap-6">
                <Clock className="w-6 h-6 text-stone-500 shrink-0 mt-1" />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-3xl font-serif text-white">8:00 AM – 11:30 PM</h4>
                    <p className="text-stone-500 font-medium uppercase tracking-widest text-[9px] mt-2">Open Daily for Dine-In</p>
                  </div>
                  <p className="text-stone-400 text-sm font-light italic max-w-sm">
                    Note: Specialized delivery services may operate between 10:00 AM – 6:00 PM. We invite you to stay late for the evening Apéro experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
