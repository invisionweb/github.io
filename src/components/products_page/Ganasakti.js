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

import asomKothaLogo from "../../images/ganasakti.png"
import NewsAppGridList from "./NewsAppGridList"
import GanasaktGridList from "./GanasaktGridList";

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
                            <img
                                src={asomKothaLogo}
                                style={{ width: "50%" }}
                                draggable="false"
                            />
                        </div>

                        <CardContent>
                            <div
                                style={{
                                    textAlign: "justify",
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}
                            >
                                {/* <Typography
                                    gutterBottom
                                    variant="h2"
                                    component="h2"
                                >
                                    গণশক্তি(Ganasakti)
                                </Typography> */}

                                <Typography
                                    component="p"
                                    variant="subtitle1"
                                    style={{ paddingTop: 10 }}
                                >
                                    অসমীয়া ভাষাৰ গণশক্তি কাকতখন পঞ্জীকৰণ হয় ১৯৬৬ চনত ।
                                    ১৯৭৭ চনৰ পৰা কাকতখন নিয়মীয়া ভাবে সাপ্তাহিক কাকত হিচাপে
                                    প্ৰকাশ কৰা হয় । মাৰ্ক্সবাদী আদৰ্শ প্ৰচাৰৰ উপৰিও
                                    সমকালীন ৰাজনৈতিক , অৰ্থনৈতিক আৰু সামাজিক বিষয়বোৰ
                                    মাৰ্ক্সবাদী দৃষ্টিকোণেৰে বিচাৰ কৰাত কাকতখনে আগৰণুৱাৰ
                                    ভূমিকা পালন কৰি আহিছে । ইতিহাস, সাহিত্য, সংস্কৃতি
                                    চৰ্চাৰ ক্ষেত্ৰতো গণশক্তিয়ে অসমৰ বৌদ্ধিক জগতলৈ মূল্যবান
                                    বৰঙণি আগবঢ়াই আহিছে । গণমুখী আন্দোলন আৰু গনসংগ্ৰামৰ
                                    ক্ষেত্ৰত গণশক্তিৰ ভূমিকা হৈছে প্ৰচাৰক আৰু সংগঠকৰ ।
                                </Typography>
                            </div>
                        </CardContent>
                    </section>
                    <section className="anon-image">
                        <GanasaktGridList />
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
