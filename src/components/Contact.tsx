import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, Instagram, Smartphone, Send, CheckCircle2, Loader2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import BrandLogo from './BrandLogo';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Live Formspree ID applied
      const response = await fetch('https://formspree.io/f/xjglovpb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || "Oups! Un problème est survenu lors de l'envoi.");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur. Veuillez réessayer.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer ref={sectionRef} id="contact" className="relative pt-32 pb-16 overflow-hidden bg-transparent">
      {/* Blender */}
      <div className="section-divider-top" />

      {/* Immersive Glass Background - Softened edge */}
      <div className="absolute inset-x-0 bottom-0 top-20 bg-white/5 backdrop-blur-3xl border-t border-white/5 rounded-t-[40px] md:rounded-t-[80px] -z-10" />
      
      {/* Glowing Accents */}
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-brand-orange/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-pink/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Branding & Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <BrandLogo className="h-14 w-14" />
                <div className="flex flex-col">
                  <span className="font-black text-3xl tracking-tight uppercase italic leading-none">SAM THE</span>
                  <span className="font-black text-3xl tracking-tight uppercase italic leading-none text-brand-orange">BARTENDER</span>
                </div>
              </div>
              <p className="text-lg text-white/50 leading-relaxed text-center lg:text-left max-w-md">
                Turning every pour into an experience. Let's collaborate to make your next event 
                <span className="text-white italic"> unforgettable.</span>
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 text-center lg:text-left">Connect Info</h4>
              <div className="grid gap-3">
                <a 
                  href="mailto:samindalab@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-orange/30 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium text-white/80">samindalab@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+213540098315" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-pink/30 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
                    <Smartphone size={20} />
                  </div>
                  <span className="font-medium text-white/80">+213 540 09 83 15</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://www.instagram.com/sam_in_dagym/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-orange transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/213540098315"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-green-500 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Contact Form */}
          <div className="lg:col-span-8 lg:col-offset-2 glass-card p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] border-white/5 relative min-h-[420px] flex flex-col justify-center mx-auto w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <h3 className="text-3xl font-black italic mb-8 uppercase tracking-tight text-center lg:text-left">Drop a <span className="text-brand-orange">Line.</span></h3>
                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="VOTRE NOM" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white placeholder:text-white/20 font-bold tracking-widest"
                      />
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="ADRESSE EMAIL" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white placeholder:text-white/20 font-bold tracking-widest"
                      />
                    </div>
                    <div className="space-y-6">
                      <textarea 
                        required
                        name="message"
                        rows={4}
                        placeholder="PARLEZ-MOI DE VOTRE ÉVÉNEMENT..." 
                        className="w-full h-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white placeholder:text-white/20 font-bold tracking-widest resize-none"
                      />
                    </div>
                    
                    {error && (
                      <div className="md:col-span-2 text-red-400 text-xs font-bold uppercase tracking-widest text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                        {error}
                      </div>
                    )}

                    <div className="md:col-span-2">
                      <button 
                        type="submit"
                        disabled={isSending}
                        className="w-full py-5 bg-brand-orange text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSending ? (
                          <>Envoi en cours... <Loader2 className="animate-spin" size={18} /></>
                        ) : (
                          <>Envoyer le Message <Send size={18} /></>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black italic mb-4 uppercase tracking-tight">Message <span className="text-green-500">Sent!</span></h3>
                  <p className="text-white/40 leading-relaxed mb-8 max-w-md mx-auto">
                    Thanks for reaching out! I've received your message and will get back to you as soon as I'm done with the next pour.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-16 mt-20 flex flex-col items-center gap-12">
          <div className="w-16 h-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <BrandLogo />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/10">
              © 2026 SAM THE BARTENDER — L'ART DE LA MIXOLOGIE.
            </p>
            
            <div className="flex gap-8 text-[9px] uppercase font-black tracking-[0.4em] text-white/20">
              <a href="#" className="hover:text-brand-orange transition-all">Mentions Légales</a>
              <a href="#" className="hover:text-brand-orange transition-all">Cookies</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-all">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

