import React from 'react';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const DrugCrimesLaw = () => (
    <>
        <PracticeAreaHeader title="Drug Crimes Law"/>
        <br />
        <PracticeAreaSection title="Drug Crime Law in Brandon, FL" content ="Many drug-related crimes carry extremely heavy jail sentences and fines. If you are ever convicted of a 
        drug crime, that conviction may stay on your record for the rest of your life and could affect your ability to get a job, a loan, or even an apartment. For this reason, 
        any time you’re facing drug crime charges or have been arrested for drug offenses, it’s important that you take the time to consult with a drug crime defense lawyer 
        who can give you a better understanding of the charges you are facing, your constitutional rights, and your legal options."
        />
        <PracticeAreaFooter title="Here to Help" content="If you’ve been charged with a drug-related crime, contact Stitzel Law, LLC to discuss your case with an understanding 
        defense attorney. Depending on the circumstances of your situation, Stitzel Law, LLC may be able to help you obtain a favorable plea deal, help you prove your innocence, or even get the charges against you dropped completely. 
        The key is to act quickly, so call today."
        /> 
    </>
);

export default DrugCrimesLaw;