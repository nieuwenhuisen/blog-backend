import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import clsx from "clsx";
import useStyles from "./layout/styles";
import { Container, CssBaseline } from '@material-ui/core';

import Sidebar from "./components/sidebar/sidebar.component";

import DashboardPage from "./pages/dashboard/dashboard.component";
import PostListPage from "./pages/post-list/post-list.component";
import CategoryListPage from "./pages/category-list/category-list.component";
import Navbar from "./components/navbar/navbar.component";

const App = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar open={open} toggleDrawer={toggleDrawer} />
            <Sidebar open={open} toggleDrawer={toggleDrawer} />

            <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
                <div className={classes.drawerHeader} />
                <Container maxWidth="lg" className={classes.container}>
                    <Switch>
                        <Route exact path="/" component={DashboardPage} />
                        <Route exact path="/posts" component={PostListPage} />
                        <Route exact path="/categories" component={CategoryListPage} />
                    </Switch>
                </Container>
            </main>
        </div>
    )
}

export default App;
