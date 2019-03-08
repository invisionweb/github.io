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

import asomKothaLogo from "../../images/asom_kotha_posters/asom_kotha_logo.png"
import NewsAppGridList from "./NewsAppGridList"

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
                                data={asomKothaLogo}
                                width="50%"
                                draggable="false"
                            /> */}
                            <img src={asomKothaLogo} style={{width: "50%"}} draggable="false"/>

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
                                    Asom Kotha
                                </Typography>

                                <Typography
                                    component="p"
                                    variant="subtitle1"
                                    style={{ paddingTop: 10 }}
                                >
                                    An Assamese news portal dedicated to truth, justice
                                    and humanity. It will always fight for the fundamental
                                    birth rights of indegenous people of Assam as well as
                                    all tribes of North East part of India. Regular news,
                                    views and analysis will be available in this portal.
                                </Typography>
                            </div>
                        </CardContent>
                    </section>
                    <section className="anon-image">
                        <NewsAppGridList />
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
