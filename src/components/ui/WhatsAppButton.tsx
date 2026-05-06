import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "213540098315";
  
  const options = [
    {
      id: 'book',
      label: 'Réserver un Événement 📅',
      message: "Bonjour Sam ! Je souhaiterais vous réserver pour un prochain événement. Pouvons-nous discuter de vos disponibilités ?",
      color: 'bg-brand-orange'
    },
    {
      id: 'packages',
      label: 'Détails des Formules 💎',
      message: "Bonjour Sam, j'aimerais en savoir plus sur vos formules de service (Private/Gala/Masterclass).",
      color: 'bg-brand-pink'
    },
    {
      id: 'question',
      label: 'Question Rapide 🥃',
      message: "Bonjour Sam, j'ai une petite question concernant vos services de mixologie !",
      color: 'bg-white/10'
    }
  ];

  const handleOptionClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
          
          {/* Options Menu */}
          <AnimatePresence>
            {isOpen && (
              <div className="flex flex-col items-end gap-3 mb-2">
                {options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    transition={{ delay: (options.length - index) * 0.1 }}
                    onClick={() => handleOptionClick(option.message)}
                    className={`px-6 py-3 rounded-2xl ${option.color} backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform active:scale-95`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            )}
          </AnimatePresence>

          <div className="relative">
            {/* Pulsing Aura */}
            {!isOpen && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"
              />
            )}

            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-2xl">
              Discuter avec Sam 🥃
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-colors duration-300 ${isOpen ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-[#25D366] shadow-green-500/40'}`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="whatsapp"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="28" 
                      height="28" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
