import { useTranslation } from "react-i18next";
import { CopyEmail } from "./CopyEmail";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section className="sec contact" id="contacto">
      <h2>{t("contact.heading")}</h2>
      <div className="reveal">
        <h3>{t("contact.question")}</h3>
        <div className="row">
          <CopyEmail />
          <a
            className="ul"
            href={t("contact.whatsappHref")}
            target="_blank"
            rel="noreferrer"
          >
            {t("contact.whatsapp")}
          </a>
        </div>
      </div>
    </section>
  );
}
