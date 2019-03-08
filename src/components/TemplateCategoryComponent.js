import $ from "jquery"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { bindActionCreators } from "redux"
import { tabArray, topicPageTopGridPHP } from "../AppClass"
import { tabChange } from "../redux/actions/TabBarActions"
import AllNewsOneCategory from "./AllNewsOneCategory"
import FeaturedNewsGrid from "./FeaturedNewsGrid"
import "../stylesheets/all-news-one-category.css"

let category
class TemplateCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            category: "",
            topicWisePostsState: []
        }
    }

    componentWillMount() {
        category = tabArray.find(
            category => category.value === this.props.match.params.category
        )

        if (category === undefined) {
            this.setState({
                redirect: true
            })
        }
    }

    componentDidMount() {
        //fetch the posts to pass down to child components

        // fetch(topGridPHP)
        //     .then(response => response.json())
        //     .then(responseJson => {
        //         this.setState({
        //             allpostsState: responseJson
        //         });
        //     })
        //     .catch(error => {
        //         console.log(`error ${error}`);
        //     });

        // for redirecting if the URL is wrong
        category = tabArray.find(
            category => category.value === this.props.match.params.category
        )

        if (category === undefined) {
            this.setState({
                redirect: true
            })
        } else {
            // this.setState({
            //     category: category.value
            // })

            // this.setState(function(state, props) {
            //     return {
            //         category: category.value
            //     }
            // })

            //for updating the active tab
            let activeTabIndex = tabArray.findIndex(
                category => category.value === this.props.match.params.category
            )

            this.props.onTabChange(activeTabIndex)

            //query the server to send posts matching the category
            $.ajax({
                type: "POST",
                url: topicPageTopGridPHP,
                // contentType: "application/json; charset=utf-8",
                // dataType: "json",
                data: {
                    category: category.value
                },
                success: function(res) {
                    this.setState(function(state, props) {
                        return {
                            topicWisePostsState: JSON.parse(res)
                        }
                    })
                }.bind(this),
                error: function(error) {
                    console.log(error)
                }
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log("component will receive props", nextProps.match.params)
        // console.log("current open category", this.props.match.params.category)
        // this.setState(
        //     {
        //         category: nextProps.match.params.category
        //     },
        //     function() {
        //         // console.log("updated category", this.state.category)
        //     }
        // )

        if (nextProps.match.params.category !== this.props.match.params.category) {
            // update the category variable
            category = nextProps.match.params.category
            $.ajax({
                type: "POST",
                url: topicPageTopGridPHP,
                // contentType: "application/json; charset=utf-8",
                // dataType: "json",
                data: {
                    category: category
                },
                success: function(res) {
                    this.setState(function(state, props) {
                        return {
                            topicWisePostsState: JSON.parse(res)
                        }
                    })
                }.bind(this),
                error: function(error) {
                    console.log(error)
                }
            })
        }
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to={"/"} />
        }

        // console.log("rendering");
        let category = tabArray.find(
            category => this.props.match.params.category === category.value
        ).name
        let firstThreePosts = this.state.topicWisePostsState.slice(0, 3)
        let lastFivePosts = this.state.topicWisePostsState.slice(3, 8)

        // let filteredPostsByCategory = this.state.allpostsState.filter(
        //     post => post.category === this.state.category
        // )

        return (
            <div>
                <div className="template-category-padding">
                    <FeaturedNewsGrid
                        firstThreePosts={firstThreePosts}
                        lastFivePosts={lastFivePosts}
                    />
                    <h1>ALL NEWS FROM {category} /</h1>
                    <AllNewsOneCategory category={this.props.match.params.category} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {}
}

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onTabChange: tabChange
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(TemplateCategoryComponent)
