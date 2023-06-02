import React from "react";
import { render, screen } from "@testing-library/react";
import { Home, NavItem } from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home", () => {
  it("displays the correct links in the Menubar component", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const pages: Array<NavItem> = [
      {
        title: "HOME",
        path: "/home",
        fallbackTitle: "Dashboard",
      },
      {
        title: "PROJECTS",
        path: "/researchform",
        fallbackTitle: "Projects",
      },
      {
        title: "RECOVERIES",
        path: "/Recoveries",
        fallbackTitle: "Recoveries",
      },
    ];

    pages.forEach((page) => {
      const linkElement = screen.getByText(page.title);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
