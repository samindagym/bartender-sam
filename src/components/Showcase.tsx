import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Loader2, Sparkles } from 'lucide-react';
import { Reveal } from './ui/reveal';
import { useMotionConfig } from '../lib/useMotionConfig';

export default function Showcase() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "200px" });
  const { shouldShowSpline, shouldAnimateLoop } = useMotionConfig();

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center justify-center py-24 overflow-hidden bg-transparent">
      {/* Blenders */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />

      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              <Sparkles size={12} className="text-brand-orange" /> The 3D Experience
            </div>
            
            <Reveal width="100%">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
                Artistry in <br />
                <span className="gradient-text">Every Pour.</span>
              </h2>
            </Reveal>
            
            <p className="text-lg text-white/40 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Experience the craft in full three dimensions. Every detail, from the clarity of the ice to the amber glow of the spirit, is a testament to the obsession with quality.
            </p>
            
            <div className="pt-4 flex justify-center lg:justify-start">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                <div className="w-12 h-[1px] bg-white/10" />
                Interact to explore
                <div className="w-12 h-[1px] bg-white/10" />
              </div>
            </div>
          </div>

          {/* 3D Model Showcase - Holographic Aura Portal */}
          <div className="order-1 lg:order-2 relative w-full h-[500px] md:h-[700px] flex items-center justify-center">
            
            {/* The "Aura Portal" Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Concentric Orbital Rings */}
              {shouldAnimateLoop ? (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full z-0" 
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] border border-brand-orange/10 rounded-full z-0" 
                  />
                </>
              ) : (
                <>
                  <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full z-0" />
                  <div className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] border border-brand-orange/10 rounded-full z-0" />
                </>
              )}
              
              <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] bg-brand-orange/5 blur-[100px] rounded-full z-0 pointer-events-none" />

              {/* Rotating Orbital Accent */}
              {shouldAnimateLoop && (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[320px] h-[320px] md:w-[520px] md:h-[520px] z-10 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                </motion.div>
              )}

              {/* Main Interactive Canvas Area */}
              <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden z-20 group">
                {/* Subtle Inner Glass Refraction */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full" />
                
                {/* Professional Loader */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 z-30 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <Loader2 className="w-8 h-8 text-brand-orange animate-spin mb-2" />
                  <div className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Initializing Hologram</div>
                </div>

                {/* 3D Canvas - Only renders on Desktop & when in view */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-[150%] h-[150%] flex-shrink-0 flex items-center justify-center transform transition-all duration-1000 group-hover:scale-105">
                    <div className="w-full h-full scale-[0.45] md:scale-[0.55]">
                      {shouldShowSpline && isInView ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isLoaded ? 1 : 0 }}
                          transition={{ duration: 1 }}
                          className="w-full h-full"
                        >
                          <Spline 
                            scene="https://prod.spline.design/Zf225uCJMc10HhO7/scene.splinecode" 
                            onLoad={() => setIsLoaded(true)}
                            style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 75%)' }}
                            className="w-full h-full"
                          />
                        </motion.div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src="/product-images/cocktails/hero.png" 
                            alt="3D Preview"
                            className="w-[60%] h-auto opacity-50 blur-[2px]"
                            onLoad={() => setIsLoaded(true)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Internal Portal Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#0a0a0c_85%)] z-20" />
              </div>

              {/* Floating UI Data Points */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute top-1/4 right-0 md:-right-10 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl z-30 hidden md:block"
              >
                <div className="text-[8px] font-black text-brand-orange uppercase tracking-widest mb-1">Spirit Origin</div>
                <div className="text-[10px] font-bold text-white/80">Premium Aged Oak</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-1/4 left-0 md:-left-10 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl z-30 hidden md:block"
              >
                <div className="text-[8px] font-black text-brand-pink uppercase tracking-widest mb-1">Ice Clarity</div>
                <div className="text-[10px] font-bold text-white/80">Crystal Hand-Cut</div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
