import FormControl from "@material-ui/core/FormControl"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import InputLabel from "@material-ui/core/InputLabel"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import classNames from "classnames"
import React, { Component } from "react"
import "../../stylesheets/admin.css"
import Button from "@material-ui/core/Button"
import { loginPHP } from "../../AppClass"
import $ from "jquery"
import { Redirect } from "react-router-dom"

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing.unit
    },

    textField: {
        flexBasis: 200
    },
    button: {
        margin: theme.spacing.unit
    }
})

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            showPassword: false,
            userData: [],
            redirect: false
        }
    }

    handleChange = name => event => {
        this.setState(
            {
                [name]: event.target.value
            },
            function() {
                // console.log(this.state)
            }
        )
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }))
    }

    submitLoginData = () => {
        // console.log("running", this.state)

        if (this.state.username && this.state.password) {
            $.ajax({
                type: "POST",
                url: loginPHP,
                // contentType: "application/json; charset=utf-8",
                // dataType: "json",
                data: {
                    username: this.state.username,
                    password: this.state.password
                },
                success: function(res) {
                    // TODO:
                    let result = JSON.parse(res)

                    this.setState(function() {
                        return {
                            userData: result
                        }
                    })

                    // console.log(this.state)

                    if (this.state.userData.log === "success") {
                        // console.log(this.state.userData)
                        // console.log("success")
                        
                        sessionStorage.setItem("userData", JSON.stringify(this.state.userData))
                        this.setState(function() {
                            return {
                                redirect: true
                            }
                        })
                    } else {
                        // console.log("failure")
                    }
                }.bind(this),
                error: function(error) {
                    console.log(error)
                }
            })
        }
    }

    render() {
        const { classes } = this.props

        if (this.state.redirect) {
            return <Redirect to={"/edit"} />
        }
        return (
            <div>
                <div className="login-parent">
                    <h1>
                        <u>ADMIN LOGIN</u>
                    </h1>
                    <div>
                        <TextField
                            id="with-placeholder"
                            label="Username"
                            placeholder="Enter username"
                            className={classes.textField}
                            value={this.state.username}
                            margin="normal"
                            onChange={this.handleChange("username")}
                        />
                        <FormControl
                            className={classNames(classes.margin, classes.textField)}
                        >
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                                id="adornment-password"
                                type={this.state.showPassword ? "text" : "password"}
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.submitLoginData}
                        >
                            Log in
                        </Button>
                        <p id="login-error" />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Login)
