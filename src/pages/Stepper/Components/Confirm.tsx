import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import OppositeContentTimeline from "./TimeLine";
import { Typography } from "@mui/material";
import { customMuiTheme } from "../../../Theme/customMuiTheme";

export default function Confirm({ handleBack, handleNext }: any) {
  const { formValues } = useContext(AppContext);
  const { firstName, lastName, email, gender, date, city, phone } = formValues;

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {};

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value,
      };
      return form;
    });
    // Do whatever with the values
    console.log(form);
    // Show last component or success message
    // handleNext();
  };

  return (
    <Box padding={3}>
      <Typography style={customMuiTheme.typography.h2} pl={3}>
        Evaluation Process
      </Typography>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={5}>
        <Box flex="1">
          <List disablePadding sx={{ width: "100%" }}>
            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={firstName.value || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Last Name"
                secondary={lastName.value || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Email Address"
                secondary={email.value || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Gender"
                secondary={gender.value || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Date of Birth"
                secondary={date.value || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="City"
                secondary={city.value || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Phone"
                secondary={phone.value || "Not Provided"}
              />
            </ListItem>
          </List>
        </Box>
        <Box
          flex="1"
          sx={{
            border: "1px solid #d3d3d3",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <OppositeContentTimeline />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }} gap={2}>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>{" "}
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
