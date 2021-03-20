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
        marginTop: '22.5em',
        position: 'absolute',
        top: '13px',
        right: '50px',
        left: '1000px',
        bottom: '17.2em',
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
        fontSize: '20px',
        color: 'white',

    },
    fixPadding: {
        padding: '10px',
    }
}));

export default function HomeBackgroundOverlay() {
    const classes = useStyles();
    const bullshit = <span className={classes.bullet}>•</span>;

    return (

        <Card variant="outlined" className={classes.root} >
            <CardMedia>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Agressive, Competent Legal Services At An Affordable Price
                         </Typography>
                </CardContent>
            </CardMedia>
        </Card >
    );
}

