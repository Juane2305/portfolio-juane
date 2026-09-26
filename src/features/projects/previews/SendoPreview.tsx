import sendoIcon from "@/assets/brands/sendo-icon.png";
import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";

const sendoLogoStyle = {
  "--sen-logo-img": `url(${sendoIcon})`,
} as CSSProperties;

/** Ported from the prototype's <template id="pv-1"> exactly. */
export function SendoPreview() {
  const { t } = useTranslation();
  return (
    <div className="pv pv-sen">
      <div className="card sen">
        <div className="hd">
          <b className="sen-logo" style={sendoLogoStyle}>
            {t("projects.sendo.previewTitle")}
          </b>
          <span className="btn">{t("projects.sendo.previewNewButton")}</span>
        </div>
        <div className="tr" style={{ "--k": 0 } as CSSProperties}>
          <span>{t("projects.sendo.previewItem1")}</span>
          <span>48</span>
          <span className="chip">{t("projects.sendo.previewInStock")}</span>
        </div>
        <div className="tr" style={{ "--k": 1 } as CSSProperties}>
          <span>{t("projects.sendo.previewItem2")}</span>
          <span>6</span>
          <span className="chip low">
            {t("projects.sendo.previewLowStock")}
          </span>
        </div>
        <div className="tr" style={{ "--k": 2 } as CSSProperties}>
          <span>{t("projects.sendo.previewItem3")}</span>
          <span>120</span>
          <span className="chip">{t("projects.sendo.previewInStock")}</span>
        </div>
        <div className="tr" style={{ "--k": 3 } as CSSProperties}>
          <span>{t("projects.sendo.previewItem4")}</span>
          <span>3</span>
          <span className="chip low">
            {t("projects.sendo.previewLowStock")}
          </span>
        </div>
      </div>
      <div className="toast">
        <i>✓</i>
        {t("projects.sendo.previewToast")}
      </div>
    </div>
  );
}
