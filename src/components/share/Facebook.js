import React, { Component } from "react"
import MetaTags from "react-meta-tags"
import { ReactTitle } from "react-meta-tags"

class Facebook extends Component {
    componentDidMount() {
        // configure the Facebook Javascript SDK
        ;(function(d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) return
            js = d.createElement(s)
            js.id = id
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"
            fjs.parentNode.insertBefore(js, fjs)
        })(document, "script", "facebook-jssdk")
    }

    shareButtonClick = () => {
        var left = window.width / 2 - 700 / 2
        var top = window.height / 2 - 400 / 2
        window.open(
            `http://www.facebook.com/sharer.php?s=100&p[title]=${
                this.props.data.category
            }&p[summary]=${this.props.data.subject}
            &p[url]=${window.location.href}`,
            "sharer",
            `toolbar=0,status=0,width=600,height=300,top=${top},left=${left}`
        )
    }
    render() {
        // console.log(this.props.data)
        return (
            <div>
                <MetaTags>
                    {/* <title>{this.props.data.}</title> */}
                    {/* <ReactTitle title={this.props.data.category} /> */}
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={this.props.data.category} />
                    <meta property="og:description" content={this.props.data.subject} />
                    <meta property="og:image" content={this.props.data.img} />
                </MetaTags>

                {/* <a
                    id="fb-share"
                    // style={{ textDecoration: "none" }}
                    // type="icon_link"
                    onClick={this.shareButtonClick}
                    // href="javascript: void(0)"
                >
                    Share
                </a> */}
                {/* <a
                    href={`http://www.facebook.com/sharer.php?u=${
                        window.location.href
                    }&t=${this.props.data.subject}`}
                >
                    Share 2
                </a> */}
                <div
                    className="fb-share-button"
                    data-href={window.location.href}
                    // data-href="https://developers.facebook.com/docs/plugins/share-button/"
                    data-layout="button_count"
                    style={{paddingLeft: 50, paddingBottom: 30}}

                />
            </div>
        )
    }
}

export default Facebook
