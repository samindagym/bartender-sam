import React, { useEffect, useState } from 'react';
import { Product } from '../data';
import { ArrowLeft, ArrowRight, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onBookingClick: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const categoryColors: Record<string, { gradient: string; accent: string; border: string }> = {
  cocktails:  { gradient: 'from-orange-500 to-red-600',    accent: 'text-orange-400',  border: 'border-orange-500/40' },
  mojitos:    { gradient: 'from-emerald-400 to-green-600', accent: 'text-emerald-400', border: 'border-emerald-500/40' },
  milkshakes: { gradient: 'from-pink-400 to-purple-500',   accent: 'text-pink-400',    border: 'border-pink-500/40' },
  coffees:    { gradient: 'from-amber-600 to-yellow-800',  accent: 'text-amber-400',   border: 'border-amber-500/40' },
};

const ProductPage: React.FC<ProductPageProps> = ({ product, onBack, onBookingClick, onNext, onPrev }) => {
  const theme = categoryColors[product.category];
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll for dynamic image fade
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "center start"]
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSwipe = (e: any, info: any) => {
    if (info.offset.x < -100) {
      setDirection(1);
      onNext();
    } else if (info.offset.x > 100) {
      setDirection(-1);
      onPrev();
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#050505] text-white overflow-hidden">
      {/* Background glow */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={product.category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 blur-[160px] pointer-events-none bg-gradient-to-br ${theme.gradient}`} 
        />
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="fixed top-0 left-0 right-0 p-4 sm:p-6 z-[220] flex justify-between items-center pointer-events-none">
        <button
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/15 transition-all"
        >
          <ArrowLeft size={14} /> Fermer
        </button>
        
        <div className="flex gap-2 pointer-events-auto">
          <button 
            onClick={() => { setDirection(-1); onPrev(); }}
            className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/15 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => { setDirection(1); onNext(); }}
            className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/15 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Content Scroller - Only vertical scroll here */}
      <div ref={containerRef} className="h-full overflow-y-auto no-scrollbar">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={product.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            className="relative z-10 min-h-screen grid lg:grid-cols-2"
          >
            {/* Left: Image Container with Dynamic Fade */}
            <motion.div 
              style={{ opacity: imageOpacity, y: imageY }}
              className="relative h-[55vh] lg:h-screen sticky top-0 overflow-hidden z-20"
            >
              <motion.div 
                style={{ scale: imageScale }}
                className="w-full h-full"
              >
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `/product-images/${product.category}/hero.webp`;
                  }}
                />
                {/* Deep Professional Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent lg:hidden" />
              
              {/* Swipe Instruction for Mobile */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:hidden flex flex-col items-center gap-2 opacity-30">
                <div className="flex gap-4 animate-pulse">
                  <ArrowLeft size={12} />
                  <span className="text-[8px] font-black uppercase tracking-[0.3em]">Swipe to switch</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center px-8 lg:px-20 pt-10 pb-20 lg:py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className={`text-xs font-black uppercase tracking-[0.4em] mb-4 inline-block ${theme.accent}`}>
                  {product.category}
                </span>

                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
                  {product.name}
                </h1>

                <div className="flex flex-wrap gap-2 mb-10">
                  {product.tags?.map(tag => (
                    <span key={tag} className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border ${theme.border} bg-white/5`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-md font-medium">
                  {product.description}
                </p>

                <div className="text-4xl font-black text-white mb-12 flex items-baseline gap-2">
                  {product.price}
                  <span className="text-xs text-white/20 uppercase tracking-widest">TTC</span>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <button
                    onClick={() => { onBack(); onBookingClick(); }}
                    className={`flex items-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r ${theme.gradient} text-white font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer`}
                  >
                    Réserver Maintenant <Send size={16} />
                  </button>
                  <button
                    onClick={onBack}
                    className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    Retour
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductPage;
