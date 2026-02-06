
import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Phone, Instagram, Check, Calendar as CalendarIcon, Users, User, Clock, Loader2, AlertCircle, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Reservation: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [guestCount, setGuestCount] = useState<string>('2');
  const [timeValue, setTimeValue] = useState<string>('19:00');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Add custom values to form data if needed (they are already in inputs/selects usually, 
    // but here we ensure our custom state is captured)
    formData.set('guests', guestCount);
    
    try {
      const response = await fetch('https://formspree.io/f/xwvneygq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
        setGuestCount('2');
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  const guestOptions = ['1', '2', '3', '4', '5', '6+'];

  return (
    <SectionWrapper id="reservation" className="mb-32">
      <div className="bg-white rounded-[4rem] p-8 sm:p-12 lg:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-stone-50 flex flex-col lg:flex-row gap-16 lg:gap-24 overflow-hidden relative">
        
        {/* Artistic Background Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-stone-100 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="lg:w-2/5 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-stone-400 font-bold uppercase text-[10px] tracking-[0.4em]">Exclusivity</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-serif text-stone-900 mb-8 leading-[1.1] tracking-tighter">
              Secure your <br/><span className="italic font-light">Art District</span> table.
            </h2>
            <p className="text-stone-500 text-xl font-light mb-12 max-w-sm leading-relaxed">
              With only 40 seats, our space offers a curated intimacy. Reserve for the morning calm or the moonlit Apéro.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-[2rem] bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-stone-300 uppercase tracking-[0.3em] mb-1">Direct Line</span>
                  <a href="tel:+919076420030" className="text-2xl font-bold text-stone-900 hover:text-amber-600 transition-colors">+91 90764 20030</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-[2rem] bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 group-hover:-rotate-12">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-stone-300 uppercase tracking-[0.3em] mb-1">Inspirations</span>
                  <a href="https://instagram.com/malido.kalaghoda" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-stone-900 hover:text-amber-600 transition-colors">@malido.kalaghoda</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-3/5 z-10">
          <div className="bg-[#FDFDFD] rounded-[3rem] p-1 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)] border border-stone-100 overflow-hidden min-h-[500px] flex flex-col">
            <AnimatePresence mode="wait">
              {status === 'SUCCESS' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center p-12"
                >
                  <div className="w-24 h-24 bg-stone-900 text-white rounded-[2.5rem] flex items-center justify-center mb-8 shadow-2xl rotate-3">
                    <Check className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-serif text-stone-900 mb-4">Legacy Reserved.</h3>
                  <p className="text-stone-500 text-lg font-light max-w-sm">We have received your request. Our concierge will reach out via phone to confirm your selection.</p>
                  <button 
                    onClick={() => setStatus('IDLE')}
                    className="mt-12 group flex items-center gap-3 text-stone-900 font-bold uppercase tracking-[0.2em] text-[10px] border-b-2 border-stone-900/10 pb-2 hover:border-stone-900 transition-all"
                  >
                    Request Another Date <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="p-8 md:p-12 space-y-10"
                >
                  {/* Guest Selection - Premium Pills */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] px-2">
                      <Users className="w-4 h-4 text-amber-500" /> Party Size
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {guestOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setGuestCount(opt)}
                          className={`flex-1 min-w-[60px] py-4 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                            guestCount === opt 
                              ? 'bg-stone-900 border-stone-900 text-white shadow-xl scale-105' 
                              : 'bg-white border-stone-100 text-stone-500 hover:border-stone-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="guests" value={guestCount} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Date Selection */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] px-2">
                        <CalendarIcon className="w-4 h-4 text-amber-500" /> Select Date
                      </label>
                      <div className="relative group">
                        <input 
                          required
                          name="date"
                          type="date" 
                          className="w-full bg-white border border-stone-100 rounded-[1.5rem] px-6 py-5 text-stone-900 font-medium focus:ring-4 focus:ring-stone-900/5 outline-none shadow-sm hover:shadow-md transition-all appearance-none" 
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-300 group-hover:text-stone-900 transition-colors">
                          <CalendarIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] px-2">
                        <Clock className="w-4 h-4 text-amber-500" /> Arrival Time
                      </label>
                      <div className="relative group">
                        <input 
                          required
                          name="time"
                          type="time" 
                          value={timeValue}
                          onChange={(e) => setTimeValue(e.target.value)}
                          className="w-full bg-white border border-stone-100 rounded-[1.5rem] px-6 py-5 text-stone-900 font-medium focus:ring-4 focus:ring-stone-900/5 outline-none shadow-sm hover:shadow-md transition-all appearance-none" 
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-300 group-hover:text-stone-900 transition-colors">
                          <Clock className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Name & Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] px-2">
                        <User className="w-4 h-4 text-amber-500" /> Host Name
                      </label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="e.g. Neville Bose" 
                        className="w-full bg-white border border-stone-100 rounded-[1.5rem] px-6 py-5 text-stone-900 font-medium placeholder-stone-200 focus:ring-4 focus:ring-stone-900/5 outline-none shadow-sm transition-all" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] px-2">
                        <Phone className="w-4 h-4 text-amber-500" /> Contact Number
                      </label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        placeholder="+91 00000 00000" 
                        className="w-full bg-white border border-stone-100 rounded-[1.5rem] px-6 py-5 text-stone-900 font-medium placeholder-stone-200 focus:ring-4 focus:ring-stone-900/5 outline-none shadow-sm transition-all" 
                      />
                    </div>
                  </div>
                  
                  {status === 'ERROR' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 text-red-600 text-xs font-bold bg-red-50 p-4 rounded-2xl border border-red-100"
                    >
                      <AlertCircle className="w-5 h-5" />
                      Our connection is busy. Please try calling us directly.
                    </motion.div>
                  )}

                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'SENDING'}
                    type="submit" 
                    className="w-full bg-stone-900 text-white font-black uppercase tracking-[0.3em] text-[11px] py-7 rounded-[2rem] mt-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'SENDING' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Confirming Availablity...</span>
                      </>
                    ) : (
                      <>
                        <span>Request My Table</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                  
                  <div className="pt-6 border-t border-stone-50 text-center">
                    <p className="text-[10px] text-stone-300 font-bold uppercase tracking-[0.2em] max-w-xs mx-auto leading-relaxed">
                      Dine-in hours 8:00 AM – 11:30 PM. <br/>Requests are subject to confirmation.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
