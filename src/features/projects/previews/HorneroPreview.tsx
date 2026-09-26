import horneroIsotipo from "@/assets/brands/hornero-isotipo.png";
import { useTranslation } from "react-i18next";

/** Ported from the prototype's <template id="pv-2"> exactly. */
export function HorneroPreview() {
  const { t } = useTranslation();
  return (
    <div className="pv pv-hor">
      <div className="hor">
        <div
          className="nest"
          role="img"
          aria-label={t("projects.hornero.previewLogoAlt")}
          style={{ backgroundImage: `url(${horneroIsotipo})` }}
        />
        <b>{t("projects.hornero.previewTitle")}</b>
        <small>{t("projects.hornero.previewSubtitle")}</small>
      </div>
    </div>
  );
}
