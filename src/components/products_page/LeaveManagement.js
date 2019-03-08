import PropTypes from "prop-types"
import React, { Component } from "react"
import {
    Card,
    CardContent,
    Typography,
    withStyles
} from "../../../node_modules/@material-ui/core"
import leaveImage from "../../images/leave_management.png"
import "../../stylesheets/products.css"

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
                            {/* <CardMedia
                                className={classes.media}
                                image={anonLogo}
                                title="Contemplative Reptile"
                            /> */}
                            {/* <object type="image/svg+xml" data={juliLogo} width="50%" /> */}

                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h1"
                                    component="h2"
                                >
                                    Leave Management Application
                                </Typography>

                                <ul
                                    style={{
                                        paddingRight: 30,
                                        lineHeight: 1.5,
                                        color: "#757575",
                                        textAlign: "justify"
                                    }}
                                >
                                    <li>
                                        Realtime notification system
                                        <br />
                                    </li>
                                    <li>
                                        Download applications/files for offline use
                                        <br />
                                    </li>
                                    <li>
                                        User leave history in cloud
                                        <br />
                                    </li>
                                    <li>
                                        Employee creation
                                        <br />
                                    </li>
                                    <li>
                                        Report generation
                                        <br />
                                        and much more!
                                    </li>
                                </ul>
                            </CardContent>
                        </section>
                        <section className="anon-image">
                            {/* <object type="image/png" data={leaveImage} width="100%" /> */}
                            <img src={leaveImage} style={{width: "100%"}} draggable="false"/>

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
