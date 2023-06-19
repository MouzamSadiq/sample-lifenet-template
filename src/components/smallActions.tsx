import React from "react";
import { Typography, Box } from "@mui/material";
import { customMuiTheme } from "../Theme/customMuiTheme";
import { theme } from "../Theme/theme";

export type DocProps = {
  name: string;
  icon: any;
  count: number;
  color: string;
};

export const SmallActions: React.FC<DocProps> = ({
  name,
  icon,
  count,
  color,
}) => (
  <Box>
    <Box
      width="150px"
      height="50px"
      sx={{
        display: "-webkit-flex",
        flexDirection: "row",
        borderRadius: "6px",
        justifyContent: "space-between",
      }}
      padding={1}
      bgcolor={color}
    >
      <Box
        sx={{
          display: "-webkit-flex",
          flexDirection: "column",
          borderRadius: "6px",
          justifyContent: "space-between",
        }}
      >
        <Typography style={customMuiTheme.typography.h5}>{name}</Typography>

        <Typography style={customMuiTheme.typography.h5}>{count}</Typography>
      </Box>
      <Typography>{icon}</Typography>
    </Box>
  </Box>
);
