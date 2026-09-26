import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderRoute } from "@/test/renderRoute";

describe("HomePage", () => {
  it("renders the three projects with links to their case pages", async () => {
    renderRoute(["/"]);

    expect(await screen.findByRole("link", { name: /Evalene/ })).toHaveAttribute(
      "href",
      "/proyectos/evalene",
    );
    expect(screen.getByRole("link", { name: /Sendo/ })).toHaveAttribute(
      "href",
      "/proyectos/sendo",
    );
    expect(
      screen.getByRole("link", { name: /Hornero Digital/ }),
    ).toHaveAttribute("href", "/proyectos/hornero");
  });

  it("switches the headline and CV link to English via the language toggle", async () => {
    renderRoute(["/"]);
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "EN" }));

    await waitFor(() => {
      expect(document.querySelector("h1")?.textContent).toContain(
        "Hi, I'm Juane",
      );
    });
    expect(
      screen.getByRole("link", { name: /Download CV/ }),
    ).toHaveAttribute("href", "/cv/juane-elizondo-cv-en.pdf");
    expect(document.documentElement.lang).toBe("en");
  });
});
