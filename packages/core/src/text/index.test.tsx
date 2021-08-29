import { screen, render } from "@testing-library/react";
import { Text } from "./index";

test("Render a text element", () => {
  render(<Text />);

  expect(screen.getByRole("heading", { level: 1, name: /text/i })).toBeInTheDocument();
});
