import React from "react";

import { Grid, Button } from "@material-ui/core/";

function Intro(props) {
  return (
    <div className="intro-cont">
      <Grid item xs={12}>
        <h1>{props.heading}</h1>
        <h3>{props.text}</h3>
        <Button className="intro-btn"> Get Started For Free</Button>
        <img alt={props.imgALT} src={props.imgSRC} className="intro-img" />
      </Grid>
    </div>
  );
}

export default Intro;
