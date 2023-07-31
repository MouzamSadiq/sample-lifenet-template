import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { customMuiTheme } from "../../../../Theme/customMuiTheme";

export const DetailsBox = () => {
  return (
    <Box>
      {" "}
      <Box
        flex="1"
        sx={{
          border: "1px solid #666666",
          borderRadius: "5px",
          justifyContent: "center",
        }}
        width="250px"
        height="100px"
        padding={2}
        style={customMuiTheme.typography.h2}
      >
        <Box display="flex" flexDirection="row" gap={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography> Aortolliac Artery</Typography>
            <TextField
              style={{ height: "40px", width: "200px" }}
              size="small"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
