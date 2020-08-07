import React from "react";
import { Grid, Button, TextField } from "@material-ui/core/";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Whitelogo from "../images/logo-white.svg";
import Phone from "../images/icon-phone.svg";
import Email from "../images/icon-email.svg";

function Footer() {
  return (
    <Grid container className="footer ">
      <Grid container direction="row" className="reverse-order-footer">
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
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We will never send you spam or pass on your email
            address.{" "}
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
        <InstagramIcon className="footer-social-icon" />
        <TwitterIcon className="footer-social-icon" />
      </Grid>
    </Grid>
  );
}

export default Footer;
