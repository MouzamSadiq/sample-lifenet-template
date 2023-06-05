import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Box, IconButton, Button } from "@mui/material";

import { ExitToApp, Logout, Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/lnh.png";
import { theme } from "../../Theme/theme";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <Box>
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
            ml={3}
            mt={1}
          >
            <img src={logo} alt="logo" height="50px" />
            <Box
              sx={{
                alignContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              ml={2}
            >
              <Typography>CV Tracker</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            mr={2}
          >
            <Box pr={4} pt={0}>
              <Typography
                align="left"
                color={theme.colors.text}
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
                color={theme.colors.text}
                style={{
                  fontSize: "15px",
                  margin: "0",
                  padding: "0",
                }}
              >
                Role :Admin
              </Typography>
            </Box>
            (
            <Button
              style={{
                background: "none",
                border: "none",
                padding: 1,
                fontFamily: "inherit",
                textDecoration: "underline",
                textTransform: "none",
                textUnderlineOffset: "3px",

                cursor: "pointer",
                color: theme.colors.activeBg,
              }}
              onClick={handleLogout}
            >
              <Typography style={{ color: theme.colors.activeBg }}>
                Logout{" "}
              </Typography>
              <ExitToApp
                style={{
                  padding: "3px",
                  height: "18px",
                  color: theme.colors.activeBg,
                }}
              />
            </Button>
            )
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
