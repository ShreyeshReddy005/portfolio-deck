import { useState, useCallback, useRef, useEffect } from 'react';

export function useAudio() {
  const audioCtxRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const playSwoosh = useCallback((isOpen) => {
    if (isMuted) return;
    
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Triangle waves are inherently smooth and muffled, unlike harsh noise or buzzy sawtooths
      osc.type = 'triangle';
      
      // Sweep pitch down slightly (low frequencies only, no harsh treble)
      osc.frequency.setValueAtTime(isOpen ? 250 : 150, t);
      osc.frequency.exponentialRampToValueAtTime(60, t + 0.15);

      // Volume envelope - Slightly increased volume (5% max) but still smooth and quiet
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.05, t + 0.03); // Soft peak at 5% volume
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2); // Smooth fade out

      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(t);
      osc.stop(t + 0.2);
    } catch {
      console.warn("Audio blocked or not supported.");
    }
  }, [isMuted]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isMuted, setIsMuted, playSwoosh };
}
