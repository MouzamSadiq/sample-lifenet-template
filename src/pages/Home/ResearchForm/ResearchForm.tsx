import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ResearchForm = () => {
  return (
    <>
      <Box>
        <Typography color="green">Research Projects</Typography>
        <Box sx={{ border: 1 }} m="1rem" height="250px">
          <Typography color="green">Pending Recovery Search</Typography>
          <Box display="flex" gap={15}>
            <Box display="flex" flexDirection="column" width="20%">
              PMI
              <TextField
                id="outlined-basic"
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                size="small"
              />
            </Box>
            <Box display="flex" flexDirection="column" width="20%">
              Age
              <Box display="flex" gap={5} alignItems="baseline">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  size="small"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Years</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //   value={age}
                    label="Years"
                    size="small"
                    // sx={{ width: "25px" }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" width="20%">
              Sex
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResearchForm;
