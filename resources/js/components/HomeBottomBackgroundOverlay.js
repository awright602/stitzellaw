import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeBackground from '../../images/HomeBackground.jpg';
import { CardMedia, CardActionArea } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '25em',
        position: 'absolute',
        top: '500px',
        left: '400px',
        right: '400px',
        backgroundColor: 'black',
        opacity: '70%',
        color: 'white',
        borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)',
        borderImageSlice: '1',

        [theme.breakpoints.down('md')]: {
            marginTop: 'unset',
            top: 'unset',
            left: 'unset',
            right: 'unset',
            position: 'inherit',
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        textAlign: 'center',
        fontSize: '20px',
        color: 'white',

        [theme.breakpoints.down('md')]: {
            textAlign: 'unset',
        },
    },
    fixPadding: {
        padding: '10px',
    }
}));

export default function HomeBottomBackgroundOverlay() {
    const classes = useStyles();
    return (

        <Card variant="outlined" className={classes.root} >
            <CardMedia>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        We're Open. Call (813) 643-8000 or Request an Appointment
                         </Typography>
                </CardContent>
            </CardMedia>
        </Card >
    );
}
