import React from 'react';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const DivorceLaw = () => (
    <>
        <PracticeAreaHeader title="Divorce Law" />
        <br />
        <PracticeAreaSection title="Divorce Attorney in Brandon, FL" content="Divorce and related legal matters can be complex. Stitzel Law, LLC works 
        closely with clients to help them get through what may be the most challenging times of their lives."
        />
        <PracticeAreaFooter title="Here to Help">
            <Typography>If you’re going through a divorce, you probably have a lot weighing on your mind. Stitzel Law, LLC can guide you through the legal issues related to your divorce so that you can focus on moving forward with your life. Stitzel Law, LLC can:</Typography>
            <ol>
                <li><Typography>Review existing prenuptial agreementst</Typography></li>
                <li><Typography>Help you resolve child custody and visitation disputes</Typography></li>
                <li><Typography>Fight to keep your parental rights intact</Typography></li>
                <li><Typography>Negotiate child support and spousal support payments</Typography></li>
                <li><Typography>Negotiate the division of property and marital assets</Typography></li>
            </ol>
            <Typography>Call today to talk to a compassionate lawyer about your needs and concerns.</Typography>
        </PracticeAreaFooter>

    </>
);

export default DivorceLaw;