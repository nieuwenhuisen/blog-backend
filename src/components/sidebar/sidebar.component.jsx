import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import useStyles from "../../layout/styles";
import { toggleSidebar } from '../../redux/cms/cms.actions';

import { ListItem, ListItemIcon, ListItemText, IconButton, Divider, List, Drawer } from '@material-ui/core';
import { Dashboard as DashboardIcon, Book as BookIcon, Category as CategoryIcon, ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

const Sidebar = ({ open, toggleSidebar }) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={toggleSidebar}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/posts">
                    <ListItemIcon>
                        <BookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Posts" />
                </ListItem>
                <ListItem button component={Link} to="/categories">
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItem>
            </List>
        </Drawer>
    );
};

const mapStateToProps = state => ({
    open: state.cms.sidebarOpen
});

const mapDispatchToProps = {
    toggleSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
