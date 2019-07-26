/*********** Routes for applications **************/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../containers/home';
import Login from '../containers/login';
import NotFound from '../components/NoFound';
import welcome from '../components/welcome';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="\/todo" component={Home} />
                <Route exact path="\/welcome" component={welcome} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>

    );
};

export default Routers;