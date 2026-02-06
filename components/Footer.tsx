
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 bg-white rounded-t-[4rem] pt-24 pb-12 px-8 lg:px-20 border-t border-stone-100 shadow-[0_-32px_64px_-16px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-stone-900 p-2 rounded-2xl flex items-center justify-center">
                <Logo className="w-12 h-12 text-white" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-stone-900">Malido.</span>
            </div>
            <div className="flex items-start gap-4 text-stone-500 mb-8">
              <MapPin className="w-5 h-5 shrink-0 text-amber-600 mt-1" />
              <p className="text-base font-light leading-relaxed">
                15-17-19, Ground Floor, Bharthania Building, C Block, <br />
                Burjorji Bharucha Marg, Kala Ghoda, Fort, Mumbai, <br />
                Maharashtra 400001, India.
              </p>
            </div>
            <div className="flex gap-5">
              <a href="https://instagram.com/malido.kalaghoda" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-3xl bg-stone-50 flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-500 border border-stone-100">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-3xl bg-stone-50 flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-500 border border-stone-100">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-3xl bg-stone-50 flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-500 border border-stone-100">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-stone-900 font-black uppercase text-[10px] tracking-[0.3em] mb-10">Operating Hours</h4>
            <ul className="space-y-6 text-stone-500 text-sm font-medium">
              <li>
                <span className="block text-stone-300 font-bold uppercase tracking-widest mb-1 text-[9px]">Dine-In (Daily)</span>
                <span className="text-lg text-stone-800">8:00 AM — 11:30 PM</span>
              </li>
              <li>
                <span className="block text-stone-300 font-bold uppercase tracking-widest mb-1 text-[9px]">Specialized Services</span>
                <span className="text-stone-400">10:00 AM — 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-900 font-black uppercase text-[10px] tracking-[0.3em] mb-10">Navigation</h4>
            <ul className="space-y-6">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-stone-500 font-medium hover:text-stone-900 transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-900 font-black uppercase text-[10px] tracking-[0.3em] mb-10">Inquiries</h4>
            <a href="tel:+919076420030" className="text-stone-500 hover:text-stone-900 transition-colors text-lg font-medium">
              +91 90764 20030
            </a>
            <p className="mt-4 text-stone-400 text-xs font-light">
              Press & collaborations:<br />
              <a href="mailto:hello@malido.cafe" className="underline hover:text-stone-900">hello@malido.cafe</a>
            </p>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-stone-300 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-4">
            <span>© 2023–2025 Malido Cafe & Apéro</span>
            <span className="w-1 h-1 bg-stone-200 rounded-full"></span>
            <span>Fort, Mumbai</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-stone-900 transition-colors">Legacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
