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
                        <a href='https://www.google.com/maps/place/911+S+Parsons+Ave,+Brandon,+FL+33511/@27.9246258,-82.2896549,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2cdc159f0bbdb:0xeaa47523372850e8!8m2!3d27.9246259!4d-82.2851702!16s%2Fg%2F11c89c1d9j'
                            target='_blank' className={classes.link} >
                            <Typography>911 S Parsons Ave, Suite E, Brandon, FL 33511</Typography>
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
