// import React, { Component } from "react"
// import PropTypes from "prop-types"
// import {
//     withStyles,
//     Card,
//     CardContent,
//     CardMedia,
//     Button,
//     Typography
// } from "@material-ui/core"
// import zilikaImage from "../../images/zilika.png"

// const styles = theme => ({
//     card: {
//         marginTop: 30
//     },
//     media: {
//         height: 0,
//         paddingTop: "56.25%" // 16:9
//     },
//     button: {
//         margin: theme.spacing.unit,
//         textAlign: "center"
//     }
// })

// class SimpleMediaCard extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             toggleShowMore: false
//         }
//     }

//     handleShowMoreClick = () => {
//         this.setState({
//             toggleShowMore: !this.state.toggleShowMore
//         })
//     }

//     render() {
//         const { classes } = this.props

//         if (this.props.showApps === true) {
//             return (
//                 <div>
//                     <Card className={classes.card}>
//                         <CardMedia
//                             className={classes.media}
//                             image={zilikaImage}
//                             title="Contemplative Reptile"
//                         />
// <CardContent>
//     <Typography gutterBottom variant="h2" component="h2">
//         Zilika
//     </Typography>
//     <Typography
//         component="p"
//         variant="subtitle1"
//         style={{ paddingTop: 10 }}
//     >
//         Service at your doorstep!
//     </Typography>

//     <ul
//         style={{
//             paddingRight: 30,
//             lineHeight: 1.5,
//             color: "#757575",
//             textAlign: "justify"
//         }}
//     >
//         <li>
//             Electrician
//             <br />
//         </li>
//         <li>
//             Plumber
//             <br />
//         </li>
//         <li>
//             Refrigerator, AC repair
//             <br />
//         </li>
//         <li>
//             Painter
//             <br />
//         </li>
//         <li>Home cleaning</li>
//         <li>Pest control & much more!</li>
//     </ul>
// </CardContent>
//                     </Card>
//                 </div>
//             )
//         } else {
//             return null
//         }
//     }
// }

// SimpleMediaCard.propTypes = {
//     classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(SimpleMediaCard)

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
// import Button from 'material-ui/Button';
// import Typography from 'material-ui/Typography';
// import AnonGridList from './AnonGridList';
// import JuLiGridList from './JuLiGridList';
// import juliLogo from '../svgs for content/juli_logo.svg';

// const styles = theme => ({
//   card: {
//     marginTop: 30,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   button: {
//     margin: theme.spacing.unit,
//     textAlign: "center",
//   },
// });

// class SimpleMediaCard extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       toggleShowMore: false
//     }
//   }

//   handleShowMoreClick = () => {

//     this.setState ({
//       toggleShowMore: !this.state.toggleShowMore
//     })
//   }

//   render () {

//     const { classes } = this.props;

//     return (
//       <div>
//       <Card className={classes.card}>
//         <CardMedia
//             className={classes.media}
//             image={juliLogo}
//             title="Contemplative Reptile"
//             />
// <CardContent>
// <div style={{textAlign: "justify", paddingLeft: 10, paddingRight: 10}}>
//   <Typography gutterBottom variant="h2"  component="h2">
//     JuLi
//   </Typography>
//   <Typography component="p" variant="subtitle1" style={{paddingTop: 10}}>
//   The location finder app!
//   </Typography>
//   <Typography variant="subtitle1" style={{paddingTop: 40}}>
//   The most used phrase in any language,of telecom generation, is “Where are you?”, including Spanish, French,
//   Mandarin, Arabic, Hindi etc. It's the fountain head of any conversation. It's a filler which has become a
//   Siamese twin to "hello"....Pink Floyd too asked the same question. Remember?! Mom's care, friend’s affection,
//     starts with this : ”Where are you?” JuLi is going to be the tool which will answer or ask the question,on your behalf.
//     Unless you are under a red corner look out notice from Interpol, JuLi is the coolest innovative app, which will redefine the way we connect to our surrounding.
//     **JuLi means Distance in Chinese!**
//   </Typography>
// </div>
// </CardContent>

//             {/* <div className="anonButtonCenterClass">
//                 <Button size="large" color="primary" className={classes.button} onClick={()=> window.open("https://play.google.com/store/apps/details?id=com.juli&hl=en", "_blank")}>
//                 Get JuLi
//                 </Button>
//             </div> */}

//             <div className="anonButtonCenterClass">
//                 <Button size="large" color="primary" className={classes.button} onClick={this.handleShowMoreClick}>
//                 {this.state.toggleShowMore ? "Show less" : "Show more"}
//                 </Button>
//             </div>

//             <JuLiGridList toggleShowMore={this.state.toggleShowMore}/>

//       </Card>
//     </div>
//     )
//   }

// }

// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleMediaCard);

import React, { Component } from "react"
import PropTypes from "prop-types"
import AnonGridList from "./AnonGridList"
import {
    withStyles,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Typography
} from "../../../node_modules/@material-ui/core"
import "../../stylesheets/products.css"
import zilikaImage from "../../images/zilika.png"

const styles = theme => ({
    card: {
        marginTop: 30
    },
    media: {
        height: "auto",
        paddingTop: "50%" // 16:9
    },
    button: {
        margin: theme.spacing.unit,
        textAlign: "center"
    },
    anonButtonCenterClass: {
        width: "100%",
        textAlign: "center"
    }
})

class SimpleMediaCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleShowMore: true
        }
    }

    handleShowMoreClick = () => {
        this.setState({
            toggleShowMore: !this.state.toggleShowMore
        })
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                {/* <Card className={classes.card}> */}
                    <div className="anon-parent">
                        <section className="anon-text">
                            {/* <CardMedia
                                className={classes.media}
                                image={anonLogo}
                                title="Contemplative Reptile"
                            /> */}
                            {/* <object type="image/svg+xml" data={juliLogo} width="50%" /> */}

                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h2"
                                    component="h2"
                                >
                                    Zilika
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="subtitle1"
                                    style={{ paddingTop: 10 }}
                                >
                                    Service at your doorstep!
                                </Typography>

                                <ul
                                    style={{
                                        paddingRight: 30,
                                        lineHeight: 1.5,
                                        color: "#757575",
                                        textAlign: "justify"
                                    }}
                                >
                                    <li>
                                        Electrician
                                        <br />
                                    </li>
                                    <li>
                                        Plumber
                                        <br />
                                    </li>
                                    <li>
                                        Refrigerator, AC repair
                                        <br />
                                    </li>
                                    <li>
                                        Painter
                                        <br />
                                    </li>
                                    <li>Home cleaning</li>
                                    <li>Pest control & much more!</li>
                                </ul>
                            </CardContent>
                        </section>
                        <section className="anon-image">
                            {/* <object type="image/png" data={zilikaImage} width="100%" draggable="false"/> */}
                            <img src={zilikaImage} style={{width: "100%"}} draggable="false"/>
                            
                        </section>
                    </div>
                {/* </Card> */}
            </div>
        )
    }
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
