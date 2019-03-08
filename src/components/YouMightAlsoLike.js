import { Component, default as React } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import { tabArray } from "../AppClass"
import { readMore } from "../redux/actions/newsSeeMoreActions"
import { passAllPostData } from "../redux/actions/PassAllPostsActions"
import { tabChange } from "../redux/actions/TabBarActions"
import "../stylesheets/homePage.css"
import "../stylesheets/you-might-also-like.css"
import { CircularProgress } from "../../node_modules/@material-ui/core";

let counter = 0
let imageLoaded = false
class YouMightAlsoLike extends Component {
    handleYmalNewsClick = post => {
        this.props.history.push("/" + post.pkey + "/" + post.subject)

        //redux the post aray to MainNews component
        this.props.onReadMore(post)

        //updates the active tabBar tab
        let tabArrayObj = tabArray.find(tab => tab.value === post.category)
        let tabArrayIndex = tabArray.indexOf(tabArrayObj)
        // console.log("tab array index: " + tabArrayIndex);
        this.props.onTabChange(tabArrayIndex)
    }

    render() {
        counter = 0

        // console.log(this.props.posts)

        // if (this.props.posts.length === 0) {
        //     return (
                
        //             <div style={{ textAlign: "center", margin: 20 }}>
        //                 <CircularProgress size={60} />
        //             </div>
        //     )
        // }

        
        return (
            <div>
                <h1 className="you-might-also-like-header-top">YOU MIGHT ALSO LIKE /</h1>
                <div className="you-might-also-like-parent-div-grid">
                    {this.props.posts.length !== 0 &&
                        this.props.posts.map(postArray => {
                            let post = postArray[0]
                            return (
                                <div
                                    className={`grid${++counter}`}
                                    // key={Math.random() * 10}
                                    key={post.pkey}
                                    onClick={() => this.handleYmalNewsClick(post)}
                                >
                                    <div className="ymal-image-container-div">
                                        <img
                                            src={post.img}
                                            className="ymal-image"
                                            // onLoad={() => this.onYmalImageLoad()}
                                            alt="you might also like"
                                        />

                                        {/* {imageLoaded === false && (
                                            <LinearProgress />
                                        )} */}
                                    </div>

                                    <div className="you-might-also-like-text-container">
                                        <div className="you-might-also-like-text-children">
                                            <h3 style={{ color: "orange" }}>
                                                {
                                                    tabArray.find(
                                                        tab => post.category === tab.value
                                                    ).name
                                                }
                                            </h3>
                                            <h3>{post.subject}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
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
            onTabChange: tabChange,
            onReadMore: readMore,
            passAllPostsData: passAllPostData
        },
        dispatch
    )
}

export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToProps
    )(YouMightAlsoLike)
)
