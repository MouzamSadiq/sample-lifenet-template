import React from "react";
import { Box, CircularProgress } from "@mui/material";

import {
  Biotech,
  PendingOutlined,
  PublishedWithChanges,
  VolunteerActivism,
} from "@mui/icons-material";
import { theme } from "../../../Theme/Theme";
import { DashBoardCard } from "./DashboardCard";

// Interface for the props of the DashBoardCard component
interface DashBoardCardProps {
  name: string;
  icon: JSX.Element;
  count: number;
}

const cardData: DashBoardCardProps[] = [
  {
    name: "Inprogress",
    icon: <PublishedWithChanges style={theme.DashboardIcon} />,
    count: 100,
  },
  {
    name: "Pending",
    icon: <PendingOutlined style={theme.DashboardIcon} />,
    count: 20,
  },
  {
    name: "Weekly Review",
    icon: <Biotech style={theme.DashboardIcon} />,
    count: 8,
  },
  {
    name: "Monthly Review",
    icon: <Biotech style={theme.DashboardIcon} />,
    count: 72,
  },
  {
    name: "Monthly Review",
    icon: <Biotech style={theme.DashboardIcon} />,
    count: 72,
  },
  {
    name: "Monthly Review",
    icon: <VolunteerActivism style={theme.DashboardIcon} />,
    count: 10,
  },
];

export const Tile: React.FC = () => {
  return (
    <Box gap={3} sx={theme.center} flexDirection="row" flexWrap="wrap">
      {cardData.map((card, index) => (
        <DashBoardCard
          key={index}
          name={card.name}
          icon={card.icon}
          count={card.count}
        />
      ))}
    </Box>
  );
};
