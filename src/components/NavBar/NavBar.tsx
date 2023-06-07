import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Home,
  Notifications,
  Settings,
  Biotech,
  Menu,
} from "@mui/icons-material";
import { theme } from "../../Theme/theme";
import { NavItem } from "../../pages/Home/Home";
import { MenuLinkProps } from "../Menubar/Menubar";

export const NavBar = ({ links }: MenuLinkProps) => {
  const { pathname } = useLocation();
  const navLinksStyle = ({ isActive }: any) => ({
    textDecoration: "none",
    color: isActive ? theme.colors.activeBg : "white",
    display: "inline-flex",
    gap: "8px",
  });
  const renderMenuOptionsDrawer = () => {
    return links.map((page: NavItem) => {
      return (
        <NavLink
          key={page.title}
          to={page.path}
          style={{
            color: page.path === pathname ? theme.colors.activeBg : "white",
            fontSize: "25px",
            fontFamily: "Poppins",
            textDecoration: "none",
            display: "inline-flex",
          }}
        >
          <Box>
            <Typography
              style={{
                fontWeight: "500",
                // color: theme.colors.appbarText,
              }}
              sx={{ display: "flex", flexDirection: "row" }}
              gap="3px"
            >
              {page.icon} {page.title}
            </Typography>
          </Box>
        </NavLink>
      );
    });
  };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <Box
        mt={8.7}
        p="16px 4px 4px 4px"
        boxSizing="border-box"
        overflow="auto"
        height="100%"
        flexGrow={1}
        width="250px"
        position="fixed"
        z-index="1"
        top="0"
        left="0"
        // display="inline"
        overflow-x="hidden"
        sx={{
          bgcolor: theme.colors.primary,
          display: { xs: "none", md: "none", lg: "inline" },
        }}
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
            {renderMenuOptionsDrawer()}
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};
