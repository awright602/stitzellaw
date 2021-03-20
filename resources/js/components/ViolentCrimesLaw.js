import React from 'react';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const ViolentCrimesLaw = () => (
    <Paper style={{ padding: '5px' }} square>
        <PracticeAreaHeader title="Violent Crimes Law" />
        <br />
        <PracticeAreaSection title="Violent Crime Law in Brandon, FL" content="Assault and battery charges require aggressive and competent legal representation. 
        When you need an assault defense attorney in Brandon, FL, contact Stitzel Law, LLC immediately. For years, my law office has stood on the side of individuals 
        charged with violent crimes and fought to have the charges reduced or even dropped. I am intimately familiar with this area of criminal law, and as your lawyer, 
        I guarantee compassionate legal counsel. The consequences of an assault or battery conviction are severe. You need a lawyer who is deeply familiar with the 
        legal system and is ready to put up a sustained fight to protect your rights. If you are facing assault charges, schedule a consultation at my office to talk to a 
        lawyer you can trust."
        />
        <PracticeAreaFooter title="Aggressive Defense against Assault Charges">
            <Typography>
                In legal terms, battery refers to the infliction of harmful or unwanted physical contact while assault is the threat and clear ability to commit such contact. These charges are taken very seriously, but as your violent crime lawyer, I draw on my extensive experience and legal knowledge to fight for a better outcome in your case. Call me right away if you have been charged with:</Typography>
            <ul>
                <li><Typography>Assault</Typography></li>
                <li><Typography>Aggravated Assault</Typography></li>
                <li><Typography>Sexual Assault</Typography></li>
                <li><Typography>Battery</Typography></li>
                <li><Typography>Domestic Violence</Typography></li>
                <li><Typography>Assault with a Deadly Weapon</Typography></li>
            </ul>
            <Typography>Contact me today to consult with a knowledgeable attorney. I represent clients in Brandon, FL.</Typography>
        </PracticeAreaFooter>
    </Paper>
);

export default ViolentCrimesLaw;