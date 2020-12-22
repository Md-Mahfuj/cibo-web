import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "../App";
import history from './history';
import CheckPage from "../Page/ProductInfoPage/Product_Info"
import Desktop from "../Page/Desktop/index"
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/product/:id" component={CheckPage} />
                    <Route path="/Desktop" component={Desktop} />

                </Switch>
            </Router>
        )
    }
}
