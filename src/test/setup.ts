import "@testing-library/jest-dom/vitest";
import { beforeEach } from "vitest";
import i18n from "@/i18n/i18n";

beforeEach(async () => {
  localStorage.clear();
  await i18n.changeLanguage("es");
});

// jsdom does not implement matchMedia — stub it so hooks reading
// prefers-reduced-motion / hover / pointer capabilities don't throw.
if (!window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }) as unknown as MediaQueryList;
}

// jsdom does not implement IntersectionObserver.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
window.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

// jsdom does not implement the View Transitions API.
if (!("startViewTransition" in document)) {
  // @ts-expect-error test-only stub
  document.startViewTransition = (callback: () => void | Promise<void>) => {
    const result = callback();
    const ready = Promise.resolve(result);
    return {
      ready,
      updateCallbackDone: ready,
      finished: ready,
      skipTransition: () => {},
    };
  };
}

// jsdom implements scrollTo only as a "not implemented" stub that logs a
// warning to the virtual console; replace it with a real no-op.
window.scrollTo = (() => {}) as typeof window.scrollTo;
Element.prototype.scrollIntoView = Element.prototype.scrollIntoView ?? (() => {});
