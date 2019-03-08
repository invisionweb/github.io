import Button from "@material-ui/core/Button"
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { bindActionCreators } from "redux"
import { tabArray } from "../AppClass"
import { readMore } from "../redux/actions/newsSeeMoreActions"
import { passAllPostData } from "../redux/actions/PassAllPostsActions"
import { tabChange } from "../redux/actions/TabBarActions"
import "../stylesheets/homePage.css"
import { withRouter } from "react-router"
import { CircularProgress } from "../../node_modules/@material-ui/core"

let counter = 0
// let allPostArray = []
// let filteredPostsByNumberOfCards = []
// TODO: resize the images in each card to maintain the same height

class SimpleMediaCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // allPosts: [],
            filteredPosts: [],
            imageLoaded: false
        }
    }

    readMoreButtonClick = post => {
        this.props.history.push("/" + post.pkey + "/" + post.subject)

        //updates the active tabBar tab
        let tabArrayObj = tabArray.find(tab => tab.value === post.category)
        let tabArrayIndex = tabArray.indexOf(tabArrayObj)
        // console.log("tab array index: " + tabArrayIndex);
        this.props.onTabChange(tabArrayIndex)

        //send the clicked news post object down the reducer

        // this.props.onReadMore(post)
        // this.props.passAllPostsData(this.state.allPosts)
    }

    onImageLoad = () => {
        this.setState({
            imageLoaded: true
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("component will receive props: ", nextProps)
    }

    render() {
        counter = 0

        if (this.props.data.length === 0) {
            return <CircularProgress />
        }

        return (
            <div>
                <div className="topic-header">
                    <h3 className="paragraph">
                        <u>
                            {
                                tabArray.find(
                                    category =>
                                        this.props.data[0].category === category.value
                                ).name
                            }
                        </u>
                    </h3>
                </div>

                <div className="wrapper-cards-4">
                    {// this.props.cards === 4 &&
                    this.props.data.map(post => {
                        // console.log(post);
                        return (
                            <div
                                className={`card4 box${++counter}`}
                                key={Math.random()}
                                onClick={() => this.readMoreButtonClick(post)}
                            >
                                <div className="image-container">
                                    <img
                                        src={post.img}
                                        alt="Avatar"
                                        className="home-news-image"
                                    />
                                </div>

                                <div className="article-texts-container">
                                    <h2>
                                        <b>{post.subject}</b>
                                    </h2>
                                    <p className="post-text">
                                        <i>by {post.id}</i>
                                    </p>
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
    )(SimpleMediaCard)
)
