import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { theme } from "../../../Theme/theme";

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color={theme.colors.activeBg}>
          23/10/2022 09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color={theme.colors.background}>
          Donate
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color={theme.colors.activeBg}>
          23/10/2022 11:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color={theme.colors.background}>
          Evaluation
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color={theme.colors.activeBg}>
          24/10/2022 12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color={theme.colors.background}>
          Aortic Valve & Pulmonary Valve Replacement
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineOppositeContent color={theme.colors.activeBg}>
          24/10/2022 9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color={theme.colors.background}>
          Conduit Repair & Reconstruction
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
