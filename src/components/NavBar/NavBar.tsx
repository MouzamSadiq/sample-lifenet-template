import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import {
  Business,
  Home,
  LaptopChromebook,
  ListAlt,
  Notifications,
  Person,
  SpeakerNotesOutlined,
  GroupsOutlined,
  FormatListBulletedRounded,
  Settings,
  HomeWorkOutlined,
  Biotech,
  FormatListNumbered,
  Menu,
} from "@mui/icons-material";
import { theme } from "../../Theme/theme";

export default function ButtonAppBar() {
  const { pathname } = useLocation();
  const navLinksStyle = ({ isActive }: any) => ({
    textDecoration: "none",
    color: isActive ? theme.colors.activeBg : "white",
    display: "inline-flex",
    gap: "8px",
  });
  const selectPlanStyle = ({ isActive }: any) => {
    const isActiveLinks = [
      "/payment-confirm",
      "/select-plan",
      "/payment-success",
    ].includes(pathname);
    return {
      textDecoration: "none",
      color: isActiveLinks || isActive ? theme.colors.activeBg : "white",
      display: "inline-flex",
      gap: "8px",
    };
  };
  const myPropertyStyle = ({ isActive }: any) => {
    const isActiveLinks = [
      "/property-details",
      "/edit-property",
      "/cma-report",
      "/view-documents",
      "/view-detailes",
    ].includes(pathname);
    return {
      textDecoration: "none",
      color: isActiveLinks || isActive ? theme.colors.activeBg : "white",
      display: "inline-flex",
      gap: "8px",
    };
  };
  const publicPropertyStyle = ({ isActive }: any) => {
    const isActiveLinks = ["/public-property-details"].includes(pathname);
    return {
      textDecoration: "none",
      color: isActiveLinks || isActive ? theme.colors.activeBg : "white",
      display: "inline-flex",
      gap: "8px",
    };
  };
  const myTaskStyle = ({ isActive }: any) => {
    const isActiveLinks = ["/approval"].includes(pathname);
    return {
      textDecoration: "none",
      color: isActiveLinks || isActive ? theme.colors.activeBg : "white",
      display: "inline-flex",
      gap: "8px",
    };
  };

  return (
    <Box
      mt={8.7}
      p="16px 4px 4px 4px"
      boxSizing="border-box"
      overflow="auto"
      height="100%"
      flexGrow={1}
      width="250px"
      sx={{ bgcolor: theme.colors.background }}
      position="fixed"
      z-index="1"
      top="0"
      left="0"
      overflow-x="hidden"
    >
      <Toolbar>
        <Box
          gap={3}
          display="flex"
          flexGrow={1}
          flexDirection="column"
          alignItems=" flex-start"
          mt={5}
        >
          <>
            <NavLink to="/*" style={navLinksStyle}>
              <Home />
              Home
            </NavLink>
            <NavLink to="/Project" style={navLinksStyle}>
              <Menu />
              Project
            </NavLink>

            <NavLink to="/recoveries" style={navLinksStyle}>
              <Biotech />
              Recoveries
            </NavLink>

            <NavLink to="/notifications-form" style={navLinksStyle}>
              <Notifications />
              Notifications
            </NavLink>

            <NavLink to="/additional-service" style={navLinksStyle}>
              <Settings />
              Additional Services
            </NavLink>
          </>
        </Box>
      </Toolbar>
    </Box>
  );
}
