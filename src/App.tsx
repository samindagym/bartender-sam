import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import MainNavbar from './components/MainNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CategoryShowcase from './components/CategoryShowcase';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import ProductPage from './components/ProductPage';
import Gallery from './components/Gallery';
import BookingModal from './components/BookingModal';
import ScrollProgress from './components/ui/scroll-progress';
import CustomCursor from './components/ui/custom-cursor';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/ui/WhatsAppButton';
import RevealCover from './components/RevealCover';
import CinematicOverlay from './components/ui/CinematicOverlay';
import { Product, products } from './data';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  // Force scroll to top on refresh/mount
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Analytics />
      <RevealCover />
      <CinematicOverlay />
      {isDesktop && (
        <div className="hidden lg:block">
          <CustomCursor />
        </div>
      )}
      <ScrollProgress />
      <WhatsAppButton />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      {/* Full-screen product detail overlay */}
      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onBookingClick={() => setIsBookingOpen(true)}
          onNext={() => {
            const categoryProducts = products.filter(p => p.category === selectedProduct.category);
            const currentIndex = categoryProducts.findIndex(p => p.id === selectedProduct.id);
            const nextProduct = categoryProducts[(currentIndex + 1) % categoryProducts.length];
            setSelectedProduct(nextProduct);
          }}
          onPrev={() => {
            const categoryProducts = products.filter(p => p.category === selectedProduct.category);
            const currentIndex = categoryProducts.findIndex(p => p.id === selectedProduct.id);
            const prevProduct = categoryProducts[(currentIndex - 1 + categoryProducts.length) % categoryProducts.length];
            setSelectedProduct(prevProduct);
          }}
        />
      )}

      {/* Main site */}
      <div className="relative font-sans text-white bg-brand-bg selection:bg-brand-orange/30 selection:text-white min-h-screen">
        {/* Mesh Gradient Background */}
        {isDesktop && (
          <div className="mesh-gradient">
            <div className="mesh-blob top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600 animate-float" />
            <div className="mesh-blob bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-orange-500 animate-float [animation-delay:2s]" />
            <div className="mesh-blob top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-500 animate-float [animation-delay:4s]" />
          </div>
        )}

        <MainNavbar onBookingClick={() => setIsBookingOpen(true)} />

        <main>
          <Hero onBookingClick={() => setIsBookingOpen(true)} />
          <About />
          <div className="relative">
            <Skills />
            <CategoryShowcase onProductSelect={setSelectedProduct} />
            <Gallery onBookingClick={() => setIsBookingOpen(true)} />
            <Showcase />
            <Packages onBookingClick={() => setIsBookingOpen(true)} />
            <Testimonials />
          </div>
        </main>

        <Contact />

        {/* Decorative Gradient Blob */}
        <div className="fixed -bottom-40 -left-20 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </div>
    </>
  );
}
