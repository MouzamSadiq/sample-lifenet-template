import { Box, Typography } from "@mui/material";
import Menubar from "../components/Menubar/Menubar";
import { pages } from "./Home/Home";

export const Recoveries = () => {
  return (
    <div>
      <Menubar links={pages} />
      <Box padding={15}>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignContent: "center",
          }}
        >
          {" "}
          <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
            Recoveries
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
