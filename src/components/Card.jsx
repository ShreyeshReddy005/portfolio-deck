import { useRef, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils';

export function Card({
  card,
  index,
  isActive,
  isAnotherActive,
  isLoaded,
  isMobile,
  onClick,
  onClose
}) {
  const contentRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  // Focus management and deferred rendering to prevent frame drops
  useEffect(() => {
    if (isActive) {
      // Delay mounting heavy framer-motion components until the CSS 3D flip is mostly complete
      const renderTimer = setTimeout(() => {
        setShowContent(true);
        if (contentRef.current) contentRef.current.focus();
      }, 350);
      return () => clearTimeout(renderTimer);
    } else {
      setShowContent(false);
    }
  }, [isActive]);

  const getDeckTransform = () => {
    if (!isLoaded) return `translate(-50%, calc(-50% + 150px)) rotate(0deg)`;
    const xOffset = isMobile ? index * 35 - 70 : index * 190 - 380;
    const yOffset = isMobile ? Math.abs(index - 2) * 20 : Math.abs(index - 2) * 30;
    const rotation = isMobile ? (index - 2) * 8 : (index - 2) * 12;
    return `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px)) rotate(${rotation}deg)`;
  };

  const containerStyle = {
    position: 'absolute',
    top: isActive ? '50%' : '55%',
    left: '50%',
    width: isActive ? (isMobile ? '95vw' : '85vw') : (isMobile ? '200px' : '260px'),
    height: isActive ? (isMobile ? '90dvh' : '90vh') : (isMobile ? '300px' : '380px'),
    maxWidth: isActive ? '1200px' : 'none',
    maxHeight: isActive ? '900px' : 'none',
    transform: isActive ? 'translate(-50%, -50%) rotate(0deg)' : getDeckTransform(),
    zIndex: isActive ? 50 : (isAnotherActive ? 0 : 10 + index),
    transition: `transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) ${!isLoaded ? index * 0.1 : 0}s, width 0.6s cubic-bezier(0.25, 1, 0.5, 1), height 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease`, 
    opacity: !isLoaded ? 0 : (isAnotherActive ? 0 : 1), 
    pointerEvents: isAnotherActive ? 'none' : 'auto',
    willChange: 'transform',
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      style={containerStyle}
      className={cn(
        "group cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-rose-500 rounded-3xl"
      )}
      onClick={(e) => {
        if (!isActive) {
          e.stopPropagation();
          onClick();
        }
      }}
      tabIndex={isActive || isAnotherActive ? -1 : 0}
      role="button"
      aria-label={`Open ${card.title} card`}
      onKeyDown={handleKeyDown}
    >
      {/* Inner 3D Wrapper */}
      <div 
        className={cn(
          "relative w-full h-full preserve-3d rounded-3xl",
          isActive ? "rotate-y-180 shadow-2xl" : "shadow-xl group-hover:-translate-y-4 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        )}
        style={{ transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }}
      >
        
        {/* === CARD BACK (The colored cover) === */}
        <div 
          className={cn(
            "absolute inset-0 backface-hidden rounded-3xl overflow-hidden flex flex-col justify-between p-6 border border-white/10",
            card.bgColor
          )}
          style={{ transform: 'translateZ(1px)' }}
          aria-hidden="true"
        >
          {/* Decorative background noise */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>

          <div className="relative z-10 flex justify-between items-start">
            <span className={cn("text-3xl md:text-4xl font-black opacity-50 font-display", card.textColor)}>
              {card.number}
            </span>
            <div className="w-8 h-8 rounded-full border-2 border-current opacity-30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-current"></div>
            </div>
          </div>
          
          <h2 className="relative z-10 text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none origin-bottom-left transform -rotate-90 translate-y-6 md:translate-y-8 translate-x-3 md:translate-x-4 font-display">
            {card.title}
          </h2>
        </div>

        {/* === CARD FRONT (The content) === */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-neutral-900 overflow-hidden shadow-inner border border-white/5 flex flex-col"
          style={{ transform: 'rotateY(180deg) translateZ(1px)' }}
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Content Container */}
          {showContent && (
            <div ref={contentRef} className="flex-1 w-full h-full relative" tabIndex={-1}>
              <card.Content />
            </div>
          )}

          {/* Close Button */}
          {isActive && (
            <button 
              onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[100] w-10 h-10 md:w-12 md:h-12 bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-rose-500 shadow-xl"
              aria-label="Close card"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
