import { useRef, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "@/shared/hooks/useInView";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";

/**
 * Big "Juane Elizondo." wordmark: letters rise staggered, armed by an
 * IntersectionObserver (threshold .35). This is intentionally NOT
 * scroll-linked — it resets only once the mark has scrolled back below
 * the viewport, matching the prototype's bug-fixed behaviour.
 */
export function Wordmark() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const markRef = useRef<HTMLDivElement>(null);
  const inView = useInView(markRef, { threshold: 0.35 });
  const text = t("brand.wordmark");

  let letterIndex = 0;
  const letters = Array.from(text).map((char, position) => {
    if (char === " ") {
      return <span className="sp" key={position} />;
    }
    const index = letterIndex;
    letterIndex += 1;
    return (
      <span
        className={char === "." ? "ac" : undefined}
        style={{ "--i": index } as CSSProperties}
        key={position}
      >
        {char}
      </span>
    );
  });

  const markClassName = [
    "mark",
    !reduced && "armed",
    !reduced && inView && "in",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={markClassName} ref={markRef} aria-label={text}>
      <div className="big" aria-hidden="true">
        {letters}
      </div>
    </div>
  );
}
