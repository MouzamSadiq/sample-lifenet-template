import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { pages } from "../Home/Home";
import { Menubar } from "../../components/Menubar/Menubar";
import { customMuiTheme } from "../../Theme/customMuiTheme";
import { NavBar } from "../../components/NavBar/NavBar";
import { theme } from "../../Theme/theme";
import { Biotech, HomeWorkOutlined } from "@mui/icons-material";
import { Actions } from "../../components/Actions";
import { ProjectCard } from "./components/ProjectCard";

export type DocProps = {
  isLeftDrawerOpen: boolean;
};
export const Projects: React.FC<DocProps> = ({ isLeftDrawerOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flexGrow: 0,
          ml: { xs: "0", md: "0", lg: isLeftDrawerOpen ? "230px" : "0" },
        }}
        // bgcolor={theme.colors.textLightGray}
        paddingLeft={5}
        // paddingTop={15}
        // paddingBottom={5}
        // paddingRight={5}
      >
        <Box>
          <Box>
            <Box display="flex" alignItems="left" padding={1}>
              <Typography style={customMuiTheme.typography.h4}>
                Projects
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
            gap={5}
            paddingTop={5}
          >
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              gap={3}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
                gap={2}
              >
                <ProjectCard />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
