import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "../../Konva/components/dummyDataArray";

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
        <Box display="flex" flexDirection="row" gap={2} mb={6}>
          <Box display="flex" gap={2}>
            <Typography> Template Type :</Typography>
            <Typography> Aortolliac Artery</Typography>
          </Box>
        </Box>
        {/* {data.map((item) => {
          const properties = item.properties[0];
          return (
            <Box display="flex" flexDirection="row" gap={3} mt={2}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography>
                  {properties.label} {properties.unit} :
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  style={{ height: "40px", width: "200px" }}
                  size="small"
                  value={properties.value}
                />
              </Box>
            </Box>
          );
        })} */}
        <Box mt={6}>
          <Button component={Link} to="/" variant="contained">
            Show Schematic{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
