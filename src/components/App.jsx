import React from "react";
import { Grid, Button, TextField } from "@material-ui/core/";

//import Button from "@material-ui/core/Button";
import Topbar from "./Topbar";
import Screen from "../images/screen-mockups.svg";
import Messages from "../images/icon-messages.svg";
import Communities from "../images/icon-communities.svg";


import Cards from "./Cards";
import Intro from "./Intro";
import features from "./features";
import Features from "./Features";
import Cta from "./Cta";
import Footer from "./Footer";

function createFeat(feature) {
  return (
    <Features
      class={feature.classes}
      title={feature.title}
      text={feature.text}
      imgALT={feature.imgALT}
      img={feature.img}
      imgKEY={feature.imgKEY}
    />
  );
}

function App() {
  return (
    <div>
      <Topbar />
      <Grid container>
        <Intro
          heading="Build The Community Your Fans Will Love"
          text="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
          imgALT="screen"
          imgSRC={Screen}
        />

        <Grid container direction="row">
          <Cards
            classes="card-cont"
            alt="communities-icon"
            imageSRC={Communities}
            title=" 1.4k+"
            text="Communities Formed"
          />
          <Cards
            classes="card-cont center"
            alt="message-icon"
            imageSRC={Messages}
            title="2.7m+"
            text="Messages Sent"
          />
        </Grid>
      </Grid>

      {features.map(createFeat)}
      <Cta
        title="Ready To Build Your Community?"
        buttonText="Get Started For Free"
      />
      <Footer />
    </div>
  );
}

export default App;
