import React, { useContext, useState } from "react";
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

import { StepIconProps } from "@mui/material/StepIcon";
import { FirstStep } from "./Components/FirstStep";
import { theme } from "../../Theme/theme";
import {
  Check,
  CheckCircle,
  KeyboardDoubleArrowLeftOutlined,
} from "@mui/icons-material";
import { StepConnector, StepIcon, ToggleButton } from "@mui/material";
import { SecondStep } from "./Components/SecondStep";
import { AppContext } from "./Context";
import Confirm from "./Components/Confirm";
import {
  ColorlibStepIconRoot,
  CustomStepIcon,
  stepStyle,
  steps,
} from "./Components/StepperStyles";
import { LastStep } from "./Components/LastStep";
import { color } from "framer-motion";

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSteps = (step: number) => {
    switch (step) {
      case 0:
        return <SecondStep handleNext={handleNext} />;
      case 1:
        return <FirstStep handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return <Confirm handleBack={handleBack} handleNext={handleNext} />;
      case 3:
        return <LastStep handleBack={handleBack} />;
      default:
        throw new Error("Unknown step");
    }
  };
  // const { activeStep } = React.useContext(AppContext);
  const [selected, setSelected] = React.useState(true);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ maxWidth: selected ? 400 : 50 }}>
        <Box
          border={selected ? 1 : 0}
          borderColor="gray"
          p={2}
          position="relative"
        >
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            sx={{
              position: "absolute",
              top: 0,
              left: -8,
              fontSize: 2,

              width: "15px",
              height: "10px",
            }}
          >
            <KeyboardDoubleArrowLeftOutlined
              style={{
                color: theme.colors.background,
              }}
            />
          </ToggleButton>

          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            // connector={<StepConnector color="red" />}
            sx={stepStyle}
            // alternativeLabel
          >
            {steps.map((step, index, color) =>
              selected ? (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 3 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                    // StepIconComponent={ColorlibStepIcon}
                  >
                    <Box
                      // bgcolor={step.color}
                      bgcolor={
                        index < activeStep
                          ? theme.colors.border
                          : index === activeStep
                          ? theme.colors.background
                          : index > activeStep
                          ? theme.colors.border
                          : ""
                      }
                      width="150px"
                      height="110px"
                      sx={theme.center}
                      flexDirection="column"
                      gap={1}
                      borderRadius={"10px"}
                      border={"1px solid lightgray"}
                      color={
                        activeStep === index
                          ? theme.colors.activeBg
                          : theme.colors.background
                      }
                    >
                      {/* <CustomStepIcon
                        active={activeStep === index}
                        completed={index < activeStep}
                      /> */}
                      {step.icon}
                      {step.label}
                      <Box
                        bgcolor={
                          index < activeStep
                            ? theme.colors.fcfcfc
                            : theme.colors.fcfcfc
                        }
                        padding={0}
                        borderRadius="8px"
                        width="80px"
                        sx={theme.center}
                      >
                        <Typography
                          style={{
                            color: theme.colors.background,
                            fontSize: "12px",
                          }}
                        >
                          {" "}
                          {index < activeStep
                            ? "completed"
                            : index === activeStep
                            ? "Inprogress"
                            : index > activeStep
                            ? "pending"
                            : ""}
                        </Typography>
                      </Box>
                    </Box>
                  </StepLabel>
                  {/* <StepContent></StepContent> */}
                </Step>
              ) : (
                ""
              )
            )}
          </Stepper>
          {/* <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button> */}
            </Paper>
          )}
        </Box>
      </Box>
      <Box width="100%">{handleSteps(activeStep)}</Box>
    </Box>
  );
}
