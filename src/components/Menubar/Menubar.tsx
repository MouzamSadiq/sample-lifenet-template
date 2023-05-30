import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import lnh from "../../assets/logo.png";
import { NavItem } from "../../pages/Home/Home";
import MenuIcon from "@mui/icons-material/Menu";

export type MenuLinkProps = {
  links: NavItem[];
};

const Menubar = ({ links }: MenuLinkProps) => {
  const appBarStyle = {
    backgroundColor: "#003768",
  };
  // const { pathname } = useLocation();

  const renderMenuOptionsFullSize = () => {
    return links.map((page: NavItem) => {
      return (
        <NavLink
          key={page.title}
          to={page.path}
          style={{
            // color: page.path === pathname ? "red" : "white",
            // padding: "26px 0 10px 0",
            // borderBottom:
            //   page.path === pathname
            //     ? `9px solid green`
            //     : "9px solid rgba(0,0,0,0)",
            // marginRight: "2rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          <Box
            width="115px"
            height="40px"
            // bgcolor={page.path === pathname ? "yellow" : "#003768"}
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar style={appBarStyle}>
      <Container maxWidth={false} style={{ paddingRight: "0 2rem" }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" flexDirection="row" gap={0.5}>
              {" "}
              <Box bgcolor="white" sx={{ display: { xs: "flex", md: "flex" } }}>
                <img
                  src={lnh}
                  alt="logo"
                  style={{ height: "50px", width: "50px" }}
                />
              </Box>{" "}
              <Box justifyContent="center">
                <Typography style={{ color: "white", fontSize: "14px" }}>
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
              <List sx={{ width: 250 }}>
                <ListItem>
                  <ListItemText primary="Home" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="About" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Contact" />
                </ListItem>

                <ListItem>
                  <ListItemText primary="Services" />
                </ListItem>
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Menubar;
