import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Twitter, Smartphone, Send } from 'lucide-react';
import Logo from './Logo';

export default function Contact() {
  return (
    <footer id="contact" className="relative pt-32 pb-16 overflow-hidden">
      {/* Immersive Glass Background */}
      <div className="absolute inset-x-0 bottom-0 top-20 bg-white/5 backdrop-blur-3xl border-t border-white/10 rounded-t-[80px] -z-10" />
      
      {/* Glowing Accents */}
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-brand-orange/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-pink/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Branding & Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Logo className="h-14 w-14" />
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
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="mailto:hello@samthebartender.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-orange/30 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium text-white/80">hello@samthebartender.com</span>
                </motion.a>
                
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="tel:+123456789" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-pink/30 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
                    <Smartphone size={20} />
                  </div>
                  <span className="font-medium text-white/80">+1 (555) SAM-POUR</span>
                </motion.a>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-orange transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Middle Column: Large Form / Message Section */}
          <div className="lg:col-span-4 glass-card p-10 rounded-[40px] border-white/5">
            <h3 className="text-3xl font-black italic mb-8 uppercase tracking-tight">Drop a <span className="text-brand-orange">Line.</span></h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="YOUR NAME" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-hidden transition-all text-white placeholder:text-white/20 font-bold tracking-widest"
                />
              </div>
              <div className="space-y-2">
                <textarea 
                  rows={4}
                  placeholder="TELL ME ABOUT YOUR EVENT..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-hidden transition-all text-white placeholder:text-white/20 font-bold tracking-widest"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-brand-orange text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right Column: 3D Model Placeholder Container */}
          <div className="lg:col-span-4 h-full min-h-[500px] relative group">
            <div className="absolute inset-0 bg-linear-to-br from-brand-orange/10 via-brand-pink/10 to-brand-purple/10 rounded-[50px] blur-[2px] border border-white/10 overflow-hidden">
              {/* This is the container for the 3D Model */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-4 text-white/20">
                  <div className="w-32 h-32 border-2 border-dashed border-white/20 rounded-full animate-spin [animation-duration:10s]" />
                  <span className="text-xs font-black uppercase tracking-[0.4em]">3D Model Canvas</span>
                </div>
              </div>
              
              {/* Decorative floating glass elements to simulate 3D depth */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-20 right-10 w-24 h-24 glass-card rounded-2xl border-white/20 shadow-2xl"
              />
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 left-10 w-32 h-16 glass-card rounded-full border-white/20 shadow-2xl"
              />
            </div>
            
            {/* Label for the model */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-3xl px-6 py-3 rounded-full border border-white/20 shadow-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Interactive 3D Preview</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
            © 2026 SAM THE BARTENDER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
            <a href="#" className="hover:text-brand-orange transition-all">Privacy</a>
            <a href="#" className="hover:text-brand-orange transition-all">Terms</a>
            <a href="#" className="hover:text-brand-orange transition-all">Events</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
