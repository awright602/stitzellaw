import React from 'react';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const CriminalLaw = () => (
    <>
        <PracticeAreaHeader title="Criminal Law" />
        <PracticeAreaSection title="Criminal Law in Brandon, FL">
            <Typography>
                When you’re faced with criminal charges or an arrest, it’s only natural to feel scared and alone. If you’ve recently been charged with a crime, calm your fears and give yourself defense options by turning to Stitzel Law, LLC, a criminal lawyer in Brandon, FL. Stitzel Law, LLC can handle all types of criminal law cases, including:
            </Typography>
            <ul>
                <li><Typography>Drug crimes</Typography></li>
                <li><Typography>Violent crimes</Typography></li>
                <li><Typography>Sex crimes</Typography></li>
                <li><Typography>White collar crimes</Typography></li>
                <li><Typography>Juvenile crimes</Typography></li>
                <li><Typography>DUI</Typography></li>
            </ul>
        </PracticeAreaSection>

        <PracticeAreaFooter title="You're Not Alone">
            <Typography>
                Whether you’re facing a traffic infraction at the state level or have been arrested for a federal crime, Stitzel Law, LLC is prepared to litigate your case. During your legal proceedings, Stitzel Law, LLC will serve as your advocate and offer you ongoing support. Stitzel Law, LLC will fight for you to receive a fair trial, challenge any evidence that is illegally obtained, and make certain that your defense is presented as strongly as possible. Additionally, Stitzel Law, LLC will:
            </Typography>
            <ol>
                <li><Typography>Carefully investigate your case to uncover evidence</Typography></li>
                <li><Typography>Interview all parties involved, including police</Typography></li>
                <li><Typography>Bring in witnesses, when appropriate, to testify on your behalf</Typography></li>
                <li><Typography>Present you with defense options to help you combat your charges</Typography></li>
                <li><Typography>Negotiate with prosecutors to have your charges or sentence reduced, if possible.</Typography></li>
            </ol>
            <Typography>To learn more about Stitzel Law, LLC’s criminal law services, call today to set up an initial case evaluation.</Typography>
        </PracticeAreaFooter>
    </>
);

export default CriminalLaw;


