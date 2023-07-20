import React from "react";
import { Typography, Box } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import { theme } from "../../../Theme/theme";

export type DocProps = {
  name: string;
  imagepath: any;
  description: string;
};

export const ImageDetails: React.FC<DocProps> = ({
  name,
  imagepath,
  description,
}) => (
  <Box>
    <Box
      width="300px"
      height="200px"
      sx={{
        display: "-webkit-flex",
        flexDirection: "column",
        borderRadius: "6px",
        justifyContent: "space-between",
      }}
      padding={1}
      bgcolor="white"
      border="1px solid #d3d3d3"
    >
      <Box
        sx={{
          display: "-webkit-flex",
          flexDirection: "column",
          borderRadius: "6px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            display: "-webkit-flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <img src={imagepath} height="100px" width="100px" />
          <Typography style={customMuiTheme.typography.h6} sx={theme.center}>
            {name}
          </Typography>
        </Box>

        <Typography style={customMuiTheme.typography.h5}>
          {description}
        </Typography>
      </Box>
    </Box>
  </Box>
);
