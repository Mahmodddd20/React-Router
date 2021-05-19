import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Classroom from "./pages/Classroom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/classroom" component={Classroom} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
