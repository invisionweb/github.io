import React, { Component } from "react"
import PropTypes from "prop-types"
import "../../stylesheets/video.css"

class VideoPlayer extends Component {
    static urlMap = new Map([
        ["youtube", "http://www.youtube.com/embed/"]
        // ["vimeo", "http://player.vimeo.com/video/"],
        // ["dailymotion", "http://www.dailymotion.com/embed/video/"]
    ])

    getIdFromVideoString = video_string => {
        if (video_string !== undefined) {
            // const urlArray = video_string.split("/")
            // const idString = urlArray[urlArray.length - 1]
            // // console.log(urlArray);
            // // console.log(idString);

            // const queryParams = qs.extract(video_string)
            // // console.log(queryParams);
            // console.log(video_string)
            let video_id = video_string.split("=")[1]
            // console.log(video_id)
            return video_id

            // return (queryParams && qs.parse(queryParams).v) || idString || ""
        }
    }

    render() {
        const { video, ...htmlTags } = this.props
        const src = `http://www.youtube.com/embed/${this.getIdFromVideoString(video)}`

        // const src = "http://www.youtube.com/embed/"

        // console.log(src);

        return (
            <div>
                <div className="resp-container">
                    <iframe className="resp-iframe" src={src} frameBorder="0" allowFullScreen {...htmlTags} />
                </div>
            </div>
        )
    }

    static propTypes = {
        // service: PropTypes.oneOf(["youtube", "vimeo", "dailymotion"]).isRequired,
        video: PropTypes.string.isRequired
    }
}

export default VideoPlayer
