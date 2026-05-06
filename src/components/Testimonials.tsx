import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Reveal } from './ui/reveal';

const testimonials = [
  {
    id: 1,
    name: "Mohamed Amine",
    role: "Organisateur d'Événements, Alger",
    content: "Sam est un vrai artiste. Le niveau de professionnalisme qu'il a apporté à notre gala d'entreprise à Alger était inégalé. Des cocktails magnifiques et un service impeccable.",
    rating: 5,
    event: "Gala d'Entreprise"
  },
  {
    id: 2,
    name: "Yasmine B.",
    role: "Hôte Privée, Oran",
    content: "Incroyable ! Sam a transformé notre soirée privée à Oran en une expérience lounge haut de gamme. Chaque invité a été impressionné par la présentation et le goût.",
    rating: 5,
    event: "Soirée Privée"
  },
  {
    id: 3,
    name: "Ryad K.",
    role: "Passionné de Mixologie, Béjaïa",
    content: "J'ai suivi la Masterclass à Béjaïa et c'était du très haut niveau. Sam maîtrise parfaitement son art. Un moment de partage exceptionnel avec de superbes techniques.",
    rating: 5,
    event: "Masterclass"
  },
  {
    id: 4,
    name: "Sofia L.",
    role: "Mariée, Alger",
    content: "Le meilleur choix pour notre mariage. Sam a ajouté une touche de classe que nous n'avions trouvée nulle part ailleurs en Algérie. Hautement recommandé.",
    rating: 5,
    event: "Mariage"
  },
  {
    id: 5,
    name: "Meriem T.",
    role: "Luxury Event Manager",
    content: "Professionnel, ponctuel et très talentueux. Sam apporte un standard international à la scène de la mixologie algérienne. Un vrai plaisir de travailler avec lui.",
    rating: 5,
    event: "Événement Signature"
  }
];

// Double the list for infinite scroll effect
const infiniteTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden bg-transparent">
      {/* Blenders */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />
      
      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">
            <Quote size={12} className="text-brand-orange" /> Client Stories
          </div>
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-6">
              The <span className="gradient-text">Reviews.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Mobile Swipeable Carousel */}
      <div className="flex md:hidden overflow-x-auto gap-6 px-6 pb-12 no-scrollbar snap-x snap-mandatory">
        {testimonials.map((t) => (
          <div 
            key={t.id}
            className="w-[85vw] flex-shrink-0 glass-card p-8 rounded-[40px] border-white/5 snap-center"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-brand-orange text-brand-orange" />
              ))}
            </div>
            
            <p className="text-lg font-serif italic text-white/80 leading-relaxed mb-8">
              "{t.content}"
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div>
                <h4 className="font-black uppercase tracking-tight text-white">{t.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t.role}</p>
              </div>
              <div className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-black uppercase tracking-widest text-brand-orange border border-brand-orange/10">
                {t.event}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Infinite Horizontal Slider */}
      <div className="hidden md:flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 px-4"
        >
          {infiniteTestimonials.map((t, index) => (
            <div 
              key={`${t.id}-${index}`}
              className="w-[350px] md:w-[450px] flex-shrink-0 glass-card p-8 rounded-[40px] border-white/5 hover:border-brand-orange/20 transition-all duration-500 hover:bg-white/10 group/card"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl font-serif italic text-white/80 leading-relaxed mb-8">
                "{t.content}"
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <h4 className="font-black uppercase tracking-tight text-white">{t.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t.role}</p>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-black uppercase tracking-widest text-brand-orange border border-brand-orange/10">
                  {t.event}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
