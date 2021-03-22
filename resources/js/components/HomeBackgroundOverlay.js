import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, CardActionArea } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        backgroundColor: 'black',
        opacity: '70%',
        color: 'white',
        display: 'inline-flex',
        alignSelf: 'center',
        borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)',
        borderImageSlice: '1',
        [theme.breakpoints.down('md')]: {
            marginTop: 'unset',
            top: 'unset',
            left: 'unset',
            right: 'unset',
            position: 'inherit',
        },
        marginRight: '0.75em',
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

