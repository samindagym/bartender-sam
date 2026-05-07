import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BrandLogo from './BrandLogo';

export default function RevealCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the "intro" area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animations based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const maskScale = useTransform(scrollYProgress, [0, 0.8], ["circle(100% at 50% 50%)", "circle(0% at 50% 50%)"]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full z-[60] pointer-events-none">
      {/* The Sticky Curtain */}
      <motion.div 
        style={{ 
          opacity,
          backgroundColor: '#0f0c29', // Matching brand-bg exactly
          clipPath: maskScale
        }}
        className="fixed inset-0 flex flex-col items-center justify-center pointer-events-auto gpu-accelerated"
      >
        {/* Mirroring the main site's mesh gradient for perfect continuity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-pink/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Bottom Blender - Ensures smooth transition to Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0f0c29] to-transparent z-10" />
        
        {/* Content */}
        <motion.div 
          style={{ scale, y }}
          className="relative z-10 flex flex-col items-center gap-12"
        >
          {/* Bigger Logo with Entrance & Breathing Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.05, 1],
              filter: 'blur(0px)',
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 1.5 }
            }}
            className="w-48 h-48 md:w-72 md:h-72 relative"
          >
            {/* Ambient Glow behind logo */}
            <div className="absolute inset-0 bg-brand-orange/20 blur-[60px] rounded-full animate-pulse" />
            <BrandLogo />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center text-center px-6"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-4">
              Sam The <span className="gradient-text">Bartender.</span>
            </h1>
            <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.6em] animate-pulse">
              Scroll to unveil the craft
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative Lines */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
