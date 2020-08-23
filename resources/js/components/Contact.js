import React from 'react';
import {
    Paper,
} from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhoneRounded';

const Contact = () => (
    <Paper style={ { textAlign: 'center', padding: '5px' } } square>
        <div>
            <ContactPhoneIcon color="action"/>&nbsp;
            <a href="tel:+1-352-364-7345">+1.352.364.7345</a>
        </div>
    </Paper>
);

export default Contact;
