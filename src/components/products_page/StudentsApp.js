import PropTypes from "prop-types"
import React, { Component } from "react"
import {
    Card,
    CardContent,
    Typography,
    withStyles
} from "../../../node_modules/@material-ui/core"
import studentApp from "../../images/student_app.png"
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
                            <div>
                                <Typography
                                    gutterBottom
                                    variant="display1"
                                    component="h2"
                                >
                                    Cotton University App
                                </Typography>

                                <Typography
                                    component="p"
                                    variant="subheading"
                                    style={{
                                        paddingTop: 10,
                                        textAlign: "justify",
                                        color: "#757575"
                                    }}
                                >
                                    Some of its main features are: <br />
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
                                        An organised platform for sharing information
                                        among the students. <br />
                                    </li>
                                    <li>
                                        Shared database of study materials i.e. question
                                        papers, notes, articles, research papers, Q&A and
                                        more. <br />
                                    </li>
                                    <li>
                                        Provision of an alumni forum open to all. <br />
                                    </li>
                                    <li>
                                        Departments will be able to target their students
                                        and send important notifications regarding
                                        seminars, exams, class cancelations etc. <br />
                                    </li>
                                    <li>
                                        Students will be able to submit their own study
                                        materials for others to read, helping the
                                        community as a whole.
                                        <br />
                                        and much more!
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </section>
                    <section className="anon-image">
                        {/* <object type="image/png" data={studentApp} width="100%" /> */}
                        <img src={studentApp} style={{width: "100%"}} draggable="false"/>

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
