import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Menubar } from "../../components/Menubar/Menubar";
import { theme } from "../../Theme/theme";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { customMuiTheme } from "../../Theme/customMuiTheme";

export type NavItem = {
  title: string;
  path: string;
  fallbackTitle: string;
};

export const pages: Array<NavItem> = [
  // Temporally deactivating Dashboard view .

  {
    title: "HOME",
    path: "/home",
    fallbackTitle: "Dashboard",
  },
  {
    title: "RESEARCH",
    path: "/researchform",
    fallbackTitle: "Projects",
  },
  {
    title: "RECOVERIES",
    path: "/recoveries",
    fallbackTitle: "Recoveries",
  },
  // { title: "analytics", path: "/analytics", fallbackTitle: "Analytics" },
];
export const linksArray: string[] = [
  "HOME",
  "PROJECTS",
  "RECOVERIES",
  "RESEARCH",
  "ADMIN",
  "LOOKUPS",
];

export const Home: React.FC = () => {
  return (
    // <div>
    //   <Menubar links={pages} />
    //   <Box padding={15}>
    //     <Box
    //       sx={{
    //         justifyContent: "center",
    //         alignItems: "center",
    //         display: "flex",
    //         alignContent: "center",
    //       }}
    //     >
    //       {" "}
    //       <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
    //         Home
    //       </Typography>
    //     </Box>
    //   </Box>
    // </div>
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
                  welcome...
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
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
