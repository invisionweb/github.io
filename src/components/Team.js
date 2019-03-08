import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StepperView from './StepperView';

class Team extends Component {
    render() {
        return (
            <div>
                {/* <Grid container>
                    <Grid item sm={6} xs={12}>
                        <h1>Swipe view</h1>
                        
                    </Grid>
                    <Grid item sm={6} xs={12}>
                    <h1>info</h1>
                    </Grid>
                </Grid> */}

                <StepperView />
            </div>
        );
    }
}

export default Team;