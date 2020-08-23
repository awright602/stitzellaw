import React from 'react';
import {
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: 'center',
        bottom: 0,
        width: '100%',
        paddingTop: '2em',
    },
}));

const Footer = () => {
    const classes = useStyles();
    const d = new Date();
    const year = d.getFullYear();

    return (
        <div className={ classes.footer }>
            <Typography>Copyright &copy; Stitzel Law - { year } </Typography>
        </div>
    );
};

export default Footer;
