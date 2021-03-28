import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import praticeAreaBanner from '../../images/practiceAreaBanner.jpg';
import aboutBanner from '../../images/about.jpg';
import testimonialsBanner from '../../images/testimonials.jpg';
import contactBanner from '../../images/contact.jpg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    headerText: {
        color: 'white',
        fontSize: '3.5rem',
    },
    praticeAreaBanner: {
        marginTop: '4em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${praticeAreaBanner})`,
        backgroundSize: 'cover',
        display: 'inline-flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        width: '100vw',
        paddingLeft: '4em',
        [theme.breakpoints.down('md')]: {
            marginTop: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '2em',
        },
    },
    aboutBanner: {
        marginTop: '4em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${aboutBanner})`,
        backgroundSize: 'cover',
        display: 'inline-flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        width: '100vw',
        paddingLeft: '4em',
        [theme.breakpoints.down('md')]: {
            marginTop: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '2em',
        },
    },
    testimonialsBanner: {
        marginTop: '4em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${testimonialsBanner})`,
        backgroundSize: 'cover',
        display: 'inline-flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        width: '100vw',
        paddingLeft: '4em',
        [theme.breakpoints.down('md')]: {
            marginTop: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '2em',
        },
    },
    testimonialsText: {
        color: 'white',
        fontSize: '3.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem',
        },
    },
    contactBanner: {
        marginTop: '4em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${contactBanner})`,
        backgroundSize: 'cover',
        display: 'inline-flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        width: '100vw',
        paddingLeft: '4em',
        [theme.breakpoints.down('md')]: {
            marginTop: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '2em',
        },
    },
}));

const HeaderBanner = (props) => {
    const classes = useStyles();

    if (props.type === 'practiceArea') {
        return (
            <div className={classes.praticeAreaBanner}>
                <Typography className={classes.headerText}>Stitzel Law</Typography>
            </div>

        );
    } else if (props.type === 'About') {
        return (
            <div className={classes.aboutBanner}>
                <Typography className={classes.headerText}>About Us</Typography>
            </div>
        );
    } else if (props.type === 'Testimonials') {
        return (
            <div className={classes.testimonialsBanner}>
                <Typography className={classes.testimonialsText}>Testimonials</Typography>
            </div>
        );
    } else if (props.type === 'Contact Us') {
        return (
            <div className={classes.contactBanner}>
                <Typography className={classes.headerText}>Contact Us</Typography>
            </div>
        );
    }

    return (
        <div>Banner</div>
    );
};

export default HeaderBanner;