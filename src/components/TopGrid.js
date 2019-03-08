import React, { Component } from "react"
import { withRouter } from "react-router"
import { CircularProgress } from "../../node_modules/@material-ui/core"
import "../stylesheets/top-grid.css"
import FeaturedNewsGrid from "./FeaturedNewsGrid"
import FeaturedNewsList from "./FeaturedNewsList"

// let counter = 0
// let eightPosts
class TopGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allpostsDataState: [],
            imageLoaded: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.posts !== nextProps.posts) {
            this.setState({
                allpostsDataState: nextProps.posts
            })
        }
    }

    render() {
        if (this.props.posts.length === 0) {
            return (
                <div style={{ width: "100%", textAlign: "center" }}>
                    <CircularProgress size={60} />
                </div>
            )
        } else {
            let eightPosts = this.state.allpostsDataState.slice(0, 8)
            let firstThreePosts = eightPosts.slice(0, 3)
            let lastFivePosts = eightPosts.slice(3, 8)
            let tenPosts = this.state.allpostsDataState.slice(8, 18)

            return (
                <div className="root-parent">
                    <div className="two-grids-wrapper">
                        <div className="left-grid">
                            <FeaturedNewsGrid
                                firstThreePosts={firstThreePosts}
                                lastFivePosts={lastFivePosts}
                            />
                        </div>

                        <div className="right-grid">
                            <FeaturedNewsList tenPosts={tenPosts} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(TopGrid)
