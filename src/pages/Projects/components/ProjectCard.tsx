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
    <>
      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
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
        </CardContent>
      </Card>
      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
          <Actions
            name="Projects Inprogres"
            icon={
              <Box display="flex" justifyContent="center" alignItems="center">
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
        </CardContent>
      </Card>
      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
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
        </CardContent>
      </Card>
      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
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
        </CardContent>
      </Card>

      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
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
        </CardContent>
      </Card>
    </>
  );
};
