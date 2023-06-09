import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { customMuiTheme } from "../../Theme/customMuiTheme";
import { RecoveryCard } from "./components/RecoveriesCard";

export type DocProps = {
  isLeftDrawerOpen: boolean;
};
export const Recoveries: React.FC<DocProps> = ({ isLeftDrawerOpen }) => {
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
          ml: { xs: "0", md: "0", lg: isLeftDrawerOpen ? "230px" : "0px" },
        }}
        paddingLeft={5}
      >
        <Box>
          <Box>
            <Box display="flex" alignItems="left" padding={1}>
              <Typography style={customMuiTheme.typography.h4}>
                Recoveries
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // width: "100%",
              // height: "130vh",
            }}
            gap={5}
            paddingTop={5}
          >
            {" "}
            <RecoveryCard />
          </Box>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
};
