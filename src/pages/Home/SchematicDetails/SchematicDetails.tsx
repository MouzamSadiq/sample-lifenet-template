import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Box, TextField, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../../Theme/Theme";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import { Padding } from "@mui/icons-material";
import { DetailsBox } from "./components/DetailBox";

export const SchematicDetailes = () => {
  return (
    <Box bgcolor="white" padding={3}>
      {" "}
      <Box
        flex="1"
        sx={{
          // border: "1px solid black",
          borderRadius: "5px",
          justifyContent: "center",
        }}
        width="300px"
        height="500px"
      >
        <Typography style={customMuiTheme.typography.h2}>
          Schematic Details
        </Typography>
        <Divider />
        <Box display="flex" flexDirection="row" gap={1}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography style={customMuiTheme.typography.h5}>
              Schematic type:
            </Typography>
            <Typography style={customMuiTheme.typography.h5}>
              Status :
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography style={customMuiTheme.typography.h5}>
              Aortolliac Artery
            </Typography>
            <Typography style={customMuiTheme.typography.h5}>
              Inprogress
            </Typography>
          </Box>
        </Box>
        <DetailsBox />
      </Box>
    </Box>
  );
};
