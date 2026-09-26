import type { CSSProperties } from "react";
import { Link, Navigate, useParams, useViewTransitionState } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProject, projects } from "./projects.data";
import { previewByIndex } from "./previews/previewList";

export function ProjectPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const project = getProject(slug);
  const isLeavingToHome = useViewTransitionState("/");

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const Preview = previewByIndex[project.previewIndex];
  const about = t(`projects.${project.slug}.about`, {
    returnObjects: true,
  }) as string[];
  const did = t(`projects.${project.slug}.did`, {
    returnObjects: true,
  }) as string[];
  const nextProject = projects[project.next];

  return (
    <main id="case" className="wrap case">
      <Link
        className="back"
        to="/"
        viewTransition
        state={{ fromProject: project.slug }}
      >
        <span className="arr">←</span> {t("case.back")}
      </Link>
      <header className="case-head">
        <h1 className={isLeavingToHome ? "vt-title" : undefined}>
          {t(`projects.${project.slug}.title`)}
        </h1>
        <p className="stagger" style={{ "--s": 1 } as CSSProperties}>
          {t(`projects.${project.slug}.lead`)}
        </p>
      </header>
      <dl className="facts stagger">
        {project.factKeys.map((key, index) => (
          <div style={{ "--s": index + 2 } as CSSProperties} key={key}>
            <dt>{t(`factLabels.${key}`)}</dt>
            <dd>
              {key === "site" ? (
                <a className="ul" href={project.siteUrl}>
                  {t(`projects.${project.slug}.facts.site`)} ↗
                </a>
              ) : (
                t(`projects.${project.slug}.facts.${key}`)
              )}
            </dd>
          </div>
        ))}
      </dl>
      <div className={isLeavingToHome ? "shot vt-shot" : "shot"}>
        <Preview />
      </div>
      <section className="sec">
        <h2>{t("case.aboutHeading")}</h2>
        <div className="prose" style={{ marginTop: 0 }}>
          {about.map((paragraph, index) => (
            <p key={index}>
              {index > 0 ? (
                <span className="muted">{paragraph}</span>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </section>
      <section className="sec">
        <h2>{t("case.didHeading")}</h2>
        <ul>
          {did.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <Link className="next" to={`/proyectos/${project.next}`} viewTransition>
        <span>
          <small>{t("case.nextLabel")}</small>
          <strong>{t(`projects.${nextProject.slug}.title`)}</strong>
        </span>
        <span className="arr">→</span>
      </Link>
    </main>
  );
}
