import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <span>{t("footer.rights")}</span>
      <span>{t("footer.location")}</span>
    </footer>
  );
}
