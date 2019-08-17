import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import CategoryIcon from '@material-ui/icons/Category';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const Sidebar = ({ toggleSidebar, classes }) => {
    return (
        <div>
            <div className={classes.toolbarIcon}>
                <IconButton onClick={toggleSidebar}>
                    <ChevronLeftIcon>asd</ChevronLeftIcon>
                </IconButton>
            </div>
            <Divider />
            <List>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BookIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Posts"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <CategoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Categories"/>
                    </ListItem>
                </div>
            </List>
        </div>
    );
};

export default Sidebar;
