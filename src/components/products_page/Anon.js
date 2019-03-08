import React, { Component } from "react"
import PropTypes from "prop-types"
import AnonGridList from "./AnonGridList"
import {
    withStyles,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Typography
} from "../../../node_modules/@material-ui/core"
import "../../stylesheets/products.css"

import anonLogo from "../../images/anon posters/anon_logo.png"

const styles = theme => ({
    card: {
        marginTop: 30
    },
    media: {
        height: "auto",
        paddingTop: "50%" // 16:9
    },
    button: {
        margin: theme.spacing.unit,
        textAlign: "center"
    },
    anonButtonCenterClass: {
        width: "100%",
        textAlign: "center"
    }
})

class SimpleMediaCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleShowMore: true
        }
    }

    handleShowMoreClick = () => {
        this.setState({
            toggleShowMore: !this.state.toggleShowMore
        })
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                {/* <Card className={classes.card}> */}
                <div className="anon-parent">
                    <section className="anon-text">
                        <div style={{ width: "100%", textAlign: "center" }}>
                            {/* <object
                                type="image/png"
                                data={anonLogo}
                                width="50%"
                                draggable="false"
                            /> */}
                            <img src={anonLogo} style={{width: "50%"}} draggable="false"/>

                        </div>
                        <CardContent>
                            <div
                                style={{
                                    textAlign: "justify",
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h2"
                                >
                                    Anon Messenger
                                </Typography>

                                <Typography
                                    component="p"
                                    variant="subtitle1"
                                    style={{ paddingTop: 10 }}
                                >
                                    Ever came across a situation when you want to tell
                                    someone something but don't want your identity to be
                                    revealed? Anon Messenger is here to solve the problem!
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    style={{ paddingTop: 40 }}
                                >
                                    Text anyone anonymously from your contacts and receive
                                    replies from the other side! You can now manually set
                                    number of anon texts and a nickname to talk and reveal
                                    your identity once anon texts end. No worries now, say
                                    out loud!
                                </Typography>
                            </div>
                        </CardContent>
                    </section>
                    <section className="anon-image">
                        <AnonGridList />
                    </section>
                </div>
                {/* </Card> */}
            </div>
        )
    }
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
