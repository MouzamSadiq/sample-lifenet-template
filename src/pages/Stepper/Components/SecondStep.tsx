import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import { theme } from "../../../Theme/theme";
import { SmallActions } from "../../../components/smallActions";
import {
  AddPhotoAlternateRounded,
  AllInclusive,
  ArrowCircleRightRounded,
  Bloodtype,
  DoneAll,
  Groups,
  ImageOutlined,
  ImageRounded,
  InfoRounded,
  InsertDriveFile,
  KeyboardDoubleArrowRight,
  NextPlan,
  Refresh,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import { ProjectCard } from "../../Projects/components/ProjectCard";
import cardiac from "../../../assets/Cardiac.png.jpg";
import cardiac1 from "../../../assets/cardiac2.png";
import { FileAction } from "./DonarFile";
import { donorData } from "./StepperStyles";
import { ImageDetails } from "./ImageDetails";
import OppositeContentTimeline from "./TimeLine";
import { ImageFile } from "./ImageFile";

export const SecondStep = ({ handleBack, handleNext }: any) => {
  //  const { handleNext } = useContext(AppContext);
  // const handleNext = () => {};

  return (
    <Box padding={1}>
      <Box display="flex" gap={2} flexDirection="column">
        <Grid
          item
          xs={12}
          sm={12}
          style={{ backgroundColor: theme.colors.ideaCardBg, padding: "3px" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            // bgcolor="red"
          >
            <Typography style={customMuiTheme.typography.h2} pl={2}>
              General Details
            </Typography>
            <Button
              // variant="contained"
              // // disabled={isError()}
              sx={{
                backgroundColor: theme.colors.background,
                color: theme.colors.border,
                fontFamily: "inherit",

                textTransform: "none",
                width: "90px",
                // textUnderlineOffset: "3px",
                padding: "0px",
                border: "0.5px solid gray",
                pr: "2px",
              }}
              onClick={handleNext}
            >
              Next{" "}
              <ArrowCircleRightRounded style={{ color: theme.colors.border }} />
            </Button>
          </Box>

          <Box
            bgcolor={theme.colors.ideaCardBg}
            borderRadius="20px"
            height="200px"
            padding={3}
            display="flex"
            flexDirection="row"
            gap={5}
            flexWrap="wrap"
          >
            <Box display="flex" gap={1} flexDirection="column" flexWrap="wrap">
              {donorData.map((data, index) => (
                <Typography
                  key={index}
                  style={customMuiTheme.typography.h4}
                  sx={{
                    backgroundColor: "white",
                    padding: "7px",
                    border: "1px solid #d3d3d3",
                    borderRadius: "5px",
                  }}
                >
                  {`${data.label}: ${data.value}`}
                </Typography>
              ))}
            </Box>

            {/* <Box
              flexDirection="column"
              sx={{
                display: { xs: "none", md: "none", lg: "flex" },
              }}
            > */}
            {/* <Typography style={customMuiTheme.typography.h3}>
                Aortic Valve & Pulmonary Valve Replacement
              </Typography> */}
            {/* <Box flexDirection="row" display="flex" flexWrap="wrap"> */}
            {/* <img
                  src={cardiac}
                  height="200px"
                  width="200px"
                  // height={"xs: 100px, md: 150px, lg:200px"}
                  // width={"xs: 100px, md: 150px, lg:200px"}
                />
                <img src={cardiac1} height="200px" width="200px" /> */}
            <ImageDetails
              name={" Aortic Valve"}
              imagepath={cardiac}
              description={
                "The aortic valve is one of four valves that control blood flow in the heart. It separates the lower left heart chamber (left ventricle) and the body's main artery (aorta)."
              }
            />
            <ImageDetails
              name={"Pulmonary Valve"}
              imagepath={cardiac1}
              description={
                "The aortic valve is one of four valves that control blood flow in the heart. It separates the lower left heart chamber (left ventricle) and the body's main artery (aorta)."
              }
            />
            {/* </Box> */}
          </Box>
        </Grid>
        <Box display="flex" flexDirection="row" gap={2}>
          <Grid
            item
            xs={6}
            sm={4}
            style={{ backgroundColor: theme.colors.cardBg, padding: "3px" }}
          >
            {/* <Box display="flex" flexDirection="column" gap={2}> */}

            <Typography style={customMuiTheme.typography.h2} pl="30%">
              Files <InsertDriveFile />
            </Typography>

            <Box
              bgcolor={theme.colors.cardBg}
              borderRadius="20px"
              padding={1}
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={3}
              sx={theme.center}
            >
              <FileAction
                name={"Analysis"}
                count={10}
                color={theme.colors.appBg}
              />
              <FileAction
                name={"Images"}
                count={20}
                color={theme.colors.appBg}
              />
              <FileAction
                name={"Anotation"}
                count={6}
                color={theme.colors.appBg}
              />
              <FileAction
                name={"Details"}
                count={10}
                color={theme.colors.appBg}
              />
              <FileAction
                name={"Result"}
                count={10}
                color={theme.colors.appBg}
              />
              <FileAction
                name={"Result"}
                count={10}
                color={theme.colors.appBg}
              />
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            style={{ backgroundColor: theme.colors.cardBg, padding: "1px" }}
          >
            {/* <Box display="flex" flexDirection="column" gap={2}> */}
            <Typography style={customMuiTheme.typography.h2} pl="30%">
              Images <AddPhotoAlternateRounded />
            </Typography>
            <Box
              bgcolor={theme.colors.cardBg}
              borderRadius="20px"
              padding={1}
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={3}
              sx={theme.center}
            >
              <ImageFile name={"Analysis"} count={10} />
              <ImageFile name={"Images"} count={20} />
              <ImageFile name={"Anotation"} count={6} />
              <ImageFile name={"Details"} count={10} />
              <ImageFile name={"Result"} count={10} />
              <ImageFile name={"Result"} count={10} />
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            style={{ backgroundColor: theme.colors.cardBg, padding: "3px" }}
          >
            <Typography style={customMuiTheme.typography.h2} pl="30%">
              Lifecycle <AllInclusive />
            </Typography>
            <OppositeContentTimeline />
          </Grid>
        </Box>
      </Box>
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }} gap={2}>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          // disabled={isError()}
          color="primary"
          onClick={handleBack}
        >
          back
        </Button>{" "}
      </Box> */}
    </Box>
  );
};
