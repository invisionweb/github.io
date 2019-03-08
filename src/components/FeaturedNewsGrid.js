import $ from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { tabArray } from "../AppClass";
import { tabChange } from "../redux/actions/TabBarActions";
import "../stylesheets/top-grid.css";

let counter = 0;
let eightPosts;
class FeaturedNewsGrid extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(function() {
            while (
                $(".subject-container div").height() <
                $(".subject-container").height() - 50
            ) {
                $(".subject-container div").css(
                    "font-size",
                    parseInt($(".subject-container div").css("font-size")) + 1 + "px"
                );
            }
        });



        // window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        // window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        if (
            $(".subject-container div").height() <
            $(".subject-container").height() - 20
        ) {
            $(function() {
                while (
                    $(".subject-container div").height() <
                    $(".subject-container").height() - 100
                ) {
                    $(".subject-container div").css(
                        "font-size",
                        parseInt($(".subject-container div").css("font-size")) + 1 + "px"
                    );
                }
            });
        } else {
            $(function() {
                while (
                    $(".subject-container div").height() >
                    $(".subject-container").height() - 100
                ) {
                    $(".subject-container div").css(
                        "font-size",
                        parseInt($(".subject-container div").css("font-size")) - 1 + "px"
                    );
                }
            });
        }

        // if($(window).width() < 600) {
        //     $(".subject-container div").hide();
        //     $(".subject-container").height(0);
        // }

        // }
    };

    componentDidUpdate() {
        // if (this.state.allPosts !== undefined) {
        // let height = $(".subject-container").height();
        // let height = $(window).height();

        // let windowWidth = $(window).width();
        // console.log(windowWidth);

        $(function() {
            while (
                $(".subject-container div").height() <
                $(".subject-container").height() - 50
            ) {
                $(".subject-container div").css(
                    "font-size",
                    parseInt($(".subject-container div").css("font-size")) + 1 + "px"
                );
            }
        });

    //     // if($(window).width() <= 600) {
    //     //     $(".subject-container div").hide();
    //     //     $(".subject-container").height(0);
    //     // }
    //     //}
    }

    // onImageLoad = () => {
    //     this.setState({
    //         imageLoaded: true
    //     });
    // };

    topGridNewsClick = post => {
        // console.log(post);

        // this.props.history.push(`{/${post.pkey}/${post.subject}}`)
        this.props.history.push("/" + post.pkey + "/" + post.subject);

        let index = tabArray.findIndex(tab => tab.value === post.category);
        this.props.onTabChange(index);
        
    };

    render() {
        // eightPosts = this.state.allPosts.slice(0, 8);
        // let firstThreePosts = this.props.eightPosts;
        // let lastFivePosts = eightPosts.slice(3, 8);
        // console.log(eightPosts);
        //console.log(lastFivePosts);
        // console.log(firstThreePosts);

        // console.log("render running");
        return (
            <div>
                {/* <h1 className="featured-text"><u>FEATURED</u></h1> */}
                <div className="top-grid-parent">
                    {this.props.firstThreePosts.map((post, counter) => {
                        let category = tabArray.find(
                            postFromArray => postFromArray.value === post.category
                        );
                        let date = new Date(post.time * 1000);
                        ++counter;

                        if (counter === 1) {
                            return (
                                <div
                                    className={`top-grid${counter}`}
                                    key={post.pkey}
                                    onClick={() => this.topGridNewsClick(post)}
                                >
                                    {/* <div className="top-grid-wrapper"> */}
                                    <div className="grid123-image-container">
                                        <object
                                            data={post.img}
                                            className="grid123-image"
                                            type="image/jpg"
                                            // alt="image"
                                            onLoad={this.onImageLoad}
                                        />
                                        {/* {this.state.imageLoaded === false && <LinearProgress />} */}
                                        <p className="grid123-post-category">
                                            {category.name}
                                        </p>
                                    </div>
                                    <div
                                        className="text-container"
                                        onClick={() => this.topGridNewsClick(post)}
                                    >
                                        <h1>{post.subject}</h1>
                                        <p>
                                            <i>
                                                by <b>{post.id}</b> on{" "}
                                                <b>
                                                    {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                                                </b>
                                            </i>
                                        </p>
                                        <div className="subject-container">
                                            <div className="subject-text">
                                                {post.subject}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        if (counter === 2 || counter === 3) {
                            return (
                                <div
                                    className={`top-grid${counter}`}
                                    key={post.pkey}
                                    onClick={() => this.topGridNewsClick(post)}
                                >
                                    {/* <div className="top-grid-wrapper"> */}

                                    <div className="grid123-image-container">
                                        <object
                                            data={post.img}
                                            type="image/jpg"
                                            className="grid123-image"
                                        />
                                        {/* {this.state.imageLoaded === false && <LinearProgress />} */}
                                        <p className="grid123-post-category">
                                            {category.name}
                                        </p>
                                    </div>

                                    <div className="text-container">
                                        <h2>{post.subject}</h2>
                                        <p>
                                            {/* <i>
                                                        by <b>{post.id}</b> on{" "}
                                                        <b>
                                                            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                                                        </b>
                                                    </i> */}
                                        </p>
                                    </div>
                                </div>

                                // </div>
                            );
                        }
                    })}
                </div>

                <div className="bottom-grid-parent">
                    {this.props.lastFivePosts.map((post, counter) => {
                        let category = tabArray.find(
                            postFromArray => postFromArray.value === post.category
                        );
                        // let date = new Date(post.time * 1000);
                        ++counter;

                        // console.log(counter);

                        if (counter === 1 || counter === 2) {
                            return (
                                <div
                                    className={`bottom-grid${counter}`}
                                    key={post.pkey}
                                    onClick={() => this.topGridNewsClick(post)}
                                >
                                    <div className={`bottom-grid12-image-container`}>
                                        <object
                                            data={post.img}
                                            type="image/jpg"
                                            className="bottom-grid12-image"
                                        />
                                        {/* {this.state.imageLoaded === false && <LinearProgress />} */}
                                        <p className="bottom-grid12-post-category">
                                            {category.name}
                                        </p>
                                        <div className="bottom-grid-12-text-container">
                                            <h3
                                                className="bottom-grid-12-text"
                                                onClick={() =>
                                                    this.topGridNewsClick(post)
                                                }
                                            >
                                                {post.subject}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        if (counter === 3) {
                            return (
                                <div
                                    className={`bottom-grid${counter}`}
                                    key={post.pkey}
                                    onClick={() => this.topGridNewsClick(post)}
                                >
                                    <div className={`bottom-grid-3-image-container`}>
                                        <object
                                            data={post.img}
                                            type="image/jpeg"
                                            className="bottom-grid-3-image"
                                        />
                                        <p className="bottom-grid-345-category">
                                            {category.name}
                                        </p>
                                        <div className="bottom-grid-345-text-container">
                                            <h3 className="bottom-grid-345-text">
                                                {post.subject}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        if (counter === 4 || counter === 5) {
                            return (
                                <div
                                    className={`bottom-grid${counter}`}
                                    key={post.pkey}
                                    onClick={() => this.topGridNewsClick(post)}
                                >
                                    <div
                                        className={`bottom-grid-${counter}-image-container`}
                                    >
                                        <object
                                            data={post.img}
                                            type="image/jpg"
                                            className={`bottom-grid-${counter}-image`}
                                        />
                                        {/* {this.state.imageLoaded === false && <LinearProgress />} */}
                                        {/* <p className={`bottom-grid-${counter}-post-category`}>
                                                    {category.name}
                                                </p>
                                                <div className={`grid-${counter}-text-container`}>
                                                    <h3 className={`grid-${counter}-text`}>
                                                        {post.subject}
                                                    </h3>
                                                </div> */}
                                        <p className="bottom-grid-345-category">
                                            {category.name}
                                        </p>
                                        <div className="bottom-grid-345-text-container">
                                            <h3 className="bottom-grid-345-text">
                                                {post.subject}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {};
};

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onTabChange: tabChange
            // onReadMore: readMore,
            // passAllPostsData: passAllPostData
        },
        dispatch
    );
};

export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToProps
    )(FeaturedNewsGrid)
);
