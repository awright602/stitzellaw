import React from 'react';
import {
    Typography,
    makeStyles,
    Paper,
} from '@material-ui/core';
import logo from '../../images/logo.png';

const useStyles = makeStyles(theme => ({
    logo: {
        textAlign: 'center',
    },
    root: {
        textAlign: 'center',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Paper style={ { padding: '5px' } } square>
                <div className={ classes.logo }>
                    <img src={ logo } alt="Logo" height={ 250 } width={ 250 }/>
                </div>
                <div className={ classes.root }>
                    <Typography>
                        Thank you for visiting Stitzel Law! Please check back - coming soon!
                    </Typography>
                </div>
            </Paper>
        </>
    );
};

export default Home;
