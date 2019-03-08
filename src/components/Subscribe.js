import React, { Component } from "react"
import { Typography, Button, withStyles, TextField } from "@material-ui/core"
import "../stylesheets/subscribe.css"

class Subscribe extends Component {
    state = {
        name: ""
    }

    handleChange = event => {
    this.setState({
        name: event.target.value
    })
    }
    render() {
        const { classes } = this.props
        return (
            <div className="subscribe-parent">
                <div className="subscribe-gradient">
                <div className="subscribe-text">
                    <Typography variant="display3" className={classes.firstLine}>Subscribe to our blog!</Typography>
                    <Typography variant="headline" className={classes.secondLine}>Get the latest articles sent to your inbox!</Typography>
                </div>
                <div className="subscribe-button">
                    <TextField
                        id="standard-name"
                        label="E-mail"
                        // className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <Button
                        variant="raised"
                        color="secondary"
                        className={classes.ourProductsButton}
                    >
                        Subscribe
                    </Button>
                </div>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    ourProductsButton: {
        marginTop: 20
    },
    // firstLine: {

    // },
    secondLine: {
        marginTop: 20
    }
})

export default withStyles(styles)(Subscribe)
