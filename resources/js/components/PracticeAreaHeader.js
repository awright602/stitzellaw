import React from 'react';
import HeaderBanner from './HeaderBanner';
import {
    Divider, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    titleMargin: {
        marginLeft: '2.5em',
        marginRight: '5em',
    },
}));


const PracticeAreaHeader = (props) => {
    const classes = useStyles();

    return (
        <div>
            <HeaderBanner type="practiceArea" />
            <h1 className={classes.titleMargin}>{props.title}</h1>
            <Divider variant="middle" />
        </div>
    );
};

export default PracticeAreaHeader;
