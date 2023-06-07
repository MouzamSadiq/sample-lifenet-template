import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { pages } from "../Home/Home";
import { Menubar } from "../../components/Menubar/Menubar";
import { customMuiTheme } from "../../Theme/customMuiTheme";
import { NavBar } from "../../components/NavBar/NavBar";
import { theme } from "../../Theme/theme";
import { Biotech, HomeWorkOutlined } from "@mui/icons-material";
import { Actions } from "../../components/Actions";
import { ProjectCard } from "./components/ProjectCard";

export const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Box>
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <NavBar links={pages} /> */}

      <Box
        sx={{ flexGrow: 0, ml: { xs: "0", md: "0", lg: "230px" } }}
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
                {/* <Actions
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
                  count={10}
                />
                <Actions
                  name="Projects Inprogres"
                  icon={
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <CircularProgress
                        style={{
                          height: "100px",
                          width: "100px",
                          color: theme.colors.activeBg,
                        }}
                        variant="determinate"
                        value={70}
                      />
                      <Typography position="absolute">70%</Typography>
                    </Box>
                  }
                  count={100}
                /> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
