import { useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { CARDS_DATA } from './data/portfolioData';
import { Card } from './components/Card';
import { useAudio } from './hooks/useAudio';
import { triggerHaptic } from './utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { isMuted, setIsMuted, playSwoosh } = useAudio();

  // Handle responsive layout & Initial Load
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    
    // Trigger "dealing" entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('resize', checkSize);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = useCallback(() => {
    if (activeCard !== null) {
      playSwoosh(false);
      setActiveCard(null);
      triggerHaptic('light');
    }
  }, [activeCard, playSwoosh]);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
      playSwoosh(false);
      triggerHaptic('light');
    } else {
      setActiveCard(index);
      playSwoosh(true);
      triggerHaptic('heavy');
    }
  };

  // Keyboard navigation for global escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeCard !== null) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCard, handleClose]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#111115] bg-grid perspective-container selection:bg-rose-500 selection:text-white font-sans">
      
      {/* Architectural Framing & Spatial Depth (Crosshairs and Metadata) */}
      <div className="absolute inset-0 pointer-events-none z-0 border-[1px] border-white/[0.03] m-4 md:m-8" />
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-4 h-4 border-t border-l border-white/20 pointer-events-none z-0" />
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-4 h-4 border-t border-r border-white/20 pointer-events-none z-0" />
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-4 h-4 border-b border-l border-white/20 pointer-events-none z-0" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-4 h-4 border-b border-r border-white/20 pointer-events-none z-0" />
      
      <div className="absolute top-6 left-12 md:top-10 md:left-14 pointer-events-none z-0 hidden sm:block">
        <p className="text-neutral-600 font-mono text-[8px] md:text-[10px] tracking-widest uppercase">SYS_ARCHITECT // v2.0</p>
      </div>
      <div className="absolute bottom-6 left-12 md:bottom-10 md:left-14 pointer-events-none z-0 hidden sm:block">
        <p className="text-neutral-600 font-mono text-[8px] md:text-[10px] tracking-widest uppercase">ELEVATION 0.00</p>
      </div>
      <div className="absolute bottom-6 right-12 md:bottom-10 md:right-14 pointer-events-none z-0 hidden sm:block text-right">
        <p className="text-neutral-600 font-mono text-[8px] md:text-[10px] tracking-widest uppercase">SCALE 1:1</p>
      </div>
      
      {/* Dynamic Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-0" />
      
      {/* Ambient Aurora - Optimized to use GPU-friendly radial gradients instead of heavy CSS blur filters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-50 mix-blend-screen">
        <motion.div 
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15)_0%,transparent_60%)]"
        />
        <motion.div 
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_60%)]"
        />
      </div>
      
      {/* Global Backdrop (Clicks outside to close) */}
      <AnimatePresence>
        {activeCard !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-40 bg-black/60 cursor-pointer"
            onClick={handleClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Hero Intro Overlay */}
      <AnimatePresence>
        {activeCard === null && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            transition={{ duration: 0.8, delay: isLoaded ? 0 : 0.5 }}
            className="absolute top-12 md:top-20 left-0 right-0 z-0 pointer-events-none flex flex-col items-center text-center px-6"
            aria-hidden="true"
          >
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-white tracking-wide uppercase leading-none font-display mb-3">
              T SHREYESH REDDY
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center text-rose-500 font-mono tracking-widest uppercase text-[9px] md:text-xs font-bold drop-shadow-[0_0_8px_rgba(244,63,94,0.4)] mb-2 gap-1 md:gap-0">
              <span>SYSTEMS ARCHITECT</span> 
              <span className="hidden md:inline opacity-50 mx-2">//</span> 
              <span>PRODUCT STRATEGIST</span>
            </div>
            <p className="text-neutral-500 font-mono text-[8px] md:text-[10px] uppercase tracking-widest">
              I build systems that scale.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards Render */}
      <div className="absolute inset-0 pointer-events-none" aria-live="polite">
        {CARDS_DATA.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            isActive={activeCard === index}
            isAnotherActive={activeCard !== null && activeCard !== index}
            isLoaded={isLoaded}
            isMobile={isMobile}
            onClick={() => handleCardClick(index)}
            onClose={handleClose}
          />
        ))}
      </div>

      {/* Helper text fades in after dealing animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 font-bold tracking-[0.2em] uppercase text-[10px] z-30 pointer-events-none font-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeCard !== null || !isLoaded ? 0 : 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        aria-hidden="true"
      >
        Select a card to explore
      </motion.div>

      {/* Audio Control Toggle */}
      <div className="absolute bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-all outline-none focus-visible:ring-4 focus-visible:ring-rose-500 shadow-xl"
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          title={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}
