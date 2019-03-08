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

import juliLogo from "../../images/juli posters/juli_logo.svg"
import JuLiGridList from "./JuLiGridList"

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
                            {/* <object type="image/svg+xml" data={juliLogo} width="50%" /> */}
                            <img src={juliLogo} style={{width: "50%"}} draggable="false"/>

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
                                    variant="display2"
                                    component="h2"
                                >
                                    JuLi
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="subheading"
                                    style={{ paddingTop: 10 }}
                                >
                                    The location finder app!
                                </Typography>
                                <Typography
                                    variant="subheading"
                                    style={{ paddingTop: 40 }}
                                >
                                    The most used phrase in any language,of telecom
                                    generation, is “Where are you?”, including Spanish,
                                    French, Mandarin, Arabic, Hindi etc. It's the fountain
                                    head of any conversation. It's a filler which has
                                    become a Siamese twin to "hello"....Pink Floyd too
                                    asked the same question. Remember?! Mom's care,
                                    friend’s affection, starts with this : ”Where are
                                    you?” JuLi is going to be the tool which will answer
                                    or ask the question,on your behalf. Unless you are
                                    under a red corner look out notice from Interpol, JuLi
                                    is the coolest innovative app, which will redefine the
                                    way we connect to our surrounding. **JuLi means
                                    Distance in Chinese!**
                                </Typography>
                            </div>
                        </CardContent>
                    </section>
                    <section className="anon-image">
                        <JuLiGridList />
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
