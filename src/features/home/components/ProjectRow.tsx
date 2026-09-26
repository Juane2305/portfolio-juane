import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ProjectDefinition } from "@/features/projects/projects.data";
import { previewByIndex } from "@/features/projects/previews/previewList";
import type { FloatingPreviewApi } from "../useFloatingPreview";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";

interface ProjectRowProps {
  project: ProjectDefinition;
  index: number;
  floater: FloatingPreviewApi;
  /** Whether a view transition to this project's case page is pending. */
  isTransitioning: boolean;
}

function isVisible(el: Element | null): boolean {
  return !!el && (el as HTMLElement).offsetParent !== null;
}

export function ProjectRow({
  project,
  index,
  floater,
  isTransitioning,
}: ProjectRowProps) {
  const { t } = useTranslation();
  const thumbRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const to = `/proyectos/${project.slug}`;

  const floaterIsShot =
    isTransitioning &&
    floater.isVisible() &&
    floater.activeIndex() === project.previewIndex;
  // Reading the ref here is deliberate: we only need the thumb's current
  // visibility at the exact render pass a view transition starts, to decide
  // which element should carry the shared view-transition-name.
  /* eslint-disable-next-line react-hooks/refs -- see comment above */
  const thumbIsVisible = isVisible(thumbRef.current);
  const thumbIsShot = isTransitioning && !floaterIsShot && thumbIsVisible;

  const Preview = previewByIndex[project.previewIndex];

  return (
    <Link
      className="proj"
      to={to}
      viewTransition={!reduced}
      data-i={index}
      data-id={project.slug}
      onPointerEnter={floater.onRowPointerEnter(index)}
      onClick={floater.hide}
    >
      <div className={thumbIsShot ? "thumb vt-shot" : "thumb"} ref={thumbRef}>
        <Preview />
      </div>
      <span className={isTransitioning ? "t vt-title" : "t"}>
        {t(`projects.${project.slug}.title`)}
      </span>
      <span className="d">
        {t(`projects.${project.slug}.listDescription`)}
      </span>
      <span className="x">
        {t("work.viewCase")} <span className="arr">→</span>
      </span>
    </Link>
  );
}
