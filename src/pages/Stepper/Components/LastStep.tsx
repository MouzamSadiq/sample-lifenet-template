import React, { useCallback, useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { theme } from "../../../Theme/theme";
import { AlertBox } from "./Alert";
import { Modal } from "@mui/material";
import { CompletedModal } from "./Completed";

export const LastStep = ({ handleBack }: any) => {
  //  const { handleNext } = useContext(AppContext);
  // const handleNext = () => {};
  const [open, isOpen] = useState(false);
  const handleOpen = () => {
    isOpen(true);
  };
  const handleClose = () => {
    isOpen(false);
  };
  return (
    <Box>
      <Box
        display="flex"
        gap={5}
        flexDirection="column"
        pl={"200px"}
        pt={"50px"}
      >
        <AlertBox
          description={"Are You sure for the process"}
          handleClick={handleOpen}
          handleNoClick={handleBack}
        />
      </Box>
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          // disabled={isError()}
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>
      </Box> */}
      <Modal open={open} onClose={handleClose} sx={theme.center}>
        <CompletedModal description={""} />
      </Modal>
    </Box>
  );
};
