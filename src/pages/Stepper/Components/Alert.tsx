import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DeleteForever, VolunteerActivism } from "@mui/icons-material";
import { theme } from "../../../Theme/theme";

export type DocProps = {
  //   propertyId: number;
  description: string;
  handleClick: () => void;
  handleNoClick: () => void;
};

export const AlertBox: React.FC<DocProps> = ({
  //   propertyId,
  description,
  handleClick,
  handleNoClick,
}) => (
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
          style={{ fontSize: "18px", fontWeight: "bold", opacity: ".9" }}
        >
          Confirm
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
        >
          <Button
            size="small"
            style={{
              color: "skyblue",
              height: "40px",
              width: "130px",
              fontWeight: "bold",
              border: "1px solid skyblue",
            }}
            onClick={handleNoClick}
          >
            Cancel
          </Button>
          <Button
            size="small"
            style={{
              backgroundColor: theme.colors.error,

              color: "white",
              height: "40px",
              width: "150px",
            }}
            onClick={handleClick}
          >
            yes
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);
