import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CopyEmail } from "./CopyEmail";

describe("CopyEmail", () => {
  it("copies the email to the clipboard and shows the copied state", async () => {
    // userEvent.setup() manages jsdom's own clipboard stub lifecycle and
    // resets navigator.clipboard when it runs, so our mock must be
    // installed *after* setup(), not before.
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });

    render(<CopyEmail />);
    await user.click(screen.getByRole("button"));

    expect(writeText).toHaveBeenCalledWith("juane.elizondo23@gmail.com");
    expect(await screen.findByRole("button")).toHaveClass("done");
  });
});
