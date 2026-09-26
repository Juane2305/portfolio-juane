import { useEffect, useState, type RefObject } from "react";

/**
 * Same semantics as the prototype's wordmark IntersectionObserver:
 * enters "in" state on intersect, but only resets back to "not in" once the
 * element has scrolled back *below* the viewport (boundingClientRect.top > 0).
 * This was a deliberate bug fix: the wordmark reveal must not be
 * scroll-linked (it should not re-trigger while scrolling further down).
 */
export function useInView(
  ref: RefObject<Element | null>,
  { threshold = 0.35 }: { threshold?: number } = {},
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else if (entry.boundingClientRect.top > 0) {
            setInView(false);
          }
        });
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
