
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
        marginTop: '5em',
        position: 'absolute',
        top: '30px',
        left: '400px',
        right: '400px',
        backgroundColor: 'maroon',
        opacity: '80%',
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
        textAlign: 'center',
        fontFamily: 'Libre Baskerville',
        paddingTop: '25px',


    },

    pos: {
        marginBottom: 2,
        color: 'white',
    },

}));


export default function Covid() {
    const classes = useStyles();

    return (

        <Card variant="outlined" className={classes.root} >
            <CardMedia >
                <CardContent>
                    <Typography className={classes.title}> COVID-19 UPDATE </Typography>
                    <Typography variant="h6" component="h6">
                        Our  Office Is Open
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Monday - Friday 9 AM to 5 PM
                </Typography>
                    <Typography variant="body2" component="p" style={{ textAlign: 'justify' }}>
                        Our office is fully prepared to assist with your legal needs during the Covid-19 Cornoavirus pandemic. Zoom hearings are conducted daily within our sterilized office. Telephonic consultations are available upon request.
                        We are able to socially distance during your consultations and offer use of a seperate computer area for our client's needs related to their case. Our office is ready to assit you, please feel free to call (813) 643-8000.
                </Typography>
                </CardContent>
            </CardMedia>
        </Card >
    );
}