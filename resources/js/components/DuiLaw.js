import React from 'react';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const DuiLaw = () => (
    <>
        <PracticeAreaHeader title="DUI Law" />
        <br />
        <PracticeAreaSection title="DUI Law in Brandon, FL" content="Driving under the influence (DUI, also sometimes called DWI or OUI) is one of the most commonly committed 
                crimes in the United States. Unfortunately, because this crime is so common, many people make the mistake of taking 
                their DUI arrests lightly instead of seeking appropriate legal representation. If you’ve been charged with DUI in Brandon, FL, 
                your first step should be to discuss your charges with a DUI lawyer like Stitzel Law, LLC."
        />
        <PracticeAreaFooter title="On Your Side">
            <Typography>Sometimes good people make mistakes. However, if you’re convicted of DUI, you could end up facing tough penalties such as jail time, loss of driving privileges, fines, or community service. Additionally, your insurance rates can be increased and you may even be shut out from some job opportunities due to your conviction.
With the stakes being so high, it’s a wise idea to enlist the help of an attorney who handles DUI cases. Stitzel Law, LLC can help you: </Typography>
            <ol>
                <li><Typography>Understand your charges</Typography></li>
                <li><Typography>Become aware of your rights under the law</Typography></li>
                <li><Typography>Identify illegal police actions (such as failure to read Miranda Rights)</Typography></li>
                <li><Typography>Determine which defenses apply to your case</Typography></li>
            </ol>

        </PracticeAreaFooter>
        <h3>Call Now</h3>
        <Typography>
            Whether this is your only DUI charge or your third, Stitzel Law, LLC can provide the support, advice, and representation you need to fight your DUI charge.
            Call today—your future depends on it.
</Typography>
    </>
);

export default DuiLaw;
