import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Section anchors (#trabajo, #sobre-mi, #contacto) must work from both the
 * home page and a case page: scroll directly when already home, otherwise
 * navigate home first and scroll once it has rendered.
 */
export function useSectionLink() {
  const navigate = useNavigate();
  const location = useLocation();
  const reduced = useReducedMotion();

  return useCallback(
    (sectionId: string) => (event: { preventDefault: () => void }) => {
      event.preventDefault();
      const behavior: ScrollBehavior = reduced ? "auto" : "smooth";
      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior });
        return;
      }
      navigate("/", { state: { scrollTo: sectionId } });
    },
    [location.pathname, navigate, reduced],
  );
}

/** Reads the `scrollTo` section id handed off by useSectionLink, if any. */
export function useScrollToOnMount() {
  const location = useLocation();
  const reduced = useReducedMotion();
  return useCallback(() => {
    const state = location.state as { scrollTo?: string } | null;
    const sectionId = state?.scrollTo;
    if (!sectionId) return;
    requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    });
  }, [location.state, reduced]);
}
