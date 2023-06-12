import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { customMuiTheme } from "../../Theme/customMuiTheme";
import {
  Home as HomeIcon,
  Notifications,
  Settings,
  Biotech,
  Menu,
} from "@mui/icons-material";

describe("Header", () => {
  test("renders the header component with user name and role", () => {
    const links = [
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
    ];

    const [isLeftDrawerOpen, setLeftDrawerOpen] = React.useState(true);
    render(
      <Header
        links={links}
        isopen={isLeftDrawerOpen}
        setIsopen={() => {
          setLeftDrawerOpen(!isLeftDrawerOpen);
        }}
      />
    );

    const userName = screen.getByText(/User Name : Jared Blouse/i);
    const role = screen.getByText(/Role : Admin/i);

    expect(userName).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });
});
