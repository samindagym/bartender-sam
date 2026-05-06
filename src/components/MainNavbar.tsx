import { Instagram, Menu, X, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';
import Magnetic from './ui/magnetic';

export default function Navbar({ onBookingClick }: { onBookingClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['about-sam', 'about', 'menu', 'gallery', 'packages', 'testimonials', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-4 mt-4 transition-all duration-300 rounded-2xl ${
        isScrolled || isMenuOpen ? 'glass-card shadow-lg bg-[#0f0c29]/95 text-white' : 'bg-transparent text-white'
      }`}
    >
      <Magnetic>
        <div className="flex items-center gap-3 cursor-pointer">
          <BrandLogo className="h-8 w-8" />
          <span className="font-bold text-base sm:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 uppercase truncate max-w-[160px] sm:max-w-none">Sam The Bartender</span>
        </div>
      </Magnetic>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest opacity-70">
        <Magnetic><a href="#about-sam" className={`transition-colors ${activeSection === 'about-sam' ? 'text-brand-orange opacity-100' : 'hover:text-brand-orange'}`}>About</a></Magnetic>
        <Magnetic><a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-brand-orange opacity-100' : 'hover:text-brand-orange'}`}>Skills</a></Magnetic>
        <Magnetic><a href="#menu" className={`transition-colors ${activeSection === 'menu' ? 'text-brand-orange opacity-100' : 'hover:text-brand-orange'}`}>Menu</a></Magnetic>
        <Magnetic><a href="#gallery" className={`transition-colors ${activeSection === 'gallery' ? 'text-brand-orange opacity-100' : 'hover:text-brand-orange'}`}>Gallery</a></Magnetic>
        <Magnetic><a href="#packages" className={`transition-colors ${activeSection === 'packages' ? 'text-brand-orange opacity-100' : 'hover:text-brand-orange'}`}>Packages</a></Magnetic>
        <Magnetic><a href="#testimonials" className={`transition-colors ${activeSection === 'testimonials' ? 'text-brand-orange opacity-100' : 'hover:text-brand-orange'}`}>Reviews</a></Magnetic>
        <Magnetic><a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-brand-orange opacity-100' : 'hover:text-brand-orange'}`}>Contact</a></Magnetic>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <a 
          href="https://www.instagram.com/sam_in_dagym/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="hidden sm:block p-2 opacity-70 hover:text-brand-orange transition-colors"
        >
          <Instagram size={20} />
        </a>
        <Magnetic>
          <button 
            onClick={onBookingClick}
            className="hidden sm:block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold hover:bg-white/20 transition-all cursor-pointer"
          >
            Book Now
          </button>
        </Magnetic>

        {/* Custom Animated Hamburger Button */}
        <button 
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 opacity-70 hover:text-brand-orange transition-colors z-[60] flex flex-col items-center justify-center gap-1.5"
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full origin-center"
          />
          <motion.div
            animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.div
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 mt-2 overflow-hidden md:hidden z-50"
          >
            <div className="glass-card mx-2 p-8 rounded-[32px] border-white/10 flex flex-col gap-6 font-bold text-2xl uppercase tracking-tighter italic"
                 style={{ backgroundColor: 'rgba(15, 12, 41, 0.95)', backdropFilter: 'blur(40px)' }}>
              
              {['about-sam', 'about', 'menu', 'gallery', 'packages', 'testimonials', 'contact'].map((id, index) => (
                <motion.a
                  key={id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  href={`#${id}`}
                  onClick={() => {
                    setTimeout(() => setIsMenuOpen(false), 200);
                  }}
                  className={`transition-colors capitalize ${activeSection === id ? 'gradient-text' : 'text-white/60 hover:text-white'}`}
                >
                  {id.replace('-', ' ')}
                </motion.a>
              ))}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-between items-center pt-8 mt-4 border-t border-white/5"
              >
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/sam_in_dagym/" target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} className="text-white/40 hover:text-brand-orange transition-colors" />
                  </a>
                  <a href="https://wa.me/213540098315" target="_blank" rel="noopener noreferrer">
                    <Smartphone size={24} className="text-white/40 hover:text-brand-pink transition-colors" />
                  </a>
                </div>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    onBookingClick();
                  }}
                  className="px-8 py-3 bg-brand-orange text-white rounded-full text-sm font-black uppercase tracking-widest"
                >
                  Réserver
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
