import React from 'react';
import { Typography, Paper, Divider, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import HeaderBanner from './HeaderBanner';
import Howard from '../../images/howard.jpeg';

const useStyles = makeStyles(theme => ({
    education: {
        listStyleType: 'none',
        textAlign: 'left',
    },
    headerWithDivider: {
        marginLeft: '1em',
        textUnderlinePosition: 'left',
        textDecoration: 'underline',
    },
    h1Margin: {
        margin: 'unset',
    },
    howardBio: {
        textAlign: 'justify',
        marginLeft: '-1em',
        marginRight: '1em',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            marginTop: 'unset',
            paddingLeft: '3em',
        },
    },
    aboutUsConsultation: {
        backgroundColor: 'black',
        color: theme.palette.secondary.main,
    },
    inputColor: {
        color: theme.palette.secondary.main,
    },
    gridContainer: {
        marginTop: '1em',
    },
    image: {
        marginLeft: '1.75em',

    },

}));

const About = () => {
    const classes = useStyles();

    return (
        <>
            <HeaderBanner type="About" />
            <h1 className={classes.headerWithDivider}>Meet Howard Stitzel</h1>
            <Divider light />
            <Grid container className={classes.gridContainer}>
                <Grid item xs={2} className={classes.image}>
                    <img src={Howard} />
                </Grid>
                <Grid item xs={10} md={9}>
                    <Typography className={classes.howardBio}>
                        Howard Stitzel received his undergraduate degree in History and Political Science and his law degree from Stetson University.
                        Howard began practicing law in 1989 and concentrates his practice in the areas of family law, criminal defense, personal injury and civil trial practice.
                        Howard was active in several community organizations, including the Plant City Kiwanis Club and East Hillsborough United Way, both of which he is a former
                        board member, and the Plant City Chamber of Commerce. On July 13, 2001, Howard was appointed by Governor Jeb Bush to the Judicial Nominating Commission of
                        the 13th Judicial Circuit. He also served on the East County Service Center/Courthouse Redevelopment Committee. Howard has built a solid reputation for
                        assisting numerous families and businesses to resolve their disputes in a cost-effective and professional manner.
                    </Typography>
                </Grid>
            </Grid>
        </>

    );
};

export default About;
