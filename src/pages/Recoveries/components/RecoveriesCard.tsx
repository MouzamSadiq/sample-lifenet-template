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
export const RecoveryCard: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "25px",
      }}
    >
      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
          <Actions
            name="Recoveries"
            icon={
              <AccountTreeIcon
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
      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
          <Actions
            name="Not Recovered"
            icon={
              <Biotech
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
      <Card sx={{ width: "22%", height: "240px" }}>
        <CardContent>
          <Actions
            name="Active cases"
            icon={
              <ArticleIcon
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
    </Box>
  );
};
