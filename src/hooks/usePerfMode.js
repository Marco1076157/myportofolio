import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export const MOBILE_QUERY = "(max-width: 767px)";
export const COARSE_POINTER_QUERY = "(pointer: coarse)";
export const MOBILE_MAX_DURATION = 0.3;

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mql = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);
    setMatches(mql.matches);
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, [query]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery(MOBILE_QUERY);
}

export function useIsTouch() {
  return useMediaQuery(COARSE_POINTER_QUERY);
}

/**
 * Sentral untuk semua keputusan performa animasi.
 *
 * - isMobile / isTouch : layar sempit atau perangkat sentuh (HP/tablet)
 * - isReduced          : prefers-reduced-motion dari sistem
 * - duration(base)     : maksimum 0.3s di mobile
 * - stagger(index, s)  : mematikan delay beruntun panjang di mobile
 * - tiltEnabled        : efek 3D tilt + glow kursor hanya di desktop non-touch
 */
export function usePerfMode() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTouch = useMediaQuery(COARSE_POINTER_QUERY);
  const reducedMotion = useReducedMotion();
  const isReduced = Boolean(reducedMotion);

  const duration = (base) =>
    isMobile || isReduced ? Math.min(base, MOBILE_MAX_DURATION) : base;

  const stagger = (index, step = 0.1) =>
    isMobile || isReduced ? 0 : index * step;

  return {
    isMobile,
    isTouch,
    isReduced,
    tiltEnabled: !isMobile && !isTouch && !isReduced,
    duration,
    stagger,
  };
}
