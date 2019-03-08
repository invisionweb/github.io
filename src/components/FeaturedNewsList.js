import React, { Component } from "react"
import "../stylesheets/featured-news-list.css"
import { tabArray } from "../AppClass"
import { Divider } from "../../node_modules/@material-ui/core"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { tabChange } from "../redux/actions/TabBarActions"

let arrayLength
let counter
class FeaturedNewsList extends Component {
    featuredNewsClick = post => {
        this.props.history.push("/" + post.pkey + "/" + post.subject)

        let index = tabArray.findIndex(tab => tab.value === post.category)
        this.props.onTabChange(index)
    }

    render() {
        counter = 0
        arrayLength = this.props.tenPosts.length
        return (
            <div className="featured-news-list-root">
                {this.props.tenPosts.map(post => {
                    let category = tabArray.find(
                        postFromArray => postFromArray.value === post.category
                    )
                    ++counter
                    return (
                        <div
                            key={post.pkey}
                            className="featured-news-list-parent"
                            onClick={() => this.featuredNewsClick(post)}
                        >
                            <div className="featured-news-list-subject">
                                {post.subject}
                            </div>
                            <div className="featured-news-list-category">
                                {category.name}
                            </div>
                            {counter < arrayLength && <Divider />}
                        </div>
                    )
                })}
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
            // onReadMore: readMore,
            // passAllPostsData: passAllPostData
        },
        dispatch
    )
}

export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToProps
    )(FeaturedNewsList)
)
