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
      width="200px"
      height="80px"
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
        <Typography style={customMuiTheme.typography.h6}>{name}</Typography>

        <Typography style={customMuiTheme.typography.h3}>{count}</Typography>
      </Box>
      <Typography
        style={{
          color: theme.colors.background,
        }}
      >
        {icon}
      </Typography>
    </Box>
  </Box>
);
