import React from "react";

import { Grid, Toolbar, AppBar, Button } from "@material-ui/core/";

import Logo from "../images/logo.svg";
function Topbar() {
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Grid container direction="row" className="top-bar">
          <img alt="logo" src={Logo} className="logo" />

          <Button className="top-bar-btn-style">Try it free</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
