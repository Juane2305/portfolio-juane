import { useRef } from "react";
import { useRafScroll } from "@/shared/hooks/useRafScroll";

/** Accent bar at the top of the page, fixed, tracking overall scroll depth. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useRafScroll(() => {
    const el = ref.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    el.style.transform = `scaleX(${ratio})`;
  });

  return <div className="progress" ref={ref} />;
}
