import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ExitToApp,
  KeyboardDoubleArrowLeft,
  MenuOpen,
} from "@mui/icons-material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/lnh.png";
import { theme } from "../../Theme/theme";
import { NavItem, pages } from "../../pages/Home/Home";
import { NavBar } from "../NavBar/NavBar";

export type MenuLinkProps = {
  links: NavItem[];
  isopen: boolean;
  setIsopen: () => void;
};

export const Header = ({ links, isopen, setIsopen }: MenuLinkProps) => {
  const handleLogout = () => {};
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
          }}
          onClick={() => setIsDrawerOpen(false)}
        >
          <Box>
            <Typography
              style={{
                fontWeight: "500",
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
    <Box mb={9}>
      <AppBar sx={{ height: "70px", bgcolor: "white" }}>
        <Box
          sx={{
            display: "-webkit-flex",
            flexDirection: "row",

            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{ alignContent: "left", alignItems: "left", display: "flex" }}
            ml={2}
            mt={1}
            gap={2}
          >
            <Box
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
              }}
            >
              {isopen ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menubar1"
                  onClick={() => setIsopen()}
                  style={{ color: "navy" }}
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menubar2"
                  onClick={() => setIsopen()}
                  style={{ color: "navy" }}
                  size="large"
                >
                  <MenuOpen />
                </IconButton>
              )}
              <Drawer
                anchor="left"
                open={isopen}
                onClose={() => setIsopen()}
                elevation={0}
                sx={{
                  width: "0px",
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: "0px",
                  },
                }}
                variant="persistent"
                aria-label="drawerLeft"
              >
                <NavBar links={pages} />
              </Drawer>
            </Box>

            <img src={logo} alt="logo" height="50px" />
          </Box>

          <Box
            sx={{
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            mr={2}
            // bgcolor="green"
          >
            <Box
              pr={4}
              pt={0}
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
              }}
            >
              <Typography
                align="left"
                color={theme.colors.greenText}
                style={{
                  fontSize: "15px",
                  margin: "0",
                  padding: "0",
                }}
              >
                User Name : Jared Blouse
              </Typography>

              <Typography
                align="left"
                color={theme.colors.greenText}
                style={{
                  fontSize: "15px",
                  margin: "0",
                  padding: "0",
                }}
              >
                Role :Admin
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                style={{
                  background: "none",
                  border: "none",
                  padding: 1,
                  fontFamily: "inherit",
                  textDecoration: "underline",
                  textTransform: "none",
                  textUnderlineOffset: "3px",

                  color: theme.colors.logoBlue,
                }}
                onClick={handleLogout}
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "none", lg: "flex" },
                }}
              >
                {" "}
                <Typography style={{ color: theme.colors.logoBlue }}>
                  Logout{" "}
                </Typography>
                <ExitToApp
                  style={{
                    padding: "3px",
                    height: "18px",
                    color: theme.colors.logoBlue,
                  }}
                />
              </Button>
              <Box
                sx={{
                  display: { xs: "flex", md: "flex", lg: "none" },
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setIsDrawerOpen(true)}
                  style={{ color: "navy" }}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  anchor="right"
                  onClose={() => setIsDrawerOpen(false)}
                  open={isDrawerOpen}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: 250,
                      height: "100%",
                    }}
                    paddingTop={5}
                    paddingLeft={2}
                    gap={2}
                    bgcolor={theme.colors.primary}
                  >
                    {renderMenuOptionsDrawer()}
                  </Box>
                </Drawer>
              </Box>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};
