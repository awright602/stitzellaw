import React from 'react';
import {
    Paper, Grid, Typography, makeStyles
} from '@material-ui/core';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import HeaderBanner from './HeaderBanner';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CenterPageHeader from './CenterPageHeader';
import ConsultForm from './ConsultForm';


const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    gridItem: {
        height: '350px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        font: '20px',
        fontFamily: 'Libre Baskerville',
        flexGrow: 1,
    },
    icon: {
        color: '#a68f65',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <HeaderBanner type="Contact Us" />
            <Grid container>
                <Grid item sm={6} md={3} style={{flexGrow: 1}}>
                    <Paper className={classes.gridItem}>
                        <MyLocationIcon className={classes.icon} />
                        <a href='https://www.google.com/maps/place/206+Mason+St,+Brandon,+FL+33511/@27.9352329,-82.286113,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2cdc91415f0af:0x30838b1d3cb2d066!8m2!3d27.9352282!4d-82.2839243'
                            target='_blank' className={classes.link} >
                            <Typography>206 Mason St, Brandon, FL 33511</Typography>
                        </a>
                    </Paper>
                </Grid>
                <Grid item sm={6} md={3} style={{flexGrow: 1}}>
                    <Paper className={classes.gridItem}>
                        <PhoneIcon className={classes.icon} />
                        <a href="tel:+1-813-643-8000" className={classes.link}>+1.813.643.8000</a>
                    </Paper>
                </Grid>
                <Grid item sm={6} md={3} style={{flexGrow: 1}}>
                    <Paper className={classes.gridItem}>
                        <EmailIcon className={classes.icon} />
                        <a href="mailto:howardstitzel@yahoo.com" className={classes.link}>howardstitzel@yahoo.com</a>
                    </Paper>
                </Grid>
                <Grid item sm={6} md={3} style={{flexGrow: 1}}>
                    <Paper className={classes.gridItem}>
                        <QueryBuilderIcon className={classes.icon} />
                        <Typography> Monday - Friday</Typography>
                        <Typography>&nbsp;9am to 5pm</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Paper style={{padding: '1em', marginTop: '1em'}} square>
                <CenterPageHeader title="Contact Us" />
                <ConsultForm detailDescriptor='Message' />
            </Paper>
        </>
    );
};

export default Contact;
