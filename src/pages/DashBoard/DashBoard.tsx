import { Box } from "@mui/material";
import { TopBar } from "../../components/TopBar";
import { theme } from "../../Theme/Theme";
import { Tile } from "./components/Tile";

export const DashBoard = () => {
  return (
    <Box
      bgcolor={theme.colors.cardBg}
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      gap={5}
    >
      <TopBar />

      <Tile />
    </Box>
  );
};
