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

import mappLogo from "../../images/mapp posters/mapp_logo.png"
import MappGridList from "./MappGridList"

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
                                data={mappLogo}
                                width="50%"
                                draggable="false"
                            /> */}
                            <img src={mappLogo} style={{width: "50%"}} draggable="false"/>

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
                                    component="h2"
                                >
                                    Mapp
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="subtitle1"
                                    style={{ paddingTop: 10 }}
                                >
                                    Location based social networking app.
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    style={{ paddingTop: 40 }}
                                >
                                    Mapp is a GPS based application based upon the Android
                                    operating system. By far, it is the fastest in the
                                    world of it’s kind. The main feature of Mapp focuses
                                    on delivering messages to people nearby. It also
                                    features image sharing, private messaging, Facebook
                                    connectivity & so on. Unlike the most popular social
                                    networks, Mapp stands unique as it comes with public
                                    connectivity. In these days of social isolation, apps
                                    like Mapp comes handy for being socially connected.
                                    The map shows the users’ active location when GPS is
                                    on. It comes with Family feature which if used, shows
                                    the family members’ locations in the map.
                                </Typography>
                            </div>
                        </CardContent>
                    </section>
                    <section className="anon-image">
                        <MappGridList />
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
