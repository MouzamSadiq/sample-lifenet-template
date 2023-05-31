import React from "react";
import { render, screen } from "@testing-library/react";
import { NavLinks } from "./NavLinks";
import userEvent from "@testing-library/user-event";
describe("NavLinks", () => {
  test("renders all navigation links", () => {
    render(<NavLinks />);

    const homeLink = screen.getByText("HOME");
    const projectsLink = screen.getByText("PROJECTS");
    const recoveriesLink = screen.getByText("RECOVERIES");
    const researchLink = screen.getByText("RESEARCH");
    const adminLink = screen.getByText("ADMIN");
    const lookupsLink = screen.getByText("LOOKUPS");

    expect(homeLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(recoveriesLink).toBeInTheDocument();
    expect(researchLink).toBeInTheDocument();
    expect(adminLink).toBeInTheDocument();
    expect(lookupsLink).toBeInTheDocument();
  });

  // test("applies hover style on link item hover", () => {
  //   render(<NavLinks />);

  //   const linkItem = screen.getByText("HOME") as HTMLElement;
  //   expect(linkItem).not.toHaveStyle("border-top: 2px solid #2ecc71;");

  //   userEvent.hover(linkItem);
  //   expect(linkItem).toHaveStyle("border-top: 2px solid #2ecc71;");
  // });
});
