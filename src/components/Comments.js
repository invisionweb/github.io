import React, { Component } from "react"
import $ from "jquery"
import "../stylesheets/comments.css"
import { insertCommentPHP, getCommentsPHP } from "../AppClass"

class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            showError: false
        }
    }

    componentDidMount() {
        $.ajax({
            type: "POST",
            url: getCommentsPHP,
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            data: {
                pkey: this.props.pkey
            },
            success: function(res) {
                this.setState(function(state, props) {
                    return {
                        comments: JSON.parse(res)
                    }
                })

                // console.log(this.state.comments)
            }.bind(this),
            error: function(error) {
                console.log(error)
            }
        })
    }

    // TODO: change the displayed comments when user opens another news from recent stories
    componentWillReceiveProps(nextProps, nextContext) {
        // this method was running twice per RecentStories click, so to run query once, the if statement was added
        if (nextProps.pkey !== this.props.pkey) {
            $.ajax({
                type: "POST",
                url: getCommentsPHP,
                // contentType: "application/json; charset=utf-8",
                // dataType: "json",
                data: {
                    pkey: nextProps.pkey
                },
                success: function(res) {
                    this.setState(function(state, props) {
                        return {
                            comments: JSON.parse(res)
                        }
                    })
    
                    // console.log(this.state.comments)
                }.bind(this),
                error: function(error) {
                    console.log(error)
                }
            })
        }
    }

    commentFormSubmit = e => {
        e.preventDefault()

        // console.log(this.refs.name_ref.value, " : ", this.refs.comment_ref.value)

        $.ajax({
            type: "POST",
            url: insertCommentPHP,
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            data: {
                pkey: this.props.pkey,
                name: this.refs.name_ref.value,
                comment: this.refs.comment_ref.value
            },
            success: function(res) {
                // console.log(res)

                if (res === "failure") {
                    // this.setState(function() {
                    //     return { showError: true }
                    // })

                    $(".comment-status")
                        .html(
                            "The name and comment should be more than 5 characters long."
                        )
                        .css("color", "red")
                } else {
                    // this.setState(function() {
                    //     return { showError: false }
                    // })

                    $(".comment-status")
                        .html("Your comment has been successfully submitted.")
                        .css("color", "green")
                }
                // this.setState(function(state, props) {
                //     return {
                //         allPosts: JSON.parse(res),
                //         firstPost: JSON.parse(res)[0][0],
                //         recentStories: JSON.parse(res)[1]
                //     }
                // })
                // console.log(this.state.firstPost)
                // console.log(this.state.recentStories)
            }.bind(this),
            error: function(error) {
                console.log(error)
            }.bind(this)
        })

        console.log(this.refs.comment_ref.value.length)

        // to update the state with the new comment
        if (
            this.refs.name_ref.value.length > 5 &&
            this.refs.comment_ref.value.length > 5
        ) {
            // make a comment object to insert into the state
            let commentObj = {
                name: this.refs.name_ref.value,
                comment: this.refs.comment_ref.value,
                timestamp: Math.floor(Date.now() / 1000)
            }
            this.setState(function(state) {
                return {
                    comments: [commentObj, ...state.comments]
                }
            })
        }

        // empty the input fields
        $(".comment").val("")
    }

    render() {
        return (
            <div>
                <h1 className="comments-heading">COMMENTS /</h1>

                {/* if there are no comments for the post, show something */}
                {this.state.comments.length === 0 && (
                    <div className="comments_parent">
                        <div className="comment-body">
                            <p style={{ padding: 30 }}>
                                No comments yet, be the first to comment!
                            </p>
                        </div>
                    </div>
                )}

                {this.state.comments.map(comment => {
                    const timestamp = comment.timestamp
                    const date = new Date(timestamp * 1000)

                    return (
                        <div
                            className="comments_parent"
                            key={Math.random() * Math.random()}
                        >
                            <div className="comment-body">
                                <div className="commentor-details">
                                    <span className="name">{comment.name}</span>
                                    <span className="time">{date.toLocaleString()}</span>
                                </div>
                                <div className="comment-text">
                                    <p>{comment.comment}</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    )
                })}

                <h1 className="comments-heading">ADD YOUR COMMENT /</h1>

                <div className="add-comment-parent">
                    <form className="add-comment-form" onSubmit={this.commentFormSubmit}>
                        <div className="input-field">
                            <input
                                ref="name_ref"
                                className="comment"
                                type="text"
                                placeholder="Add your full name"
                                required
                            />
                            <textarea
                                ref="comment_ref"
                                className="comment"
                                rows="4"
                                placeholder="Add your comment (within 500 characters)"
                                maxLength="500"
                                required
                            />
                            <button className="comment-button">SUBMIT</button>

                            <p className="comment-status" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Comments
