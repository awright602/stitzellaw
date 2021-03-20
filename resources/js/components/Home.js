import React from 'react';
import {
    Typography,
    makeStyles,
    Paper,
    Grid,
    TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeBackground from '../../images/HomeBackground.jpg';
import PracticeAreaSection from './PracticeAreaSection';
import homeHandshake from '../../images/homeHandshake.jpg';
import CenterPageHeader from './CenterPageHeader';
import Covid from './Covid';
import HomeBackgroundOverlay from './HomeBackgroundOverlay';
import HomeBottomBackgroundOverlay from './HomeBottomBackgroundOverlay';
import Scroll from './Scroll';

const useStyles = makeStyles(theme => ({

    homepageBackground: {
        top: '0',
        left: '0',
        width: '100%',
    },
    logo: {
        textAlign: 'center',
    },
    root: {
        textAlign: 'justify',
        paddingTop: '1em',
        paddingBottom: '1em',
        // [theme.breakpoints.down('sm')]: {
        //     textAlign: 'left',
        // },
    },
    greyBackground: {
        textAlign: 'justify',
        backgroundColor: '#e8e8e8',
        // borderColor: '#a68f65',
        paddingTop: '1em',
        paddingBottom: '1em',
        // [theme.breakpoints.down('sm')]: {
        //     textAlign: 'left',
        // },
    },

    link: {
        textDecoration: 'none',
        color: '#a68f65',
        fontSize: '20px',

    },
    handshake: {
        width: '450px',
        paddingBottom: '40px',
    },
    centerText: {
        textAlign: 'center',

    },

}));

const Home = () => {
    const classes = useStyles();

    return (
        < >
            <Paper style={{ padding: '5px', overflow: 'hidden' }} square>
                <img src='../../images/HomeBackground.jpg' className={classes.homepageBackground} />
                <Covid />
                <HomeBackgroundOverlay />
                <HomeBottomBackgroundOverlay />
                <div className={classes.root}>
                    <div className={classes.greyBackground}>
                        <PracticeAreaSection title="Trusted Lawyer in Brandon, FL" content="Whether you're facing a specific legal issue or have questions that only a lawyer can properly answer, Stitzel Law, LLC is here to help. Stitzel Law, LLC works hard to support clients across Brandon, FL no matter the situation at hand." />
                        <PracticeAreaSection title="A Compassionate Legal Professional at Your Service" content="As a lawyer in Brandon, FL, Stitzel Law, LLC understands that looming legal issues can be stressful and overwhelming. That’s why Stitzel Law, LLC believes in treating clients with care and respect. When you work with Stitzel Law, LLC, you’ll get the benefit of:" />
                        <PracticeAreaSection content={(
                            <ul>
                                <li><Typography>Extensive legal knowledge</Typography></li>
                                <li><Typography>Convenient office hours</Typography></li>
                                <li><Typography>Reasonable fees</Typography></li>
                            </ul>
                        )} />

                        <PracticeAreaSection content="Attempting to tackle a legal matter on your own can end up negatively impacting the outcome of your situation. Why risk such repercussions when a dedicated lawyer is on hand to offer guidance when you need it the most? To set up an appointment, call Stitzel Law, LLC today." />
                    </div>
                    <CenterPageHeader title="Practice Areas" />
                    <Grid container>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link to="childCustody" className={classes.link}>Child Custody Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="childSupport" className={classes.link}>Child Support Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="criminalLaw" className={classes.link}>Criminal Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="criminalTheftLaw" className={classes.link}>Criminal Theft Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="duiLaw" className={classes.link}>DUI Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="divorceLaw" className={classes.link}>Divorce Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="drugCrimesLaw" className={classes.link}>Drug Crimes Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="familyLaw" className={classes.link}>Family Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="violentCrimesLaw" className={classes.link}>Violent Crimes Law</Link>
                                </Grid>
                                <hr />
                                <Grid item xs={12}>
                                    <Link to="constructionDefects" className={classes.link}>Construction Defects</Link>
                                </Grid>
                                <hr />
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={homeHandshake} alt="background" className={classes.handshake} />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.greyBackground}>
                    <CenterPageHeader title="Don't Hesitate To Ask For A Consultation" />
                    <Typography className={classes.centerText}>Fill out the form below for a confidential initial consultation.
                Don’t worry, we never share your information or use it to spam you. </Typography>
                    <Grid container spacing='5'>
                        <Grid item xs={4}>
                            <TextField
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                            />

                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email Address"
                                fullWidth

                            />

                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="phone"
                                name="phone"
                                label="Phone Number"
                                fullWidth
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="caseDetails"
                                name="caseDetails"
                                label="Case Details"
                                multiline
                                rows='4'
                                fullWidth
                            />

                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </>
    );
};

export default Home;
