import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderRoute } from "@/test/renderRoute";

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
