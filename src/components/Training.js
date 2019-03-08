import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

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
  }
});

class Training extends React.Component {
  render() {
    const classes = styles;
    return (
        <div>

<Typography variant="h1">
    Training course by Invision
</Typography>

<Typography variant="h3">
    Web development
    Mobile app development
    Artificial intelligence
</Typography>

      </div>
    );
  }
}

export default withStyles(styles)(Training);
