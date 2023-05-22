import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import lnh from "../../assets/lnh.png";

type MenuLinkProps = {
  links: string[];
};
const Menubar = ({ links }: MenuLinkProps) => {
  const [value, setvalue] = useState();
  const appBarStyle = {
    backgroundColor: "#003768",
  };
  return (
    <AppBar style={appBarStyle}>
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <img
              src={lnh}
              alt="logo"
              style={{ height: "50px", width: "180px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Tabs
              TabIndicatorProps={{
                style: {
                  backgroundColor: "red",
                },
              }}
              textColor="inherit"
              value={value}
              onChange={(e, val) => setvalue(val)}
            >
              {links.map((link, index) => {
                return <Tab key={index} label={link} />;
              })}
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Menubar;
