import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useRafScroll } from "@/shared/hooks/useRafScroll";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import { clamp01 } from "@/shared/utils/clamp";
import { splitWords, type WordSegment } from "@/shared/ui/splitWords";

interface AboutRow {
  year: string;
  label: string;
  sub: string;
}

export function About() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const statementRef = useRef<HTMLParagraphElement>(null);

  const segments = t("about.statement", {
    returnObjects: true,
  }) as WordSegment[];
  const { nodes } = splitWords(segments, { className: "fw" });
  const rows = t("about.rows", { returnObjects: true }) as AboutRow[];

  useRafScroll(() => {
    const el = statementRef.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".fw");
    if (reduced) {
      words.forEach((word) => word.classList.add("lit"));
      return;
    }
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = clamp01(
      (vh * 0.82 - rect.top) / (rect.height + vh * 0.35),
    );
    const litCount = Math.round(progress * words.length);
    words.forEach((word, index) => {
      word.classList.toggle("lit", index < litCount);
    });
  });

  return (
    <section className="sec" id="sobre-mi">
      <h2>{t("about.heading")}</h2>
      <div>
        <p className="statement" ref={statementRef}>
          {nodes}
        </p>
        <div className="prose reveal">
          <p className="muted">{t("about.prose")}</p>
        </div>
        <div className="rows gap-lg">
          {rows.map((row, index) => (
            <div className="r" key={index}>
              <span className="y">{row.year}</span>
              <span>
                {row.label} <span className="s">· {row.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
