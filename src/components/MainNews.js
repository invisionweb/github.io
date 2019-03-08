import React, { Component } from "react"
import { tabArray } from "../AppClass"
import "../stylesheets/homePage.css"
import "../stylesheets/particular-news.css"
import "../stylesheets/you-might-also-like.css"
import Facebook from "./share/Facebook"

class MainNews extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         imageLoaded: false
    //     }
    // }

    // onImageLoad = () => {
    //     this.setState({
    //         imageLoaded: true
    //     })
    // }

    render() {
        const timestamp = this.props.data.time
        const date = new Date(timestamp * 1000)

        return (
            <div>
                <h1 className="news-heading-top">
                    NEWS /{" "}
                    {
                        tabArray.find(
                            category => this.props.data.category === category.value
                        ).name
                    }
                </h1>

                <div className="news-div-parent">
                    <div className="news-image-parent-div">
                        <img
                            src={this.props.data.img}
                            alt="news-pic"
                            className="particular-news-image"
                            // onLoad={() => this.onImageLoad()}
                        />
                    </div>
                    <div className="shadow-div" />
                    <div className="details-parent">
                        <p className="details-heading-p">{this.props.data.subject}</p>
                        {/* <p>{this.props.data.subject}</p> */}
                        <p>
                            <i>by {this.props.data.id}</i>
                        </p>
                        <p>{date.toLocaleString()}</p>
                    </div>

                    <p className="news-post-p">{this.props.data.post}</p>

                    {/* facebook share */}
                    <Facebook data={this.props.data} />
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => {
//     return {
//         post: state.readMore
//     }
// }

// const mapActionsToProps = (dispatch, props) => {
//     return bindActionCreators(
//         {
//             onTabChange: tabChange,
//             onReadMore: readMore,
//             passAllPostsData: passAllPostData
//         },
//         dispatch
//     )
// }

// export default connect(
//     mapStateToProps,
//     mapActionsToProps
// )(MainNews)
export default MainNews
