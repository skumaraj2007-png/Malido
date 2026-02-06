
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-5 lg:px-12 ${isScrolled ? 'bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-4' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`p-1.5 rounded-2xl border transition-all duration-500 flex items-center justify-center overflow-hidden ${isScrolled ? 'bg-stone-900 border-stone-800' : 'bg-white/10 border-white/20 backdrop-blur-xl group-hover:bg-white/20'}`}>
            <Logo className={`w-10 h-10 transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-white'}`} />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${isScrolled ? 'text-stone-900' : 'text-white'}`}>Malido.</span>
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-1 border rounded-full p-1.5 px-2 transition-all duration-500 ${isScrolled ? 'bg-stone-100/50 border-stone-200' : 'bg-white/10 border-white/10 backdrop-blur-md'}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all ${isScrolled ? 'text-stone-500 hover:text-stone-900 hover:bg-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#location" className={`w-11 h-11 flex items-center justify-center rounded-2xl border transition-all duration-500 ${isScrolled ? 'bg-stone-100 border-stone-200 text-stone-900 hover:bg-stone-200' : 'bg-white/10 border-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}>
            <MapPin className="w-4 h-4" />
          </a>
          <a href="#reservation" className={`group flex items-center gap-4 pl-6 pr-2 py-2 rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-xl shadow-stone-900/10' : 'bg-white text-stone-900 shadow-2xl shadow-black/20'}`}>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Book Table</span>
            <span className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isScrolled ? 'bg-white/10' : 'bg-stone-900 group-hover:bg-stone-700'}`}>
              <Calendar className="w-4 h-4 text-white" />
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-3 rounded-2xl border transition-all ${isScrolled ? 'bg-stone-100 border-stone-200 text-stone-900' : 'bg-white/10 border-white/10 text-white backdrop-blur-md'}`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden mt-6 bg-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-stone-100"
          >
            <div className="p-8 space-y-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-serif text-stone-900 p-2 hover:bg-stone-50 rounded-2xl"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 mt-6 border-t border-stone-100 flex flex-col gap-4">
                <a href="#reservation" className="flex items-center justify-center gap-4 p-5 bg-stone-900 rounded-3xl text-white font-black uppercase tracking-[0.2em]">
                  <Calendar className="w-5 h-5" />
                  <span>Reserve Spot</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
