import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Button, Menu, } from '@material-ui/core';
import logo from '../../images/logo.png';

const useStyles = makeStyles(theme => ({
    menuButton: {
        textTransform: 'inherit',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 'unset',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    toolbar: {
        paddingLeft: '4.5em',
        backgroundColor: '#f8f8f8',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'baseline',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 'unset',
            flexDirection: 'column',
        },
    },
    collapsIcon: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'inline-flex',
            marginLeft: '0.5em',
        },
    },
    collapseContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'inline-flex',
            flexDirection: 'column',
            paddingBottom: '1em',
        },
    },
    menu: {
        flexGrow: 1,
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [collapsed, setCollapsed] = useState(screen.width < 1025)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchor = () => {
        setAnchorEl(null);
        setCollapsed(screen.width < 1025);
    }
    const handleClose = () => {
        handleCloseAnchor();
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    return (
        <Toolbar className={classes.toolbar} >
            <div className={classes.collapseContainer} onClick={() => setCollapsed(!collapsed)}>
                <img src={logo} alt="Logo" height={100} />
                <MenuIcon className={classes.collapsIcon} />
            </div>
            {!collapsed && (
                <div className={classes.menu}>
                <MenuItem onClick={handleClose}>
                    <Link to="/" className={classes.link}>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
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
                        onClose={handleCloseAnchor}
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
                <MenuItem onClick={handleClose}>
                    <Link to="/testimonials" className={classes.link}>Testimonials</Link>
                </MenuItem >
                <MenuItem onClick={handleClose}>
                    <Link to="/contact" className={classes.link}>Contact Us</Link>
                </MenuItem>
                </div>
            )}
        </Toolbar>
    );
};

export default NavBar;