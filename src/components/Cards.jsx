import React from "react";

import Grid from "@material-ui/core/Grid";

function Cards(props) {
  return (
    <Grid item md={6}>
      <Grid container className={props.classes}>
        <Grid item xs={12}>
          <img alt={props.alt} src={props.imageSRC} />
          <h2> {props.title}</h2>
          <h5>{props.text}</h5>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cards;
