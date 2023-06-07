import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Actions } from "../../../components/Actions";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import { theme } from "../../../Theme/theme";
import { Biotech, VolunteerActivism } from "@mui/icons-material";

export const ProjectCard: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      gap="12px"
    >
      <Card sx={{ width: "22em", height: "240px" }}>
        <Actions
          name="Total Projects"
          icon={
            <Biotech
              style={{
                height: "100px",
                width: "70px",
                color: theme.colors.activeBg,
              }}
            />
          }
          count={100}
        />
      </Card>
      <Card sx={{ width: "22em", height: "240px" }}>
        <Actions
          name="Projects Inprogres"
          icon={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <CircularProgress
                style={{
                  height: "100px",
                  width: "100px",
                  color: "blue",
                }}
                variant="determinate"
                value={20}
              />
              <Typography position="absolute">20%</Typography>
            </Box>
          }
          count={20}
        />
      </Card>
      <Card sx={{ width: "22em", height: "240px" }}>
        <Actions
          name="Critical Projects"
          icon={
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress
                style={{
                  height: "100px",
                  width: "100px",
                }}
                variant="determinate"
                value={8}
                color="primary"
                sx={{
                  "&.MuiCircularProgress-colorPrimary": {
                    color: "blue",
                  },
                  "&.MuiCircularProgress-colorSecondary": {
                    color: "red",
                  },
                }}
              />
              <Typography position="absolute">8%</Typography>
            </Box>
          }
          count={8}
        />
      </Card>
      <Card sx={{ width: "22em", height: "240px" }}>
        <Actions
          name="Pending Research Project"
          icon={
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress
                style={{
                  height: "100px",
                  width: "100px",
                  color: "blue",
                }}
                variant="determinate"
                value={72}
              />
              <Typography position="absolute">72%</Typography>
            </Box>
          }
          count={72}
        />
      </Card>

      <Card sx={{ width: "22em", height: "240px" }}>
        <Actions
          name="Donors"
          icon={
            <VolunteerActivism
              style={{
                height: "100px",
                width: "70px",
                color: theme.colors.activeBg,
              }}
            />
          }
          count={10}
        />
      </Card>
    </Box>
  );
};
