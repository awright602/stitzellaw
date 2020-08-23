import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <MenuItem>
                        <Link to="/" className={ classes.link }>Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/gallery" className={ classes.link }>Gallery</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/about" className={ classes.link }>About Us</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/contact" className={ classes.link }>Contact Us</Link>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </div>
    );
}
