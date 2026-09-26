import { useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRafScroll } from "@/shared/hooks/useRafScroll";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import { useSectionLink } from "@/shared/hooks/useSectionLink";

const SCROLLED_THRESHOLD = 8;

export function Nav() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = useSectionLink();

  useRafScroll(() => {
    setScrolled((prev) => {
      const next = window.scrollY > SCROLLED_THRESHOLD;
      return prev === next ? prev : next;
    });
  });

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    }
  };

  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="wrap">
        <Link className="logo" to="/" onClick={handleLogoClick}>
          <i />
          {t("nav.logo")}
        </Link>
        <div className="menu">
          <a
            className="ul hide-sm"
            href="#trabajo"
            onClick={scrollToSection("trabajo")}
          >
            {t("work.heading")}
          </a>
          <a
            className="ul hide-sm"
            href="#sobre-mi"
            onClick={scrollToSection("sobre-mi")}
          >
            {t("about.heading")}
          </a>
          <a
            className="ul"
            href="#contacto"
            onClick={scrollToSection("contacto")}
          >
            {t("nav.contact")}
          </a>
          <span className="lang" role="group" aria-label={t("nav.langGroupLabel")}>
            <button
              type="button"
              aria-pressed={currentLanguage === "es"}
              onClick={() => i18n.changeLanguage("es")}
            >
              {t("nav.langEs")}
            </button>
            <button
              type="button"
              aria-pressed={currentLanguage === "en"}
              onClick={() => i18n.changeLanguage("en")}
            >
              {t("nav.langEn")}
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}
