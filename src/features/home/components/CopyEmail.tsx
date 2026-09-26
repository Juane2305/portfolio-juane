import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const REVERT_DELAY_MS = 1800;

function selectElementContents(el: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

/** Ports the prototype's #copy button: clipboard write with a selection
 * fallback, and an icon/label morph into "Copiado" for a few seconds. */
export function CopyEmail() {
  const { t } = useTranslation();
  const email = t("contact.email");
  const [done, setDone] = useState(false);
  const mailRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const markDone = () => {
    setDone(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDone(false), REVERT_DELAY_MS);
  };

  const handleClick = () => {
    const text = mailRef.current?.textContent ?? email;
    const fallback = () => {
      if (mailRef.current) selectElementContents(mailRef.current);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(markDone, fallback);
    } else {
      fallback();
    }
  };

  return (
    <button
      className={done ? "copy done" : "copy"}
      type="button"
      onClick={handleClick}
      aria-live="polite"
    >
      <span className="lbl">
        <span ref={mailRef}>{email}</span>
        <span>{t("contact.copyDone")}</span>
      </span>
      <span className="ic" aria-hidden="true">
        <svg
          className="cp"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
        <svg
          className="ok"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
    </button>
  );
}
