import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, Product } from '../data';
import { Reveal } from './ui/reveal';
import { Tilt } from './ui/tilt';

interface Props {
  onProductSelect: (product: Product) => void;
}

const categories = [
  { id: 'cocktails', label: 'Cocktails', color: 'from-orange-500 to-red-600', accent: 'text-orange-400', border: 'border-orange-500' },
  { id: 'mojitos',   label: 'Mojitos',   color: 'from-emerald-400 to-green-600', accent: 'text-emerald-400', border: 'border-emerald-400' },
  { id: 'milkshakes',label: 'Milkshakes',color: 'from-pink-400 to-purple-500',  accent: 'text-pink-400',    border: 'border-pink-400' },
  { id: 'coffees',   label: 'Coffees',   color: 'from-amber-700 to-yellow-900', accent: 'text-amber-500',   border: 'border-amber-500' },
] as const;

const CategoryShowcase: React.FC<Props> = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const filteredProducts = products.filter(p => p.category === activeCategory);
  const activeTheme = categories.find(c => c.id === activeCategory)!;

  return (
    <section id="menu" className="min-h-screen bg-transparent text-white overflow-hidden relative">
      {/* Blenders */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />
      
      {/* Dynamic Background Glow */}
      <div className={`fixed inset-0 opacity-10 blur-[160px] pointer-events-none bg-gradient-to-br ${activeTheme.color} transition-all duration-1000`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16 flex flex-col items-center">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-8 uppercase italic">
              Our <span className={activeTheme.accent}>Craft</span>
            </h2>
          </Reveal>

          {/* Category Switcher */}
          <nav className="flex overflow-x-auto gap-3 sm:gap-8 justify-start sm:justify-center pb-2 [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative text-sm sm:text-lg font-bold uppercase tracking-wider sm:tracking-widest transition-colors duration-300 pb-2 whitespace-nowrap ${
                  activeCategory === cat.id ? cat.accent : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="categoryIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r ${cat.color}`}
                  />
                )}
              </button>
            ))}
          </nav>
        </header>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group relative cursor-pointer active:scale-[0.97] transition-transform duration-200"
                style={{ perspective: "1000px" }}
                onClick={() => onProductSelect(product)}
                role="button"
                tabIndex={0}
                aria-label={`View ${product.name}`}
                onKeyDown={(e) => e.key === 'Enter' && onProductSelect(product)}
              >
                <Tilt className="w-full h-full">
                  <div 
                    className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 md:border-white/5 md:hover:border-white/10 transition-colors duration-500"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `/product-images/${product.category}/hero.png`;
                      }}
                    />
                    
                    {/* Dark gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags?.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-black italic text-white uppercase tracking-tight mb-2">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Glow — subtle on mobile, stronger on desktop hover */}
                  <div 
                    className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${activeTheme.color} opacity-10 md:opacity-0 blur md:group-hover:opacity-20 transition duration-500 -z-10`} 
                    style={{ transform: "translateZ(-10px)" }}
                  />
                </Tilt>
              </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-zinc-600 text-xl">
            No products in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryShowcase;
