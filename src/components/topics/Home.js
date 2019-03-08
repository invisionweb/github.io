import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
    Typography,
    createMuiTheme,
    withStyles,
    Button,
    IconButton,
    Divider,
    MuiThemeProvider,
    Grid,
    Fab
} from "../../../node_modules/@material-ui/core"
import logo from "../../images/invision.png"
import { tabChange } from "../../redux/actions/TabBarActions"
import "../../stylesheets/homePage.css"
import Arrow from "@material-ui/icons/KeyboardArrowDown"
import FieldofWork from "../FieldofWork"
import Clients from "../Clients"
import Specialities from "../Specialities"
import OurProducts from "../OurProducts"
import Team from "../Team"
import WriteToUs from "../WriteToUs"
import Subscribe from "../Subscribe"
// import {Link} from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <div className="home-parent">
                        <div className="background-pic">
                            <object
                                data={logo}
                                className="invision-logo"
                                type="image/png"
                                // onLoad={this.onImageLoad}
                            />
                            <Typography
                                variant="h2"
                                color="textPrimary"
                                className={classes.titleBig}
                                gutterBottom
                            >
                                Invision
                            </Typography>
                            <Typography
                                variant="h2"
                                color="textPrimary"
                                className={classes.titleSmall}
                                gutterBottom
                            >
                                Invision
                            </Typography>
                            <Typography
                                variant="h4"
                                color="textSecondary"
                                className={classes.subheadingBig}
                            >
                                We code your ideas. From scratch.
                            </Typography>
                            <Typography
                                variant="h6"
                                color="textSecondary"
                                className={classes.subheadingSmall}
                            >
                                We code your ideas. From scratch.
                            </Typography>
                        </div>

                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className={classes.description}
                        >
                            Invision Webtech Private Limited is a technology company based
                            in Assam, India that specializes in web and native app
                            development, founded in 2016. Invision promises to bring ideas
                            to reality and profoundly believe in their motto to make
                            everyone’s lives easier with technology.
                        </Typography>

                        <Link smooth to="#anchor">
                            <Fab
                                variant="extended"
                                color="primary"
                                aria-label="Edit"
                                className={classes.button}
                                style={{ marginTop: 20 }}
                            >
                                <Arrow color="secondary" />
                            </Fab>
                        </Link>
                    </div>

                    <a id="anchor" className={classes.anchor} />

                    <div className={classes.spacer}>
                        <FieldofWork />
                    </div>

                    <div className={classes.spacer}>
                        <Specialities />
                    </div>

                    <div className={classes.spacer}>
                        <Clients />
                    </div>

                    <div className={classes.spacer}>
                        <OurProducts />
                    </div>

                    <div className={classes.spacer}>
                        <Team />
                    </div>

                    <a id="contact" className={classes.contactAnchor} />

                    <div className={classes.spacer}>
                        <WriteToUs />
                    </div>

                    {/* <div className={classes.spacer}>
                        <Subscribe />
                    </div> */}
                </div>
            </MuiThemeProvider>
        )
    }
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff"
        }
    },
    overrides: {
        MuiMobileStepper: {
            dotActive: {
                backgroundColor: "#ff0000"
            }
        }
    },
    typography: {
        useNextVariants: true
    }
})

const styles = theme => ({
    titleBig: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    titleSmall: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    subheadingBig: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    subheadingSmall: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    description: {
        paddingTop: 30,
        marginLeft: 150,
        marginRight: 150,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 35,
            marginRight: 35
        }
    },
    // fieldOfWork: {
    //     marginBottom: 200
    // },
    // clients: {
    //     marginBottom: 200
    // },
    spacer: {
        marginBottom: 100
    },
    anchor: {
        display: "block",
        position: "relative",
        top: "270px",
        visibility: "hidden"
    },
    contactAnchor: {
        display: "block",
        position: "relative",
        top: "305px",
        visibility: "hidden"
    }
})

export default withStyles(styles)(Home)
