import { CircularProgress, Grid } from "@material-ui/core"
import $ from "jquery"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { bindActionCreators } from "redux"
import { particularNewsPHP, tabArray, youMightAlsoLikePHP } from "../AppClass"
import { tabChange } from "../redux/actions/TabBarActions"
import "../stylesheets/particular-news.css"
import MainNews from "./MainNews"
import RecentStories from "./RecentStories"
import YouMightAlsoLike from "./YouMightAlsoLike"
import Comments from "./Comments"

class ParticularNewsTemplate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allPosts: [],
            firstPost: [],
            recentStories: [],
            youMightAlsoLike: [],
            imageLoaded: false,
            redirect: false,
            shouldReAjax: true,
            loading: false
        }
    }

    // componentWillMount() {
    //     let category = tabArray.find(
    //         category => category.value === this.props.match.params.category
    //     )

    //     if (category === undefined) {
    //         this.setState({
    //             redirect: true
    //         })
    //     }
    // }

    componentDidMount() {
        $.ajax({
            type: "POST",
            url: particularNewsPHP,
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            data: {
                pkey: this.props.match.params.pkey
            },
            success: function(res) {
                
                if (res === "fail") {
                    this.setState(function() {
                        return { redirect: true }
                    })

                    return;
                }

                this.setState(function(state, props) {
                    return {
                        allPosts: JSON.parse(res),
                        firstPost: JSON.parse(res)[0][0],
                        recentStories: JSON.parse(res)[1]
                    }
                })
                // console.log(this.state.firstPost)
                // console.log(this.state.recentStories)
            }.bind(this),
            error: function(error) {
                console.log(error)
            }.bind(this)
        })

        // scroll to top
        window.scroll({ top: 0, left: 0, behavior: "instant" })

        $(window).on("scroll", this.scrollToLoad)
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        // // this method runs when the user clicks one of the recent stories
        // // change the firstPost and recentStories state to update the window

        // // remove the post that will be seen from the array
        // // and add the post that is showing to the array
        // let filterPosts = this.state.recentStories.filter(
        //     post => post.pkey !== nextProps.currentPost.pkey
        // )
        // filterPosts.unshift(this.state.firstPost)

        // //change the states accordingly to update the UI
        // // expected behavior: not to repeat the news the user is
        // // reading by showing it among the recent stories
        // this.setState(function(state, props) {
        //     return {
        //         firstPost: nextProps.currentPost,
        //         recentStories: filterPosts
        //     }
        // })

        // console.log(nextProps)

        // console.log(nextProps)

        $.ajax({
            type: "POST",
            url: particularNewsPHP,
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            data: {
                pkey: nextProps.match.params.pkey
            },
            success: function(res) {
                this.setState(function(state, props) {
                    return {
                        allPosts: JSON.parse(res),
                        firstPost: JSON.parse(res)[0][0],
                        recentStories: JSON.parse(res)[1]
                    }
                })
                // console.log(this.state.firstPost)
                // console.log(this.state.recentStories)
            }.bind(this),
            error: function(error) {
                console.log(error)
            }.bind(this)
        })

        window.scroll({ top: 0, left: 0, behavior: "instant" })
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps.currentPost)
        // if (prevProps.currentPost.length !== undefined) {
        //     console.log("if running")
        //     let tabIndex = tabArray.findIndex(
        //         category => this.state.firstPost.category === category.value
        //     )
        //     this.props.onTabChange(tabIndex)
        // }
        if (prevProps.history.action === "POP") {
            // console.log(prevProps)
            let tabIndex = tabArray.findIndex(
                category => this.state.firstPost.category === category.value
            )
            this.props.onTabChange(tabIndex)
        }
    }

    componentWillUnmount() {
        $(window).off("scroll", this.scrollToLoad)
    }

    scrollToLoad = function() {
        // console.log(Math.round(((scrollHeight - scrollPosition) / scrollHeight) * 100) / 100)

        var scrollHeight = $(document).height()
        var scrollPosition = $(window).height() + $(window).scrollTop()

        // console.log(Math.floor(scrollHeight / scrollPosition))
        if (
            // Math.round(((scrollHeight - scrollPosition) / scrollHeight) * 100) / 100 ===
            //     0.3 &&
            Math.floor(scrollHeight / scrollPosition) === 1 &&
            this.state.loading === false
        ) {
            // console.log("scrollToLoad if running")
            // when scroll to bottom of the page

            if (this.state.shouldReAjax === true) {
                // console.log("will query")
                // this.setState(function(state, props) {
                //     return {
                //         loading: true
                //     }
                // })
                // console.log("if running")

                // FOR youMightAlsoLike

                this.setState(function(state) {
                    return {
                        loading: true
                    }
                })

                $.ajax({
                    type: "POST",
                    url: youMightAlsoLikePHP,
                    success: function(res) {
                        let parsedResult = JSON.parse(res)

                        this.setState(function(state, props) {
                            return {
                                youMightAlsoLike: parsedResult,
                                shouldReAjax: false,
                                // loading: false
                                imageLoaded: true
                            }
                        })
                    }.bind(this),
                    error: function(error) {
                        console.log(error)
                    }.bind(this)
                })
            } else {
                // console.log("else running")
            }
        }
    }.bind(this)

    render() {
        // console.log(this.state.firstPost[0].category)

        // show the post upload timing
        // const timestamp = this.state.firstPost.timestamp
        // const date = new Date(timestamp * 1000)

        if (this.state.redirect === true) {
            return <Redirect to={"/"} />
        }

        if (this.state.allPosts.length === 0) {
            return (
                <div style={{ width: "100%", textAlign: "center" }}>
                    <CircularProgress size={60} />
                </div>
            )
        }

        return (
            <div>
                {this.state.firstPost !== undefined && (
                    <div>
                        <Grid container spacing={0} className="content-grid">
                            <Grid item md={8} sm={12} xs={12}>
                                <MainNews data={this.state.firstPost} />

                                {/* COMMENT SECTION */}

                                <Comments pkey={this.state.firstPost.pkey} />
                            </Grid>
                            <Grid
                                item
                                md={4}
                                sm={12}
                                xs={12}
                                className="recent-stories-parent-grid"
                            >
                                {/* RECENT STORIES SECTION*/}

                                <div className="sticky">
                                    <h2 className="recent-header">
                                        RECENT /{" "}
                                        {
                                            tabArray.find(
                                                category =>
                                                    this.state.recentStories[0]
                                                        .category === category.value
                                            ).name
                                        }
                                    </h2>
                                    <RecentStories posts={this.state.recentStories} />
                                </div>
                            </Grid>
                        </Grid>

                        {/* YOU MIGHT ALSO LIKE SECTION */}

                        <Grid container spacing={0} className="you-might-also-like-grid">
                            <Grid item sm={12} xs={12}>
                                {this.state.youMightAlsoLike !== undefined && (
                                    <YouMightAlsoLike
                                        posts={this.state.youMightAlsoLike}
                                    />
                                )}

                                {this.state.loading === false && (
                                    <div style={{ textAlign: "center", margin: 20 }}>
                                        <CircularProgress size={60} />
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentPost: state.readMore,
        allPosts: state.allPostsData
    }
}

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onTabChange: tabChange
            // onReadMore: readMore
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(ParticularNewsTemplate)
