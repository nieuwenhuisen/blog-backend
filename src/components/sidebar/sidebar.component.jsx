import React from 'react';
import {Link} from 'react-router-dom';
import useStyles from "../../layout/styles";

import { ListItem, ListItemIcon, ListItemText, IconButton, Divider, List, Drawer } from '@material-ui/core';
import { Dashboard as DashboardIcon, Book as BookIcon, Category as CategoryIcon, ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

const Sidebar = ({ open, toggleDrawer }) => {
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
                <IconButton onClick={toggleDrawer}>
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

export default Sidebar;
