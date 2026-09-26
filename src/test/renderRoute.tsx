import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import { routes } from "@/app/routes";

export function renderRoute(initialEntries: string[]) {
  const router = createMemoryRouter(routes, { initialEntries });
  const result = render(<RouterProvider router={router} />);
  return { ...result, router };
}
