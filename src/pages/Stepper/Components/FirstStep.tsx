import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import { theme } from "../../../Theme/theme";
import { SmallActions } from "../../../components/smallActions";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
  Bloodtype,
  Description,
  DoneAll,
  Groups,
  MedicalServices,
  Refresh,
  VolunteerActivism,
} from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";
import MediaCard from "./FirstCard";
import { VideoCard } from "./VideoCard";

export const FirstStep = ({ handleBack, handleNext }: any) => {
  //  const { handleNext } = useContext(AppContext);
  // const handleNext = () => {};

  return (
    <Box padding={2}>
      <Box display="flex" gap={5} flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          // bgcolor="red"
        >
          <Typography style={customMuiTheme.typography.h2}>
            Saving Lives. Restoring Health. Giving Hope.
          </Typography>
          <Box gap={3} bgcolor="white">
            {" "}
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
              onClick={handleBack}
            >
              Back{" "}
              <ArrowCircleLeftRounded style={{ color: theme.colors.border }} />
            </Button>
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
        </Box>
        <Grid container spacing={10}>
          <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Research planning"}
              icon={<Groups style={theme.CardIcons} />}
              count={10}
              color={theme.colors.cardBg}
            />
          </Grid>
          <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Research Inprogress"}
              icon={<Refresh style={theme.CardIcons} />}
              count={8}
              color={theme.colors.cardBg}
            />
          </Grid>

          <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Research completed"}
              icon={<DoneAll style={theme.CardIcons} />}
              count={8}
              color={theme.colors.cardBg}
            />
          </Grid>
          <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Donate"}
              icon={<VolunteerActivism style={theme.CardIcons} />}
              count={8}
              color={theme.colors.cardBg}
            />
          </Grid>
          {/* <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Transplant"}
              icon={<MedicalServices style={theme.CardIcons} />}
              count={8}
              color={theme.colors.cardBg}
            />
          </Grid>
          <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Documentation"}
              icon={<Description style={theme.CardIcons} />}
              count={8}
              color={theme.colors.cardBg}
            />
          </Grid>
          <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Documentation"}
              icon={<Description style={theme.CardIcons} />}
              count={8}
              color={theme.colors.cardBg}
            />
          </Grid>
          <Grid item xs={3} sm={2.5}>
            <SmallActions
              name={"Documentation"}
              icon={<Description style={theme.CardIcons} />}
              count={8}
              color={theme.colors.cardBg}
            />
          </Grid> */}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <MediaCard />
          </Grid>
          <Grid item xs={6} sm={6}>
            <VideoCard />
          </Grid>
        </Grid>
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
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          // disabled={isError()}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box> */}
    </Box>
  );
};
