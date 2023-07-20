import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VivigenMIS_ReleasePic from "../../../assets/VivigenMIS_ReleasePic.jpg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: 100 }}
        image={VivigenMIS_ReleasePic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ViviGen® MIS
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breakthrough technology from LifeNet Health revolutionizes the
          delivery of allografts in minimally invasive surgeries, optimizing
          patient outcomes in surgery Las Vegas, Nev. (March 8, 2023) — ViviGen
          MIS, the world’s only viable bone matrix to provide lineage-committed
          bone cells, is now available for use in trauma procedures. As the
          first cellular allograft optimized for minimally
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
