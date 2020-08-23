import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const About = () => (
    <Paper style={ { padding: '5px' } } square>
        <Typography>
            Stitzel Law is a family owned and operated home improvement company.
            From drywall, painting, and additions to your home to electrical and lighting.
        </Typography>
        <Typography>
            Stitzel Law is your one stop shop for any Home Improvement project!
        </Typography>
        <Typography>Coming soon...</Typography>
    </Paper>
);

export default About;
