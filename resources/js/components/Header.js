import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NavBar from './NavBar';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    address: {
        float: 'left',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Montserrat',
    },
    carIcon: {
        float: 'left',
        color: '#a68f65',
    },
    addressContainer: {
        marginLeft: '5em',
        color: 'white',
    },
    phone: {
        float: 'right',
        color: 'white',
    },
    phoneIcon: {
        float: 'right',
        color: '#a68f65',
    },
    phoneContainer: {
        marginTop: '-15px',
        marginRight: '5em',
        color: 'white',
    },
    contactContainer: {
        backgroundColor: '#696969',
        width: '100%',
        height: '40px',
        paddingTop: '10px',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <div className={classes.contactContainer}>
                    <div className={classes.addressContainer}>
                        &nbsp;
                        <DirectionsCarIcon className={classes.carIcon} />
                        <a href='https://www.google.com/maps/place/206+Mason+St,+Brandon,+FL+33511/@27.9352329,-82.286113,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2cdc91415f0af:0x30838b1d3cb2d066!8m2!3d27.9352282!4d-82.2839243'
                            target='_blank' >
                            <Typography className={classes.address} >206 Mason St, Brandon, FL 33511</Typography>
                        </a>
                    </div>
                    <div className={classes.phoneContainer}>
                        <Typography><a href="tel:+1-813-643-8000" className={classes.phone}>+1.813.643.8000</a></Typography>
                        <PhoneIcon className={classes.phoneIcon} />

                    </div>
                </div>
                <NavBar />
            </AppBar>
        </div>
    );
}
