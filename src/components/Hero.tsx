import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Loader2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-pink/20 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full animate-float [animation-delay:2s]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase rounded-md mb-6 border border-brand-orange/30">
            Mastering the Pour
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight mb-8 uppercase">
            SAM THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple">
              BARTENDER
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-md mb-10 leading-relaxed">
            Sharing the craft of premium mixology and artisanal milkshakes. From classic old-fashioneds to experimental frozen delights.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              aria-label="Explore My Skills"
              className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-xl shadow-brand-orange/20 hover:scale-105 transition-transform flex items-center gap-2 group"
            >
              Explore Skills <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              aria-label="Watch Tutorials"
              className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Watch Tutorials
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[500px] md:h-[700px] w-full"
        >
          {/* Enhanced Glowing Background for Spline */}
          <div className="absolute inset-10 bg-brand-purple/20 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute inset-20 bg-brand-orange/10 blur-[80px] rounded-full animate-pulse [animation-delay:1s]" />
          
          {/* Spline Container */}
          <div className="w-full h-full rounded-[40px] overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-3xl -z-10">
              <Loader2 className="w-10 h-10 text-brand-orange animate-spin opacity-50" />
            </div>
            <Spline 
              scene="https://prod.spline.design/hsUR7smnUYpLOv0h/scene.splinecode" 
              className="w-full h-full"
            />
            
            {/* Overlay Gradient to blend bottom edge */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl glass-card animate-float z-20">
            <div className="text-brand-blue font-black text-4xl mb-1">10+</div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Years of Craft</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
