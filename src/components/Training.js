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
    width: 'auto',
    margin: '2%',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  headerBox: {
    margin: '10% 2% 2% 2%'
  }
});

function Card_ui(props){
  return(
    <Card className={props.prop.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={props.prop.media}
              //height="140"
              image={props.img_link}
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography component="p">
                {props.subtitle}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Details
            </Button>
          </CardActions>
        </Card>
  )
}

class Training extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <div className={classes.headerBox}>
        <Typography variant="h2" align="center" gutterBottom>Training course by Invision</Typography>

        <Typography variant="h6" align="center" color="textSecondary">
          Web development, Mobile app development, Artificial intelligence
        </Typography>
      </div>

        <Grid container spacing={0}>
        <Grid item xs={6}>
          <Card_ui prop={classes} img_link="http://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1508177585/Periodic_xlxins.png" title="Machine learning" subtitle="3 months course"/>
        </Grid>
        <Grid item xs={6}>
        <Card_ui prop={classes} img_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOjdXaH5M_qEAn4kS7OJJPcjjx-aeBIFr3eS6Oqoypi1NZetS" title="Machine learning" subtitle="3 months course"/>
        </Grid>
        <Grid item xs={3}>
        <Card_ui prop={classes} img_link="http://www.datascience.co.nz/imgs/logo.png" title="Machine learning" subtitle="3 months course"/>
        </Grid>
        <Grid item xs={3}>
        <Card_ui prop={classes} img_link="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" title="Machine learning" subtitle="3 months course"/>
        </Grid>
        <Grid item xs={3}>
        <Card_ui prop={classes} img_link="https://cdn-images-1.medium.com/max/1200/1*lJ32Bl-lHWmNMUSiSq17gQ.png" title="Machine learning" subtitle="3 months course"/>
        </Grid>
        <Grid item xs={3}>
        <Card_ui prop={classes} img_link="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAclBMVEX///9otEVms0Jjsj1fsTh1ulafzozC37ddsDTZ69KYyYRbrzL8/vxari74/PaDwGnp9OR9vWDx+O5wuFCs1JyIwnDU6MxWrSeiz5G22Kmw1qHN5MSTx33K48Btt0t3ulni8Nvs9ei83LBNqhSp0piOxXdbgDzvAAADVElEQVR4nO3da3OiMBiGYUzSikLAUhVFrdbq//+Ly0lRqy68u1PocF/TD21oZ8IzORCE1HEAAAAAAAAAAAAAAAAAAAAAAP/LavX88OaH6vHLBF/x7snhSfwV/VRVfpdQb58cfdPhj9Xkd/m07rD4LhgND+Pj7DiebnblwY1nJ21VrOsORvuOE+1D4xqttVJaG0+vs2HPV2bRdvW6S5vF5OgZNbikXbVMIzV+27XrrpXRrh58o0z6xWz62PBOaCXDZPrQ2nsY22DgzduuXleFJh/Oboa3vChrh/Gw7Qp2U5h3Ur2fz256q0nm4yxSu2+7il20zltbPvy/X7U4naRFs6zIPl+I9dK+GNu87OJ2fNXgTDawJXmR+9l2Nbsm8qrGFVz3Uz1Oj2/zJqieLcR66XjKyqyTj5uJwcySbXnYLNuuaLfsbNW89Lf5VFVFXtB2VTtl/fiC95o+tF3VLgnimrGlcyrL1MrQ1M7NcPVbqd1N07GOu5eV+rGlHZWZ4SSyqj7W92lgRdvZfbzU916sUv2otxPE1Nh4OxL9aXS01q772WNnbjbMx2m3m49fG0hXYlF+Y0mrPga3KpYIapBehlhdn9me51/dx49qXstJ1O6aXL4Va/ty2aVU2yfRgtPNInfUMLcXx3fL703bJ9ECcpMhNxlykyE3GXKTITcZcW7v5EZuzZGbDLnJiHP7IDdya47cZMhNRpzbgNzIrTn6qQztTUaa24DcyE2A3GTEuSlyI7fmyE2G3GTEuWlyI7fmyE3mX3I7/X4fc0vKk7dR49zKt7X6+Wx54OYnb8aNXl8oGtmmeOYw7uUj0iNjtLYzR5CbM421NranL7kF+8UhbzHNc3MmyWLZ+5dRBbnBITcpcpNpmFtvX5S51Sw3l9xK9FOZif17Wmfqre3qdkfY4AVUNl+pBKpucMq+tl3ZLvEXrk2dt7vIfypdFsYvbAN3IwgC563MyN0FZ354LvT7+N5kHafcvMstQMN7hbhEbjLkJkNuMuQmQ24y5CZDbjLkJkNuMuQmc4rIXn7EN7tXiEvT4nZStvdPpXwgopeb09QUeHnbsld7MZYPRFg2aHxsolxj4qRGIa6tlsPv/2nhbiEAAAAAAAAAAAAAAAAAAAAA4B/8AeMWMnCUj6kNAAAAAElFTkSuQmCC" title="Machine learning" subtitle="3 months course"/>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Training);
