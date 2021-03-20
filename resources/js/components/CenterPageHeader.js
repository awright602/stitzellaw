import React from 'react';
import { Typography } from '@material-ui/core';

const CenterPageHeader = (props) => {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}> {props.title} </h2>
            <Typography>{props.content}</Typography>
            {props.children}
        </>
    );
};

export default CenterPageHeader;