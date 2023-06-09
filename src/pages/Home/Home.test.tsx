import React from "react";
import { render, screen } from "@testing-library/react";
import { Home, NavItem } from "./Home";

describe("Home", () => {
  test("renders welcome text", () => {
    render(<Home isLeftDrawerOpen={false} />);

    const welcomeText = screen.getByText("welcome...");
    expect(welcomeText).toBeInTheDocument();
  });
});
