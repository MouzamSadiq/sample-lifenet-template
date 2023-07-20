import React from "react";
import { Typography, Box } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import { Folder } from "@mui/icons-material";
import { theme } from "../../../Theme/theme";

export type DocProps = {
  name: string;
  //   icon: any;
  count: number;
  color: string;
};

export const FileAction: React.FC<DocProps> = ({ name, count, color }) => (
  <Box>
    <Box
      width="100px"
      height="70px"
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
        {" "}
        <Typography style={customMuiTheme.typography.h5}>{name}</Typography>
        <Typography style={customMuiTheme.typography.h3}>{count}</Typography>
      </Box>
      <Typography>
        {" "}
        <Folder style={{ color: theme.colors.background }} />
      </Typography>
    </Box>
  </Box>
);
