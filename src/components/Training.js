import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid, Paper } from "@material-ui/core";

import PropTypes, { func } from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  card: {
    width: "auto",
    margin: "2%"
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  headerBox: {
    margin: "8% 2% 2% 2%",
    textAlign: "center"
  },
  buttonContainer: {
    margin: "20px"
  },
  textFieldClass: {
    margin: "10px 0px"
  },
  formContainer: {
    // margin: '10px 20%',
    margin: "0 auto",
    width: "100%",
    maxWidth: "600px"
  }
});

function Card_ui(props) {
  return (
    <Card className={props.prop.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          className={props.prop.media}
          height="140"
          image={props.img_link}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">{props.subtitle}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://google.com">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

class Training extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.headerBox}>
          <Typography variant="h3" align="center" gutterBottom>
            Training course by Invision
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Web development, Mobile app development, Artificial intelligence
          </Typography>

          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" align="center">
              Register
            </Button>
          </div>

          <div className={classes.formContainer}>

          <TextField variant="outlined" label="Enter name" fullWidth className={classes.textFieldClass} />
          <TextField variant="outlined" label="Enter email" fullWidth className={classes.textFieldClass} />
          <TextField variant="outlined" label="Enter phone number" fullWidth  className={classes.textFieldClass} />
          
          </div>

          <div className={classes.buttonContainer}>
            <Button variant="outlined" color="primary" align="center">
              submit
            </Button>
          </div>

        </div>

        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Card_ui
              prop={classes}
              img_link="http://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1508177585/Periodic_xlxins.png"
              title="Web development"
              subtitle="3 months course"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card_ui
              prop={classes}
              img_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOjdXaH5M_qEAn4kS7OJJPcjjx-aeBIFr3eS6Oqoypi1NZetS"
              title="Mobile app development"
              subtitle="Android & iOS 3 months course"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card_ui
              prop={classes}
              img_link="http://www.datascience.co.nz/imgs/logo.png"
              title="Artificial intelligence"
              subtitle="& Machine learning 3 months course"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Training);
