import { useTranslation } from "react-i18next";

interface CertLink {
  label: string;
  href: string;
}

interface EducationRow {
  year: string;
  title: string;
  sub: string;
  certLinks: CertLink[];
}

export function Education() {
  const { t } = useTranslation();
  const rows = t("education.rows", { returnObjects: true }) as EducationRow[];

  return (
    <section className="sec" id="formacion">
      <h2>{t("education.heading")}</h2>
      <div className="rows">
        {rows.map((row, index) => {
          const body = (
            <>
              <span className="y">{row.year}</span>
              <span>
                {row.title} <span className="s">· {row.sub}</span>
              </span>
            </>
          );

          if (row.certLinks.length === 1) {
            const cert = row.certLinks[0];
            return (
              <a
                className="r"
                key={index}
                href={cert.href}
                target="_blank"
                rel="noreferrer"
              >
                {body}
                <span className="go">{cert.label}</span>
              </a>
            );
          }

          return (
            <div className="r" key={index}>
              {body}
              <span className="go">
                {row.certLinks.map((cert, certIndex) => (
                  <span key={cert.href}>
                    {certIndex > 0 ? " · " : null}
                    <a className="ul" href={cert.href} target="_blank" rel="noreferrer">
                      {cert.label}
                    </a>
                  </span>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
