import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid, Paper, FilledInput, Select, FormControl, InputLabel } from "@material-ui/core";

import PropTypes, { func } from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import $ from "jquery";
import { writeToUsPHP } from "../AppClass";

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
          height="180"
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
        <Button size="small" color="primary" href={props.web_link}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

class Training extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    showForm: false,
    interest : "Choose topic"
  };

  handleChange = (e, stateName) => {
    this.setState({[stateName] : e.currentTarget.value})
  }

  submitTrainingForm = () => {
    console.log(this.state)
    
    $.ajax({
      type: "POST",
      url: writeToUsPHP,
      // contentType: "application/json; charset=utf-8",
      // dataType: "json",
      data: {
        pkey: new Date().getTime(),
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        occupation: "student",
        job: "training",
        message: this.state.interest
      },
      success: function(res) {
        if (res === "success") {
          alert("Form submitted successfully.");
        } else if (res === "fail") {
          alert("Try again.");
        }
      }.bind(this),
      error: function(error) {
        console.log(error);
        alert("Try again.");
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.headerBox}>
          <Typography variant="h4" align="center" gutterBottom>
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
            <Button
              variant="contained"
              color="primary"
              align="center"
              onClick={() => {
                this.setState({ showForm: this.state.showForm ? false : true})
              }}
            >
              Register
            </Button>
          </div>

          {this.state.showForm && (
            <div className={classes.formContainer}>
              <TextField
                variant="outlined"
                label="Enter name"
                fullWidth
                className={classes.textFieldClass}
                onChange={(e) => this.handleChange(e, 'name')}
              />
              <TextField
                variant="outlined"
                label="Enter email"
                fullWidth
                className={classes.textFieldClass}
                onChange={(e) => this.handleChange(e, 'email')}
              />
              <TextField
                variant="outlined"
                label="Enter phone number"
                fullWidth
                className={classes.textFieldClass}
                onChange={(e) => this.handleChange(e, 'phone')}
              />
              <TextField
                variant="outlined"
                label="Enter address"
                fullWidth
                className={classes.textFieldClass}
                onChange={(e) => this.handleChange(e, 'address')}
              />


              <FormControl variant="filled" className={classes.formContainer} fullWidth>
          <InputLabel htmlFor="filled-age-simple">Choose topic</InputLabel>
          <Select
            value={this.state.interest}
            onChange={(e) => this.setState({interest : e.target.value})}
            input={<FilledInput name="Choose topic" id="filled-age-simple" />}
          >
              <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={"web development"}>Web development</MenuItem>
                  <MenuItem value={"mobile app development"}>Mobile app development</MenuItem>
                  <MenuItem value={"artificial intelligence"}>Artificial intelligence</MenuItem>
          </Select>
        </FormControl>



              <div className={classes.buttonContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  align="center"
                  onClick={() => {
                    this.submitTrainingForm();
                  }}
                >
                  submit
                </Button>
              </div>
            </div>
          )}
        </div>

        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Card_ui
              prop={classes}
              img_link="https://www.webkites.in/images/admin/category_image/web_design1.png"
              web_link="https://www.w3schools.com/"
              title="Web development"
              subtitle="3 months course"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card_ui
              prop={classes}
              img_link="https://www.sagipl.com/images/mobile-application-development/mobile-application-help.jpg"
              web_link="https://www.udacity.com/"
              title="Mobile app development"
              subtitle="Android & iOS | 3 months course"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card_ui
              prop={classes}
              img_link="https://www.fi.edu/sites/default/files/General_Articles_ArtificialIntelligence.jpg"
              web_link="https://tensorflow.org"
              title="Artificial intelligence"
              subtitle="& Machine learning | 3 months course"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Training);
