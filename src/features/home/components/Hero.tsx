import { useRef, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { useRafScroll } from "@/shared/hooks/useRafScroll";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import { clamp01 } from "@/shared/utils/clamp";
import { splitWords } from "@/shared/ui/splitWords";

export function Hero() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const heroInRef = useRef<HTMLDivElement>(null);

  useRafScroll(() => {
    if (reduced) return;
    const el = heroInRef.current;
    if (!el) return;
    const hp = clamp01(window.scrollY / (el.offsetHeight + 120));
    el.style.transform = `translateY(${-hp * 60}px) scale(${1 - hp * 0.04})`;
    el.style.opacity = String(1 - hp * 0.75);
  });

  const before = splitWords([{ text: t("hero.headlineBefore") }], {
    className: "w",
  });
  const dot = splitWords([{ text: "." }], {
    className: "w",
    startIndex: before.nextIndex,
  });
  const after = splitWords([{ text: t("hero.headlineAfter") }], {
    className: "w",
    startIndex: dot.nextIndex,
  });

  return (
    <header className="hero">
      <div className="hero-in" ref={heroInRef}>
        <h1>
          {before.nodes}
          <span className="dot">{dot.nodes}</span>{" "}
          <span className="m">{after.nodes}</span>
        </h1>
        <div className="hero-foot fade" style={{ "--d": ".9s" } as CSSProperties}>
          <span className="avail-row">
            <span className="avail">{t("hero.available")}</span>
          </span>
          <div className="links-row">
            <a
              className="ul"
              href="https://www.linkedin.com/in/juan-emilio-elizondo/"
              target="_blank"
              rel="noreferrer"
            >
              {t("hero.linkedin")}
            </a>
            <a
              className="ul"
              href="https://github.com/Juane2305"
              target="_blank"
              rel="noreferrer"
            >
              {t("hero.github")}
            </a>
            <a className="ul" href={t("hero.cvHref")} download>
              {t("hero.cv")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
