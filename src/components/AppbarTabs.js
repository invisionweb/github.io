import React, { Component } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import "../stylesheets/header.css"
import Drawer from "@material-ui/core/Drawer"
import { drawerData } from "../AppClass"
import {
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Hidden,
    withStyles,
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core"
import Extension from "@material-ui/icons/Extension"
import ChromeReaderMode from "@material-ui/icons/ChromeReaderMode"
import Info from "@material-ui/icons/Info"
import Call from "@material-ui/icons/Call"
import Home from "@material-ui/icons/Home"
import logo from "../images/invision.png"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { withRouter } from "react-router-dom"
// google analytics
import ReactGA from "react-ga"

class AppbarTabs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shouldShow: null,
            left: false
        }

        this.lastScroll = null

        // this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        //window.addEventListener("scroll", this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        //window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = evt => {
        const lastScroll = window.scrollY

        if (lastScroll === this.lastScroll) {
            return
        }

        const shouldShow = this.lastScroll !== null ? lastScroll < this.lastScroll : null

        if (shouldShow !== this.state.shouldShow) {
            this.setState((prevState, props) => ({
                ...prevState,
                shouldShow
            }))
        }

        this.lastScroll = lastScroll
    }

    toggleDrawer = open => () => {
        this.setState({
            left: open
        })
    }

    onLogoClick = () => {
        this.props.history.push("/")
    }

    render() {
        const { classes } = this.props

        // TODO: add icons on the left of drawer text

        const fullList = (
            <div className={classes.list} style={{ width: 300 }}>
                {drawerData.map((tab, index) => {
                    return (
                        <div key={index}>
                            <List
                                style={{ flex: 1, textDecoration: "none" }}
                                component={HashLink}
                                to={tab.link}
                            >
                                <ListItem button>
                                    {tab.name === "Home" && (
                                        <ListItemIcon>
                                            <Home />
                                        </ListItemIcon>
                                    )}
                                    {tab.name === "Products" && (
                                        <ListItemIcon>
                                            <Extension />
                                        </ListItemIcon>
                                    )}
                                    {tab.name === "Training" && (
                                        <ListItemIcon>
                                            <Extension />
                                        </ListItemIcon>
                                    )}
                                    {tab.name === "News & Blog" && (
                                        <ListItemIcon>
                                            <ChromeReaderMode />
                                        </ListItemIcon>
                                    )}
                                    {tab.name === "About" && (
                                        <ListItemIcon>
                                            <Info />
                                        </ListItemIcon>
                                    )}
                                    {tab.name === "Contact Us" && (
                                        <ListItemIcon>
                                            <Call />
                                        </ListItemIcon>
                                    )}

                                    <ListItemText>{tab.name}</ListItemText>
                                </ListItem>
                            </List>
                            {/* <Divider /> */}
                        </div>
                    )
                })}
            </div>
        )

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar
                        position="fixed"
                        color="inherit"
                        elevation={1}
                        className={`${classes.root} ${
                            this.state.shouldShow === null
                                ? ""
                                : this.state.shouldShow
                                    ? classes.show
                                    : classes.hide
                        }`}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Menu"
                                onClick={this.toggleDrawer(true)}
                                className={classes.hamburger}
                            >
                                <MenuIcon />
                            </IconButton>

                            <object
                                data={logo}
                                type="image/png"
                                style={{ width: 55, padding: 5 }}
                                className={classes.navbarLogoHide}
                                draggable="false"
                                onClick={this.onLogoClick}
                            />

                            <div className={classes.headerLeft}>
                                <Typography
                                    variant="h5"
                                    color="textPrimary"
                                    className={classes.headerSmUp}
                                    component={Link}
                                    to="/"
                                >
                                    Invision
                                </Typography>

                                <Typography
                                    variant="h5"
                                    color="textPrimary"
                                    className={classes.headerSmDown}
                                >
                                    Invision
                                </Typography>
                            </div>

                            <div className={classes.headerRight}>
                                <Button color="primary" component={Link} to="/products">
                                    Products
                                </Button>

                                <Button color="primary" component={Link} to="/training">
                                    Training
                                </Button>

                                <Button color="primary" component={Link} to="/about">
                                    About
                                </Button>

                                <Button
                                    color="primary"
                                    style={{
                                        textDecoration: "none"
                                    }}
                                    component={HashLink}
                                    to="/#contact"
                                    smooth
                                >
                                    Contact us
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>

                    <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer(false)}
                            onKeyDown={this.toggleDrawer(false)}
                        >
                            {fullList}
                        </div>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}

const theme = createMuiTheme({
    // shadows: [{
    //     myAppbarShadow: "10px 10px #000"
    // }]
})

const styles = theme => ({
    list: {
        width: 250
    },
    show: {
        transform: "translateY(0)",
        transition: "transform .5s"
    },
    hide: {
        transform: "translateY(-110%)",
        transition: "transform .5s"
    },
    fullList: {
        width: "auto"
    },
    hamburger: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    headerLeft: {
        flex: 1,
        paddingLeft: 15
    },
    headerRight: {
        float: "right",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    headerSmUp: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        textDecoration: "none"
    },
    headerSmDown: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    navbarLogoHide: {
        "&:hover": {
            cursor: "pointer"
        },
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
})

export default withRouter(withStyles(styles)(AppbarTabs))
