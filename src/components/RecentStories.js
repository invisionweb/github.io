import LinearProgress from "@material-ui/core/LinearProgress"
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import { readMore } from "../redux/actions/newsSeeMoreActions"
import "../stylesheets/particular-news.css"

class RecentStories extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    onRecentStoryClick = post => {
        // console.log(post);

        this.props.onReadMore(post)
        this.props.history.push(`/${post.pkey}/${post.subject}`)

        window.scroll({ top: 0, left: 0, behavior: "instant" })
    }

    render() {
        // console.log("infinite loop")
        return (
            <div>
                {this.props.posts.map(post => {
                    return (
                        <div
                            className="recent-stories-div-parent"
                            key={post.pkey}
                            onClick={() => this.onRecentStoryClick(post)}
                        >
                            <div className="recent-stories-image-parent">
                                <img
                                    src={post.img}
                                    className="recent-stories-image"
                                    // onLoad={() => this.onImageLoad()}
                                    alt="recent-news-pic"
                                />
                                
                            </div>

                            <div className="recent-stories-subject-parent">
                                <p
                                    className="recent-stories-subject"
                                    // onClick={() => this.onRecentStoryClick(post)}
                                >
                                    {/* <Link to={`/${post.pkey}/${post.subject}`}>{post.subject}</Link> */}
                                    {post.subject}
                                </p>

                                {/* <p className="recent-stories-author">
                                    <i>by {post.id}</i>
                                </p> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        // currentPost: state.readMore,
        // allPosts: state.allPostsData
    }
}

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onReadMore: readMore
        },
        dispatch
    )
}

// export default connect(
//     mapStateToProps,
//     mapActionsToProps
// )(withRouter(RecentStories));

export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToProps
    )(RecentStories)
)
