import React from "react";
import { render, screen } from "@testing-library/react";
import { Projects } from "./Project";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";

describe("Project", () => {
  test("renders the Projects title", () => {
    render(
      <MemoryRouter>
        <Projects isLeftDrawerOpen={false} />
      </MemoryRouter>
    );
    const projectsTitle = screen.getByText("Projects");
    expect(projectsTitle).toBeInTheDocument();
  });

  test("renders the divider", () => {
    render(
      <BrowserRouter>
        <Projects isLeftDrawerOpen={false} />
      </BrowserRouter>
    );
    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
  });
});
