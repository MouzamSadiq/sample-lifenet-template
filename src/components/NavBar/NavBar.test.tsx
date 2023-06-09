import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./NavBar";
import { NavItem } from "../../pages/Home/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import {
  Home as HomeIcon,
  Notifications,
  Settings,
  Biotech,
  Menu,
} from "@mui/icons-material";

describe("NavBar", () => {
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
  test("renders correct number of links", () => {
    render(
      <Router>
        <NavBar links={pages} />
      </Router>
    );

    const navLinks = screen.getAllByRole("link");
    expect(navLinks.length).toBe(pages.length);
  });
});
