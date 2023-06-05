import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { ResearchFormFields } from "./researchformtypes";
import { Menubar } from "../../components/Menubar/Menubar";
import { pages } from "../Home/Home";

const ResearchForm = () => {
  const formik = useFormik<ResearchFormFields>({
    initialValues: {
      pmi: "mouzam",
      age: "",
      years: "",
      male: false,
      female: false,
      donorType: "",
      recoverType: "",
      activeProjectsOnly: false,
      reswerchAocOnly: false,
      race: "",
      bmi: "",
      wasDonorCooledYes: false,
      wasDonorCooledNo: false,
      lnhDonorId: "",
      unosId: "",
      dateOfDeath: "",
      timeOfDeath: "",
      logTpfAsCaseStudy: false,
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
  });
  // console.log("dhfhfjf", formik.values);
  return (
    <Box>
      <Menubar links={pages} />
      <form onSubmit={formik.handleSubmit}>
        <Typography
          p={2}
          color="#c9d502"
          variant="h4"
          sx={{ fontWeight: "bold" }}
        >
          Research Projects
        </Typography>
        <Box sx={{ border: 1 }} m="1rem" minHeight="550px">
          <Typography
            pl={1}
            color="#c9d502"
            variant="h6"
            sx={{ fontWeight: "bold" }}
          >
            Pending Recovery Search
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" gap={20}>
              <Box
                display="flex"
                flexDirection="column"
                // width="20%"
                sx={{ paddingLeft: 2 }}
                // bgcolor="red"
              >
                <Typography sx={{ fontWeight: "bold" }}> PMI</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  size="small"
                  name="pmi"
                  onChange={formik.handleChange}
                  style={{ width: "250px" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                // width="20%"
                // bgcolor="yellow"
              >
                <Typography sx={{ fontWeight: "bold" }}> Age </Typography>
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
                      label="Years"
                      size="small"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                // width="20%"
                // bgcolor="cyan"
              >
                <Typography sx={{ fontWeight: "bold" }}> Sex</Typography>
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
            <Box display="flex" gap={15}>
              <Box
                display="flex"
                flexDirection="column"
                width="20%"
                sx={{ paddingLeft: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}> Donor Type</Typography>
                <Box display="flex" gap={5} alignItems="baseline">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      --select--
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Years"
                      size="small"
                    >
                      <MenuItem value={10}>ABCD</MenuItem>
                      <MenuItem value={20}>EFGH</MenuItem>
                      <MenuItem value={30}>GGHGG</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" width="20%">
                <Typography sx={{ fontWeight: "bold" }}>
                  Recovery Team
                </Typography>
                <Box display="flex" gap={5} alignItems="baseline">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      --select--
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //   value={age}
                      label="Years"
                      size="small"
                      // sx={{ width: "25px" }}
                    >
                      <MenuItem value={10}>ABCD</MenuItem>
                      <MenuItem value={20}>EFGH</MenuItem>
                      <MenuItem value={30}>GGHGG</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={
                    <Typography sx={{ fontWeight: "bold" }}>
                      Active projects only
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography sx={{ fontWeight: "bold" }}>
                      Research AOC screening
                    </Typography>
                  }
                />
              </Box>
            </Box>
            <Box display="flex" gap={15}>
              <Box
                display="flex"
                flexDirection="column"
                width="20%"
                sx={{ paddingLeft: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}> Race</Typography>
                <Box display="flex" gap={5} alignItems="baseline">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      --select--
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //   value={age}
                      label="Years"
                      size="small"
                      // sx={{ width: "25px" }}
                    >
                      <MenuItem value={10}>bbbbb</MenuItem>
                      <MenuItem value={20}>ccccc</MenuItem>
                      <MenuItem value={30}>ooooo</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" width="20%">
                <Typography sx={{ fontWeight: "bold" }}> BMI</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  size="small"
                />
              </Box>
              <Box display="flex" flexDirection="column" width="20%">
                <Typography sx={{ fontWeight: "bold" }}>
                  Was the donor cooled?
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" p={2}>
              <Box justifyContent="center" p={4} sx={{ border: 1 }}>
                <Typography pl={1} color="#c9d502" variant="h6">
                  Tissue Procurement Form Details
                </Typography>
                <Box display="flex" gap={15} justifyContent="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    width="20%"
                    sx={{ paddingLeft: 2 }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      LNH Donor ID
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputLabelProps={{ shrink: false }}
                      size="small"
                    />
                  </Box>
                  <Box display="flex" flexDirection="column" width="20%">
                    <Typography sx={{ fontWeight: "bold" }}>UNOS ID</Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputLabelProps={{ shrink: false }}
                      size="small"
                    />
                  </Box>
                  <Box display="flex" flexDirection="column" width="20%">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Date of Death
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputLabelProps={{ shrink: false }}
                      size="small"
                      type="date"
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    width="10%"
                    // sx={{ paddingBottom: 2, paddingRight: 1 }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Time of Death(24hr)
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputLabelProps={{ shrink: false }}
                      size="small"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex" pt={1} justifyContent="space-between">
              <Box display="flex" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={
                    <Typography sx={{ fontWeight: "bold" }}>
                      Log TPF as case
                    </Typography>
                  }
                />
              </Box>
              <Box display="flex" sx={{ paddingRight: 2, paddingBottom: 2 }}>
                <Button variant="contained" type="submit">
                  <Typography sx={{ fontWeight: "bold" }}>Save</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ResearchForm;
