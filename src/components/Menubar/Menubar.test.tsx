import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppBar, Drawer } from "@mui/material"; // Assuming MUI components are used
import Menubar from "./Menubar";
import { pages } from "../../pages/Home/Home";

jest.mock("@mui/material", () => ({
  AppBar: jest.fn((props) => <div {...props} />),
  Drawer: jest.fn((props) => <div {...props} />),
}));

describe("Menubar", () => {
  test("renders Menubar component", () => {
    render(<Menubar links={pages} />);
  });
});
describe("Menubar", () => {
  test("renders Menubar component", () => {
    render(<Menubar links={pages} />);

    // Check if AppBar is rendered
    expect(AppBar).toHaveBeenCalled();

    // Check if Drawer is rendered
    expect(Drawer).toHaveBeenCalled();

    // Simulate click event on the menu button
    fireEvent.click(screen.getByLabelText("menu"));

    // Check if the drawer is open after the click event
    expect(Drawer).toHaveBeenCalledWith(
      expect.objectContaining({
        open: true,
      })
    );
  });
});
