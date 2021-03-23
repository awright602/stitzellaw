import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Button, Menu, } from '@material-ui/core';
import logo from '../../images/logo.png';

const useStyles = makeStyles(theme => ({
    menuButton: {
        textTransform: 'inherit',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    toolbar: {
        //  margin: 'auto',
        paddingLeft: '4.5em',
        backgroundColor: '#f8f8f8'
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Toolbar className={classes.toolbar}>
            <img src={logo} alt="Logo" height={100} />
            <MenuItem>
                <Link to="/" className={classes.link}>Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/about" className={classes.link}>About Us</Link>
            </MenuItem>
            <MenuItem>
                <Button className={classes.menuButton} aria-controls="navigation-menu" aria-haspopup="true" onClick={handleClick}>
                    <Typography>Practice Areas</Typography>
                </Button>
                <Menu
                    id="navigation-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/childCustody" className={classes.link}>
                            <Typography>Child Custody Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/childSupport" className={classes.link}>
                            <Typography>Child Support Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/criminalLaw" className={classes.link}>
                            <Typography>Criminal Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/criminalTheftLaw" className={classes.link}>
                            <Typography>Criminal Theft Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/duiLaw" className={classes.link}>
                            <Typography>Dui Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/divorceLaw" className={classes.link}>
                            <Typography>Divorce Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/drugCrimesLaw" className={classes.link}>
                            <Typography>Drug Crimes Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/familyLaw" className={classes.link}>
                            <Typography>Family Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/violentCrimesLaw" className={classes.link}>
                            <Typography>Violent Crimes Law</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/constructionDefects" className={classes.link}>
                            <Typography>Construction Defects</Typography>
                        </Link>
                    </MenuItem>
                </Menu>
            </MenuItem>
            <MenuItem>
                <Link to="/testimonials" className={classes.link}>Testimonials</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/contact" className={classes.link}>Contact Us</Link>
            </MenuItem>
        </Toolbar>
    );
};

export default NavBar;