import { useEffect, useRef } from "react";

/**
 * Subscribes to scroll + resize the same way the prototype's onScroll/req
 * pair did: rAF-gated so at most one callback runs per frame, invoked once
 * immediately so initial layout is correct before the first user scroll.
 */
export function useRafScroll(callback: () => void): void {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    let ticking = false;
    const run = () => {
      ticking = false;
      callbackRef.current();
    };
    const request = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    request();
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);
}
