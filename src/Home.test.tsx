import React from "react";
import { render, getByText, RenderResult } from "@testing-library/react";
import Home from "./pages/Home/Home";

test("renders the correct content", () => {
  // Render the Home component
  const { container }: RenderResult = render(<Home />);

  // Use getByText to retrieve the rendered component
  const appContent: HTMLElement = getByText(
    container,
    "App bar code goes here"
  );

  // Perform assertions
  expect(appContent).toBeInTheDocument();
});
