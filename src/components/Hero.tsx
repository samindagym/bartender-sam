import { ArrowRight, ChevronDown, Loader2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Typewriter } from './ui/typewriter';
import Magnetic from './ui/magnetic';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkViewport = () => {
      const w = window.innerWidth;
      setIsDesktop(w > 768);
      setIsMobile(w <= 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll-driven transforms — disabled on mobile to save JS overhead
  const splineScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const splineOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const splineY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-20 md:pb-0 overflow-hidden">
      {/* Blender */}
      <div className="section-divider-bottom" />

      {/* Decorative background elements — skip heavy blur on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-pink/20 blur-[120px] rounded-full animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full animate-float [animation-delay:2s]" />
        </>
      )}

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <div>
          <div className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase rounded-md mb-6 border border-brand-orange/30">
            Mastering the Pour
          </div>
          <h1 
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tighter mb-8 uppercase min-h-[100px] md:min-h-[200px]"
            style={{ fontFamily: "'Johnston', 'Johnston100', 'Gill Sans', 'Gill Sans MT', sans-serif" }}
          >
            SAM THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple italic pr-4">
              <Typewriter text={['BARTENDER 🥃', 'MIXOLOGIST 🧪', 'CREATOR ✨']} waitTime={2500} />
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-md mb-10 leading-relaxed">
            Sharing the craft of premium mixology and artisanal milkshakes. From classic old-fashioneds to experimental frozen delights.
          </p>
          <div className="flex flex-wrap gap-4">
            <Magnetic>
              <a
                href="#about"
                aria-label="Explore My Skills"
                className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-pink text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-orange/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
              >
                Explore Skills <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={onBookingClick}
                aria-label="Book for an Event"
                className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all cursor-pointer"
              >
                Book Now
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[700px] w-full">
          {/* Glowing Background — reduced intensity on mobile */}
          {!isMobile && (
            <>
              <div className="absolute inset-10 bg-brand-purple/20 blur-[100px] rounded-full animate-pulse" />
              <div className="absolute inset-20 bg-brand-orange/10 blur-[80px] rounded-full animate-pulse [animation-delay:1s]" />
            </>
          )}
          
          {/* Spline Container — Desktop Only */}
          {isDesktop && (
            <motion.div 
              style={{ scale: splineScale, opacity: splineOpacity, y: splineY }}
              className="w-full h-full rounded-[40px] overflow-hidden relative group gpu-accelerated"
            >
              {/* Professional Loader Overlay */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center bg-[#0f0c29] transition-opacity duration-1000 z-10 ${isSplineLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Loader2 className="w-12 h-12 text-brand-orange animate-spin mb-4" />
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Initializing 3D Canvas</div>
              </div>
              
              <Spline 
                scene="https://prod.spline.design/hsUR7smnUYpLOv0h/scene.splinecode" 
                className="w-full h-full touch-pan-y"
                onLoad={() => setIsSplineLoaded(true)}
                onWheel={(e) => {
                  e.currentTarget.parentElement?.dispatchEvent(new WheelEvent('wheel', e));
                }}
              />
              {/* Overlay Gradient to blend bottom edge */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none z-20" />
            </motion.div>
          )}

          {/* Mobile Hero Image — Replaces Spline for performance */}
          <div className="md:hidden w-full h-full rounded-[32px] overflow-hidden relative gpu-accelerated">
            <img 
              src="/sam-profile/sam-profile.webp" 
              alt="Sam Bartender"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/story-images/cocktails/Bahama-mama.webp";
              }}
            />
            {/* Gradient overlays to blend with the dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/40 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 md:-bottom-6 md:-left-6 bg-brand-bg/80 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-3xl shadow-2xl shadow-brand-orange/10 animate-float z-20">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink font-black text-4xl md:text-5xl mb-1">+2</div>
            <div className="text-[10px] text-white/60 uppercase font-black tracking-[0.2em]">Years of Experience</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
