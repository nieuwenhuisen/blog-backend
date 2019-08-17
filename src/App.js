import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import useStyles from "./layout/styles";


const App = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
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
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <MenuIcon />
                        </ListItemIcon>
                        <ListItemText primary="Posts" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
                <div className={classes.drawerHeader} />
                <Container maxWidth="lg" className={classes.container}>
                    <h1>Titel</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores corporis esse officia placeat praesentium quod sapiente sit? Ab cumque doloremque error et expedita iste odit quae quibusdam quis similique.</p>
                </Container>
            </main>
        </div>
    )
}

export default App;
