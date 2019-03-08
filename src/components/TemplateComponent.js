import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { tabChange } from "../redux/actions/TabBarActions";
import "../stylesheets/homePage.css";
import CardArticle from "./CardArticle";

// let topicNameFromTabArray = ""
// let urlIsRight = "true"
// let tabArrayIndex
class HomeTopicTemplate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            postData: []
        }
    }


    componentDidMount() {
        this.setState(() => {
            return {
                postData: this.props.data,
            }
        })

        // console.log(this.props.data)

        //FIXME: redundant if statement
        // if (this.props.match !== undefined) {
        //     let tabArrayObj = tabArray.find(
        //         tab => tab.value === this.props.match.params.category
        //     );
        //     tabArrayIndex = tabArray.indexOf(tabArrayObj);

        //     if (tabArrayIndex === -1) {
        //         this.setState({
        //             redirect: true
        //         });
        //     } else {
        //         this.props.onTabChange(tabArrayIndex);
        //     }

        //     // let topicName = tabArrayObj.name;

        //     // console.log(topicName);
        // }

        // if (tabArrayIndex === -1) {
        //     this.setState({
        //         redirect: true
        //     });
        // }

        // fetch the data
    }


    onSeeMoreClick = index => {
        // let newRoute = index
        //     .split(" ")
        //     .join("")
        //     .toLowerCase();

        // console.log("Read more clicked: " + newRoute);
        // this.props.history.push(`/${newRoute}`);

        this.props.onTabChange(this.props.topicIndex)
    }

    render() {
        // console.log(this.state.redirect);
        //FIXME: redundant if statement
        // if (this.props.match !== undefined) {
        //     let tabArrayObj = tabArray.find(
        //         tab => tab.value === this.props.match.params.category
        //     );

        //     if (tabArrayObj !== undefined) {
        //         topicNameFromTabArray = tabArrayObj.name;
        //     }
        //     // else {
        //     //     urlIsRight = "false";
        //     // }

        //     // topicNameFromTabArray = tabArrayObj.name;

        //     // console.log(topicNameFromTabArray);
        // }

        if (this.state.redirect === true) {
            return <Redirect to={"/"} />
        }

        return (
            <Grid container spacing={0} className="homeGridContainer">
                <Grid item sm={12} xs={12} className="grid-with-content">
                    <div>
                        {/* <div className="topic-header"> */}
                        {/* <p className="paragraph">{this.props.topicname}</p> */}
                        {/* Loading topic page */}
                        <div className="topic-header">
                            {/* <Route
                                render={({ history }) => {
                                    return (
                                        <h3
                                            className="paragraph"
                                            onClick={() =>
                                                history.push(
                                                    "/" +
                                                        this.props.topicname
                                                            .split(" ")
                                                            .join("")
                                                            .toLowerCase()
                                                )
                                            }
                                        >
                                            <u>{this.props.topicname}</u>
                                        </h3>
                                    )
                                }}
                            /> */}

                            <CardArticle
                                cards={4}
                                data={this.props.data}
                                // topic={this.props.topicname
                                //     .split(" ")
                                //     .join("")
                                //     .toLowerCase()}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
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
)(HomeTopicTemplate)

// export default withRouter(
//     connect(
//         mapStateToProps,
//         mapActionsToProps
//     )(HomeTopicTemplate)
// );
