import React from "react";

import { Grid, Button } from "@material-ui/core/";
function Cta(props) {
  return (
    <Grid container className="cta-cont">
      <Grid item lg={12}>
        <h2> {props.title}</h2>
      </Grid>
      <Grid item lg={12}>
        <Button className="intro-btn">{props.buttonText}</Button>
      </Grid>
    </Grid>
  );
}

export default Cta;
