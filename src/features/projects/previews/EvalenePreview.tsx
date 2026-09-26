import evaleneLogo from "@/assets/brands/evalene-logo.svg";
import { useTranslation } from "react-i18next";

/**
 * Ported from the prototype's <template id="pv-0"> exactly: same markup,
 * same classNames, same --k stagger indices. The only change is the logo,
 * which now comes from a real asset file instead of an inlined data URI.
 */
export function EvalenePreview() {
  const { t } = useTranslation();
  return (
    <div className="pv pv-eva">
      <div className="card eva">
        <div className="hd">
          <span
            className="eva-logo"
            role="img"
            aria-label="Evalene"
            style={{ backgroundImage: `url(${evaleneLogo})` }}
          />
          <span className="cap">{t("projects.evalene.previewCaption")}</span>
        </div>
        <div className="days">
          <span>L</span>
          <span className="on">M</span>
          <span>M</span>
          <span>J</span>
          <span>V</span>
        </div>
        <div className="appt" style={{ "--k": 0 } as React.CSSProperties}>
          <time>09:00</time>
          <div>
            {t("projects.evalene.previewAppt1Name")}{" "}
            <small>{t("projects.evalene.previewAppt1Note")}</small>
          </div>
        </div>
        <div className="appt" style={{ "--k": 1 } as React.CSSProperties}>
          <time>10:30</time>
          <div>
            {t("projects.evalene.previewAppt2Name")}{" "}
            <small>{t("projects.evalene.previewAppt2Note")}</small>
          </div>
        </div>
        <div
          className="appt free"
          style={{ "--k": 2 } as React.CSSProperties}
        >
          <time>12:00</time>
          <div>{t("projects.evalene.previewFree")}</div>
        </div>
        <div className="appt" style={{ "--k": 3 } as React.CSSProperties}>
          <time>15:00</time>
          <div>
            {t("projects.evalene.previewAppt3Name")}{" "}
            <small>{t("projects.evalene.previewAppt3Note")}</small>
          </div>
        </div>
      </div>
      <div className="toast">
        <i>✓</i>
        {t("projects.evalene.previewToast")}
      </div>
    </div>
  );
}
