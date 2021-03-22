import React from 'react';
import {
    Paper,
    Typography,
} from '@material-ui/core';
import PracticeAreaHeader from './PracticeAreaHeader';
import PracticeAreaSection from './PracticeAreaSection';
import PracticeAreaFooter from './PracticeAreaFooter';

const ConstructionDefects = () => (
    <>
        <PracticeAreaHeader title="Construction Defects" />
        <br />
        <PracticeAreaSection title="Florida Construction Defects Attorney" content="With the present growth in population in Florida necessarily comes an onslaught of new residential 
        and commercial development. Floridians, like most Americans, are understandably proud when they purchase a new home or building or even remodel and existing structure. 
        Their investment in the property is sometimes just as much emotional as it is financial in nature. And, when construction defects “REAR THEIR UGLY HEAD”, the once 
        dream can quickly turn into a nightmare."
        />
        <PracticeAreaFooter title="The most common disputes over construction defects often include:">
            <Typography>The most common disputes over construction defects often include:</Typography>
            <ul>
                <li><Typography>Water seepage with damages</Typography></li>
                <li><Typography>Design defects including faulty drainage</Typography></li>
                <li><Typography>Compromised structural integrity</Typography></li>
                <li><Typography>Toxic mold</Typography></li>
                <li><Typography>Inspections that filed to detect structural or other damage</Typography></li>
                <li><Typography>Cracks in the roof, walls or foundation</Typography></li>
                <li><Typography>Construction negligence</Typography></li>
            </ul>



            <Typography>If you, your family or neighbors have sustained damages to your home or business as a result of faulty design or construction, noncompliance with codes
and regulations or inadequate inspections, Stitzel Law, LLC is available to help you investigate and present your claim in court if necessary.</Typography>
        </PracticeAreaFooter>

        <PracticeAreaFooter title="Statutory Requirements" content="Florida Statutes 558.001 — 558.005 provides the statutory framework within which construction defects are to be resolved. The statutes provide a very specific procedure that must
            be followed to perfect your claim and which also must be completed prior to filing any litigation regarding any alleged construction defects. Before you lose out on the ability
            to hold the at fault party responsible for damages to your home or business resulting from their construction defect, let Stitzel Law, LLC aid and assist you in handling your
            claim for construction defects in the greater Tampa area."
        />
    </>
);

export default ConstructionDefects;