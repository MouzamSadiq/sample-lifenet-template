import { Box } from "@mui/material";
import { Header } from "../../components/TopBar";
import { theme } from "../../Theme/Theme";
import { Tile } from "./components/Tile";

export const DashBoard = () => {
  return (
    <Box
      bgcolor={theme.colors.cardBg}
      sx={{ display: "flex", flexDirection: "column" }}
      gap={5}
    >
      <Header />

      <Tile />
    </Box>
  );
};
