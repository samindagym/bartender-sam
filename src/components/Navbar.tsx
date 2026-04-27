import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-4 mt-4 transition-all duration-300 rounded-2xl ${
        isScrolled || isMenuOpen ? 'glass-card shadow-lg bg-white/80' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <Logo className="h-8 w-8" />
        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 uppercase">Sam The Bartender</span>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest text-white/70">
        <a href="#about" className="hover:text-brand-orange transition-colors">Skills</a>
        <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
        <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          aria-label="Instagram Profile"
          className="hidden sm:block p-2 text-white/70 hover:text-brand-orange transition-colors"
        >
          <Instagram size={20} />
        </button>
        <button 
          aria-label="Contact Sam"
          className="hidden sm:block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold hover:bg-white/20 transition-all"
        >
          Contact Me
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-brand-orange transition-colors z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 p-6 glass-card rounded-2xl md:hidden border-white/10 flex flex-col gap-6 font-bold text-lg uppercase tracking-widest text-center"
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange transition-colors">Skills</a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange transition-colors">Menu</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange transition-colors">Contact</a>
          <div className="flex justify-center gap-6 pt-4 border-t border-white/5">
            <Instagram size={24} className="text-white/50" />
            <span className="text-sm font-black text-brand-orange">Call Now</span>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
