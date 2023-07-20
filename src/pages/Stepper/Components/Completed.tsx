import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DeleteForever, VolunteerActivism } from "@mui/icons-material";
import { theme } from "../../../Theme/theme";

export type DocProps = {
  description: string;
};

export const CompletedModal: React.FC<DocProps> = ({ description }) => (
  <Box>
    <Box
      bgcolor="white"
      width="380px"
      height="250px"
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "6px",
        border: "1px solid lightgrey",
      }}
      padding={2}
    >
      <Box display="flex" gap={2.5} flexDirection="column" sx={theme.center}>
        <VolunteerActivism
          style={{
            height: "60px",
            width: "60px",
            color: theme.colors.error,
            opacity: "0.5",
            borderRadius: "20px",
          }}
        />
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold", opacity: ".9" }}
        >
          THANKYOU...
        </Typography>
        <Typography
          align="center"
          style={{
            fontSize: "18px",
            color: "#656565",
            lineBreak: "-moz-initial",
            width: "300px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          paddingBottom={2}
          gap={3}
        ></Box>
      </Box>
    </Box>
  </Box>
);
