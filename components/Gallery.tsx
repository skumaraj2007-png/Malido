
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

const IMAGES = [
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acbf0ca-a573-48bb-8153-e1d57e4604ce_1600w.webp",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41a7086c-63e9-428d-975e-179c8863bfd5_800w.webp",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_800w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f951c57b-e8fe-4421-8181-b1d3d87f210e_800w.webp"
];

export const Gallery: React.FC = () => {
  return (
    <SectionWrapper id="gallery">
      <div className="text-center mb-16">
        <span className="text-stone-400 font-semibold uppercase text-xs tracking-[0.2em] mb-4 block">Instagrammable Moments</span>
        <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">A Visual Taste</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[500px] md:h-[700px]">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="col-span-2 md:col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden group shadow-xl"
        >
          <img src={IMAGES[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Cocktails" />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="col-span-1 rounded-[2.5rem] overflow-hidden group shadow-lg"
        >
          <img src={IMAGES[1]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Coffee Art" />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden group shadow-lg"
        >
          <img src={IMAGES[2]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Interior" />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="col-span-1 rounded-[2.5rem] overflow-hidden group shadow-lg"
        >
          <img src={IMAGES[3]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Breakfast" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
