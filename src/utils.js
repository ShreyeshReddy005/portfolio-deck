import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const triggerHaptic = (intensity = 'light') => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    if (intensity === 'light') navigator.vibrate(20); // 20ms light tap
    if (intensity === 'heavy') navigator.vibrate([30, 50, 30]); // double tap for opening
  }
};
