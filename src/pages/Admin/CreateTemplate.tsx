import React from "react";
import KonvaCanvas from "./components/konvaCanvas";
import { Box } from "@mui/material";

const CreateTemplate = () => {
  return (
    <Box display="flex" justifyContent="center">
      <KonvaCanvas />
    </Box>
  );
};

export default CreateTemplate;
