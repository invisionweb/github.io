import React, { Component } from "react"
import { Router, Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom"
import "../stylesheets/header.css"
import AppbarTabs from "./AppbarTabs"
import ParticularNewsTemplate from "./ParticularNewsTemplate"
import TemplateCategoryComponent from "./TemplateCategoryComponent"
import Home from "./topics/Home"
import VideoContainer from "./video/VideoContainer"
import Login from "./admin/Login"
import Edit from "./admin/Edit"
import Products from "./Products"
import NewsBlog from "./NewsBlog"
import About from "./About"
import ContactUs from "./ContactUs"
import Inbox from "./Inbox"

import Training from '../components/Training'

// google analytics
import ReactGA from "react-ga"

class ButtonAppBar extends Component {
    componentDidMount() {
        ReactGA.initialize("UA-126809004-1")
        ReactGA.pageview(window.location.pathname)
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(window.location.pathname)
        ReactGA.pageview(window.location.pathname)
    }
    render() {
        return (
            <div>
                <div className="headerParent">
                    <div>
                        <AppbarTabs />
                    </div>
                </div>

                <div style={{ marginTop: 70 }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/training" component={Training} />
                        {/* <Route exact path="/news&blog" component={NewsBlog} /> */}
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={ContactUs} />
                        <Route exact path="/auto_id/pkey/name" component={Inbox} />
                        <Route path="/*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default ButtonAppBar
