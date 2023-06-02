import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppBar, Drawer } from "@mui/material"; // Assuming MUI components are used
import { pages } from "../../pages/Home/Home";
import { Menubar } from "./Menubar";
import { MemoryRouter } from "react-router-dom";

jest.mock("@mui/material", () => ({
  AppBar: jest.fn((props) => <div {...props} />),
  Drawer: jest.fn((props) => <div {...props} />),
}));

describe("Menubar", () => {
  test("renders Menubar component", () => {
    render(<Menubar links={pages} />);
  });

  test("renders Menubar component", () => {
    render(<Menubar links={pages} />);
    expect(AppBar).toHaveBeenCalled();
    expect(Drawer).toHaveBeenCalled();
    fireEvent.click(screen.getByLabelText("menu"));
    // Check if the drawer is open after the click event
    expect(Drawer).toHaveBeenCalledWith(
      expect.objectContaining({
        open: true,
      })
    );
  });
  test("should toggle the drawer when IconButton is clicked", () => {
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <Menubar links={[]} />
      </MemoryRouter>
    ); // render the component inside a MemoryRouter

    const menuButton = getByLabelText("menu"); // find the IconButton by its aria-label

    fireEvent.click(menuButton); // simulate a click event on the IconButton

    const drawer = getByRole("presentation"); // find the Drawer component

    // assert that the drawer is open
    expect(drawer).toBeInTheDocument();

    fireEvent.click(menuButton); // simulate a click event to close the Drawer

    // assert that the drawer is closed
    expect(drawer).not.toBeInTheDocument();
  });
});
