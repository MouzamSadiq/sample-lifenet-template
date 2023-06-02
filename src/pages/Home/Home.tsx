import React from "react";
import { Box, Typography } from "@mui/material";
import { Menubar } from "../../components/Menubar/Menubar";

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
    title: "PROJECTS",
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
            Home
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
