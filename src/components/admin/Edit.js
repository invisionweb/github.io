import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import DraftJsEditor from "./DraftJsEditor";

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
    }

    componentWillMount() {
        if (JSON.parse(sessionStorage.getItem("userData"))) {
        } else {
            this.setState(function() {
                return {
                    redirect: true
                }
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/admin"} />
        }

        return (
            <div style={{margin: 10}}>
                {/* <h1>welcome to draft js editor</h1> */}
                <DraftJsEditor />
            </div>
        )
    }
}

export default Edit
