import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
    contactContainer: {
        display: 'flex',
        backgroundColor: '#696969',
        width: '100vw',
        height: '4em',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap',
        },
    },
    addressContainer: {
        marginLeft: '5em',
        color: 'white',
        display: 'inline-flex',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0.9em',
        },
    },
    address: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Montserrat',
    },
    carIcon: {
        float: 'left',
        color: '#a68f65',
    },
    phoneContainer: {
        marginRight: '5em',
        color: 'white',
        display: 'inline-flex',
        float: 'right',
        [theme.breakpoints.down('xs')]: {
            marginRight: 'unset',
            marginLeft: '1em',
        },
    },
    phone: {
        float: 'right',
        color: 'white',
    },
    phoneIcon: {
        float: 'right',
        color: '#a68f65',
    },

}));

export default function Header() {
    const classes = useStyles();
    let location = useLocation();
    useEffect(() => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    }, [location])

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <div className={classes.contactContainer}>
                    <div className={classes.addressContainer}>
                        &nbsp;
                        <DirectionsCarIcon className={classes.carIcon} />
                        <a href='https://www.google.com/maps/place/911+S+Parsons+Ave,+Brandon,+FL+33511/@27.9246258,-82.2896549,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2cdc159f0bbdb:0xeaa47523372850e8!8m2!3d27.9246259!4d-82.2851702!16s%2Fg%2F11c89c1d9j'
                            target='_blank' style={ {textDecoration: 'none'} }>
                            <Typography className={classes.address} >911 S Parsons Ave, Suite E, Brandon, FL 33511</Typography>
                        </a>
                    </div>
                    <div className={classes.phoneContainer}>
                        <PhoneIcon className={classes.phoneIcon} />
                        <Typography><a href="tel:+1-813-643-8000" className={classes.phone} style={ {textDecoration: 'none'} }>+1.813.643.8000</a></Typography>
                    </div>
                </div>
                <NavBar />
            </AppBar>
        </div>
    );
}
