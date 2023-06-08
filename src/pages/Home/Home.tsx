import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { customMuiTheme } from "../../Theme/customMuiTheme";
import {
  Home as HomeIcon,
  Notifications,
  Settings,
  Biotech,
  Menu,
} from "@mui/icons-material";

export type NavItem = {
  title: string;
  path: string;
  fallbackTitle: string;
  icon: any;
};

export const pages: Array<NavItem> = [
  // Temporally deactivating Dashboard view .

  {
    title: "Home",
    path: "/home",
    fallbackTitle: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    title: "Projects",
    path: "/Project",
    fallbackTitle: "Projects",
    icon: <Menu />,
  },
  {
    title: "Recoveries",
    path: "/recoveries",
    fallbackTitle: "Recoveries",
    icon: <AccountTreeIcon />,
  },
  {
    title: "Notification",
    path: "/Notification",
    fallbackTitle: "Notification",
    icon: <Notifications />,
  },
  {
    title: "Additional Service",
    path: "/Service",
    fallbackTitle: "Additional Service",
    icon: <Settings />,
  },
  // { title: "analytics", path: "/analytics", fallbackTitle: "Analytics" },
];

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Box>
        <Header />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <NavBar links={pages} /> */}

        <Box
          sx={{ flexGrow: 0, ml: { xs: "0", md: "0", lg: "0px" } }}
          height="50%"
          width="100%"
          paddingLeft={5}
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
                // height: "130vh",
              }}
              gap={5}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
