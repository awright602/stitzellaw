import React from 'react';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const FamilyLaw = () => (
    <>
        <PracticeAreaHeader title="FamilyLaw" />
        <br />
        <PracticeAreaSection title="Family Law in Brandon, FL">
            <Typography>Family law cases are often complicated and sensitive. When individuals fight over child custody, finances,
            and property, the stakes are high and the emotions are strong. I never forget that your case is highly personal. Stitzel Law, LLC is the one to turn to when you need help
            settling your matters of family law in Brandon, FL. I offer honest advice and aggressively pursue your interests, whether in mediation or in the courtroom.
        Schedule a consultation with me today if you require assistance with:</Typography>
            <ul>
                <li><Typography>Divorce</Typography></li>
                <li><Typography>Division of Marital Assets</Typography></li>
                <li><Typography>Child Custody</Typography></li>
                <li><Typography>Child Support</Typography></li>
                <li><Typography>Adoption</Typography></li>
                <li><Typography>Juvenile Law</Typography></li>
                <li><Typography>Alimony</Typography></li>
                <li><Typography>Post-Separation Support</Typography></li>
                <li><Typography>Prenuptial Agreements</Typography></li>
                <li><Typography>Injunctions for Protection</Typography></li>
            </ul>
        </PracticeAreaSection>
        <PracticeAreaFooter title="Your Experienced Family Law Attorney" content="My law firm combines the knowledge, experience, and resources that you need in such consequential cases. 
        I provide counsel in all areas of family law, including the often difficult processes of finalizing divorce, spousal support, and parenting plans. Let me make these stressful 
        times easier by providing you with the competent legal representation that your case requires for a more favorable outcome and smoother resolution."

        />
        <PracticeAreaFooter title="Compassionate Family Law Representation" content="Courtroom proceedings and the law in general can seem daunting and unfairly impersonal when your stress and emotions are already running high. When you come to me for legal services, though, I guide you through the process and ensure that your rights and interests are protected. My law firm is on your side.

Contact me when you need legal advice and representation in matters of family law. I represent clients in Brandon, FL."
        />
    </>
);

export default FamilyLaw;