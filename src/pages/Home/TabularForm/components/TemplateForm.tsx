import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const TemplateForm = () => {
  return (
    <Box paddingLeft="25px">
      {" "}
      <Box
        flex="1"
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          justifyContent: "center",
        }}
        width="350px"
        height="500px"
        padding={2}
      >
        <Box display="flex" flexDirection="row" gap={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography> Template Type :</Typography>
            <Typography> Total Length CM :</Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography> Aortolliac Artery</Typography>
            <TextField
              style={{ height: "40px", width: "200px" }}
              size="small"
            />
          </Box>
        </Box>

        <Button component={Link} to="/" variant="contained">
          Show Schematic{" "}
        </Button>
      </Box>
    </Box>
  );
};
