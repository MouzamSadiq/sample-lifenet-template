import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { pages } from "../Home/Home";
import { Menubar } from "../../components/Menubar/Menubar";
import Header from "../../components/Header/Header";
import { customMuiTheme } from "../../Theme/customMuiTheme";
import NavBar from "../../components/NavBar/NavBar";
import { theme } from "../../Theme/theme";
import { Actions } from "./components/Actions";
import { Biotech, HomeWorkOutlined } from "@mui/icons-material";

export const Recoveries = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <NavBar />

        <Box
          ml="250px"
          height="100%"
          width="100%"
          bgcolor={theme.colors.textLightGray}
          paddingLeft={5}
          paddingTop={15}
          paddingBottom={5}
          paddingRight={5}
        >
          <Box>
            <Box>
              <Box display="flex" alignItems="left" padding={1}>
                <Typography style={customMuiTheme.typography.h4}>
                  Recoveries
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "130vh",
              }}
              gap={5}
              paddingTop={5}
            >
              {" "}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                gap={3}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
