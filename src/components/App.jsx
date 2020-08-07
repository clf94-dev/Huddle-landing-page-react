import React from "react";
import { Grid, Button, TextField } from "@material-ui/core/";

//import Button from "@material-ui/core/Button";
import Topbar from "./Topbar";
import Screen from "../images/screen-mockups.svg";
import Messages from "../images/icon-messages.svg";
import Communities from "../images/icon-communities.svg";
<<<<<<< Codesandbox

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
=======
import Whitelogo from "../images/logo-white.svg";
import Phone from "../images/icon-phone.svg";
import Email from "../images/icon-email.svg";

import Cards from "./Cards";
import Intro from "./Intro";
import features from "./features";
import Features from "./Features";
import Cta from "./Cta";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

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
>>>>>>> GitHub
          />
          <Cards
<<<<<<< Codesandbox
            classes="card-cont center"
            alt="message-icon"
            imageSRC={Messages}
            title="2.7m+"
            text="Messages Sent"
=======
            classes="card-cont"
            alt="communities-icon"
            imageSRC={Communities}
            title=" 1.4k+"
            text="Communities Formed"
>>>>>>> GitHub
          />
<<<<<<< Codesandbox
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

=======
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
>>>>>>> GitHub
      <Grid className="footer ">
        <Grid container direction="row" className="reverse-order">
          <Grid item md={6} className="footer-contacts">
            <img alt="logowhite" src={Whitelogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <Grid container direction="row" className="footer-contacts-row">
              <img alt="phone" src={Phone} />
              <h5> +1-543-123-4567</h5>
            </Grid>
            <Grid container direction="row" className="footer-contacts-row">
              <img alt="phone" src={Email} />
              <h5> example@huddle.com</h5>
            </Grid>
          </Grid>
          <Grid item md={6} className="newsletter-footer ">
            <h3> Newsletter</h3>
            <p>
              {" "}
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address{" "}
            </p>
            <Grid container direction="row">
              <Grid item md={8} xs={12}>
                <TextField
                  id="filled-basic"
                  label="email@example.com"
                  variant="filled"
                  className="newsletter-input"
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <Button className="footer-btn">Subscribe</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" className="icons-footer">
          <FacebookIcon className="footer-social-icon" />
          <InstagramIcon className="footer-social-icon"/>
          <TwitterIcon className="footer-social-icon"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
