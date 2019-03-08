import React from "react"
import PropTypes from "prop-types"
import { withStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import SwipeableViews from "react-swipeable-views"
import indranil from "../images/profile/indranil2.jpg"
import kabyanil from "../images/profile/kabyanil.jpg"
import sachi from "../images/profile/sachi.jpg"
import nayan from "../images/profile/nayan.jpg"
import arnab from "../images/profile/arnab3.jpg"
import amal from "../images/profile/amal_dutta.jpg"
import "../stylesheets/stepper-view.css"
import shapes from "../images/shapes.svg"

const tutorialSteps = [
    // {
    //     label: "How to be super happy :)",
    //     name: "Invision Team",
    //     age: "",
    //     designation: "",
    //     specialization:
    //         "Expertises in Android, iOS app making, php, HTML, Big Data, Java FX, Windows app making, Unity game development, React etc.",
    //     imgPath: shapes
    // },
    {
        label: "How to be happy :)",
        name: "Indranil Talukdar",
        age: "24 / ",
        designation: "Lead Developer",
        specialization:
            "Indranil Started learning computer when he was in class 7. He completed his schooling from Assam Jatiya Bidyalay, Guwahati and started his degree in History at Cotton University. During study, he went to IIT guwahati to work as a software developer in a startup. After a year he decided to form his own company, Invision. He expertises in Android, iOS app making, php, HTML, Big Data, Java FX, Windows app making, Unity game development, React etc. Indranil is presently working on Artificial Intelligence.",
        imgPath: indranil
    },
    {
        label: "1. Work with something that you like, like…",
        name: "Kabyanil Talukdar",
        age: "18 / ",
        designation: "Designer/Developer",
        specialization:
            "During his school life, Kabyanil used to play around different programming languages including C, C++, HTML, CSS etc. After completing his schooling from Assam Jatiya Bidyalay, he joined Cotton University in the department of computer science & IT and is currently pursuing his degree in computer science. Kabyanil expertises in UI/UX design and codes in React, React native and Flutter. Kabyanil was the world Rubik's cube champion, 2015 in 3x3 blindfolded category.",
        imgPath: kabyanil
    },
    {
        label: "2. Keep your friends close to you and hangout with them",
        name: "Nayanjyoti Sharma",
        age: "24 / ",
        designation: "Developer",
        specialization:
            "Nayan is a computer hobbyist. He did his schooling from Assam Jatiya Bidyalay and later went on to study in GIMT, Guwahati. He expertises in Android, iOS app development, HTML, php, mySQL, JavaScript, React, Unity game development and so on.",
        imgPath: nayan
    },
    {
        label: "3. Travel everytime that you have a chance",
        name: "Sachidananda Borah",
        age: "22 / ",
        designation: "Marketing Executive",
        specialization:
            "Sachi completed his schooling from Pichala National Academy, Lakhimpur and studied political science honours in Cotton University. During this period, he was associated with organizing various events, including Cotton Fest 2017. Sachi possesses excellent organization, negotiation, sales and marketing skills.",
        imgPath: sachi
    },
    {
        label: "4. And contribute to Material-UI :D",
        name: "Arnab Sharma",
        age: "23 / ",
        designation: "Developer",
        specialization:
            "Arnab completed computer science engineering from Jorhat Engineering College. During this period, he studied artificial intelligence and is presently working on various projects under Invision Brain.",
        imgPath: arnab
    },
    {
        label: "4. Travel everytime that you have a chance",
        name: "Amal Dutta",
        age: "38 / ",
        designation: "Lawyer / Legal Adviser",
        specialization: "Member, Child Welfare Committee, Kamrup (M), Assam. Studied Post Graduate Diploma in Human Rights at Human Rights Your Rights.",
        imgPath: amal
    }
]

const styles = theme => ({
    root: {
        // maxWidth: 400,
        // flexGrow: 1,
    },
    header: {
        display: "flex",
        alignItems: "center",
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        backgroundColor: theme.palette.background.default
    },
    img: {
        // height: 255,
        // maxWidth: 400,
        overflow: "hidden",
        width: "100%"
    }
})

class SwipeableTextMobileStepper extends React.Component {
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
            <div className="stepper-view-parent">
                <div style={{ textAlign: "center", width: "100%", marginBottom: 110 }}>
                    <Typography variant="h2" color="textPrimary">
                        Invision Team
                    </Typography>
                </div>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={this.state.activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map(step => (
                        <div className="stepper-view-content-parent" key={step.name}>
                            <div className="stepper-view-image-parent">
                                <img
                                    key={step.label}
                                    className="stepper-view-image"
                                    src={step.imgPath}
                                    alt={step.label}
                                    draggable="false"
                                />
                            </div>
                            <div className="stepper-view-text-parent">
                                <div>
                                    <Typography variant="h4" color="textSecondary">
                                        {step.name}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {step.age} {step.designation}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {step.specialization}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </SwipeableViews>

                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
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

// const theme = createMuiTheme({
//     overrides: {
//         MuiMobileStepper: {
//             dotActive: {
//                 backgroundColor: "#ff0000"
//             }
//         }
//     }
// })

SwipeableTextMobileStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper)
