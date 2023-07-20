import React from "react";
import { Typography, Box } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import { Folder, ImageRounded } from "@mui/icons-material";
import { theme } from "../../../Theme/theme";

export type DocProps = {
  name: string;
  //   icon: any;
  count: number;
};

export const ImageFile: React.FC<DocProps> = ({ name, count }) => (
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
      bgcolor={theme.colors.fcfcfc}
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
        <Typography style={customMuiTheme.typography.h2}>{count}</Typography>
      </Box>
      <Typography>
        {" "}
        <ImageRounded style={{ color: theme.colors.activeBg }} />
      </Typography>
    </Box>
  </Box>
);
