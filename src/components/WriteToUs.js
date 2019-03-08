import PropTypes from "prop-types"
import React, { Component } from "react"
import {
    Button,
    Grid,
    Typography,
    withStyles,
    Card,
    CardContent,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    IconButton,
    Checkbox,
    FormControlLabel,
    Collapse,
    Fab
} from "../../node_modules/@material-ui/core"
import Send from "@material-ui/icons/Send"
import Refresh from "@material-ui/icons/Refresh"
import $ from "jquery"
import { writeToUsPHP } from "../AppClass"
import CloseIcon from "@material-ui/icons/Close"

class SimpleMediaCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            occupation: "",
            job: "",
            message: "",
            ifSuccessful: false,
            snackbarOpen: false,
            isApplyingForJob: false
        }

        this.defaultState = {
            name: "",
            email: "",
            phone: "",
            address: "",
            occupation: "",
            job: "",
            message: ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSend = () => {
        let pkey = this.makePkey()
        $.ajax({
            type: "POST",
            url: writeToUsPHP,
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            data: {
                pkey: pkey,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                occupation: this.state.occupation,
                job: this.state.job,
                message: this.state.message
            },
            success: function(res) {
                if (res === "success") {
                    this.setState(function() {
                        return {
                            snackbarOpen: true,
                            ifSuccessful: true
                            // ...this.defaultState
                        }
                    })
                } else if (res === "fail") {
                    this.setState(function() {
                        return {
                            snackbarOpen: true,
                            ifSuccessful: false
                            // ...this.defaultState
                        }
                    })
                }
            }.bind(this),
            error: function(error) {
                console.log(error)
            }
        })
    }

    handleReset = () => {
        this.setState(this.defaultState, function() {
            console.log(this.state)
        })
    }

    makePkey() {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length))

        return text
    }

    handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }

        this.setState({ snackbarOpen: false })
    }

    handleCheckbox = name => event => {
        this.setState(state => ({
            isApplyingForJob: !state.isApplyingForJob
        }))
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <Card className={classes.card} id="cardID">
                    <CardContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={12}>
                                    <Typography
                                        variant="h3"
                                        style={{ marginTop: 20, marginBottom: 20 }}
                                        color="inherit"
                                        className="invisionMarketingTeam"
                                    >
                                        Write to us!
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        style={{ marginTop: 20, marginBottom: 20 }}
                                        color="textSecondary"
                                        className="invisionMarketingTeam"
                                    >
                                        Orders, feedbacks, queries are appreciated!
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="address"
                                        label="Address"
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="phone"
                                        label="Phone"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="occupation">
                                            Occupation
                                        </InputLabel>
                                        <Select
                                            value={this.state.occupation}
                                            name="occupation"
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: "occupation",
                                                id: "occupation"
                                            }}
                                            variant="outlined"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="student">Student</MenuItem>
                                            <MenuItem value="employee">Employee</MenuItem>
                                            <MenuItem value="business owner">
                                                Business Owner
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.isApplyingForJob}
                                                onChange={this.handleCheckbox(
                                                    "isApplyingForJob"
                                                )}
                                                value="checkedA"
                                            />
                                        }
                                        label="Are you applying for job?"
                                    />
                                </Grid>

                                {/* FIXME: optional applying for job */}
                                <Grid item xs={12} sm={6}>
                                    <Collapse
                                        // direction="up"
                                        in={this.state.isApplyingForJob}
                                        // mountOnEnter
                                        // unmountOnExit
                                        timeout={500}
                                    >
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="occupation">
                                                Job Type
                                            </InputLabel>
                                            <Select
                                                value={this.state.job}
                                                name="job"
                                                onChange={this.handleChange}
                                                inputProps={{
                                                    name: "job",
                                                    id: "job"
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="Web Developer">
                                                    Web Developer
                                                </MenuItem>
                                                <MenuItem value="App Developer">
                                                    App Developer
                                                </MenuItem>
                                                <MenuItem value="Marketing & Sales Executive">
                                                    Marketing & Sales Executive
                                                </MenuItem>
                                                <MenuItem value="Designer">
                                                    Designer
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Collapse>
                                </Grid>

                                <Grid item xs={12} sm={12} style={{marginRight: 30}}>
                                    <TextField
                                        // id="name"
                                        id="outlined-name"
                                        label="Message"
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        fullWidth
                                        multiline
                                        rows="4"
                                        variant="standard"
                                        
                                    />
                                </Grid>

                                <div className="sendButton">
                                    <Fab
                                        variant="extended"
                                        size="large"
                                        color="secondary"
                                        className={classes.button}
                                        onClick={this.handleSend}
                                    >
                                        Send
                                        <Send style={{ paddingLeft: 10 }} />
                                    </Fab>
                                    <Fab
                                        variant="extended"
                                        size="large"
                                        color="primary"
                                        className={classes.button}
                                        onClick={this.handleReset}
                                    >
                                        Reset
                                        <Refresh style={{ paddingLeft: 10 }} />
                                    </Fab>
                                </div>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>

                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    className={classes.snackbar}
                    open={this.state.snackbarOpen}
                    autoHideDuration={6000}
                    onClose={this.handleSnackbarClose}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={
                        <span id="message-id">
                            {this.state.ifSuccessful === true &&
                                "Your message has been successfully submitted"}
                            {this.state.ifSuccessful === false &&
                                "Please fill in all the fields"}
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleSnackbarClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired
}

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: 20,
        marginRight: 20
        // textAlign: "center"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    menu: {
        width: 200
    },

    card: {
        // marginTop: 10,
        // marginBottom: 30,
        marginLeft: 50,
        marginRight: 50,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 10,
            marginRight: 10
        }
    },
    button: {
        marginBottom: "30px",
        marginTop: "30px",
        marginRight: "30px",
        [theme.breakpoints.down("sm")]: {
            marginRight: "10px"
        }
    },
    formControl: {
        width: "100%"
    },
    snackbar: {
        margin: 20
    }
})

export default withStyles(styles)(SimpleMediaCard)
