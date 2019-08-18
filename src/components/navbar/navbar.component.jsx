import React from 'react';
import clsx from "clsx";
import { Toolbar, IconButton, Typography, AppBar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons"
import useStyles from "../../layout/styles";

const Navbar = ({ open, toggleDrawer }) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar className={clsx(classes.toolbar, {[classes.toolbarShift]: open})}>
                <IconButton edge="start" onClick={toggleDrawer} className={clsx(classes.menuButton, open && classes.hide)} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
