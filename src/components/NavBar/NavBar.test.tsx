import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ButtonAppBar from "./NavBar";

describe("ButtonAppBar", () => {
  it("renders the navigation links correctly", () => {
    render(
      <MemoryRouter>
        <ButtonAppBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();

    const projectLink = screen.getByText("Project");
    expect(projectLink).toBeInTheDocument();

    const recoveriesLink = screen.getByText("Recoveries");
    expect(recoveriesLink).toBeInTheDocument();

    const notificationsLink = screen.getByText("Notifications");
    expect(notificationsLink).toBeInTheDocument();

    const additionalServicesLink = screen.getByText("Additional Services");
    expect(additionalServicesLink).toBeInTheDocument();
  });
});
