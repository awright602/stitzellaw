import React from 'react';
import {
    Paper,
    Divider,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const CriminalTheftLaw = () => (
    <Paper style={{ padding: '5px' }} square>
        <PracticeAreaHeader title="Criminal Theft Law" />
        <PracticeAreaSection
            title="Criminal Theft Law in Brandon, FL"
            content="Theft is a broad category of legal offenses that can range from shoplifting or
         petty theft to grand larceny or armed robbery. In many states, theft is a felony, and even if a crime is considered a misdemeanor, defending yourself 
         against charges means seeking legal representation at the critical juncture—the beginning.
         Don’t hesitate to begin mounting your defense—give me a call at Stitzel Law, LLC in Brandon, FL right away."
        />
        <PracticeAreaFooter
            title="A Defense That Works For You"
            content="My law practice, Stitzel Law, LLC, specializes in defending clients in Brandon, FL against charges of theft.
        I understand that theft is a broad and sometimes unwieldy area of law, but I have knowledge of various facets of criminal theft law, and I will strive to treat your defense 
        with the utmost personalized attention. I can help you avoid conviction, reduce sentencing, or reach a reasonable plea bargain. Call me today for a consultation."
        />
    </Paper>
);

export default CriminalTheftLaw;