import { motion } from 'motion/react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center p-2 rounded-xl group overflow-hidden ${className}`}>
      {/* Background split effect based on user logo */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white/10" />
        <div className="w-1/2 bg-brand-orange/20" />
      </div>
      
      {/* Minimalist Martini Glass SVG */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-12 h-12 relative z-10 transition-transform duration-500 group-hover:scale-110"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glass Stem and Base */}
        <line x1="50" y1="85" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="85" x2="60" y2="85" stroke="currentColor" strokeWidth="2" />
        
        {/* Glass Bowl */}
        <path 
          d="M20 30L50 55L80 30H20Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-black group-hover:text-white transition-colors"
        />
        
        {/* Pink Liquid */}
        <motion.path 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ originY: "bottom" }}
          d="M35 43L50 55L65 43H35Z" 
          fill="#ec4899" 
        />
      </svg>
    </div>
  );
}
