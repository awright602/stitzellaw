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
        marginLeft: '1.25em',
        marginTop: '1em',
    },
    praticeAreaBanner: {
        marginTop: '10em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${praticeAreaBanner})`,
        backgroundSize: 'auto',
    },
    aboutBanner: {
        marginTop: '10em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${aboutBanner})`,
        backgroundSize: 'auto',
    },
    testimonialsBanner: {
        marginTop: '10em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${testimonialsBanner})`,
        backgroundSize: 'auto',
    },
    contactBanner: {
        marginTop: '10em',
        height: '11em',
        background: 'center top no-repeat',
        backgroundImage: `url(${contactBanner})`,
        backgroundSize: 'auto',
    },
}));

const HeaderBanner = (props) => {
    const classes = useStyles();

    if (props.type === 'practiceArea') {
        return (
            <div className={classes.praticeAreaBanner}>
                <div>
                    <Typography className={classes.headerText}>Stitzel Law</Typography>
                </div>
            </div>

        );
    } else if (props.type === 'About') {
        return (
            <div className={classes.aboutBanner}>
                <div>
                    <Typography className={classes.headerText}>About Us</Typography>
                </div>
            </div>
        );
    } else if (props.type === 'Testimonials') {
        return (
            <div className={classes.testimonialsBanner}>
                <div>
                    <Typography className={classes.headerText}>Testimonials</Typography>
                </div>
            </div>
        );
    } else if (props.type === 'Contact Us') {
        return (
            <div className={classes.contactBanner}>
                <div>
                    <Typography className={classes.headerText}>Contact Us</Typography>
                </div>
            </div>
        );
    }

    return (
        <div>Banner</div>
    );
};

export default HeaderBanner;