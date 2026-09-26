import { afterEach, describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderRoute } from "@/test/renderRoute";

function mockReducedMotion(reduce: boolean) {
  return vi.spyOn(window, "matchMedia").mockImplementation(
    (query: string) =>
      ({
        matches: reduce && query.includes("prefers-reduced-motion"),
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList,
  );
}

describe("ProjectPage view transitions", () => {
  afterEach(() => vi.restoreAllMocks());

  it("names the title and shot when moving to the next project", async () => {
    mockReducedMotion(false);
    const original = document.startViewTransition.bind(document);
    let namedAtStart: string[] = [];
    vi.spyOn(document, "startViewTransition").mockImplementation(((cb: () => void) => {
      namedAtStart = [
        document.querySelector("h1")?.className ?? "",
        document.querySelector(".shot")?.className ?? "",
      ];
      return original(cb);
    }) as typeof document.startViewTransition);

    const user = userEvent.setup();
    renderRoute(["/proyectos/sendo"]);
    await user.click(await screen.findByRole("link", { name: /Hornero Digital/ }));

    await waitFor(() => expect(namedAtStart).toEqual(["vt-title", "shot vt-shot"]));
  });

  it("skips the view transition when the user prefers reduced motion", async () => {
    mockReducedMotion(true);
    const spy = vi.spyOn(document, "startViewTransition");

    const user = userEvent.setup();
    const { router } = renderRoute(["/proyectos/sendo"]);
    await user.click(await screen.findByRole("link", { name: /Hornero Digital/ }));

    await waitFor(() =>
      expect(router.state.location.pathname).toBe("/proyectos/hornero"),
    );
    expect(spy).not.toHaveBeenCalled();
  });
});

describe("ProjectPage", () => {
  it("renders sendo's contract wording and a link to the next project", async () => {
    renderRoute(["/proyectos/sendo"]);

    expect(await screen.findByText("Desarrollo por contrato")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Hornero Digital/ }),
    ).toHaveAttribute("href", "/proyectos/hornero");
  });

  it("redirects an unknown project slug back home", async () => {
    const { router } = renderRoute(["/proyectos/does-not-exist"]);

    await waitFor(() => expect(router.state.location.pathname).toBe("/"));
    expect(
      await screen.findByRole("heading", { level: 2, name: /Trabajo/ }),
    ).toBeInTheDocument();
  });
});
