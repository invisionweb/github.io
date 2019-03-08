import React, { Component } from "react"
import PropTypes from "prop-types"
import "../stylesheets/footer.css"
import invisionPNG from "../images/invision.png"

import { Divider, Grid, Paper, withStyles, Typography, Card } from "@material-ui/core"

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3
        // backgroundColor:
    }),
    centerContent: {
        textAlign: "center",
    },
    spacer: {
        marginBottom: 10
    }
})

class PaperSheet extends Component {
    render() {
        const { classes } = this.props

        return (
            <div>
                <Card className={classes.root} elevation={4}>
                    <Grid container spacing={16} className={classes.centerContent}>
                        <Grid item xs={12} sm={4}>
                            <div className="invisionLogoFooterParent">
                                <img
                                    src={invisionPNG}
                                    className="invisionLogoFooter"
                                    draggable="false"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} style={{margin: "auto"}}>
                            <Typography variant="h1" className="footerText">
                                Address
                            </Typography>
                            <Typography className="footerText">
                                Noonmati, Guwahati-20. <br />
                                Assam, India.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} style={{margin: "auto"}}>
                            <Typography variant="h1" className="footerText">
                                Contacts
                            </Typography>
                            <Typography className="footerText">
                                Phone: <br />
                                +91 9678517337 <br />
                                +91 7086733737 <br />
                                +91 9435343202 <br />
                            </Typography>
                            <Typography className="footerText">
                                E-mail: <br />
                                invisionwebtech@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider style={{ marginTop: 30, marginBottom: 30 }} />

                    <div className={classes.spacer}>
                        <Typography align="center">
                            &#169; Copyright {new Date().getFullYear()} Invision - All
                            Rights Reserved
                        </Typography>
                    </div>
                </Card>
            </div>
        )
    }
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
