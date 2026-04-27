/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Menu from './components/Menu';
import Contact from './components/Contact';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-sans text-white bg-brand-bg selection:bg-brand-orange/30 selection:text-white min-h-screen">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient">
        <div className="mesh-blob top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600 animate-float" />
        <div className="mesh-blob bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-orange-500 animate-float [animation-delay:2s]" />
        <div className="mesh-blob top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-500 animate-float [animation-delay:4s]" />
      </div>

      {/* Scrolled Parallax Text */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 opacity-[0.05]">
        <motion.div 
          style={{ x: scrollYProgress }}
          initial={{ x: "-100%" }}
          className="text-[20vw] md:text-[30vw] font-black whitespace-nowrap leading-none mt-[20vh] italic uppercase"
        >
          MIXOLOGY CRAFT BARMAN SERVICE MILKSHAKE
        </motion.div>
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]) }}
          className="text-[20vw] md:text-[30vw] font-black whitespace-nowrap leading-none italic uppercase"
        >
          SAM BARTENDER REFRESH VIBRANT MODERN
        </motion.div>
      </div>

      {/* Custom Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-pink z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Subtle text parallax backgrounds can be added here */}
          <Skills />
          <Menu />
        </div>
      </main>

      <Contact />
      
      {/* Decorative Gradient Blob */}
      <div className="fixed -bottom-40 -left-20 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}

