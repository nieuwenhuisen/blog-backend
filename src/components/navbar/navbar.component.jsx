import React from 'react';
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";

const Navbar = ({ open, toggleDrawer, classes }) => {
    return (
        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
            <Toolbar>
                <IconButton
                    edge="start"
                    onClick={toggleDrawer}
                    className={clsx(classes.menuButton, open && classes.hide)}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Dashboard
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
