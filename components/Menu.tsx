
import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { MENU_ITEMS } from '../constants';
import { Download, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Menu: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Main' | 'Drinks' | 'Bakery'>('All');
  
  const filteredItems = filter === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  const categories = ['All', 'Main', 'Drinks', 'Bakery'] as const;

  return (
    <SectionWrapper id="menu">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-stone-400 font-semibold uppercase text-xs tracking-[0.2em] mb-4 block">Curated Selection</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Menu Highlights</h2>
          <p className="text-stone-500 font-light text-lg">Taste the intersection of heritage techniques and modern flavors.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-stone-900 text-white shadow-lg' : 'bg-white text-stone-500 hover:bg-stone-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white p-3 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-stone-100"
            >
              <div className="h-72 rounded-[2rem] overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.name} 
                />
                {item.isBestseller && (
                  <div className="absolute top-5 right-5 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-900 shadow-sm">
                    Bestseller
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                    <ArrowUpRight className="w-6 h-6 text-stone-900" />
                  </div>
                </div>
              </div>
              
              <div className="px-5 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">{item.name}</h3>
                  <span className="text-lg font-serif font-medium text-stone-900">{item.price}</span>
                </div>
                <p className="text-stone-400 text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between border-t border-stone-50 pt-4">
                  <span className="text-xs font-bold text-stone-300 uppercase tracking-widest">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="mt-20 text-center">
        <button className="inline-flex items-center gap-3 bg-stone-100 text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-200 transition-all">
          <Download className="w-5 h-5" />
          Download Full Menu (PDF)
        </button>
      </div>
    </SectionWrapper>
  );
};
