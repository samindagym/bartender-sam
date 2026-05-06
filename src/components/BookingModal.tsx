import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
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
        setError(data.error || "Oups! Un problème est survenu.");
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0f0c29]/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 sm:p-12">
              {!isSubmitted ? (
                <>
                  <div className="mb-10">
                    <div className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-[10px] font-black tracking-[0.3em] uppercase rounded-full mb-4 border border-brand-orange/30">
                      Reservations
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter text-white">
                      BOOK THE <span className="gradient-text">EXPERIENCE.</span>
                    </h2>
                    <p className="text-white/40 mt-2">Fill out the details below and I'll get back to you within 24 hours.</p>
                  </div>                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Nom Complet</label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white placeholder:text-white/10 font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Adresse Email</label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white placeholder:text-white/10 font-bold"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Date de l'Événement</label>
                        <div className="relative">
                          <input
                            required
                            name="date"
                            type="date"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white font-bold [color-scheme:dark]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Nombre d'Invités</label>
                        <input
                          required
                          name="guests"
                          type="number"
                          placeholder="50+"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white placeholder:text-white/10 font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Détails de l'Événement</label>
                      <textarea
                        required
                        name="message"
                        rows={3}
                        placeholder="Parlez-moi de votre vision..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-brand-orange outline-none transition-all text-white placeholder:text-white/10 font-bold resize-none"
                      />
                    </div>

                    {error && (
                      <div className="text-red-400 text-[10px] font-black uppercase tracking-widest text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-5 bg-brand-orange text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>Réservation en cours... <Send className="animate-pulse" size={18} /></>
                      ) : (
                        <>Demander une Réservation <Send size={18} /></>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-8"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-4">
                    REQUEST <span className="text-green-500">RECEIVED!</span>
                  </h2>
                  <p className="text-white/40 max-w-sm mb-10 leading-relaxed">
                    Thank you for reaching out. I'll review your event details and contact you shortly to discuss the menu.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-10 py-4 bg-white/10 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>

            {/* Decorative bottom bar */}
            <div className="h-2 w-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
