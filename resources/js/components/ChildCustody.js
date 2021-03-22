import React from 'react';
import {
    Paper,
    Typography,
    makeStyles,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const useStyles = makeStyles(theme => ({
    legalese: {
        textAlign: 'justify',
    },
}));

const ChildCustody = () => {
    const classes = useStyles();

    return (
        <>
            <PracticeAreaHeader title="Child Custody Law" />
            <br />
            <PracticeAreaSection title="The Name to Trust for Help with Child Custody Agreements" content="Your search for the right lawyer to handle child custody agreements in Brandon, FL, is over when you turn to Stitzel Law, LLC. The outcome of your child custody dispute is going to affect the lives of you and your family for years to come, which is why I am fully devoted to your individual case. For years, my firm has been negotiating on the behalf of clients to come to an amicable agreement regarding custody, visitation, and more. Call today and find out why so many of my clients in the area have depended on me to fight for their parental rights." />
            <br />
            <PracticeAreaFooter title="Secure Your Parental Rights">
                <Typography className={classes.legalese}>I have been helping parents come to amicable custody agreements for years, striving to come up with a comprehensive plan. My goal is to give your children the best lives possible despite the divorce. Call me for help negotiating the following with your spouse:</Typography>
                <ul>
                    <li><Typography>Child Support</Typography></li>
                    <li><Typography>Modification of Child Support</Typography></li>
                    <li><Typography>Temporary Custody</Typography></li>
                    <li><Typography>Visitation</Typography></li>
                    <li><Typography>Juvenile crimes</Typography></li>
                    <li><Typography>DUI</Typography></li>
                </ul>
                <Typography className={classes.legalese}>Having to dispute custody with a spouse during a divorce is an extremely trying time for any parent. Even if the split is amicable, debates regarding children can often be heated. Allow me to mediate the process so that both parties can come to an agreement that works in the best interest of the child. Contact my firm to set up a consultation today.
            Contact me right away for assistance from a knowledgeable custody lawyer. I am proud to represent Brandon, FL, and the surrounding area.</Typography>
            </PracticeAreaFooter>
        </>
    );
};

export default ChildCustody;


