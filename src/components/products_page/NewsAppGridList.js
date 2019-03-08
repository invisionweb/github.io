import React, { Component } from "react"
import PropTypes from "prop-types"
import { GridList, GridListTile, withStyles, Button, Typography } from "@material-ui/core"
import MobileStepper from "@material-ui/core/MobileStepper"
import SwipeableViews from "react-swipeable-views"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"

import pos1 from "../../images/asom_kotha_posters/1.png"
import pos2 from "../../images/asom_kotha_posters/2.png"
import pos3 from "../../images/asom_kotha_posters/3.png"
import pos4 from "../../images/asom_kotha_posters/4.png"
import pos5 from "../../images/asom_kotha_posters/5.png"

import "../../stylesheets/products.css"

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        marginTop: 30
    },
    gridList: {
        // width: 1000,
        width: "100%",
        // height: 400
    },
    subheader: {
        width: "100%"
    },
    gridImage: {
        width: "100%"
    }
})

const tutorialSteps = [
    {
        key: "image1",
        img: pos1,
        author: "author",
        cols: 2
    },
    {
        key: "image2",
        img: pos2,
        author: "author",
        cols: 2
    },
    {
        key: "image3",
        img: pos3,
        author: "author",
        cols: 2
    },
    {
        key: "image4",
        img: pos4,
        author: "author",
        cols: 2
    },
    {
        key: "image5",
        img: pos5,
        author: "author",
        cols: 2
    }
]

class ImageGridList extends Component {
    state = {
        activeStep: 0
    }

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1
        }))
    }

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1
        }))
    }

    handleStepChange = activeStep => {
        this.setState({ activeStep })
    }

    render() {
        const { classes, theme } = this.props

        const { activeStep } = this.state

        const maxSteps = tutorialSteps.length

        return (
            <div className={classes.root}>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={this.state.activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map(step => (
                        <div key={step.key}>
                            <div className="products-stepper-img-parent">
                                <img
                                    className="products-stepper-img-newsapp-only"
                                    src={step.img}
                                    alt={step.key}
                                    draggable="false"
                                />
                            </div>
                        </div>
                    ))}
                </SwipeableViews>

                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className="products-mobile-stepper"
                    nextButton={
                        <Button
                            size="small"
                            onClick={this.handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={this.handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
            </div>
        )
    }
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ImageGridList)
