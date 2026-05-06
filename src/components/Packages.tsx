import { motion } from 'framer-motion';
import { Check, Sparkles, PartyPopper, GraduationCap } from 'lucide-react';
import { Reveal } from './ui/reveal';

const packages = [
  {
    id: 'private',
    name: 'Private Lounge',
    icon: <Sparkles className="text-brand-orange" />,
    description: 'Perfect for intimate home gatherings and private soirées.',
    price: 'À partir de 45.000 DZD',
    features: [
      '3 Signature Cocktails',
      'Professional Bar Setup',
      'Premium Glassware',
      'House-made Syrups',
      '4 Hours of Service'
    ],
    highlight: false
  },
  {
    id: 'gala',
    name: 'Signature Gala',
    icon: <PartyPopper className="text-brand-pink" />,
    description: 'The full experience for weddings and large corporate events.',
    price: 'À partir de 95.000 DZD',
    features: [
      '6 Custom Cocktails',
      'Garnish & Infusion Station',
      'Assistant Bartender',
      'Custom Printed Menu',
      '8 Hours of Service'
    ],
    highlight: true
  },
  {
    id: 'masterclass',
    name: 'Masterclass',
    icon: <GraduationCap className="text-brand-purple" />,
    description: 'A hands-on interactive workshop for spirit enthusiasts.',
    price: 'À partir de 60.000 DZD',
    features: [
      '3 Drink Techniques',
      'Bar Tool Kits Provided',
      'Spirit Tasting Flight',
      'Recipe Booklets',
      '3 Hour Workshop'
    ],
    highlight: false
  }
];

interface PackagesProps {
  onBookingClick: () => void;
}

export default function Packages({ onBookingClick }: PackagesProps) {
  return (
    <section id="packages" className="relative py-32 overflow-hidden bg-transparent">
      {/* Blenders */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">
            <Sparkles size={12} className="text-brand-orange" /> Tailored For You
          </div>
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-6">
              Curated <span className="gradient-text">Experiences.</span>
            </h2>
          </Reveal>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
            Select a service tier that matches your vision. Every package is customizable to fit your specific needs and guest list.
          </p>
        </div>

        {/* Package Grid / Mobile Carousel */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 md:gap-8 pb-12 no-scrollbar snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group flex-shrink-0 w-[85vw] md:w-[400px] lg:w-full snap-center ${pkg.highlight ? 'lg:-translate-y-4' : ''}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest rounded-full z-20 shadow-xl">
                  Most Popular
                </div>
              )}

              <div className={`h-full glass-card p-8 rounded-[40px] border-white/10 flex flex-col transition-all duration-500 hover:border-brand-orange/30 hover:bg-white/10 ${pkg.highlight ? 'border-brand-orange/20 bg-white/10 ring-1 ring-brand-orange/20' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {pkg.icon}
                </div>

                <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tight">{pkg.name}</h3>
                <div className="text-xl font-bold text-white mb-6 font-serif italic">{pkg.price}</div>
                
                <p className="text-sm text-white/40 leading-relaxed mb-8 flex-grow">
                  {pkg.description}
                </p>

                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-brand-orange" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onBookingClick}
                  className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    pkg.highlight 
                    ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-95' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  Reserve Experience
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </div>

        {/* Custom Decorative Glows */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[100px] rounded-full -z-10" />
      </div>
    </section>
  );
}
