export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'cocktails' | 'mojitos' | 'milkshakes' | 'coffees';
  tags?: string[];
}

export const products: Product[] = [

  // ── COCKTAILS ───────────────────────────────────────────────
  {
    id: 'c1',
    name: 'Midnight Negroni',
    description: 'Premium gin, sweet vermouth and Campari stirred to silk over a single large ice sphere. Finished with a hand-cut orange peel.',
    price: '1,500 DZD',
    image: '/product-images/cocktails/negroni.webp',
    category: 'cocktails',
    tags: ['Classic', 'Spirit-Forward', 'Bitter'],
  },
  {
    id: 'c2',
    name: 'Coastal Margarita',
    description: 'Blanco tequila, fresh-squeezed lime and a hint of agave, served in a hand-salted rim glass with a premium lime wheel.',
    price: '1,400 DZD',
    image: '/product-images/cocktails/margarita.webp',
    category: 'cocktails',
    tags: ['Citrus', 'Refreshing', 'Tequila'],
  },
  {
    id: 'c3',
    name: 'Dark & Stormy',
    description: 'Aged dark rum layered over house-made spiced ginger beer with a fresh lime squeeze. A bold, warming classic.',
    price: '1,400 DZD',
    image: '/product-images/cocktails/hero.webp',
    category: 'cocktails',
    tags: ['Rum', 'Spiced', 'Bold'],
  },

  // ── MOJITOS ─────────────────────────────────────────────────
  {
    id: 'm1',
    name: 'Classic Mint Mojito',
    description: 'Garden-fresh mint leaves muddled with raw cane sugar, premium white rum and hand-pressed lime over crushed ice.',
    price: '900 DZD',
    image: '/product-images/mojitos/hero.webp',
    category: 'mojitos',
    tags: ['Classic', 'Refreshing', 'Mint'],
  },
  {
    id: 'm2',
    name: 'Strawberry Mojito',
    description: 'Sun-ripened strawberries muddled with fresh mint, white rum and a splash of raspberry liqueur. Vibrant and fruity.',
    price: '1,100 DZD',
    image: '/product-images/mojitos/Mojito strawberry.webp',
    category: 'mojitos',
    tags: ['Fruity', 'Summer', 'Strawberry'],
  },
  {
    id: 'm3',
    name: 'Blue Mojito',
    description: 'Electric blue curaçao mixed with fresh mint, white rum, and a splash of lime for a vibrant, refreshing twist.',
    price: '1,100 DZD',
    image: '/product-images/mojitos/Blue mojito.webp',
    category: 'mojitos',
    tags: ['Refreshing', 'Blue Curaçao', 'Mint'],
  },

  // ── MILKSHAKES ──────────────────────────────────────────────
  {
    id: 's1',
    name: 'Velvet Chocolate',
    description: 'Double-churned Belgian chocolate ice cream blended to peak creaminess, topped with artisan whipped cream and dark cacao nibs.',
    price: '850 DZD',
    image: '/product-images/milkshakes/hero.webp',
    category: 'milkshakes',
    tags: ['Chocolate', 'Indulgent', 'Classic'],
  },
  {
    id: 's2',
    name: 'Strawberry Milkshake',
    description: 'Classic strawberry bliss made with real berries and rich vanilla ice cream, topped with fresh whipped cream.',
    price: '950 DZD',
    image: '/product-images/milkshakes/milkshake strawberry.webp',
    category: 'milkshakes',
    tags: ['Strawberry', 'Fruity', 'Classic'],
  },
  {
    id: 's3',
    name: 'Salted Caramel Crunch',
    description: 'Rich caramel ice cream blended with a hint of sea salt, crushed honeycomb toffee, and a thick caramel drizzle crown.',
    price: '950 DZD',
    image: '/product-images/milkshakes/milkshake caramel.webp',
    category: 'milkshakes',
    tags: ['Caramel', 'Salted', 'Premium'],
  },

  // ── COFFEES ─────────────────────────────────────────────────
  {
    id: 'f1',
    name: 'Golden Crema Latte',
    description: 'Single-origin Ethiopian beans pulled as a double ristretto, topped with hand-steamed velvety micro-foam and a touch of raw honey.',
    price: '550 DZD',
    image: '/product-images/coffees/hero.webp',
    category: 'coffees',
    tags: ['Latte', 'Single-Origin', 'Smooth'],
  },
  {
    id: 'f2',
    name: 'Cold Brew Reserve',
    description: '24-hour cold-steeped Colombian beans, served over clear ice with a float of oat cream. Clean, bold and incredibly smooth.',
    price: '650 DZD',
    image: '/product-images/coffees/Cold Brew Reserve.webp',
    category: 'coffees',
    tags: ['Cold Brew', 'Bold', 'Oat Milk'],
  },
  {
    id: 'f3',
    name: 'Spiced Cortado',
    description: 'A double espresso balanced with equal parts warm cinnamon-infused milk. Intense, aromatic and perfectly compact.',
    price: '450 DZD',
    image: '/product-images/coffees/spiced cortado.webp',
    category: 'coffees',
    tags: ['Espresso', 'Spiced', 'Strong'],
  },
];
