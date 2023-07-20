import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import { theme } from "../../../Theme/theme";

export const VideoCard = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <Box>
        <Typography style={customMuiTheme.typography.h4}>
          Latest Videos
        </Typography>
      </Box>
      <iframe
        src="https://www.youtube.com/embed/3RVUykPrxgM"
        // https://www.youtube.com/watch?v=QjfaHODm8uk&t=3s
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        width="100%"
        height="300px"
      />
      {/* <video src={video} width="750" height="500" controls>
     </video> */}
    </Card>
  );
};
