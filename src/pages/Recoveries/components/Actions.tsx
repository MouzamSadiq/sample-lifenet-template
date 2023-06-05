import React from "react";
import { Typography, Box } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import { theme } from "../../../Theme/theme";

export type DocProps = {
  name: string;
  icon: any;
  count: number;
};

export const Actions: React.FC<DocProps> = ({ name, icon, count }) => (
  <Box>
    <Box
      width="320px"
      height="100px"
      sx={{
        display: "-webkit-flex",
        flexDirection: "row",
        borderRadius: "6px",
        justifyContent: "space-between",
      }}
      padding={1}
      bgcolor="white"
    >
      <Box
        sx={{
          display: "-webkit-flex",
          flexDirection: "column",
          borderRadius: "6px",
          justifyContent: "space-between",
        }}
      >
        <Typography style={customMuiTheme.typography.h4}>{name}</Typography>

        <Typography style={customMuiTheme.typography.h2}>{count}</Typography>
      </Box>
      <Typography>{icon}</Typography>
    </Box>
  </Box>
);
