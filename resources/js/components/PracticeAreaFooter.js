import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    legalese: {
        textAlign: 'justify',
        marginLeft: '5em',
        marginRight: '5em',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            marginLeft: '0.5em',
            marginRight: '0.5em',
        },
    },
    titleMargin: {
        marginLeft: '3.4em',
        marginRight: '3em',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginLeft: '0.5em',
            marginRight: '0.5em',
        },
    },
}));

const PracticeAreaFooter = (props) => {
    const classes = useStyles();

    return (
        <>
            <h2 className={classes.titleMargin}>{props.title}</h2>
            <Typography className={classes.legalese}>{props.content}</Typography>
            <div className={classes.legalese}>
                {props.children}
            </div>
        </>
    );
};

export default PracticeAreaFooter;
