import React from "react";
import { Navbar } from "../../components/Navbar/NavBar";

import ResearchForm from "./ResearchForm/ResearchForm";
import Menubar from "../../components/Menubar/Menubar";

export type NavItem = {
  title: string;
  path: string;
  fallbackTitle: string;
};

const pages: Array<NavItem> = [
  // Temporally deactivating Dashboard view .

  {
    title: "HOME",
    path: "/home",
    fallbackTitle: "Dashboard",
  },
  {
    title: "PROJECTS",
    path: "/projects",
    fallbackTitle: "Projects",
  },
  {
    title: "RECOVERIES",
    path: "/recoveries",
    fallbackTitle: "recoveries",
  },
  // { title: "analytics", path: "/analytics", fallbackTitle: "Analytics" },
];
const linksArray: string[] = [
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
    </div>
  );
};
