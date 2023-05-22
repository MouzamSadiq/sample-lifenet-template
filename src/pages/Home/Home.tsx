import React from "react";
import { Navbar } from "../../components/Navbar/NavBar";

import ResearchForm from "./ResearchForm/ResearchForm";
import Menubar from "../../components/Menubar/Menubar";
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
      <Menubar links={linksArray} />
    </div>
  );
};
