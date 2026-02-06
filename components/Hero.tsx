
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[98vh] min-h-[750px] rounded-[3.5rem] overflow-hidden bg-stone-950 shadow-2xl m-2 sm:m-4 lg:m-6 mt-0">
      {/* Background Image */}
      <motion.img 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc54d896-37cc-467a-b91c-8aaee392ee33_3840w.webp" 
        alt="Malido Cafe & Apéro" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-stone-900/20 to-stone-950/90"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-6 py-2 mb-10 text-[10px] font-black tracking-[0.4em] text-white uppercase bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 shadow-2xl"
          >
            South Mumbai Art District
          </motion.span>
          
          <h1 className="text-6xl sm:text-8xl lg:text-[10rem] text-white font-serif tracking-tighter leading-[0.9] mb-10 max-w-6xl mx-auto">
            Heritage <br/><span className="italic font-light">meets</span> <br/>Modern Calm.
          </h1>
          
          <p className="text-lg sm:text-2xl text-white/60 font-light leading-relaxed mb-14 max-w-2xl mx-auto">
            A 40-seater legacy sanctuary by Kermeen and Neville Bose. Taste the tradition of Parsi Malido.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#menu" 
              className="group inline-flex items-center gap-6 bg-white text-stone-900 pl-10 pr-3 py-3 rounded-3xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em]">Explore Menu</span>
              <span className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowDown className="w-6 h-6 text-white" />
              </span>
            </motion.a>
            
            <a href="#about" className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs hover:text-white transition-colors py-4 border-b border-white/20 hover:border-white">
              Discover Our Legacy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Design Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-stone-100/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    </header>
  );
};
