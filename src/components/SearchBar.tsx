import * as React from "react";

import { Typography, Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export const SearchBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={2}
      sx={{
        display: "inline-flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="black" style={{ fontFamily: "Poppins" }}>
        Donor
      </Typography>
      <TextField
        placeholder="Search Donor Id"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
