import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import lnh from "../../assets/logo.png";
import { NavItem } from "../../pages/Home/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../Theme/theme";

export type MenuLinkProps = {
  links: NavItem[];
};

export const Menubar = ({ links }: MenuLinkProps) => {
  const appBarStyle = {
    backgroundColor: "#003768",
  };
  const { pathname } = useLocation();

  const renderMenuOptionsFullSize = () => {
    return links.map((page: NavItem) => {
      return (
        <NavLink
          key={page.title}
          to={page.path}
          style={{
            color: page.path === pathname ? "#a2ad00" : "white",
            padding: "16px 0 5px 0",
            borderBottom:
              page.path === pathname
                ? `3px solid skyblue`
                : "3px solid rgba(0,0,0,0)",
            marginRight: "2rem",
            fontFamily: "Poppins",
            textDecoration: "none",
          }}
        >
          <Box
            width="115px"
            height="40px"
            bgcolor={page.path === pathname ? "yellow" : "#003768"}
            justifyContent="center"
            display="flex"
          >
            <Typography
              style={{
                fontWeight: "500",
                // color: theme.colors.appbarText,
              }}
            >
              {page.title}
            </Typography>
          </Box>
        </NavLink>
      );
    });
  };
  const renderMenuOptionsDrawer = () => {
    return links.map((page: NavItem) => {
      return (
        <NavLink
          key={page.title}
          to={page.path}
          style={{
            color: page.path === pathname ? "#a2ad00" : "#003768",
            fontSize: "25px",
            fontFamily: "Poppins",
            textDecoration: "none",
          }}
        >
          <Box>
            <Typography
              style={{
                fontWeight: "500",
                // color: theme.colors.appbarText,
              }}
            >
              {page.title}
            </Typography>
          </Box>
        </NavLink>
      );
    });
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar style={appBarStyle}>
      <Container maxWidth={false} style={{ paddingRight: "0 2rem" }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" flexDirection="row" gap={0.5}>
              {" "}
              <Box bgcolor="white" sx={{ display: { xs: "flex", md: "flex" } }}>
                <img src={lnh} alt="logo" style={{ width: "60px" }} />
              </Box>{" "}
              <Box sx={theme.center}>
                <Box>
                  <Typography style={{ color: "white", fontSize: "16px" }}>
                    Non-Clinical Recovery Management System
                  </Typography>
                  <Typography
                    style={{
                      color: "#a2ad00",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Welcome Mr\Mousam_ps
                  </Typography>
                </Box>
              </Box>{" "}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {renderMenuOptionsFullSize()}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none", lg: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: 250 }}
                padding={2}
                gap={2}
              >
                {renderMenuOptionsDrawer()}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
