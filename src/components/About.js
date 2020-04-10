import React, { Component } from "react";
import {
  Typography,
  Card,
  withStyles,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from "@material-ui/core";
import "../stylesheets/about.css";
import Team from "./Team";
import technologies from "../images/technologies.png";
import ml_img from "../images/ML.png";

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="about-top-section-parent">
          <div className="about-top-section-card-parent">
            <Card elevation={2}>
              <section className="about-top-section-card">
                <Typography
                  variant="h3"
                  gutterBottom
                  className={classes.headingUp}
                >
                  What is Invision?
                </Typography>
                <Typography
                  variant="h3"
                  gutterBottom
                  className={classes.headingDown}
                >
                  What is Invision?
                </Typography>

                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.descUp}
                >
                  Invision Webtech Private Limited is a technology company based
                  in Assam, India that specializes in web and native app
                  development, founded in 2016. Invision promises to bring ideas
                  to reality and profoundly believe in their motto to make
                  everyone’s lives easier with technology.
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.descDown}
                >
                  Invision Webtech Private Limited is a technology company based
                  in Assam, India that specializes in web and native app
                  development, founded in 2016. Invision promises to bring ideas
                  to reality and profoundly believe in their motto to make
                  everyone’s lives easier with technology.
                </Typography>
              </section>
            </Card>
          </div>
        </div>

        <div className="about-us-parent">
          <section className="about-us-left">
            <Typography variant="h2">About us</Typography>
          </section>

          <section className="about-us-right">
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.aboutUsDesc}
            >
              We, at Invision, put attention to detail and deliver high-quality
              solutions to our customers. We are equipped with modern and most
              demanded technologies and efficiently craft projects of high
              complexity - from management systems to mobile applications.
              High-level of proficiency, popular technologies and experience
              allows us working with high profile customers and match even the
              most strict projects' needs.
            </Typography>
          </section>
        </div>

        <div className="about-us-parent">
          <section className="about-us-left">
            <Typography variant="h2">Our Mission</Typography>
          </section>

          <section className="about-us-right">
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.aboutUsDesc}
            >
              Our mission at Invision is to skillfully craft smart programmes to
              bring about a change in the routine life of people. Our philosphy
              is to make technologies available to the public and to do it
              better than anyone else. At Invision, we share an utmost goal to
              build a platform where people can come and claim their
              applications as per their requirements.
            </Typography>
          </section>
        </div>

        <div
          style={{
            marginTop: 100,
            marginBottom: 100,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">
            Frameworks . Libraries. Languages
          </Typography>
        </div>

        <div
          style={{
            marginTop: 100,
            marginBottom: 100,
            width: "100%",
            textAlign: "center",
          }}
        >
          <img src={technologies} style={{ width: "60%" }} draggable="false" />
        </div>

        <div
          style={{
            marginTop: 5,
            marginBottom: 100,
            width: "100%",
            textAlign: "center",
          }}
        >
          <img src={ml_img} style={{ width: "60%" }} draggable="false" />
        </div>

        <div className={classes.spacer}>
          <Team />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  headingUp: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headingDown: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  descUp: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  descDown: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  aboutUsDesc: {
    lineHeight: "35px",
  },
  spacer: {
    marginBottom: "130px",
  },
});

export default withStyles(styles)(About);
