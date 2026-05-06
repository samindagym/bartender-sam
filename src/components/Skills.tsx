import { motion } from 'framer-motion';
import { GlassWater, Star, Coffee, Blend, LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { Reveal } from './ui/reveal';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const SKILLS: Skill[] = [
  {
    icon: Blend,
    title: "Mixology",
    description: "Expert in classic and contemporary cocktails with a focus on balanced flavor profiles.",
    accent: "text-brand-orange"
  },
  {
    icon: GlassWater,
    title: "Milkshakes",
    description: "Creating decadent, gourmet milkshakes using premium ingredients and creative garnishes.",
    accent: "text-brand-pink"
  },
  {
    icon: Coffee,
    title: "Coffee Craft",
    description: "Specialty coffee preparation from espresso pulls to latte art and cold brew methods.",
    accent: "text-amber-400"
  },
  {
    icon: Star,
    title: "Guest Experience",
    description: "Exceptional hospitality skills ensuring every guest feels like they're in their own lounge.",
    accent: "text-brand-purple"
  }
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="shrink-0 w-[280px] md:w-auto snap-center group"
    >
      <div className="h-full p-8 rounded-[32px] glass-card glass-card-hover flex flex-col items-start text-left">
        <div
          aria-hidden="true"
          className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        >
          <skill.icon size={28} className={skill.accent} />
        </div>
        <h3 className="text-xl font-black mb-3 tracking-tight uppercase italic">{skill.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Blenders */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block px-3 py-1 bg-white/5 text-white/40 text-[10px] font-black tracking-[0.3em] uppercase rounded-full mb-4 border border-white/10">
            Expertise
          </div>
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
              THE <span className="gradient-text">SKILLSET.</span>
            </h2>
          </Reveal>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
            Beyond just pouring drinks, it's about the precision of movement, the science of flavor, and the art of hospitality.
          </p>
        </motion.div>

        {/* Swipeable Container for Mobile, Grid for Desktop */}
        <div className="relative group">
          <div className={cn(
            "flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pt-10 pb-10 -mx-6 px-6 md:mx-0 md:px-0",
            "[&::-webkit-scrollbar]:hidden"
          )}>
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>

          {/* Mobile Swipe Hint - Only visible on small screens */}
          <div className="flex justify-center gap-1.5 md:hidden mt-2">
            {SKILLS.map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 rounded-full bg-white/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
