import React, { Component } from "react"
import $ from "jquery"
import "../stylesheets/all-news-one-category.css"
import { allNewsOneCategoryPHP } from "../AppClass"
import { withRouter } from "react-router"
import "../stylesheets/you-might-also-like.css"

class AllNewsOneCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skip: 0,
            posts: [],
            shouldLoadMore: true
        }
    }

    componentDidMount() {
        // console.log(this.props.category)

        $.ajax({
            type: "POST",
            url: allNewsOneCategoryPHP,
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            data: {
                category: this.props.category,
                skip: this.state.skip
            },
            success: function(res) {
                this.setState(function(state, props) {
                    return {
                        posts: JSON.parse(res),
                        skip: state.skip + 5
                    }
                })
            }.bind(this),
            error: function(error) {
                console.log(error)
            }
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps)

        if (this.props.category !== nextProps.category) {
            this.setState(function(state) {
                return {
                    skip: 0,
                    shouldLoadMore: true
                }
            })

            this.setState({
                skip: 0,
                shouldLoadMore: true
            }, function() {
                $.ajax({
                    type: "POST",
                    url: allNewsOneCategoryPHP,
                    // contentType: "application/json; charset=utf-8",
                    // dataType: "json",
                    data: {
                        category: nextProps.category,
                        skip: this.state.skip
                    },
                    success: function(res) {
                        this.setState(function(state, props) {
                            return {
                                posts: JSON.parse(res),
                                skip: state.skip + 5
                            }
                        })
                    }.bind(this),
                    error: function(error) {
                        console.log(error)
                    }
                })
            })

        

            // $.ajax({
            //     type: "POST",
            //     url: allNewsOneCategoryPHP,
            //     // contentType: "application/json; charset=utf-8",
            //     // dataType: "json",
            //     data: {
            //         category: nextProps.category,
            //         skip: this.state.skip
            //     },
            //     success: function(res) {
            //         this.setState(function(state, props) {
            //             return {
            //                 posts: JSON.parse(res),
            //                 skip: state.skip + 5
            //             }
            //         })
            //     }.bind(this),
            //     error: function(error) {
            //         console.log(error)
            //     }
            // })
        }
    }

    onNewsClick = post => {
        this.props.history.push("/" + post.pkey + "/" + post.subject)
    }

    loadMoreNews = () => {
        $.ajax({
            type: "POST",
            url: allNewsOneCategoryPHP,
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            data: {
                category: this.props.category,
                skip: this.state.skip
            },
            success: function(res) {
                // TODO:
                let result = JSON.parse(res)
                // console.log(result.length)

                result.map(res => {
                    this.setState(function(state) {
                        return {
                            posts: [...state.posts, res]
                            // skip: state.skip + 5
                        }
                    })
                })

                // console.log(result.length)

                if (result.length < 5) {
                    this.setState(function() {
                        return {
                            shouldLoadMore: false
                        }
                    })
                }

                this.setState(function(state) {
                    return {
                        // posts: [...state.posts, result],
                        skip: state.skip + 5
                    }
                })

                // console.log(this.state.posts)
            }.bind(this),
            error: function(error) {
                console.log(error)
            }
        })
    }

    render() {
        return (
            <div>
                {/* TODO: make the news layout */}
                {this.state.posts.map(post => {
                    return (
                        <div
                            className="onoc-parent"
                            key={Math.random() * Math.random()}
                            onClick={() => this.onNewsClick(post)}
                        >
                            <div className="onoc-text-container">
                                <h2>{post.subject}</h2>
                                <p>by {post.id}</p>
                            </div>
                            <div className="onoc-image-container">
                                <object
                                    data={post.img}
                                    className="onoc-img"
                                    type="image/jpg"
                                    // alt="image"
                                    // onLoad={this.onImageLoad}
                                />
                            </div>
                        </div>
                    )
                })}

                {/* TODO: load more news */}
                {this.state.shouldLoadMore && (
                    <button className="load-more-news-button" onClick={this.loadMoreNews}>
                        LOAD MORE
                    </button>
                )}
            </div>
        )
    }
}

export default withRouter(AllNewsOneCategory)
