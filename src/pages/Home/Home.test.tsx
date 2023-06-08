import React from "react";
import { render, screen } from "@testing-library/react";
import { Home, NavItem } from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { customMuiTheme } from "../../Theme/customMuiTheme";
import {
  Home as HomeIcon,
  Notifications,
  Settings,
  Biotech,
  Menu,
} from "@mui/icons-material";

describe("Home", () => {
  test("renders welcome text", () => {
    render(<Home />);

    const welcomeText = screen.getByText("welcome...");
    expect(welcomeText).toBeInTheDocument();
  });
});
