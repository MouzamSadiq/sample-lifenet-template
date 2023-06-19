import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Biotech";
import GroupAddIcon from "@mui/icons-material/VolunteerActivism";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { styled } from "@mui/material/styles";
import { StepIconProps } from "@mui/material/StepIcon";
import FirstStep from "./Components/FirstForm";
import { theme } from "../../Theme/theme";
import {
  ArrowCircleLeftOutlined,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowLeftOutlined,
} from "@mui/icons-material";
import { StepConnector, ToggleButton } from "@mui/material";

const steps = [
  {
    label: "Research",
    description: ``,
    color: "gray",
    icon: <SettingsIcon />,
  },
  {
    label: "Donate",
    description: "",
    color: "skyblue",
    icon: <GroupAddIcon />,
  },
  {
    label: "Create an ad",
    description: ``,
    color: "lightgreen",
    icon: <VideoLabelIcon />,
  },
  {
    label: "Sign",
    description: ``,
    color: "pink",
    icon: <VideoLabelIcon />,
  },
];
const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(162,173,0) 00%, rgb(178,187,28) 50%, rgb(162,173,0) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(162,173,0) 0%, rgb(178,187,28) 50%, rgb(162,173,0) 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [selected, setSelected] = React.useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ maxWidth: 400 }}>
        <Box border={1} borderColor="gray" p={2} position="relative">
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            sx={{
              position: "absolute",
              top: 3,
              right: -10,
              fontSize: 30,
              color: "gray",
              bgcolor: "white",
              width: "20px",
              height: "15px",
            }}
          >
            {" "}
            <KeyboardDoubleArrowLeftOutlined />
          </ToggleButton>

          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            connector={
              <StepConnector
              // classes={{
              //   completed: { borderColor: "red" },
              //   line: { borderColor: "red" },
              // }}
              />
            }
          >
            {steps.map((step, index, color) => (
              <Step key={step.label}>
                {/* <Box bgcolor="red"> */}
                <StepLabel
                  optional={
                    index === 3 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                  // StepIconComponent={ColorlibStepIcon}
                >
                  <Box
                    bgcolor={step.color}
                    width="150px"
                    height="100px"
                    sx={theme.center}
                    flexDirection="column"
                    gap={1}
                    borderRadius={"10px"}
                  >
                    {step.icon}
                    {step.label}
                    <Box bgcolor="lightgray" color="white"></Box>
                  </Box>
                </StepLabel>{" "}
                {/* </Box> */}
                <StepContent>
                  {/* <Box>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </Box> */}
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Box>
      <FirstStep />
    </Box>
  );
}
