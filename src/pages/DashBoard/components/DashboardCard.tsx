import React from "react";
import { Typography, Box } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";

export type DocProps = {
  name: string;
  icon: any;
  count: number;
};

export const DashBoardCard: React.FC<DocProps> = ({ name, icon, count }) => (
  <Box>
    <Box
      width="380px"
      height="280px"
      sx={{
        display: "-webkit-flex",
        flexDirection: "column",
        borderRadius: "6px",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      padding={1}
      bgcolor="white"
      gap={2}
    >
      <Box>{icon}</Box>
      <Typography style={customMuiTheme.typography.h1}>{count}</Typography>
      <Typography style={customMuiTheme.typography.h3}>{name}</Typography>
    </Box>
  </Box>
);
