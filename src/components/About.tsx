import { motion } from 'framer-motion';
import { Reveal } from './ui/reveal';
import { useMotionConfig } from '../lib/useMotionConfig';

const stats = [
  { label: 'Events Completed', value: '20+' },
  { label: 'Years of Mastery', value: '2' },
  { label: 'Custom Recipes', value: '40+' },
  { label: 'Happy Guests', value: '500+' }
];

export default function About() {
  const { shouldAnimateLoop } = useMotionConfig();

  return (
    <section id="about-sam" className="relative py-32 overflow-hidden bg-transparent">
      {/* Blenders */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Image with a premium frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10">
              <img 
                src="/sam-profile/About-me.webp" 
                alt="Sam the Bartender" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
                decoding="async"
                width="600"
                height="750"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative Floating Element - With Float Animation */}
            <motion.div 
              animate={shouldAnimateLoop ? { y: [0, -10, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-48 h-48 glass-card rounded-[32px] p-6 border-white/20 hidden md:block"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-2">Philosophy</p>
              <p className="text-sm font-medium italic text-white/80 leading-relaxed">
                "A cocktail is more than a drink; it's a conversation in a glass."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: The Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                The Artisan
              </div>
              <Reveal width="100%">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                  SAM <span className="gradient-text">THE STORY.</span>
                </h2>
              </Reveal>
            </div>

            <div className="space-y-6 text-lg text-white/50 leading-relaxed font-medium">
              <p>
                Maître de la mixologie basé en Algérie, j'ai consacré ma carrière à transformer l'art du bar en une expérience sensorielle complète. Mon approche fusionne les techniques classiques avec une créativité moderne et audacieuse.
              </p>
              <p>
                Que ce soit pour un gala privé à Alger ou un événement exclusif à Oran, ma mission reste la même : créer des moments uniques, un cocktail à la fois.
              </p>
            </div>

            {/* Stats Grid - Fixed: Separated reveal from float for smoother performance */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="space-y-1"
                >
                  {/* Inner Floating Layer - Hardware Accelerated */}
                  <motion.div 
                    animate={shouldAnimateLoop ? { y: [0, -6, 0] } : {}}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2 // Desync the floats for a more natural look
                    }}
                    className="will-change-transform"
                  >
                    <div className="text-3xl font-black text-white italic">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20">{stat.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Signature Upgrade - Fixed: More spacing and persistent float */}
            <div className="pt-20">
              <motion.span 
                initial={{ opacity: 0, rotate: -5, y: 10 }}
                whileInView={{ opacity: 1, rotate: -2, y: 0 }}
                animate={shouldAnimateLoop ? { y: [0, -8, 0] } : {}}
                transition={{ 
                  initial: { duration: 1.5, ease: "easeOut" },
                  animate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="font-signature text-5xl md:text-7xl text-brand-orange/90 inline-block drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
              >
                Sam The Bartender
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
