import React, { Component } from "react"
import {
    Typography,
    withStyles,
    Grid,
    Button,
    MuiThemeProvider,
    createMuiTheme
} from "@material-ui/core"
import swapHoriz from "@material-ui/icons/SwapHoriz"
import communication from "../images/communication.svg"
import service from "../images/service.svg"
import management from "../images/management.svg"
import media from "../images/media.svg"

class FieldofWork extends Component {
    render() {
        const { classes } = this.props

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    {/* anchor tag is for linking to different sections of the page */}

                    <div className={classes.FieldofWorkParent}>
                        <a id="fieldOfWork">
                            <Typography
                                variant="h3"
                                className={classes.fieldOfWorkHeadingBig}
                                color="textPrimary"
                                gutterBottom
                            >
                                We provide solutions for
                            </Typography>
                            <Typography
                                variant="h5"
                                className={classes.fieldOfWorkHeadingSmall}
                                color="textPrimary"
                            >
                                We provide solutions for
                            </Typography>
                        </a>
                        <Grid container className={classes.fieldOfWorkGrid} justify="flex-end">
                            <Grid
                                item
                                md={3}
                                xs={12}
                                className={classes.fieldOfWorkGridItems}
                            >
                                <img src={communication} style={{width: "100px"}} />
                                <Typography variant="h5" color="textSecondary">Communication</Typography>
                            </Grid>
                            <Grid
                                item
                                md={3}
                                xs={12}
                                className={classes.fieldOfWorkGridItems}
                            >
                                <img src={service} style={{width: "100px"}} />
                                <Typography variant="h5" color="textSecondary">Service</Typography>
                            </Grid>
                            <Grid
                                item
                                md={3}
                                xs={12}
                                className={classes.fieldOfWorkGridItems}
                            >
                                <img src={media} style={{width: "100px"}} />
                                <Typography variant="h5" color="textSecondary">Media</Typography>
                            </Grid>
                            <Grid
                                item
                                md={3}
                                xs={12}
                                className={classes.fieldOfWorkGridItems}
                            >
                                <img src={management} style={{width: "100px"}} />
                                <Typography variant="h5" color="textSecondary">Management</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

const theme = createMuiTheme({
    // TODO: apply custom colors
    palette: {
        primary: {
            main: "#00bfff"
        }
    }
})

const styles = theme => ({
    FieldofWorkParent: {
        textAlign: "center"
    },
    fieldOfWorkHeadingBig: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    fieldOfWorkHeadingSmall: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    fieldOfWorkGrid: {
        marginTop: 50
    },
    fieldOfWorkGridItems: {
        [theme.breakpoints.down("sm")]: {
            paddingBottom: 20
        }
    }
})

export default withStyles(styles)(FieldofWork)
