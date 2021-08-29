import { screen, render } from "@testing-library/react";
import { Button } from "./index";

test("Render a button element", () => {
  render(<Button />);

  expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument();
});
