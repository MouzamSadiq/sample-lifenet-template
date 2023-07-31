import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Box } from "@mui/material";

export const Header = () => {
  return (
    <Box mb={9}>
      <AppBar sx={{ bgcolor: "#27445C" }}>
        <Box
          sx={{
            display: "-webkit-flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          padding={1}
        >
          <Box
            sx={{ alignContent: "left", alignItems: "left", display: "flex" }}
            ml={2}
          >
            LNH
          </Box>
          <Box>Tom CV Technician</Box>
        </Box>
      </AppBar>
    </Box>
  );
};
