import React, { Component } from "react"
import { Typography, Grid, Divider, Chip, withStyles } from "@material-ui/core"
import poster from "../images/poster.png"
import "../stylesheets/specialities.css"
import industry_standards from "../images/industry_standards.png"
import material from "../images/material.png"
import react from "../images/react.png"
import ad_free from "../images/ad_free.png"

class Specialities extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <div className="specialities-grid-parent">
                    <div className="specialities-grid-1">
                        <Typography variant="display1" color="textSecondary">
                            We follow industry standards
                        </Typography>
                        <object
                            type="image/png"
                            data={industry_standards}
                            className="specialities-grid-image"
                            draggable="false"
                        />
                    </div>
                    <div className="specialities-grid-2">
                        <Typography variant="display1" color="textSecondary">
                            We implement Material Design
                        </Typography>
                        <object
                            type="image/png"
                            data={material}
                            className="specialities-grid-image"
                            draggable="false"
                        />
                    </div>
                    <div className="specialities-grid-3">
                        <Typography variant="display1" color="textSecondary">
                            We deliver ad-free products
                        </Typography>
                        <object
                            type="image/png"
                            data={ad_free}
                            className="specialities-grid-image"
                            draggable="false"
                        />
                    </div>
                    <div className="specialities-grid-4">
                        <Typography variant="display1" color="textSecondary">
                            We code with React
                        </Typography>
                        <object
                            type="image/png"
                            data={react}
                            className="specialities-grid-image"
                            draggable="false"
                        />
                    </div>
                </div>

                <div className="invision-brains-parent">
                    <div className="invision-brains-gradient">
                        <section className="invision-brains-heading-parent">
                            <Typography
                                variant="display4"
                                className={classes.invisionBrainsUp}
                            >
                                Invision <span className={classes.brains}>Brain</span>
                            </Typography>
                            <Typography
                                variant="display2"
                                className={classes.invisionBrainsDown}
                            >
                                Invision <span className={classes.brains}>Brain</span>
                            </Typography>
                        </section>
                        <section className="invision-brains-heading-parent">
                            <Typography
                                variant="display1"
                                className={classes.invisionBrainsUp}
                            >
                                Our venture into the world of Artificial Intelligence
                            </Typography>
                            <Typography
                                variant="headline"
                                className={classes.invisionBrainsDown}
                                color="textSecondary"
                            >
                                Our venture into the world of Artificial Intelligence
                            </Typography>
                        </section>
                        {/* <Divider /> */}
                        <section className="invision-brains-heading-parent">
                            {/* <Typography variant="display1">Research areas</Typography> */}

                            <Chip
                                label="Natural language processing"
                                className={classes.chip}
                                color="secondary"
                            />

                            <Chip
                                label="Image classification"
                                className={classes.chip}
                                color="secondary"
                            />

                            <Chip
                                label="Generative model"
                                className={classes.chip}
                                color="secondary"
                            />

                            <Chip
                                label="Art generation"
                                className={classes.chip}
                                color="secondary"
                            />
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit
    },
    invisionBrainsUp: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    invisionBrainsDown: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    brains: {
        color: "#AD1457"
    }
})

export default withStyles(styles)(Specialities)
