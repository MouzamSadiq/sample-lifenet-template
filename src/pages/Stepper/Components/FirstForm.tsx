import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import { theme } from "../../../Theme/theme";
import { SmallActions } from "../../../components/smallActions";
import { Bloodtype, DoneAll, Groups, Refresh } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } =
    useContext(AppContext);
  const { firstName, lastName, email, gender } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email, gender }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, firstName, lastName, email, gender]
  );

  return (
    <Box bgcolor={theme.colors.cardBg} padding={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <SmallActions
            name={"Research planning"}
            icon={<Groups />}
            count={10}
            color={theme.colors.fcfcfc}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SmallActions
            name={"Research Inprogress"}
            icon={<Refresh />}
            count={8}
            color={"skyblue"}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <SmallActions
            name={"Research completed"}
            icon={<DoneAll />}
            count={8}
            color={"lightgreen"}
          />
        </Grid>
      </Grid>
      <Grid item xs={6} sm={6} style={{ backgroundColor: "white" }}>
        {/* <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label=""
            name="gender"
            value={gender.value}
            onChange={handleChange}
            error={!!gender.error}
            helperText={gender.error}
            required={gender.required}
          >
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField> */}
        {/* <Typography style={customMuiTheme.typography.h2}>
          Description
        </Typography>
        <Typography>
          For each ad campaign that you create, you can control how much you're
          willing to spend on clicks and conversions, which networks and
          geographical locations you want your ads to show on, and more.
        </Typography> */}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
