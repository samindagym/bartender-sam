import { motion } from 'framer-motion';

export default function CinematicOverlay() {
  return (
    <>
      {/* Subtle Film Grain */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.6" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Cinematic Vignette */}
      <div className="fixed inset-0 z-[101] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,12,0.4)_100%)]" />

      {/* Animated Dust Particles (Very subtle) */}
      <div className="fixed inset-0 z-[102] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              opacity: [0, 0.1, 0],
              y: ["0%", "-20%"],
              x: [Math.random() * 100 + "%", (Math.random() * 100 + 5) + "%"]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
          />
        ))}
      </div>
    </>
  );
}
