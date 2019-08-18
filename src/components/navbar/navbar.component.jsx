import React from 'react';
import { connect } from 'react-redux';
import clsx from "clsx";
import { Toolbar, IconButton, AppBar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons"
import useStyles from "../../layout/styles";
import { toggleSidebar } from '../../redux/cms/cms.actions';

const Navbar = ({ open, toggleSidebar }) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar className={clsx(classes.toolbar, {[classes.toolbarShift]: open})}>
                <IconButton edge="start" onClick={toggleSidebar} className={clsx(classes.menuButton, open && classes.hide)} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => ({
    open: state.cms.sidebarOpen
});

const mapDispatchToProps = {
    toggleSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
