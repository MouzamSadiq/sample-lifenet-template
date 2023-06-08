import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";
import { NavItem } from "../../pages/Home/Home";
import {
  Home as HomeIcon,
  Notifications,
  Settings,
  Biotech,
  Menu,
} from "@mui/icons-material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

// Mock the Drawer component
jest.mock("@mui/material/Drawer", () => ({
  __esModule: true,
  default: function MockDrawer(props: any) {
    return (
      <div role="dialog" data-testid="mock-drawer">
        {props.children}
      </div>
    );
  },
}));

describe("Header", () => {
  const pages: Array<NavItem> = [
    // Temporally deactivating Dashboard view .

    {
      title: "Home",
      path: "/home",
      fallbackTitle: "Dashboard",
      icon: <HomeIcon />,
    },
    {
      title: "Projects",
      path: "/Project",
      fallbackTitle: "Projects",
      icon: <Menu />,
    },
    {
      title: "Recoveries",
      path: "/recoveries",
      fallbackTitle: "Recoveries",
      icon: <AccountTreeIcon />,
    },
    {
      title: "Notification",
      path: "/Notification",
      fallbackTitle: "Notification",
      icon: <Notifications />,
    },
    {
      title: "Additional Service",
      path: "/Service",
      fallbackTitle: "Additional Service",
      icon: <Settings />,
    },
    // { title: "analytics", path: "/analytics", fallbackTitle: "Analytics" },
  ];
  test("renders user name and role", () => {
    render(
      <MemoryRouter>
        <Header links={pages} />
      </MemoryRouter>
    );

    const userName = screen.getByText("User Name : Jared Blouse");
    const role = screen.getByText("Role :Admin");

    expect(userName).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });

  test("opens and closes drawer on menu icon click", () => {
    render(
      <MemoryRouter>
        <Header links={pages} />
      </MemoryRouter>
    );

    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const drawer = screen.getByTestId("drawer2");
    expect(drawer).toBeInTheDocument();

    fireEvent.click(menuIcon);
    // expect(drawer).not.toBeInTheDocument();
  });
  test("opens and closes the left drawer when the menu icon is clicked", () => {
    render(
      <MemoryRouter>
        <Header links={pages} />
      </MemoryRouter>
    );

    const menuIcon = screen.getByLabelText("menubar");
    const drawer = screen.getByTestId("drawer1");

    expect(drawer).not.toHaveClass("MuiDrawer-open");

    fireEvent.click(menuIcon);
    expect(drawer).toHaveClass("MuiDrawer-open");

    fireEvent.click(menuIcon);
    expect(drawer).not.toHaveClass("MuiDrawer-open");
  });

  test("opens and closes the right drawer when the menu icon is clicked (mobile view)", () => {
    render(
      <MemoryRouter>
        <Header links={pages} />
      </MemoryRouter>
    );

    const menuIcon = screen.getByLabelText("menu");
    const drawer = screen.getByRole("presentation", { name: "drawer2" });

    // Test if the right drawer is closed initially
    expect(drawer).not.toHaveClass("MuiDrawer-open");

    // Test if the right drawer opens when the menu icon is clicked
    fireEvent.click(menuIcon);
    expect(drawer).toHaveClass("MuiDrawer-open");

    // Test if the right drawer closes when the menu icon is clicked again
    fireEvent.click(menuIcon);
    expect(drawer).not.toHaveClass("MuiDrawer-open");
  });
});
