import { motion } from 'motion/react';
import { GlassWater, Martini, Shovel, Star } from 'lucide-react';

const SKILLS = [
  {
    icon: Martini,
    title: "Mixology",
    description: "Expert in classic and contemporary cocktails with a focus on balanced flavor profiles.",
    color: "bg-blue-50 text-brand-blue"
  },
  {
    icon: GlassWater,
    title: "Milkshakes",
    description: "Creating decadent, gourmet milkshakes using premium ingredients and creative garnishes.",
    color: "bg-pink-50 text-brand-pink"
  },
  {
    icon: Shovel, // Used as a substitute for mixing
    title: "Bar Management",
    description: "Professional operation control, inventory management, and high-speed service.",
    color: "bg-orange-50 text-orange-500"
  },
  {
    icon: Star,
    title: "Guest Experience",
    description: "Exceptional hospitality skills ensuring every guest feels like they're in their own lounge.",
    color: "bg-purple-50 text-purple-500"
  }
];

export default function Skills() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            THE <span className="gradient-text">SKILLSET.</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Beyond just pouring drinks, it's about the precision of movement, the science of flavor, and the art of hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] glass-card glass-card-hover group"
            >
              <div 
                aria-hidden="true"
                className={`w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <skill.icon size={28} className={skill.color.split(' ')[1]} />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{skill.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative shadow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
      </div>
    </section>
  );
}
