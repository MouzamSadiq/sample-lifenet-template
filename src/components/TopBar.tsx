import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Box, TextField } from "@mui/material";
import logo from "../assets/lnh-logo.png";
import { SearchBar } from "./SearchBar";
import { Routes, Route, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Box mb={9}>
      <AppBar sx={{ bgcolor: "white" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
          padding={1}
        >
          <Box
            sx={{
              alignContent: "left",
              alignItems: "left",
              display: { xs: "none", md: "none", lg: "flex" },
              flexWrap: "wrap",
            }}
            ml={6}
          >
            <img src={logo} height="50px" alt="Logo" width="auto" />
          </Box>
          <Box
            sx={{
              alignContent: "left",
              alignItems: "center",
              justifyContent: "center",
              display: { xs: "inline-flex", md: "inline-flex", lg: "none" },
              flexWrap: "wrap",
            }}
          >
            <img src={logo} height="40px" width="150px" alt="Logo" />
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            flexGrow="-moz-initial"
            gap={{ xs: "2", sm: "10px" }}
            sx={{
              display: "inline-flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            mr={3}
          >
            <Box
              display="flex"
              flexDirection="row"
              gap={2}
              sx={{
                display: "inline-flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentPath === "/" && <SearchBar />}
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                color="black"
                flexWrap="nowrap"
                style={{ fontFamily: "Poppins" }}
              >
                Tom, cv Technician
              </Typography>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};
