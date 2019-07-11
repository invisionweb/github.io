import React, { Component } from "react";
import { Typography, withStyles, Grid } from "@material-ui/core";
import cottonLogo from "../images/cotton.svg";
import asjLogo from "../images/asj.png";
import zilikaLogo from "../images/zilika_logo.png";
import indianYogaLogo from "../images/indian_yoga_culture.jpg";
import ganasaktiLogo from "../images/ganasakti.png";
import zubleeFoundationLogo from "../images/zublee_foundation.png";
import wcLogo from "../images/wc.png";
import byatikramLogo from "../images/byatikram-logo.jpg";

class Clients extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.clientsParent}>
        <Typography
          variant="h3"
          color="textPrimary"
          className={classes.clientsHeadingBig}
        >
          Who's using our products?
        </Typography>
        <Typography
          variant="h5"
          color="textPrimary"
          className={classes.clientsHeadingSmall}
        >
          Who's using our products?
        </Typography>

        <Grid
          container
          alignItems="flex-end"
          className={classes.clientsGridsParent}
        >
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={cottonLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Cotton University
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={indianYogaLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              IYC & YTC
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={zubleeFoundationLogo}
              // className={classes.clientIcons}
              width="90"
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Zublee Foundation
            </Typography>
          </Grid>

          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={zilikaLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Zilika
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-end"
          className={classes.clientsGridsParent}
        >
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={ganasaktiLogo}
              // className={classes.clientIcons}
              width="160"
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Ganasakti
            </Typography>
          </Grid>
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={wcLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              World Connect
            </Typography>
          </Grid>
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={byatikramLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Byatikram
            </Typography>
          </Grid>
          <Grid item md={3} xs={6} className={classes.clientsGrids}>
            <img
              src={asjLogo}
              className={classes.clientIcons}
              draggable="false"
            />
            <Typography variant="subtitle1" color="textSecondary">
              Assam School of Journalism
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  clientsParent: {
    textAlign: "center"
  },
  clientsHeadingBig: {
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  clientsHeadingSmall: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  clientsGridsParent: {
    marginTop: 50
  },
  clientsGrids: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 40
    }
  },
  clientIcons: {
    width: 100,
    [theme.breakpoints.down("xs")]: {
      width: 80
      // paddingBottom: 20d
    }
  }
});

export default withStyles(styles)(Clients);
