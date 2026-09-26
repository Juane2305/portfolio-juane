import { Outlet, ScrollRestoration } from "react-router-dom";
import { ScrollProgress } from "@/shared/components/ScrollProgress";
import { Nav } from "@/shared/components/Nav";

/**
 * Persistent chrome shared by every route: progress bar + sticky nav.
 * <ScrollRestoration> restores the home page's scroll position when
 * navigating back from a case page (and resets it on forward navigation),
 * the same behaviour the prototype implemented by hand with `homeScroll`.
 */
export function Layout() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
