import React from "react";
import Grid from "@material-ui/core/Grid";
function Features(props){
  return (
    <Grid container direction="row"  className={props.class}>
    <Grid item md={6} className="feat-col">
      <h2>{props.title}</h2>
      <p>{props.text} </p>
    </Grid>
    <Grid item md={6} className="feat-col">
      <img alt={props.imgALT} src={props.img} key={props.imgKEY} />
    </Grid>
  </Grid>
  );
}

export default Features;