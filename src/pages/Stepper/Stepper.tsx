// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import SettingsIcon from "@mui/icons-material/Biotech";
// import GroupAddIcon from "@mui/icons-material/VolunteerActivism";
// import VideoLabelIcon from "@mui/icons-material/VideoLabel";
// import { styled } from "@mui/material/styles";
// import { StepIconProps } from "@mui/material/StepIcon";
// import FirstStep from "./Components/FirstForm";

// const steps = [
//   {
//     label: "Research",
//     description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: "Donate",
//     description:
//       "An ad group contains one or more ads which target a shared set of keywords.",
//   },
//   {
//     label: "Create an ad",
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
// ];
// const ColorlibStepIconRoot = styled("div")<{
//   ownerState: { completed?: boolean; active?: boolean };
// }>(({ theme, ownerState }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
//   zIndex: 1,
//   color: "#fff",
//   width: 50,
//   height: 50,
//   display: "flex",
//   borderRadius: "50%",
//   justifyContent: "center",
//   alignItems: "center",
//   ...(ownerState.active && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(162,173,0) 00%, rgb(178,187,28) 50%, rgb(162,173,0) 100%)",
//     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(162,173,0) 0%, rgb(178,187,28) 50%, rgb(162,173,0) 100%)",
//   }),
// }));

// function ColorlibStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   const icons: { [index: string]: React.ReactElement } = {
//     1: <SettingsIcon />,
//     2: <GroupAddIcon />,
//     3: <VideoLabelIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }
// export default function CustomizedSteppers() {
//   // const [activeStep, setActiveStep] = React.useState(0);

//   // const handleNext = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   // };

//   // const handleBack = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   // };

//   // const handleReset = () => {
//   //   setActiveStep(0);
//   // };

//   return (
//     <Box sx={{ display: "flex", flexDirection: "row" }}>
//       <Box sx={{ maxWidth: 400 }}>
//         <Stepper activeStep={activeStep} orientation="vertical">
//           {steps.map((step, index) => (
//             <Step key={step.label}>
//               <Box>
//                 <StepLabel
//                   optional={
//                     index === 2 ? (
//                       <Typography variant="caption">Last step</Typography>
//                     ) : null
//                   }
//                   StepIconComponent={ColorlibStepIcon}
//                 >
//                   {step.label}
//                 </StepLabel>
//                 <StepContent>
//                   <Box>
//                     <Typography>{step.description}</Typography>
//                     <Box sx={{ mb: 2 }}>
//                       <div>
//                         <Button
//                           variant="contained"
//                           onClick={handleNext}
//                           sx={{ mt: 1, mr: 1 }}
//                         >
//                           {index === steps.length - 1 ? "Finish" : "Continue"}
//                         </Button>
//                         <Button
//                           disabled={index === 0}
//                           onClick={handleBack}
//                           sx={{ mt: 1, mr: 1 }}
//                         >
//                           Back
//                         </Button>
//                       </div>
//                     </Box>
//                   </Box>
//                 </StepContent>
//               </Box>
//             </Step>
//           ))}
//         </Stepper>
//         {activeStep === steps.length && (
//           <Paper square elevation={0} sx={{ p: 3 }}>
//             <Typography>All steps completed - you&apos;re finished</Typography>
//             <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//               Reset
//             </Button>
//           </Paper>
//         )}
//       </Box>
//       <FirstStep />
//     </Box>
//   );
// }
