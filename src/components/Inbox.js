import React, { Component } from "react"
import $ from "jquery"
import { checkInboxPHP } from "../AppClass"
import {
    Typography,
    createMuiTheme,
    withStyles,
    Button,
    IconButton,
    Divider,
    MuiThemeProvider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
} from "../../node_modules/@material-ui/core"
import PropTypes from "prop-types"

class Inbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        $.ajax({
            type: "POST",
            url: checkInboxPHP,
            success: function(res) {
                this.setState(function() {
                    return {
                        messages: JSON.parse(res)
                    }
                })
            }.bind(this)
        })
    }
    render() {
        const { classes } = this.props

        return (
            <div>
                <Typography variant="display2" className={classes.heading}>
                    Invision Inbox
                </Typography>

                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Auto_id</TableCell>
                                <TableCell>Pkey</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>E-mail</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Occupation</TableCell>
                                <TableCell>Job Entry</TableCell>
                                <TableCell>Message</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.messages.map(message => {
                                return (
                                    <TableRow key={message.pkey}>
                                        <TableCell component="th" scope="row">
                                            {message.auto_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {message.pkey}
                                        </TableCell>
                                        <TableCell>{message.name}</TableCell>
                                        <TableCell>{message.email}</TableCell>
                                        <TableCell>{message.address}</TableCell>
                                        <TableCell numeric>{message.phone}</TableCell>
                                        <TableCell>{message.occupation}</TableCell>
                                        <TableCell>{message.job}</TableCell>
                                        <TableCell>{message.message}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Paper>

                {/* {this.state.messages !== undefined && this.state.messages.map(messaege => {
                    return (
                        <div>
                            <Typography>Pkey: {messaege.pkey}</Typography>
                            <Typography>Name: {messaege.name}</Typography>
                            <Typography>Email: {messaege.email}</Typography>
                            <Typography>{messaege.phone}</Typography>
                            <Typography>{messaege.address}</Typography>
                            <Typography>{messaege.occupation}</Typography>
                            <Typography>{messaege.message}</Typography>




                        </div>
                    )
                })} */}
            </div>
        )
    }
}

const styles = theme => ({
    heading: {
        marginLeft: 30,
        marginTop: 80
    },
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 700
    }
})

export default withStyles(styles)(Inbox)
