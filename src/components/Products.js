import React, { Component } from "react"
import Anon from "../components/products_page/Anon"
import "../stylesheets/products.css"
import {
    withStyles,
    Paper,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Slide
} from "@material-ui/core"
import Juli from "./products_page/Juli"
import Mapp from "./products_page/Mapp"
import Zilika from "./products_page/Zilika"
import LeaveManagement from "./products_page/LeaveManagement"
import StudentsApp from "./products_page/StudentsApp"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import NewsApp from "./products_page/NewsApp"
import Ganasakti from "./products_page/Ganasakti"

class Products extends Component {
    componentWillMount() {
        // scroll to top
        window.scroll({ top: 0, left: 0, behavior: "instant" })
    }

    render() {
        const { classes } = this.props
        return (
            // <div
            //     /*className="products-grid-parent"*/ className={{
            //         productsParent: classes.productsParent,
            //         spacer: classes.spacer
            //     }}
            // >

            <div className={`${classes.productsParent} ${classes.spacer}`}>
                <Typography variant="display2" className={classes.mainHeadings}>
                    Android apps
                </Typography>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>
                            Anon Messenger
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Anon />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>JuLi</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Juli />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Mapp</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Mapp />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Zilika</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Zilika />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Typography variant="display2" className={classes.mainHeadings}>
                    Commercial applications
                </Typography>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>
                            Cotton University App
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <StudentsApp />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>
                            Leave Management System
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <LeaveManagement />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Typography variant="display2" className={classes.mainHeadings}>
                    E-paper
                </Typography>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Ganasakti</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Ganasakti />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Asom Kotha</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <NewsApp />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

const styles = theme => ({
    anonTopMargin: {
        marginTop: 200
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
    productsParent: {
        margin: 30,
        [theme.breakpoints.down("sm")]: {
            margin: 10
        }
    },
    spacer: {
        marginTop: 85
    },
    mainHeadings: {
        margin: "40px 0"
    }
})

export default withStyles(styles)(Products)
