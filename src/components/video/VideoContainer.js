import $ from "jquery"
import React, { Component } from "react"
import { CircularProgress } from "../../../node_modules/@material-ui/core"
import { videoPHP } from "../../AppClass"
import "../../stylesheets/video.css"
import VideoPlayer from "./VideoPlayer"
import { tabArray } from "../../AppClass"
const uuidv4 = require('uuid/v4');

let key = "AIzaSyAqA8II5ajM4GAd13k6VKca6iE8wid2CqQ"
let vidIds = ""
class VideoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoIndex: 0,
            dataFromDb: [],
            skip: 0,
            count: 5,
            videosDataFromYT: [],
            videoNewsReadMore: false
        }
    }

    componentDidMount() {
        // this.setState(function(state) {
        //     return {
        //         videoIndex: 0,
        //         dataFromDb: [],
        //         skip: 0,
        //         count: 5,
        //         videosDataFromYT: [],
        //         videoNewsReadMore: false
        //     }
        // })

        vidIds = ""

        // query the 5 video posts from db
        $.ajax({
            type: "POST",
            url: videoPHP,
            data: {
                skip: this.state.skip,
                count: this.state.count
            },
            success: function(res) {
                this.setState(function(state) {
                    return {
                        dataFromDb: JSON.parse(res),
                        skip: state.skip + 5
                    }
                })

                // console.log(this.state.dataFromDb)

                // if the data is successfully retrieved from db, then run the 2nd query to get the vid data from youtube
                if (this.state.dataFromDb.length > 0) {
                    // console.log(this.state.dataFromDb)

                    for (let i = 0; i < this.state.dataFromDb.length; i++) {
                        // query the string to separate the unique vid IDs
                        let fullUrl = this.state.dataFromDb[i].video
                        let id = fullUrl.split("=")[1]

                        vidIds += `${id},`
                    }

                    // console.log(vidIds)

                    // query video details from youtube
                    $.ajax({
                        url: `https://www.googleapis.com/youtube/v3/videos?key=${key}&fields=items( snippet (channelTitle, title, thumbnails( standard )))&part=snippet&id=${vidIds}`,
                        success: function(res) {
                            this.setState(function() {
                                return {
                                    videosDataFromYT: res.items
                                }
                            })

                            // console.log(this.state.videosDataFromYT)
                        }.bind(this),
                        error: function(error) {
                            console.log(error)
                        }
                    })
                }
            }.bind(this)
        })
    }

    playlistVideoClick = (videoObj, index) => {
        this.setState({
            videoIndex: index
        })
    }

    loadMoreButtonClick = () => {
        $.ajax({
            type: "POST",
            url: videoPHP,
            data: {
                skip: this.state.skip,
                count: this.state.count
            },
            success: function(res) {
                let parsedRes = JSON.parse(res)
                parsedRes.map(res => {
                    this.setState(function(state) {
                        return {
                            dataFromDb: [...state.dataFromDb, res]
                            // skip: state.skip + 5
                        }
                    })
                })
                // console.log(this.state.dataFromDb)

                // if the data is successfully retrieved from db, then run the 2nd query to get the vid data from youtube
                if (this.state.dataFromDb.length > 0) {
                    // console.log(this.state.dataFromDb)

                    vidIds = ""
                    for (let i = this.state.skip; i < this.state.dataFromDb.length; i++) {
                        // query the string to separate the unique vid IDs
                        let fullUrl = this.state.dataFromDb[i].video
                        let id = fullUrl.split("=")[1]
                        vidIds += `${id},`
                    }

                    // console.log(vidIds)

                    // query video details from youtube

                    //TODO: correctly change state
                    $.ajax({
                        url: `https://www.googleapis.com/youtube/v3/videos?key=${key}&fields=items( snippet (channelTitle, title, thumbnails( standard )))&part=snippet&id=${vidIds}`,
                        success: function(res) {
                            // console.log(res.items)
                            let parsedRes = res.items
                            parsedRes.map(res => {
                                this.setState(function(state) {
                                    return {
                                        videosDataFromYT: [...state.videosDataFromYT, res]
                                    }
                                })
                            })

                            this.setState(function(state) {
                                return {
                                    skip: state.skip + 5
                                }
                            })

                            // console.log(this.state.videosDataFromYT)
                        }.bind(this),
                        error: function(error) {
                            console.log(error)
                        }
                    })
                }
            }.bind(this)
        })
    }

    videoNewsReadMore = () => {
        this.setState(function(state) {
            return {
                videoNewsReadMore: !state.videoNewsReadMore
            }
        })
    }

    render() {
        // console.log(this.state.dataFromDb.length)

        if (this.state.dataFromDb.length === 0) {
            return (
                <div style={{ textAlign: "center", margin: 20 }}>
                    <CircularProgress size={60} />
                </div>
            )
        } else {
            let activeVideo = this.state.dataFromDb[this.state.videoIndex]
            // console.log(activeVideo.video)

            // calculate the time from the given timestamp
            const timestamp = activeVideo.time
            const date = new Date(timestamp * 1000)
            return (
                <div>
                    <div className="video-parent">
                        <div className="video-left-grid">
                            <VideoPlayer
                                // service={service}
                                video={activeVideo.video}
                                // width={720}
                                // height={410}
                            />
                        </div>
                        <div className="video-right-grid">
                            <div className="playlist-height">
                                {this.state.videosDataFromYT.map((vid, index) => {
                                    // let uploadDate = vid.items[0].snippet.publishedAt
                                    //     .split("T")[0]
                                    //     .split("-")
                                    //     .reverse()
                                    //     .join("/")
                                    // console.log(uploadDate)
                                    return (
                                        <div
                                            key={uuidv4()}
                                            className="playlist-parent"
                                            onClick={() =>
                                                this.playlistVideoClick(vid, index)
                                            }
                                        >
                                            <div className="playlist-thumbnail-parent">
                                                <object
                                                    className="playlist-thumbnail-image"
                                                    type="image/jpg"
                                                    data={
                                                        vid.snippet.thumbnails.standard
                                                            .url
                                                    }
                                                    // data="https://i.ytimg.com/vi/aJOTlE1K90k/sddefault.jpg"
                                                />
                                            </div>
                                            <div className="playlist-video-name">
                                                <p className="playlist-video-name-text">
                                                    {vid.snippet.title}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}

                                <button
                                    className="load-more-video-button"
                                    onClick={this.loadMoreButtonClick}
                                >
                                    MORE
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* video info */}
                    <div className="video-info-container">
                        <h1 style={{ display: "inline" }}>
                            {
                                tabArray.find(
                                    category => activeVideo.category === category.value
                                ).name
                            }{" "}
                            /
                        </h1>
                        <h2 className="video-info-subject">{activeVideo.subject}</h2>
                        <p>{date.toLocaleString()}</p>
                        {this.state.videoNewsReadMore && (
                            <p className="video-info-post">{activeVideo.post}</p>
                        )}
                        <button
                            className="video-info-read-more-button"
                            onClick={this.videoNewsReadMore}
                        >
                            {this.state.videoNewsReadMore ? "SHOW LESS" : "READ MORE"}
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default VideoContainer
