import SettingsIcon from "@mui/icons-material/Biotech";
import GroupAddIcon from "@mui/icons-material/VolunteerActivism";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { styled } from "@mui/material/styles";
import { CheckCircle } from "@mui/icons-material";
import { StepIcon, StepIconProps } from "@mui/material";
import { theme } from "../../../Theme/theme";

export const steps = [
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
    label: "Create an Evaluation",
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

export const ColorlibStepIconRoot = styled("div")<{
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
interface CustomStepIconProps {
  active: boolean;
  completed: boolean;
}
export const CustomStepIcon: React.FC<CustomStepIconProps> = ({
  active,
  completed,
}) => {
  if (completed) {
    return <CheckCircle style={{ color: theme.colors.activeBg }} />;
  }
  return <StepIcon active={active} icon={undefined} />;
};
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

interface DonorData {
  label: string;
  value: string;
}

export const donorData: DonorData[] = [
  { label: "Donar ID", value: "709999977" },
  { label: "Donar Name", value: "Alex Mathew" },
  { label: "Donar Blood group", value: "A+ve" },
  { label: "Donar Age", value: "30" },
  { label: "Organs", value: "Aortic Valve & Pulmonary Valve" },
];
export const stepStyle = {
  // boxShadow: 2,
  // backgroundColor: "rgba(0,0,0,0.1)",
  // padding: 2,
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: theme.colors.background,
      // fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "warning.main",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: theme.colors.activeBg,
      // fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "secondary.main",
    },
  },
  "& .MuiStepConnector-line": {
    // "& .MuiStepConnector-root": {
    // height: "5rem",
    // },
  },
};
