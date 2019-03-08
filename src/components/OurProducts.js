import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Typography, Button, withStyles, Divider } from "@material-ui/core"
import "../stylesheets/our-products.css"
import aakhorLogo from "../images/asom_kotha_posters/asom_kotha_logo.png"

class OurProducts extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className="our-products-parent">
                <div className="our-products-gradient">
                    <div className="our-products-text-button">
                        <div className="aakhor-heading-parent">
                            <img src={aakhorLogo} width="110" />
                            <Typography variant="h1" id="aakhor-heading-text">
                                Aakhor
                            </Typography>
                            <Typography variant="h5" id="aakhor-heading-desc-text">
                                Assamese Spell Checker, powered by Artificial Intelligence
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                (partly open for volunteers only, till it's final release)
                            </Typography>
                        </div>
                        <Divider />

                        <div className="aakhor-description-parent">
                            <Typography variant="subtitle1" color="textSecondary">
                                The backbone of আখৰ (Aakhor)'s Neural Network is typed
                                100% in Python and is based on Google's Artificial
                                Intelligence library Tensorflow. আখৰ (Aakhor)'s AI model
                                is built around almost 600,000 combinations of Assamese
                                words which house around 185,000 distinct Assamese words.
                                Our AI model can predict the best possible correction for
                                any wrong Assamese word and is smart enough to predict the
                                synonyms of the word too. On the other hand, we have used
                                Facebook's React JS framework to create the front end of
                                our application.
                            </Typography>
                        </div>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.ourProductsButton}
                            // component={Link}
                            // to="/products"
                            size="large"
                            onClick={() => {
                                window.open("https://invisionweb.in/aakhor/", "_blank")
                            }}
                        >
                            Use আখৰ | Aakhor
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    ourProductsButton: {
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 50
        // color: "red",
        // backgroundColor: "white"
    }
})

export default withStyles(styles)(OurProducts)
