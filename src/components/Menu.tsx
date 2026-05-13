import { motion } from 'framer-motion';
import { useState } from 'react';

const MENU_ITEMS = [
  // COCKTAILS
  {
    id: 1,
    name: "Florida",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400",
    desc: "A bright and citrusy blend inspired by the sunshine state."
  },
  {
    id: 2,
    name: "Rio",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400",
    desc: "Vibrant tropical flavors that bring the spirit of Brazil to your glass."
  },
  {
    id: 3,
    name: "Bleu Lagoon",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=400",
    desc: "Electric blue curaçao with a refreshing citrus finish."
  },
  {
    id: 4,
    name: "Bora Bora",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=400",
    desc: "Exotic juices layered for a truly tropical escape."
  },
  {
    id: 5,
    name: "Pina Colada",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?auto=format&fit=crop&q=80&w=400",
    desc: "Creamy coconut and fresh pineapple, a timeless classic."
  },
  {
    id: 6,
    name: "Bahama Mama",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400",
    desc: "A rich mix of tropical rums and island fruit juices."
  },
  {
    id: 7,
    name: "Pink Lady",
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=400",
    desc: "Elegant, smooth, and perfectly balanced with a hint of grenadine."
  },

  // MOJITOS
  {
    id: 8,
    name: "Classic Mojito",
    category: "Mojito",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400",
    desc: "Fresh mint, lime, and pure cane sugar for ultimate refreshment."
  },
  {
    id: 9,
    name: "Strawberry Mojito",
    category: "Mojito",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400",
    desc: "Minty freshness meeting the sweetness of ripe strawberries."
  },
  {
    id: 10,
    name: "Watermelon Mojito",
    category: "Mojito",
    image: "https://images.unsplash.com/photo-1504113888839-1c8ec72f33ba?auto=format&fit=crop&q=80&w=400",
    desc: "Cool watermelon chunks muddled with garden fresh mint."
  },

  // MILKSHAKES
  {
    id: 11,
    name: "Milkshake Oreo",
    category: "Milkshake",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400",
    desc: "Double-stuffed Oreos blended with thick Madagascar vanilla cream."
  },
  {
    id: 12,
    name: "Milkshake Strawberry",
    category: "Milkshake",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400",
    desc: "Classic strawberry bliss topped with fresh whipped cream."
  },
  {
    id: 13,
    name: "Milkshake Caramel",
    category: "Milkshake",
    image: "https://images.unsplash.com/photo-1541658016709-8273d8d7b935?auto=format&fit=crop&q=80&w=400",
    desc: "Deep sea-salt caramel swirled through rich vanilla bean."
  },

  // COFFEE
  {
    id: 14,
    name: "Frappuccino",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572286258217-40049c1374f1?auto=format&fit=crop&q=80&w=400",
    desc: "Iced blended coffee topped with a cloud of cream and drizzle."
  },
  {
    id: 15,
    name: "Cappuccino",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=400",
    desc: "Perfectly frothed milk over a double shot of premium espresso."
  },
  {
    id: 16,
    name: "Americano",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1551030173-122adabc430c?auto=format&fit=crop&q=80&w=400",
    desc: "Bold espresso shots softened with hot water for a smooth finish."
  }
];

const CATEGORIES = [
  { id: 'All', label: 'All Crafts' },
  { id: 'Cocktail', label: 'Signature Cocktails' },
  { id: 'Mojito', label: 'Fresh Mojitos' },
  { id: 'Milkshake', label: 'Gourmet Shakes' },
  { id: 'Coffee', label: 'Premium Coffee' }
];

export default function Menu() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <section id="menu" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
              BAR <span className="gradient-text">MENU.</span>
            </h2>
            <p className="text-white/40 max-w-md">Every drink is a calculated balance of craft and creativity, from the first shake to the final pour.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 backdrop-blur-2xl rounded-[32px] border border-white/10 self-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative px-6 py-3 rounded-full text-[10px] font-black transition-colors uppercase tracking-widest
                  ${filter === cat.id ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              >
                {filter === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-orange rounded-full shadow-lg shadow-brand-orange/20"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="glass-card rounded-[40px] overflow-hidden border-white/5 transition-all duration-500 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/10 group-hover:-translate-y-2">
                {/* Image Section */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    {item.category}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-bg/90 via-brand-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-white/70 text-xs italic line-clamp-2">{item.desc}</p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-brand-orange transition-colors italic uppercase leading-none">{item.name}</h3>
                  </div>
                  
                  <button 
                    aria-label={`Order ${item.name}`}
                    className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 font-black text-[10px] uppercase tracking-[0.2em] group-hover:bg-brand-orange group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-brand-orange/30 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Background Element */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full -z-10" />
      </div>
    </section>
  );
}
