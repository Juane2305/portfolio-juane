import { useTranslation } from "react-i18next";
import { useViewTransitionState } from "react-router-dom";
import { projectOrder, projects } from "@/features/projects/projects.data";
import { useFloatingPreview } from "../useFloatingPreview";
import { ProjectRow } from "./ProjectRow";
import { FloatingPreview } from "./FloatingPreview";

export function WorkList() {
  const { t } = useTranslation();
  const floater = useFloatingPreview();

  // Fixed, known-at-build-time route count: three static hook calls, not a
  // loop, so the Rules of Hooks stay satisfied.
  const evaleneTransitioning = useViewTransitionState("/proyectos/evalene");
  const sendoTransitioning = useViewTransitionState("/proyectos/sendo");
  const horneroTransitioning = useViewTransitionState("/proyectos/hornero");
  const transitioning: Record<string, boolean> = {
    evalene: evaleneTransitioning,
    sendo: sendoTransitioning,
    hornero: horneroTransitioning,
  };
  const transitioningSlug = projectOrder.find((slug) => transitioning[slug]);
  const isShotSource = Boolean(
    transitioningSlug &&
      floater.isVisible() &&
      floater.activeIndex() === projects[transitioningSlug].previewIndex,
  );

  return (
    <section className="sec" id="trabajo">
      <h2>
        {t("work.heading")} <span>{t("work.count")}</span>
      </h2>
      <div
        className="list"
        onPointerMove={floater.onListPointerMove}
        onPointerLeave={floater.onListPointerLeave}
      >
        {projectOrder.map((slug, index) => (
          <ProjectRow
            key={slug}
            project={projects[slug]}
            index={index}
            floater={floater}
            isTransitioning={transitioning[slug]}
          />
        ))}
      </div>
      <FloatingPreview api={floater} isShotSource={isShotSource} />
    </section>
  );
}
